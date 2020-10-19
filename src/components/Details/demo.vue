<template>
  <div class="container theme-showcase">
  <br>
  <div class="row col-sm-offset-1 col-sm-10">
  <div class="blog-post">
  <h2 class="blog-post-title" style="font-weight: bold;">合同名称：{{this.contractInfo.title_zh}}合同协议书</h2>
  <p class="blog-post-meta"> SimpleAuction by SPESC</p>
  <p>This page shows the details of Contract {{this.contractInfo.title_en}}.</p>
  </div>
  <hr>
  <h3 style="font-weight: bold;">参与人信息</h3>
  <hr>
  <p>@@甲方信息：{{this.contractInfo.party.name_zh}}，登记信息包括：个人账户信息；行为包括：宣布竞拍开始、宣布竞拍结束。</p>
  <pre><code>
    party {{this.contractInfo.party.name_en}}{
      account: [${blockchainIdentity?}]<!--动态账户地址blockchainIdentity-->
      StartBidding(reservePrice: Money, auctionDuration: Date)
      CollectPayment()
    }
      </code></pre>
  <br>
  <p>@@乙方信息：竞买人，属于群体，登记信息包括：个人账户信息、账户余额；行为包括：出价、进行竞拍、撤回无效出价。</p>
  <pre><code>
    party group bidders{
      account: [${blockchainIdentity?}]<!--动态账户地址blockchainIdentity-->
      amount: Money
      Bid()
      WithdrawOverbidMoney()
    }
      </code></pre>
  <br>
  <h3 style="font-weight: bold;">交易信息</h3>
  <hr>
  <p>@@当前最高价、最高出价的竞拍者、竞拍结束时间。</p>
  <pre><code>
    highestPrice : Money
    highestBidder : bidders
    biddingStopTime : Date
    </code></pre>
  <br>
  <p>@@标的物：竞拍货品，拍卖人需要提供拍卖物的物品名称、数量等相关信息。</p>
  <pre>
    asset good{
        info{
              name : Name       //物品名称
              quantity : Integer    //物品数量
              price : Money      //价格
              package : String    //运送包装
          }
     } </pre>
  <br>
  <h3 style="font-weight: bold;">合同条款</h3>
  <hr>
  <h4>条款1</h4>
  <p>
  @@拍卖人（角色）可以（行为分类）发起竞拍（动作），在动作执行后，当前最高价应为拍卖人输入的底价，结束时间为当前时间加上输入的竞拍持续时间（后置条件）。
  </p>
  <pre>
  <code>
    term no1 : auctioneer can StartBidding,
        when before auctioneer did StartBidding
        where highestPrice = reservePrice and biddingStopTime = auctionDuration + now.
      </code>
  </pre>
  <br>
  <h4>条款2</h4>
  <p>
  @@竞买人（角色）可以（行为分类）在拍卖人发起竞拍后至竞拍结束前（前置条件），进行出价（动作），如果出价大于目前所给最高价格（资产转移），则出价成功（后置条件）。
  </p>
  <pre>
  <code>
    term no2 : bidders can Bid
      when after auctioneer did StartBidding and before BiddingStopTime
      while deposit $ value > highestPrice
      where highestPrice = value and highestBidder = this bidder and this bidder::amount = this bidder::Ori amount + value.
      </code>
  </pre>
  <br>
  <h4>条款3_1</h4>
  <p>
  @@若竞买人（角色）不是最高出价者，且当前合约中存有其押金（前置条件），竞买人可以（行为分类）取回无效押金。
  </p>
  <pre>
  <code>
    term no3_1 : bidders can WithdrawOverbidMoney,
      when this bidder::amount > 0 and this bidder isn't highestBidder
      while withdraw $this bidder::amount
      where this bidder::amount = 0.
      </code>
  </pre>
  <br>
  <h4>条款3_2</h4>
  <p>
  @@若竞买人是当前最高出价者，且当前合约中存有其之前的失败押金，竞买人有权取回无效押金，并登记成为当前竞拍最高价。
  </p>
  <pre>
  <code>
    term no3_2 : bidders can WithdrawOverbidMoney,
      when this bidder::amount > highestPrice and this bidder is highestBidder
      while withdraw $this bidder::amount -highestPrice
      where this bidder::amount = highestPrice.
      </code>
  </pre>
  <br>
  <h4>条款4</h4>
  <p>
  @@拍卖人有权在竞拍时间结束后，收取拍卖成交款。
  </p>
  <pre>
  <code>
    term no4 : auctioneer can StopBidding,
      when after BiddingStopTime and before auctioneer did StopBidding
      while withdraw $highestPrice.
      </code>
  </pre>
  <br>
  <h4>解决争议的方法</h4>
  <p>
      @@凡因本合同引起的或与本合同有关的一切争议，均由北京互联网法院(BeijingIneternetCourt)按照有效仲裁规则进行裁决。
    </p>
  <pre>
  <code>
  Arbitration term : any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by arbitration administered by institution BeijingIneternetCourt.
      </code>
  </pre>
  <br>
  <h3 style="font-weight: bold;">合同订立</h3>
  <p>
  @@本合约当事人不得以任何形式修改本合同，除非以书面形式并经双方签字。本合同及其附件构成合约双方的完整协议。通过签署本协议，各方同意上述条款。双方将收到两份本协议的打印件（复印件有效），并负责维护其条款。双方同意将本合约转化为智能合约平台的计算机程序，并同意该程序及其实施具有相同法律效力。
  </p>
  <pre>
  <code>Contract conclusions:
  This contract may not be modified in any manner unless in writing and signed by both parties.
  This document and any attachments hereto constitute the entire agreement between the parties.
  By signing this agreement, all parties agree to the terms as described above. Both parties will receive two printed copies of this agreement (the copies are valid), and will be responsible for upholding its terms. Both parties agree with conversion from this contract to computer programs on smart contract platform, and approve that the programs’ implementation has the same legal effect.
  Signature of party auctioneer（拍卖人签字）:
  {
    printed-Name（打印名）：Yao San,
    signature（法定代表人签字）: 0x23198de393…,
    date（签订日期）: 2020/7/12
  }
  Signature of party bidders（竞拍人签字）:
  {
    printed-Name（打印名）：王流,
    signature（法定代表人签字）: 0x877238201…,
    date（签订日期）: 2020/7/12
  }
  {
    printed-Name（打印名）：秦源,
    signature（法定代表人签字）: 0x9340593495…,
    date（签订日期）: 2020/7/12
  }
  }
      </code>
  </pre>
  </div>
</div>
</template>

<script>
import { contractDetails, contractDetails1 } from '../../request/api'

export default {
  name: 'demo',
  data () {
    return {
      msg: '',
      contractInfo: {
        title_zh : '测试合同',
        title_en : 'test contract',
        party : {
          name_zh : '测试参与方',
          name_en : 'test participant'
        }
      }
    }
  },
  created () {
    //this.getParams()
    //this.getDetails()
  },
  methods: {
    getParams () {
      this.msg = this.$route.params.detailsId
      console.log(this.$route.params.detailsId)
    },
    getDetails () {
      contractDetails(this.detailsId)
        .then(res => {
          this.contractInfo = res.contractInfo
        })
    },
    getDetails1 () {
      contractDetails1(this.detailsId)
        .then(res => {
          this.contractInfo = res.contractInfo
        })
    }
  },
  watch: {
    '$route': 'getParams'
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="contractTerm" v-if="contractInfo != null">
    <h3 style="font-weight: bold;">合同条款</h3>
    <hr>

    <div v-if="contractInfo.id == 1">
      <h4>条款1</h4>
      <p>
        @@拍卖人（角色）可以（行为分类）发起竞拍（动作），在动作执行后，当前最高价应为拍卖人输入的底价，结束时间为当前时间加上输入的竞拍持续时间（后置条件）。
      </p>
      <pre contenteditable="true"><code>
    term no1 : auctioneer can StartBidding,
        when before auctioneer did StartBidding
        where highestPrice = reservePrice and biddingStopTime = auctionDuration + now.
      </code></pre>
      <br>
      <h4>条款2</h4>
      <p>
        @@竞买人（角色）可以（行为分类）在拍卖人发起竞拍后至竞拍结束前（前置条件），进行出价（动作），如果出价大于目前所给最高价格（资产转移），则出价成功（后置条件）。
      </p>
      <pre contenteditable="true"><code>
    term no2 : bidders can Bid
      when after auctioneer did StartBidding and before BiddingStopTime
      while deposit $ value > highestPrice
      where highestPrice = value and highestBidder = this bidder and this bidder::amount = this bidder::Ori amount + value.
      </code></pre>
      <br>
      <h4>条款3_1</h4>
      <p>
        @@若竞买人（角色）不是最高出价者，且当前合约中存有其押金（前置条件），竞买人可以（行为分类）取回无效押金。
      </p>
      <pre contenteditable="true"><code>
    term no3_1 : bidders can WithdrawOverbidMoney,
      when this bidder::amount > 0 and this bidder isn't highestBidder
      while withdraw $this bidder::amount
      where this bidder::amount = 0.
      </code></pre>
      <br>
      <h4>条款3_2</h4>
      <p>
        @@若竞买人是当前最高出价者，且当前合约中存有其之前的失败押金，竞买人有权取回无效押金，并登记成为当前竞拍最高价。
      </p>
      <pre contenteditable="true"><code>
    term no3_2 : bidders can WithdrawOverbidMoney,
      when this bidder::amount > highestPrice and this bidder is highestBidder
      while withdraw $this bidder::amount -highestPrice
      where this bidder::amount = highestPrice.
      </code></pre>
      <br>
      <h4>条款4</h4>
      <p>
        @@拍卖人有权在竞拍时间结束后，收取拍卖成交款。
      </p>
      <pre contenteditable="true"><code>
    term no4 : auctioneer can StopBidding,
      when after BiddingStopTime and before auctioneer did StopBidding
      while withdraw $highestPrice.
      </code></pre>
      <br>
    </div>

    <div v-if="contractInfo.id == 2">
      <h4>条款1</h4>
      <p>
        @@甲方确认经由乙方平台发布的服务代理费由甲方负责交纳，销售单价为10元/项•年。到期前甲方可自动续费，若到期7天后仍未续费，则乙方将中止服务代理。
      </p>
      <pre contenteditable="true"><code>
	term no1_1 : partyA must PayAgent( item ),
  	  when after partyB did VerifyService ( item )
  	  while transfer 10 to partyB
  	  where now < due_time.
	term no1_2 : partyA can PayAgent( item ),
  	  when now < due_time + 7 days and after partyA did PayAgent( item )
  	  while transfer 10 to partyB
  	  where now < due_time.
  	  break
	term no1_3 against no1_2 : partyB must EndService( item ),
  	  when now > due_time + 7 days
  	  where partyA did not PayAgent( item ).
      </code></pre>
      <br>
      <h4>条款2</h4>
      <p>
        @@乙方的代理费为本合同所售服务，在出售成功后按成交总额的0.3%收取，乙方实际销售价格超出甲方指定销售底价部分，甲乙各得50%。甲方所付代理费由乙方从代收服务费或代收押金中扣除。
      </p>
      <pre contenteditable="true"><code>
	term no2 : partyB must PayProvider
	  when partyB did SellService
	  while transfer (1-0.3%)*totalPrice-50% *(totalPrice-lowestPrice) RMB to partyB
      </code></pre>
      <br>
<!--      <h4>解决争议的方法</h4>-->
<!--      <p>-->
<!--        @@凡因本合同引起的或与本合同有关的一切争议，均由北京互联网法院(BeijingIneternetCourt)按照有效仲裁规则进行裁决。-->
<!--      </p>-->
<!--      <pre><code>-->
<!--    Arbitration term : any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by arbitration administered by institution BeijingIneternetCourt.-->
<!--		</code></pre>-->
    </div>

    <div v-if="contractInfo.id == 3">
      <h4>条款1</h4>
      <p>
        @@乙方在甲方报修后，应做到1小时响应，4小时恢复。如有特殊情况不超过1天，并需提供有关书面报告。</p>
      <pre contenteditable="true"><code>
    term no1_1 : partyB must Repair
        when partyA did RequestRepair
        where responseTime &lt; 1 hour and recoverTime &lt; 4 hour.
        break
    term no1_2 against no1_1 : partyB must Report
        when recoverTime &gt; 4 hour and recoverTime &gt; 1 day.
      </code></pre>
      <br>
      <h4>条款2</h4>
      <p>
        @@乙方应对甲方提供信息咨询、技术支持、巡检服务、上门维修等服务内容。经双方认同，巡检服务定为3月一次。
      </p>
      <pre contenteditable="true"><code>
    term no2_1: partyA can Consult
    term no2_2: partyB must AnswerConsult
        where partyA did Consult
    term no2_3: partyA can AskTechnicSupport
    term no2_4: partyB must TechnicSupport
        where partyA did AskTechnicSupport
    term no2_5: partyB must Inspect
        where now – lastInspectDate >= 3 month
    term no2_6: partyA can RequestRepair
      </code></pre>
      <br>
      <h4>条款3</h4>
      <p>
        @@协议期间乙方对所有列入维护的设备进行一次预保养服务，时间为协议签定之日起的2日内。预保养服务包括系统软件、应用软件、及网络，内容包括目前机器运行的整体状况，存在的问题，技术以及管理建议。
      </p>
      <pre contenteditable="true"><code>
    term no3: partyB must MaintainAll
        when within 2 day after TakeEffect.
      </code></pre>
      <br>
<!--      <h4>解决争议的方法</h4>-->
<!--      <p>@@凡因本合同引起的或与本合同有关的一切争议，均由北京互联网法院(BeijingIneternetCourt)管辖。-->
<!--      </p>-->
<!--      <pre><code>-->
<!--    Arbitration term : any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by arbitration administered by institution BeijingIneternetCourt.-->
<!--      </code></pre>-->
    </div>

    <div v-if="contractInfo.id == 4">
      <h4>条款1</h4>
      <p>
        @@租赁公司在租车日期开始前已将所有处于工作状态的车辆交付给租车人。</p>
      <pre contenteditable="true"><code>
    term no1_1 : lessor must DealForRent,
  	    when before leaseStartDate
      </code></pre>
      <br>
      <h4>条款2</h4>
      <p>
        @@截至合同签订之日，车辆可能发生的任何故障，维护，修理和燃油费用均归租赁公司所有。在任何情况下，租赁公司均不会要求您支付任何费用。租赁公司将采取必要的预防措施，为车辆提供最佳保护，并及时进行各种维护。
      </p>
      <pre contenteditable="true"><code>
    term no2_1: lessor must PayAnyCosts
	      when before leaseStartDate
    term no2_2 : lessor must ProvideProtection
	      when after leaseStartDate and before leaseEndDate
      </code></pre>
      <br>
<!--      <h4>解决争议的方法</h4>-->
<!--      <p>-->
<!--        @@凡因本合同引起的或与本合同有关的一切争议，均由北京互联网法院(BeijingIneternetCourt)管辖。-->
<!--      </p>-->
<!--      <pre contenteditable="true" style="word-wrap:break-word;"><code>-->
<!--    Arbitration term : any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by arbitration administered by institution BeijingIneternetCourt.-->
<!--		</code></pre>-->
    </div>

    <h4>解决争议的方法</h4>
    <p>
      @@凡因本合同引起的或与本合同有关的一切争议，均由北京互联网法院(BeijingIneternetCourt)按照有效仲裁规则进行裁决。
    </p>
    <pre @click="alertForArgument()"><code>
    Arbitration term : any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by arbitration administered by institution BeijingIneternetCourt.
      </code></pre>

    <br>
  </div>
</template>

<script>
    // import axios from 'axios'
    // import {contractInfo} from '../../request/api'

    export default {
      name: "contract_term",
      props: {
        contractInfo: null
      },
      data () {
        return {
          form: {

          }
        }
      },
      mounted () {
        // axios.get('../static/testTemplate1.json')
        //   .then((response) => {
        //     this.contractInfo = response.data.contractInfo
        //   })
        //this.getContractInfo()
      },
      methods: {
        alertForArgument : function () {
          this.$notify({
            title: '警告',
            message: '该条款禁止被修改',
            type: 'error'
          });
        },
        // getContractInfo () {
        //   contractInfo
        //     .then(res => {
        //       this.contractInfo = res.contractInfo
        //     })
        // }
      }
    }
</script>

<style scoped>
  .contractTerm >>> .el-card__body {
    padding: 30px;
  }

  pre{
    white-space: pre-wrap;           /* css-3 */
    white-space: -moz-pre-wrap;      /* Mozilla, since 1999 */
    white-space: -o-pre-wrap;        /* Opera 7 */
    word-wrap: break-word;           /* Internet Explorer 5.5+ */
  }
</style>

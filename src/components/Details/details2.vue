<template>
<div class="container theme-showcase">
<br>
<div class="row col-sm-offset-1 col-sm-10">
<div class="blog-post">
<h2 class="blog-post-title" style="font-weight: bold;">合同名称：服务代理中介合同协议书</h2>
<p class="blog-post-meta"> SimpleAuction by SPESC</p>
<p>This page shows the details of Contract {{contract.title}}.</p>
</div>
<hr>
<h3 style="font-weight: bold;">参与人信息</h3>
<hr>
<p>@@甲方信息：委托方，登记信息包括：委托方账户信息，委托方公司资质，委托方服务信息；行为包括：服务上线、服务下线。</p>
<pre><code>
	party partyA{
		account: 0xB9a8…M37qG6,
		certification: IT Comany
		service : [www.xyz.com/service1, www.xyz.com/service2]
		StartService(serviceName : String, serviceInformation : Json)
		EndService(serviceName : String)
	}
</code></pre>
<br>
<p>@@乙方信息：代理方，登记信息包括：代理方账户信息、代理方公司资质；行为包括：发布服务、销售服务。</p>
<pre><code>
	party partyB{
		account: 0x7c1G…m5A0vK,
		certificate: service center
		PublishService(serviceName : String)
		SellService(serviceName : String,
servicePrice : Money)
	}
		</code></pre>
<br>
<h3 style="font-weight: bold;">交易信息</h3>
<hr>
<p>@@ 服务最低定价</p>
<pre>
	lowestServicePrice : Money
</pre>
<br>
<h3 style="font-weight: bold;">合同条款</h3>
<hr>
<h4>条款1</h4>
<p>
@@甲方确认经由乙方平台发布的服务代理费由甲方负责交纳，销售单价为10元/项•年。到期前甲方可自动续费，若到期7天后仍未续费，则乙方将中止服务代理。
</p>
<pre><code>
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
<pre>
<code>
	term no2 : partyB must PayProvider
	  when partyB did SellService
	  while transfer (1-0.3%)*totalPrice-50% *(totalPrice-lowestPrice) RMB to partyB

</code></pre>
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
By signing this agreement, all parties agree to the terms as described above. Both parties will receive two printed copies of this agreement (the copies are valid), and will be responsible for upholding its terms. Both parties agree with conversion from this contract to computer programs on smart contract platform, and approve that the programs’ implementation has the same legal effect. <br>

@@ 甲方：
打印名：IT公司
法定代表人（签字）：0x23198de393…,
签订时间：2020/7/12
Signature of party partyA:
{
	printed-Name：IT Company,
	signature: 0x23198de393…,
	date: 2020/7/12
}

@@ 乙方：
打印名：服务中心
法定代表人（签字）：0x877238201…,
签订时间：2020/7/12
Signature of party partyB:
{
	printed-Name：Eureka center,
	signature: 0x877238201…,
	date: 2020/7/12
}
</code>
</pre>
</div>
</div>
</template>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
<script>

export default {
  data: function () {
    return {
      contract: {
        title: 'Service Agency Intermediary'
      }
    }
  }
}
</script>

<style scoped>

</style>

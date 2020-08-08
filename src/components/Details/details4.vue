<template>
<div class="container theme-showcase">
<br>
<div class="row col-sm-offset-1 col-sm-10">
<div class="blog-post">
<h2 class="blog-post-title" style="font-weight: bold;">合同名称：汽车租赁合同协议书</h2>
<p class="blog-post-meta"> SimpleAuction by SPESC</p>
<p>This page shows the details of Contract {{contract.title}}.</p>
</div>
<hr>
<h3 style="font-weight: bold;">参与人信息</h3>
<hr>
<p>@@甲方信息：租赁公司，登记信息包括：租赁公司机构、地址、电话；行为包括：展示出租汽车信息、出租汽车。</p>
<pre><code>
	party lessor{
		account : {{ contract.blockchainIdentity }},
		mechanism: Acme Car Rental
		address: Dikmen Caddesi No：48/15 Dikmen Ankara
		No: +901231231234
		ShowRentCar(rentPriceADay: Money, rentalDuration: Date)
		DealForRent ()
	}
</code></pre>
<br>
<p>@@乙方信息：承租方，登记信息包括：个人账户信息、账户余额；行为包括：租车。</p>
<pre><code>
	party lessee{
		account : 0x7c1G…m5A0vK,
		amount: Money
		RentACar(car: CarNo, rentalPrice: Money, RentalDate: Date, RentalDays: Time)	
	}
</code></pre>
<br>
<h3 style="font-weight: bold;">交易信息</h3>
<hr>
<p>@@车辆信息：车牌号、品牌、车型、运营年份、颜色、底盘编号等相关信息。</p>
<pre><code>
	party car{
		carNumber : PlateNo
		brand : Volkswagen
		model : Golf 1.6 TDI Comfortline
		yearOfOperation : 2020
		color : Red
		chassisNumber : WVWZZZ3CZXW000001
	}
</code></pre>
<br>
<p>@@租赁详情：付款金额、付款方式、租赁开始日期、租赁结束日期、交货地点等相关信息。</p>
<pre>
	clausePayment : 217.99 USD
	clause : Bank transfer
	leaseStartDate : 13.07.2018
	leaseEndDate : 17.07.2018
	placeOfDelivery : Acme car rental headquarters
</pre>
<br>
<h3 style="font-weight: bold;">合同条款</h3>
<hr>
<h4>条款1</h4>
<p>
@@租赁公司在租车日期开始前已将所有处于工作状态的车辆交付给租车人。</p>
<pre><code>
	term no1_1 : lessor must DealForRent, 
  	  when before leaseStartDate
</code></pre>
<br>
<h4>条款2</h4>
<p>
@@截至合同签订之日，车辆可能发生的任何故障，维护，修理和燃油费用均归租赁公司所有。在任何情况下，租赁公司均不会要求您支付任何费用。租赁公司将采取必要的预防措施，为车辆提供最佳保护，并及时进行各种维护。
</p>
<pre>
<code>
	term no2_1: lessor must PayAnyCosts
	  when before leaseStartDate
	term no2_2 : lessor must ProvideProtection
	  when after leaseStartDate and before leaseEndDate
</code></pre>
<br>
<h4>解决争议的方法</h4>
<p>
		@@凡因本合同引起的或与本合同有关的一切争议，均由北京互联网法院(BeijingIneternetCourt)管辖。
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
By signing this agreement, all parties agree to the terms as described above. Both parties will receive two printed copies of this agreement (the copies are valid), and will be responsible for upholding its terms. Both parties agree with conversion from this contract to computer programs on smart contract platform, and approve that the programs’ implementation has the same legal effect. </br>

@@ 甲方：
打印名：租赁公司
法定代表人（签字）：0x23198de393…,
签订时间：2020/7/12
Signature of party lessor: 
{
	printed-Name：Acme Car Rental,
	signature: 0x23198de393…,
	date: 2020/7/12
}

@@ 乙方：
打印名：承租人
法定代表人（签字）：0x877238201…,
签订时间：2020/7/12
Signature of party lessee: 
{
	printed-Name：Liu Wan
	signature: 0x877238201…,
	date: 2020/7/12
}

</code>
</pre>
</div>
</div>
</template>

<script>

export default {
  data: function () {
    return {
      contract: {
        title: 'Car Rental',
        blockchainIdentity: '0xB9a8…M37qG6'
      }
    }
  }
}
</script>

<style scoped>

</style>

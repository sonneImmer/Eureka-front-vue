<template>
<div class="container theme-showcase">
<br>
<div class="row col-sm-offset-1 col-sm-10">
<div class="blog-post">
<h2 class="blog-post-title" style="font-weight: bold;">合同名称：{{contractInfo.title_zh}}</h2>
<p>This page shows the details of Contract {{contractInfo.title_en}}.</p>
</div>
<hr>
<h3 style="font-weight: bold;">参与人信息</h3>
<hr>
<pre><code>
@@甲方信息：{{contractInfo.parties[0].name_zh}}，登记信息包括：委托方账户信息，委托方公司资质，委托方服务信息；行为包括：报修。
party {{contractInfo.parties[0].name_en}}{
  <tr v-for="property in contractInfo.parties[0].properties" v-bind:key="property.key">
  <td>{{property.key}} : {{property.value}}</td>
  </tr>
}
</code></pre>
<br>
<p>@@乙方信息：服务方，登记信息包括：代理方账户信息、代理方公司资质；行为包括：响应报修，出具书面报告。</p>
<pre><code>party partyB{
  account: 0x7c1G…m5A0vK,
  certificate: service center,
  PublishService(serviceName : String),
  SellService(serviceName : String,
servicePrice : Money)}
</code></pre>
<br>
<h3 style="font-weight: bold;">交易信息</h3>
<hr>
<p>@@ 服务最低定价</p>
<pre>lowestServicePrice : Money
</pre>
<br>
<h3 style="font-weight: bold;">合同条款</h3>
<hr>
<h4>条款1</h4>
<p>
@@乙方在甲方报修后，应做到1小时响应，4小时恢复。如有特殊情况不超过1天，并需提供有关书面报告。</p>
<pre><code>term no1_1 : partyB must Repair
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
<pre>
<code>
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
<pre><code>
  term no3: partyB must MaintainAll
  when within 2 day after TakeEffect.
</code></pre>
<br>
<h4>解决争议的方法</h4>
<p>@@凡因本合同引起的或与本合同有关的一切争议，均由北京互联网法院(BeijingIneternetCourt)管辖。
</p>
<pre>
<code>
Arbitration term : any controversy or claim arising out of or relating to this contract, or the breach thereof, shall be settled by arbitration administered by institution BeijingIneternetCourt.
</code>
</pre>



<!--  已复刻-->
<br>
<h3 style="font-weight: bold;">合同订立</h3>
<p>
@@本合约当事人不得以任何形式修改本合同，除非以书面形式并经双方签字。本合同及其附件构成合约双方的完整协议。通过签署本协议，各方同意上述条款。双方将收到两份本协议的打印件（复印件有效），并负责维护其条款。双方同意将本合约转化为智能合约平台的计算机程序，并同意该程序及其实施具有相同法律效力。
</p>
<pre>
<code>Contract conclusions:
This contract may not be modified in any manner unless in writing and signed by both parties.
This document and any attachments hereto constitute the entire agreement between the parties.
By signing this agreement, all parties agree to the terms as described above.
  Both parties will receive two printed copies of this agreement (the copies are valid), and will be responsible for upholding its terms.
  Both parties agree with conversion from this contract to computer programs on smart contract platform, and approve that the programs’ implementation has the same legal effect.

@@ 甲方：
打印名：某单位
法定代表人（签字）：0x23198de393…,
签订时间：2020/7/12
Signature of party partyA:
{printed-Name：IT Company,
  signature: 0x23198de393…,
  date: 2020/7/12
}

@@ 乙方：
打印名：IT公司
法定代表人（签字）：0x877238201…,
签订时间：2020/7/12
Signature of party partyB:
{
  printed-Name：Liu Wan,
  signature: 0x877238201…,
  date: 2020/7/12
}
{printed-Name：Qin Yuan,
  signature: 0x9340593495…,
  date: 2020/7/12
}
</code>
</pre>
</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      contractInfo: null,
      properties: null
    }
  },
  mounted () {
    axios.get('../static/testTemplate3.json')
      .then((response) => {
        this.contractInfo = response.data.contractInfo
      })
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <form action="v2/apps/EUREKA/submitToAdmin" name="HiddenForm" id="HiddenForm" method="post">
      <input type="hidden" name="hidden_parties" id="hidden_parties">
      <input type="hidden" name="hidden_length" id="hidden_length">
    </form>

    <div class = "container theme-showcase" role="main">
      <h1 style="text-align: center;">客户端</h1>
      <h2>
        服务标准&nbsp;&nbsp;
      </h2><hr>
      <div>
        <form action="#" method="post">
          <div class="form-group">
            <label for="term1" style="font-size: 18px;font-weight: bolder;">条款1</label>
            <input type="text" class="form-control" id="term1"
                   name="term1" value="乙方在甲方报修后。应做到1小时响应，4小时恢复，如有特殊情况不超过1天，并提供有关书面报告" >
          </div>
          <div class="form-group">
            <label for="term2" style="font-size: 18px;font-weight: bolder;">条款2</label>
            <input type="text" class="form-control" id="term2"
                   name="term2" value="乙方应对甲方提供信息咨询、技术支持、巡检服务、上门维修等服务内容。经双方认同，巡检服务定为 3月一次" >
          </div>
          <div class="form-group">
            <label for="term3" style="font-size: 18px;font-weight: bolder;">条款3</label>
            <input type="text" class="form-control" id="term3"
                   name="term3" value="协议期间对所有列入维护的设备进行一次预保养服务，时间为协议签定之日起的2日内" >
          </div>
          <div class="form-group">
            <label for="term4" style="font-size: 18px;font-weight: bolder;">条款4</label>
            <input type="text" class="form-control" id="term4"
                   name="term4" value="预保养服务包括系统软件、应用软件、及网络，内容包括目前机器运行的整体状况，存在的问题，技术以及管理建议">
          </div>
          <button type="button" class="btn btn-default" onclick="test()">Submit</button>
        </form>
      </div>

      <br><br><br>

      <h2>
        基本信息
      </h2><hr>
      <!--需改为用onclick传参-->
      <div class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-1" style="float: right;">
            <button class="btn btn-default" disabled="disabled" onclick="delete_party(this)">
                    <span class="glyphicon glyphicon-minus" aria-hidden="true">
                    </span>
            </button>
          </div>
          <label  for="contractsubject0" class="col-sm-1 control-label">参与方</label>
          <div class="col-sm-10" name = "parties">
            <input type="text" class="form-control" id="contractsubject0" name="contractsubject0" placeholder="国家安全局" value="国家安全局">
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-1" style="float: right;">
            <button class="btn btn-default" disabled="true" onclick="delete_party(this)">
                    <span class="glyphicon glyphicon-minus" aria-hidden="true">
                    </span>
            </button>
          </div>
          <label  for="contractsubject1" class="col-sm-1 control-label">参与方</label>
          <div class="col-sm-10" name = "parties">
            <input type="text" class="form-control" id="contractsubject1" name="contractsubject1" placeholder="202实验室" value="202实验室">
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-11"></div>
          <div class="col-sm-1" style="float: right;">
            <button class="btn btn-default" onclick="add_party(this)">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true">
                    </span>
            </button>
          </div>
        </div>

        <!--备用details数据获取 勿删
        <div class="form-group">
            <label  for="consumerstarttime" class="col-sm-1 control-label">开始时间</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumerstarttime" name="consumerstarttime" placeholder="202实验室" value=${consumerstarttime}>
            </div>
        </div>

        <div class="form-group">
            <label  for="consumerendtime" class="col-sm-1 control-label">结束时间</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumerendtime" name="consumerendtime" placeholder="202实验室" value=${consumerendtime}>
            </div>
        </div>

        <div class="form-group">
            <label  for="consumerexecutiontime" class="col-sm-1 control-label">实行时间</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumerexecutiontime" name="consumerexecutiontime" placeholder="202实验室" value=${consumerexecutiontime}>
            </div>
        </div>

        <div class="form-group">
            <label  for="consumerrepairrate" class="col-sm-1 control-label">修复率</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumerrepairrate" name="consumerrepairrate" placeholder="202实验室" value=${consumerrepairrate}>
            </div>
        </div>

        <div class="form-group">
            <label  for="consumercost" class="col-sm-1 control-label">服务费用</label>
            <div class="col-sm-10" name = "other">
                <input type="text" class="form-control" id="consumercost" name="consumercost" placeholder="202实验室" value=${consumercost}>
            </div>
        </div>-->
      </div>
      <button type="submit" class="btn btn-default" onclick="return submit_contract_to_admin(this)">Submit</button>
      <br><br><br>
      <h2>SPESC</h2>
      <pre>
        //服务方
        party provider{
        //属性
        providerWallet:Address
        providerAmount:Money
        //行为
        repair(executionTime:Date,recoveryTime:Date,specialTime:Date
        repairRate:Integer,services:List)
        }

        //委托方
        party client{
        //属性
        clientWallet:Address
        clientAmount:Money
        //行为
        startTransaction(auctionDuration:Date,deviceStatus:Boolean,
        repairDuration:Date,paymentDuration:Date)
        payment(providerWallet:Address,transferMoney:Money)
        requestService(deviceStatus:Boolean)
        stopTransaction()
        }

        //合约记录信息
        endTime:Date
        hasMistake:Boolean
        repairTime:Date
        paymentTime:Date

        //条款
        term no1: provider shall repair
        when hasMistake==true or after repairTime
        while executionTime 1hours and recoveryTime 4hours
        and specialTime 1day and repairRate >= 90%
        where repairTime = repairTime + 3months and hasMistake == false

        term no2: client can startTransaction
        where endTime = auctionDuration + now and hasMistake == deviceStatus
        and repairTime = repairDuration + now and paymentTime = paymentDuration + now

        term no3: client shall payment
        when after paymentTime and client::clientWallet >= transferMoney
        where providerWallet.transfer(transferMoney) and paymentTime == endTime

        term no4: client can requestService
        where hasMistake == deviceStatus

        term no5: client can stopTransaction
        when after endTime
    </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contract'
}
</script>
<script>
  var i = 2;
  add_party = function (obj) {
    var button_container = $(obj).parent();
    var form_container = button_container.parent();
    var form_group = form_container.siblings("div[class^=form-group]").first();

    var cloneNode = form_group.clone(true);
    var tmpNode = cloneNode.children("div[class='col-sm-10']").first();
    var inputNode = tmpNode.children("input[id^=contractsubject]");

    var tmpNode2 = cloneNode.children("div[class=col-sm-1]").first();
    var buttonNode = tmpNode2.children("button[disabled=disabled]").first();
    buttonNode.removeAttr('disabled');

    inputNode.attr('id','contractsubject'+i);
    inputNode.attr('name','contractsubject'+i);
    // inputNode.val("$"+"{contractsubject"+i+"}");
    inputNode.removeAttr('value');
    inputNode.removeAttr('placeholder');
    ++i;

    form_container.before(cloneNode);
  }

  delete_party = function (obj) {
    var button_container = $(obj).parent();
    var form_container = button_container.parent();
    form_container.remove();
  }

  submit_contract_to_admin = function (obj) {
    var party_list = []; //所有参与人信息存在list中
    var topNode = $(obj).siblings("div[class=form-horizontal]").first();
    var groupNode = topNode.children("div[class=form-group]");
    var len = groupNode.length-1;

    groupNode.each(function () {
      var tmpNode = $(this).children("div[name=parties]").first();
      if(tmpNode.length > 0) {
        var inputNode = tmpNode.children("input[id^=contractsubject]").first();
        if(inputNode.length > 0) {
          party_list.push(inputNode.val());
        }
      }
    });

    /* 备用勿删 details数据获取
    var tmpGroupNode = groupNode.eq(len).children("div[name=other]");
    var consumercost = tmpGroupNode.children("input[id=consumercost]").val();

    tmpGroupNode = groupNode.eq(len-1).children("div[name=other]");
    var consumerrepairrate = tmpGroupNode.children("input[id=consumerrepairrate]").val();

    tmpGroupNode = groupNode.eq(len-2).children("div[name=other]");
    var consumerexecutiontime = tmpGroupNode.children("input[id=consumerexecutiontime]").val();

    tmpGroupNode = groupNode.eq(len-3).children("div[name=other]");
    var consumerendtime = tmpGroupNode.children("input[id=consumerendtime]").val();

    tmpGroupNode = groupNode.eq(len-4).children("div[name=other]");
    var consumerstarttime = tmpGroupNode.children("input[id=consumerstarttime]").val();
    */
    alert(party_list);

    //$("#hidden_parties").val(party_list);
    //$("#hidden_length").val(party_list.length);
    //$("#HiddenForm").submit();

    return false;
  }

  test = function () {
    alert("test");
  }
</script>

<style scoped>

</style>

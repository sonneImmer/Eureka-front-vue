<template>
  <div>
    <h1 align="center">服务端</h1>
    <br>
    <div name = "top_container">
        <div class = "container theme-showcase" role="main" v-for="contract in contracts" :key="contract">
          <div name="contract_submit" class="col-sm-10 col-sm-offset-1">
            <h3 style="font-weight: bold;">
              &nbsp;合约请求&nbsp;&nbsp;
              <button class="btn btn-default" id="submit_provider_contract2" type="submit" @click="submit_contract($event)">同意部署</button>
            </h3>
          </div>
          <div name="contract_message" class="col-sm-10 col-sm-offset-1">
            <table class="table table-striped table-bordered" style="word-break:break-all;">
              <thead>
              <tr>
                <th style="text-align: center;" class="col-sm-4">参与方</th>
                <th style="text-align: center;" class="col-sm-8">参与方签名</th>
              </tr>
              </thead>
              <tbody style="text-align: center;">
              <tr v-for="party in contract.participant" :key="party">
                <td name="contract_party">{{ party.name }}</td>
                <td name="contract_sign" contenteditable="true">{{ party.sign }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div name="contract_result" class="col-sm-10 col-sm-offset-1">
            <table class="table table-bordered" style="word-break:break-all;">
              <tbody>
              <tr>
                <td class="col-sm-3" style="font-weight: bold; text-align: center;">合约地址</td>
                <td name="contract_address" contenteditable="true">{{ contract.address }}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; text-align: center;">签名</td>
                <td name="sign_platform">null</td>
              </tr>
              </tbody>
            </table>
            <br><br><br>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const i = 3

export default {
  name: 'admin',
  data () {
    return {
      contracts:
          [
            {
              participant: [
                {
                  name: 'Amy',
                  sign: '1axnSBPUDyF2Tuq2NtyszbBTAXeG6krZy9E9oY'
                },
                {
                  name: 'Bob',
                  sign: '1axnSBPUDyF2Tuq2NtyszbBTAXeG6krZy9E9oY'
                },
                {
                  name: 'Charlic',
                  sign: '1Tuq2NtyszbBTAXeG6krZy9E9oY'
                },
                {
                  name: 'David',
                  sign: null
                }
              ],
              address: '17ZXxyT2djyZQES5xBep2TZ3xh4uZ7Nv4xusq2'
            },
            {
              participant: [
                {
                  name: 'Amy2',
                  sign: '1axnSBPUDyF2Tuq2NtyszbBTAXeG6krZy9E9oY'
                },
                {
                  name: 'Bob2',
                  sign: null
                },
                {
                  name: 'Charlic2',
                  sign: '1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                },
                {
                  name: 'David2',
                  sign: null
                }
              ],
              address: '17ZXxyT2djyZQES5xBep2TZ3xh4uZ7Nv4xusq22222222222'
            },
            {
              participant: [
                {
                  name: 'Amy2',
                  sign: '1axnSBPUDyF2Tuq2NtyszbBTAXeG6krZy9E9oY'
                },
                {
                  name: 'Bob2',
                  sign: null
                },
                {
                  name: 'Charlic2',
                  sign: '1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                },
                {
                  name: 'David2',
                  sign: null
                }
              ],
              address: '17ZXxyT2djyZQES5xBep2TZ3xh4uZ7Nv4xusq22222222222'
            }
          ]
    }
  },
  methods: {
    submit_contract: function (event) {
      event = event || window.event
      var obj = event.srcElement ? event.srcElement : event.target
      var titleNode = (obj).parent() // H3
      var submitNode = titleNode.parent('div[name=contract_submit]') // contract_submit

      var messageNode = submitNode.siblings('div[name=contract_message]')
      var messageListNode = messageNode.children('table').children('tbody').children('tr')
      var party = []
      var sign = []

      messageListNode.each(function () {
        var partyNode = (this).children('td[name=contract_party]')
        if (partyNode.length > 0) {
          party.push(partyNode.text())
        }
        var signNode = (this).children('td[name=contract_sign]')
        if (signNode.length > 0) {
          sign.push(signNode.text())
        }
      })
      alert(party)
      alert(sign)

      var resultNode = submitNode.siblings('div[name=contract_result]')
      var trNode = resultNode.children('table').children('tbody').children('tr').first()
      var address = trNode.children('td[name=contract_address]').text()

      trNode = resultNode.children('table').children('tbody').children('tr').last()
      var signPlatformNode = trNode.children('td[name=sign_platform]')
      alert('合约地址：' + address)
      // alert(signPlatformNode.text());
      /*
            需要传参
            party：参与方
            sign：对应签名
            address：合约地址

            需要返回
            result：签名结果
        */
      signPlatformNode.text('ILqnQN/BytnGOmwXwo/OSyG5QWJ3alwgL5edPLiG0/OgH2AAmZ6ixwtux2NunPxkHoFx2j4rhBBELDDIw7RxwXw=')
    }
  }
}
</script>

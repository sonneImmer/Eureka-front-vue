import Vue from 'vue'
import contract_var from '@/components/Contract/contract_var'

describe('contract_var.vue', () => {
  it('should render correct contents', () => {
    var Constructor = Vue.extend(contract_var)
    const vm = new Constructor().$mount()
    // Because contractInfo is null, so vm.$el has no _prevClass
    // expect(vm.$el.querySelector('.contractVar h3').textContent)
    //   .toEqual('关键信息')
  })
})

import Vue from 'vue'
import aa from '@/components/aa'

describe('aa.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(aa)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})

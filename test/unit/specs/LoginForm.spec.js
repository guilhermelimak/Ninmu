import Vue from 'vue'
import LoginForm from 'components/form/LoginForm'
import click from 'test/unit/click'

import EventHub from 'src/EventHub'


describe('Logo.vue', () => {
  let vm

  beforeEach(() => {
    vm = new Vue(LoginForm).$mount()
  })

  it('should emit event when login button is clicked', (done) => {
    EventHub.$on('loginForm:doLogin', (form) => {
      assert(true, 'Event handler was called')
      assert(typeof form === 'object', 'Event handler was called')
      done()
    })

    click(vm.$el.querySelector('.login-form__button'))
  })

  it('should emit event when signup button is clicked', (done) => {
    EventHub.$on('loginForm:doSignup', (form) => {
      assert(true, 'Event handler was called')
      assert(typeof form === 'object', 'Event handler was called')
      done()
    })

    click(vm.$el.querySelector('.signup-form__button'))
  })
})


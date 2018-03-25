'use strict';

let I;

module.exports = {
  _init() {
    I = require('../steps_file.js')();
  },

  fields: {
    userName: '#nickName0',
    pwd: '#logPsw',
    button: '#loginForCompany > button'
  },

  fillLoginFields(email, password) {
    I.fillField(this.fields.userName, email);
    I.fillField(this.fields.pwd, password);
  },

  beforeLogin() {
    I.amOnPage('http://www.qianmi.com');
    I.waitForText('产品中心', 5);
    I.click('#unauth > a.login_btn');
    I.waitForText('账号登录', 5);
  },

  loginAccount(email, password) {
    this.fillLoginFields(email, password);
    I.click(this.fields.button);
    I.waitForText('我的店铺', 10);
    I.wait(2);
  },

  logout() {
    I.click(
      '#react-content > div > div > div.qmid-top-nav > div:nth-child(3) > div.header-right-wrap > ul > li:nth-child(4) > div > div.user-info'
    );
    I.waitForText('退出', 3);
    I.click(
      '#react-content > div > div > div.qmid-top-nav > div:nth-child(3) > div.user-center-wrapper.slide-down > div > div > div > ul > li:nth-child(2) > a > div.item-content'
    );
  }
};

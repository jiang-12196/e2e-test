const { phone, password } = require('../../config');
const { addr } = require('./login_page');
const fields = {
  userName: '#nickName0',
  pwd: '#logPsw',
  submitButton: '#loginForCompany > button'
};

Feature('千米网登录系统');

Scenario('登录账号', (I, loginPage) => {
  loginPage.beforeLogin();
});

Scenario('登录表单校验', I => {
  I.click(fields.submitButton);
  I.see('请输入绑定手机号');
  I.fillField(fields.userName, '187');
  I.click(fields.submitButton);
  I.see('手机号格式不正确');
  I.fillField(fields.userName, phone);
  I.click(fields.submitButton);
  I.see('请输入密码');
  I.fillField(fields.pwd, '123');
  I.click(fields.submitButton);
  I.waitForText('手机号或密码不正确', 3);
  I.click(addr.loginCheckBox);
  I.seeCheckboxIsChecked(addr.loginCheckBox);
  I.click(addr.loginCheckBox);
  I.dontSeeCheckboxIsChecked(addr.loginCheckBox);
});

Scenario('登录账号', (I, loginPage) => {
  loginPage.loginAccount(phone, password);
});

Scenario('退出账号', (I, loginPage) => {
  loginPage.logout();
});

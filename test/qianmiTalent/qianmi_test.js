const { phone, password } = require('../../config');
const { addr } = require('./qianmi_page');

Feature('千米达人');

Scenario('登录账号', (I, loginPage) => {
  loginPage.beforeLogin();
  loginPage.loginAccount(phone, password);
});

Scenario('千米达人店铺', I => {
  I.click(addr.talentShop);
  I.waitForText('我的邀请', 10);
  I.click(addr.businessOpportunity);
  I.waitForText('太忙没时间寻找新商机？', 3);
  I.click(addr.message);
  I.waitForText('暂无未读消息', 3);
  I.click(addr.myInvitation);
  I.waitForText('员工邀请', 3);
  I.click(addr.invitingMoney);
  I.waitForText('邀请类型', 3);
  I.click(addr.bossRole);
  I.waitForText('个人中心', 3);
  I.click(addr.personalCenter);
  I.waitForText(phone, 10);
});

Scenario('退出账号', (I, loginPage) => {
  loginPage.logout();
});

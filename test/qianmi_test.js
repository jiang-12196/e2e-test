const { name, password } = require('../config');

Feature('千米达人');

Scenario('登录账号', (I, loginPage) => {
  loginPage.beforeLogin();
  loginPage.loginAccount(name, password);
});

Scenario('千米达人店铺', I => {
  I.click(
    '#react-content > div > div > div.qmid-page-container > div > div > div.select-store-wrapper > div > div.ant-tabs-content.ant-tabs-content-animated > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div > div.select-store-container > div:nth-child(2) > div.select-store-list > div > div:nth-child(4) > div'
  );
  I.waitForText('我的邀请', 10);
  I.click(
    '//*[@id="react-content"]/div/div[2]/div[1]/div[2]/div[2]/ul/li[1]/div'
  );
  I.waitForText('太忙没时间寻找新商机？', 3);
  I.click('//*[@id="react-content"]/div/div[2]/div[1]/div[2]/div[2]/ul/li[2]');
  I.waitForText('暂无未读消息', 3);
  I.click('//*[@id="react-content"]/div/div[1]/div/div[1]/ul/a[2]/li');
  I.waitForText('员工邀请', 3);
  I.click('//*[@id="react-content"]/div/div[1]/div/div[1]/ul/a[3]/li');
  I.waitForText('邀请类型', 3);
  I.click(
    '//*[@id="react-content"]/div/div[2]/div[1]/div[2]/div[2]/ul/li[3]/div'
  );
  I.waitForText('个人中心', 3);
  I.click(
    '//*[@id="react-content"]/div/div[2]/div[1]/div[2]/div[1]/div/div/div/ul/li[1]/a'
  );
  I.waitForText('首页');
});

Scenario('退出账号', (I, loginPage) => {
  loginPage.logout();
});

/******************************************************************/
/* Imports */
/******************************************************************/

const phantom = require('phantom');
const settings = require('./settings');


/******************************************************************/
/* Tests */
/******************************************************************/

const { keepalive, timeout, url } = settings.test;

describe('visiting website', function() {
  this.timeout(0); // Disable Timeouts

  it('should be successful', (done) => {
    (async () => {
      const instance = await phantom.create();
      const page = await instance.createPage();
      await page.open(url);
      setInterval(() => console.log('Keepalive:', new Date()), keepalive);
      setTimeout(() => {
        instance.exit();
        done();
      }, timeout);
    })();
  });
});

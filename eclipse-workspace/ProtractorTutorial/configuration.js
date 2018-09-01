/**
 * 
 */
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec1.js'],
  multiCapabilities: [{
    browserName: 'chrome',
    chromeOptions: {
        args: [
            'no-sandbox',
            '--disable-web-security'
        ]
    }
  }]
};
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Registration.js'],
  capabilities: 
  {
	    //browserName: 'firefox',
	  	//browserName: 'internet explorer',  
	  	browserName: 'chrome',
	    chromeOptions: 
	    {
	        args:["--disable-gpu", "--disable-popup-blocking", "--window-size=1520,820"]
	    }
			//"--headless", 
  }
}
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		framework: 'jasmine',
		seleniumAddress: 'http://localhost:4444/wd/hub',
		//specs: ['Registration.js'],
		specs: ['Jsobjectcall.js'],
		onPrepare : function()
		{
			jasmine.getEnv().addReporter(
	    	        new Jasmine2HtmlReporter({
	    	          savePath: 'target/screenshots'
	    	        })
	    	);
			browser.driver.manage().window().maximize();
			//browser.waitForAngularEnabled(false);
		    
		},
		capabilities: 
		{
			//browserName: 'firefox',
			//browserName: 'internet explorer',  
			browserName: 'chrome',
			chromeOptions: 
			{
				args:["--disable-gpu", "--disable-popup-blocking", "--window-size=1520,820"]
			//"--headless",
			}
		},
  		suites: {
  			Smokesuite: ['ChainLocators.js', 'Frames.js'],
			Regressionsuite: ['Jsobjectcall.js'] 
  		},
  	    // Options to be passed to Jasmine-node.
  	    jasmineNodeOpts: {
  	        showColors: true,
  	        defaultTimeoutInterval: 3000,
  	        isVerbose:true,
  	        includeStackTrace:true
  		}
	
};
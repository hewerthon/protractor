/**
 * 
 */

function Car()
{
	this.firstinput=element(by.model('first'));
	this.secondinput=element(by.model('second'));
	this.goButton=element(by.id('gobutton'));
	this.result=element(by.binding('latest'));
	
	this.getURL=function()
	{		
		browser.get('http://juliemr.github.io/protractor-demo/');
	};
};

	module.exports = new Car();
	//a.getModel();
	//console.log(a.engine);


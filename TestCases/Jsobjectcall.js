/**
 * 
First parameter - test suite name
Second parameter - function (function will have all tests (it blocks)
*/
describe('Protractor baby steps',function()
		{
			var obj = require("./Objects/Jsobject.js/index.js")
			var using = require('jasmine-data-provider');
			var d = require("../Datas/Data1.js");
			
			
			beforeEach(function(){
				obj.getURL();
			});
			// data stores actual data
			// description stores sub object name
			// for every iteration one data set is picked
			using(d.Datadriven, function(data, description){
				
			
			it('Testing calculate ' + description ,function(){
				
				
				// write yout raw protractor code
			    obj.firstinput.sendKeys(data.firstinput);
			    obj.secondinput.sendKeys(data.secondinput);

			    obj.goButton.click();

			    expect(obj.result.getText()).toEqual(data.result); 
			    obj.result.getText().then(function(text){
				    console.log(text);	
				})
			})
			});
			
			afterEach(function(){
				console.log("Test is completed");
			});
			

			it('close browswer', function() {
			// code to close browser
				
			})
		})
		

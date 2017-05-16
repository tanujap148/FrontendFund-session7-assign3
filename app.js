function counter(){			
				var count = 0;				
				return function(){
					return ++count; // returning pre-incremented value of count each time the counter function is called.
				};		
			};			
			var incrementCounter = counter(); // the value of count is stored in the variable incrementCounter.
			
			function onButtonClick(){			
				var c = incrementCounter();	//each time the onButtonClick function is called due to clicking the button, the c value is rewritten with the new value of count variable.
				console.log(c); //displaying the value on console.
			}
			
const counter = document.querySelector('counter');
const increaseButton = document.querySelector('increase')
const decreaseButton = document.querySelector('decrease')

const counterValue = 0

function updateCounter(){
	counter.innerHTML = counterValue;
}

increaseButton.addEventListener("click", () => {
counterValue = counterValue +1
updateCounter(counterValue)
}); 


increaseButton.addEventListener("click", () => {
	if (counterValue === 0) {
		counter = counterValue;
	}
	else {
	counterValue = counterValue -1 
	updateCounter(counterValue)
	}
	
}); 





const counterElement = document.querySelector('counter');
const increaseButton = document.querySelector('increase-button')
const decreaseButton = document.querySelector('decrease-button')

const counterValue = 0

function updateCounter(){
	counterElement.innerHTML = counterValue;
}

increaseButton.addEventListener("click", () => {
counterValue = counterValue +1
updateCounter(counterValue)
}); 


decreaseButton.addEventListener("click", () => {
	if (counterValue === 0) {
		counterElement = counterValue;
	}
	else {
	counterValue = counterValue -1 
	updateCounter(counterValue)
	}
	
}); 





const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	//Add your code here
	let sum = 0;
	let priceArr = document.getElementsByClassName("price");
	let sum = 0;
	for (let i = 0; i < priceArr.length; i++){
	    sum += Number(priceArr.item(i).textContent);
	}
	return sum;
};

getSumBtn.addEventListener("click", getSum);


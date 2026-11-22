const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	//Add your code here
	let priceArr = document.querySelectorAll(".price");
	let sum = 0;
	for (let i = 0; i < priceArr.length; i++){
	    sum += Number(priceArr[i].textContent);
	}
	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");
	newCell.colSpan = 2;
    newCell.textContent = "Total Price: " + sum;
    newRow.appendChild(newCell);
	const oldRow = document.querySelector(".total-row");
    if (oldRow) {
        oldRow.remove();
    }
    newRow.classList.add("total-row");
    document.querySelector("table").appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);


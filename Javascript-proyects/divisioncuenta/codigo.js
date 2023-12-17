'use strict';

const createButton = document.getElementById('createButton');
const calculateButton = document.getElementById('calculateButton');
const deleteMainDiv = document.getElementById('deleteMainDiv');
const resultH2 = document.getElementById('result');
const resultContainer = document.getElementById('resultContainer');

createButton.addEventListener('click', function () {
    createDivs();
});

calculateButton.addEventListener('click', function () {
    calculateDebts();
});

deleteMainDiv.addEventListener('click', function () {
    removeDivs();
});

function createDivs() {
    const inputValue = document.getElementById('inputValue').value;
    const numberOfDivs = parseInt(inputValue);

    const fatherDiv = document.getElementById('fatherDiv');
    if (inputValue == 0 || inputValue == 1 || isNaN(numberOfDivs)) {
        const newParagraph = document.createElement('h2');
        newParagraph.textContent = `Valor ingresado no valido, debe ser un numero mayor o igual a 2`;
        resultContainer.appendChild(newParagraph);
    }
    else {
        resultContainer.innerHTML = ' ';

        deleteMainDiv.style.visibility = "visible";
        calculateButton.style.visibility = "visible";
        createButton.style.visibility = "hidden";

        for (let i = 0; i < numberOfDivs; i++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('mainDiv');

            const subDiv1 = document.createElement('div');
            subDiv1.classList.add(`subDiv1-${i + 1}`);
            subDiv1.textContent = `Persona ${i + 1}`;
            subDiv1.setAttribute('contenteditable', 'true');
            newDiv.appendChild(subDiv1);

            const subDiv2 = document.createElement('div');
            subDiv2.classList.add(`subDiv2-${i + 1}`);
            subDiv2.textContent = `0`;
            subDiv2.setAttribute('contenteditable', 'true');
            newDiv.appendChild(subDiv2);

            fatherDiv.appendChild(newDiv);
        };
    };
};

function calculateDebts() {
    const subDiv1s = document.querySelectorAll('[class^="subDiv1-"]');
    const subDiv2s = document.querySelectorAll('[class^="subDiv2-"]');
    const expenses = {};

    resultH2.style.visibility = "visible";

    for (let i = 0; i < subDiv1s.length; i++) {
        const name = subDiv1s[i].textContent;
        const expense = parseInt(subDiv2s[i].textContent);

        if (expenses[name]) {
            expenses[name] += expense;
        } else {
            expenses[name] = expense;
        }
    }

    const names = Object.keys(expenses);
    const averageExpense = Object.values(expenses).reduce((a, b) => a + b, 0) / names.length;
    const debts = {};

    for (const name of names) {
        const debt = averageExpense - expenses[name];
        debts[name] = debt;
    }

    resultContainer.innerHTML = ' ';

    for (const debtor in debts) {
        for (const creditor in debts) {
            if (debts[debtor] < 0 && debts[creditor] > 0) {
                const amount = Math.min(Math.abs(debts[debtor]), debts[creditor]);
                const newParagraph = document.createElement('p');
                newParagraph.textContent = `${creditor} debe pagarle $${amount.toFixed(2)} a ${debtor}`;
                resultContainer.appendChild(newParagraph);
                debts[debtor] += amount;
                debts[creditor] -= amount;
            }
        }
    }
};

function removeDivs() {
    const fatherDiv = document.getElementById('fatherDiv');
    const mainDivs = document.querySelectorAll('.mainDiv');

    mainDivs.forEach(div => {
        fatherDiv.removeChild(div);
        resultContainer.innerHTML = ' ';
        resultH2.style.visibility = "hidden";
        deleteMainDiv.style.visibility = "hidden";
        calculateButton.style.visibility = "hidden";
        createButton.style.visibility = "visible";


    });
};



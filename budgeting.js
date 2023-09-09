//что хочу! 1. второй бокс не отображается, когда заполняются поля в первом боксе и сумма тотал инком отображается автоматически при введении ее пользователем 
//(как прописать формулу , где и в каком виде?)

//2. хочу чтобы при нажатии на кнопку calculate отображался второй бокс, кде посчитаны и прописаны суммы в разделах 50%, 30%, 20%, исходя из формулы, 1)50 % от (мембер1+мембер2)* 0.50 ; (0.30ж 0.20), соответственно, при прописанных условиях 
// я прописала 2 функции : 1) на просчет общей суммы всего дохода (не знаю или правильно) и 2) вторя функция, когда отображается второй бокс с процентными суммами.

const month= document.querySelector ("#selectMonth"); //getting access to select month field
const calculateBtn= document.querySelector ("#calculateBtn"); // getting acess to calculate btn field
const backBtn = document.querySelector (".backBtn"); // getting acess to back btn field
const husbandsName = document.querySelector('#husbandsName'); //getting access to husbandsName
const wifesName = document.querySelector('#wifesName'); //getting  access to wifes name
const husbandsIncome=document.querySelector("#husbandsIncome"); //getting access to husbands income
const wifesIncome=document.querySelector("#wifesIncome");// getting access to wifes income
const totalIncome = document.querySelector ("#totalIncome"); //получила доступ к полю totalIncome

// нужна ли подслушка, если мне нужно просто посчитать сумму, которую вводит мембер№1 и мембер№2?
totalIncome.addEventListener(`change`, calculateTotalIncome);
// это я пытаюсь создать функцию, которая отобразит мне калькуляцию суммы, которую ввер мембер 1 и мембер2
function calculateTotalIncome(e) {
    e.preventDefault();
    const totalIncome = Number(husbandsIncome) + Number(wifesIncome);
}


/* Getting access to the month field value */
month.addEventListener('change', () => {
    document.querySelector('#month').textContent = month.value;
})

husbandsName.addEventListener('change', () => {
    document.querySelector('#husbandsNameOne').textContent = husbandsName.value;
})
wifesName.addEventListener('change', () => {
    document.querySelector('#wifesNameOne').textContent = wifesName.value;
})

husbandsIncome.addEventListener('change', () => {
    document.querySelector('#husbandsNameOne').textContent = husbandsName.value;
})
wifesName.addEventListener('change', () => {
    document.querySelector('#wifesNameOne').textContent = wifesName.value;
})

husbandsIncome.addEventListener(`change`,()=> {
    document.querySelector('#husbandsIncome').textContent = husbandsIncome.value;
})
wifesIncome.addEventListener(`change`,()=> {
    document.querySelector('#wifesIncome').textContent = wifesIncome.value;
})



/* Calculations */
calculateBtn.addEventListener('click',calculateBudgetShare);



function calculateBudgetShare(e) {
    e.preventDefault();

const husbandsName = document.querySelector('#husbandsName'); 
const wifesName = document.querySelector('#wifesName');
const husbandsIncome=document.querySelector("#husbandsIncome");
const wifesIncome=document.querySelector("#wifesIncome");

    if (month.value === 'chooseMonth') {
        Swal.fire('Choose a month!');
        document.querySelector('.containerTwo').style.display = 'none';
    }
    else if (husbandsName.value === '') {
        Swal.fire('Enter the name \n of the family member #1');
        document.querySelector('.containerTwo').style.display = 'none';
    } 
    else if (wifesName.value === '') {
        Swal.fire('Enter the name \n of the family member #2');
    }
    else if (husbandsIncome === '' || isNaN(husbandsIncome)) {
            Swal.fire('Income of the Family Member #1 is incorrect');
            husbandsIncome = '';
            document.querySelector('.containerTwo').style.display = 'none';
    }
     else if (wifesIncome === '' || isNaN(wifesIncome)) {
            Swal.fire('Income of the Family Member #2 is incorrect');
            wifesIncome = '';
            document.querySelector('.containerTwo').style.display = 'none';
        }

        else {
            document.querySelector('.containerOne').style.display = 'none';
            document.querySelector('.containerTwo').style.display = 'block';
        }

        //show results in boxes in app

        document.querySelector("#necessitiesAmount").textContent = necessitiesAmount;
        document.querySelector("#wantsAmount").textContent = wantsAmount;
        document.querySelector("#savingsDebtsAmount").textContent = savingsDebtsAmount;
    
        document.querySelector('#month').textContent = month.value;
        document.querySelector("husbandsName").textContent = husbandsName.value;
        document.querySelector('#firstIncome').textContent = husbandsIncome;
        document.querySelector('#secondIncome').textContent = wifesIncome;
        document.querySelector('#totalIncome').textContent = familyTotalIncome;

        //formulas

let totalFamilyIncome = husbandsIncome + wifesIncome;
let necessitiesAmount = totalFamilyIncome * 0.50;
let wantsAmount= totalFamilyIncome * 0.30;
let savingsDebtsAmount= totalFamilyIncome * 0.20;

    //to.Fixed()

    necessitiesAmount = necessitiesAmount.toFixed(2);
    wantsAmount = wantsAmount.toFixed(2);
    savingsDebtsAmount = savingsDebtsAmount.toFixed(2);

    
}
calculateTotalIncome();
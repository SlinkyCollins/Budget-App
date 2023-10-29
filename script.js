
const add = () =>{
    var pName = expenseInput.value
    var plax = inputQuantity.value
    var get = amountInput.value

    var getObj={pName, plax, get}

    if(pName =="" && plax =="" && get=="" ||  pName !=="" && plax !=="" && get=="" || pName !=="" && plax =="" && get !=="" || pName=="" && plax!=="" && get !=="" || pName !=="" && plax =="" && get=="" ||  pName =="" && plax !=="" && get =="" || pName =="" && plax =="" && get !==""){
        show.innerHTML=`baba fill this thing`
    } else if(plax <=0 || get <= 0){
        alert("Invalid quantity or amount");
    }else{
        var budgetArray = JSON.parse(localStorage.getItem("budget"))|| [];
        expenseInput.value=""
        inputQuantity.value=""
        amountInput.value=""
        budgetArray.push(getObj)
        localStorage.setItem("budget", JSON.stringify(budgetArray))
        show.innerHTML = ""
        window.location.href="./display_budget.html"
    }
   
}



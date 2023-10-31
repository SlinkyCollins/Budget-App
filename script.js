const add = () => {
  var pName = expenseInput.value;
  var plax = inputQuantity.value;
  var get = amountInput.value;

  var getObj = { pName, plax, get };

  if (
    (pName == "" && plax == "" && get == "") ||
    (pName !== "" && plax !== "" && get == "") ||
    (pName !== "" && plax == "" && get !== "") ||
    (pName == "" && plax !== "" && get !== "") ||
    (pName !== "" && plax == "" && get == "") ||
    (pName == "" && plax !== "" && get == "") ||
    (pName == "" && plax == "" && get !== "")
  ) {
    show.innerHTML = `baba fill this thing`;
  } else if (plax <= 0 || get <= 0) {
    alert("Invalid quantity or amount");
  } else {
    var budgetArray = JSON.parse(localStorage.getItem("budget")) || [];
    expenseInput.value = "";
    inputQuantity.value = "";
    amountInput.value = "";
    budgetArray.push(getObj);
    localStorage.setItem("budget", JSON.stringify(budgetArray));
    show.innerHTML = "";
    window.location.href = "./display_budget.html";
  }
};

var budgetArray = JSON.parse(localStorage.getItem("budget"));
if (budgetArray && budgetArray.length > 0) {
  var totalSpent = 0;
  sideplay();
}
function deleteLet(i) {
  budgetArray.splice(i, 1);
  result.innerHTML = ``;
  localStorage.setItem("budget", JSON.stringify(budgetArray));
  sideplay();
}
function editAny(i) {
  budgetArray[i]["pName"] = document.getElementById(`expenseInput-${i}`).value;
  budgetArray[i]["plax"] = document.getElementById(`inputQuantity-${i}`).value;
  budgetArray[i]["get"] = document.getElementById(`amountInput-${i}`).value;
  localStorage.setItem("budget", JSON.stringify(budgetArray));
  result.innerHTML = ``;
  totalSpent = 0;
  sideplay();
}
function sideplay() {
  for (i = 0; i < budgetArray.length; i++) {
    var item = budgetArray[i];
    var itemCost = item.plax * item.get;
    totalSpent += itemCost;
    result.innerHTML += `
      
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-text">Product: ${item.pName}</h5>
          <h5 class="card-text">Quantity: ${item.plax} </h5>
          <h5 class="card-text">Price: ${item.get}  </h5>
          <h5 class="card-text">Total: ${itemCost} </h5>
          <a href="#" class="btn btn-danger" onclick="deleteLet(${i})">Delete</a>
          <a href="#" class="btn btn-warning"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal-${i}">Edit</a>
          <!-- Button trigger modal -->


        <!-- Modal -->
        <div class="modal fade" id="exampleModal-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">New Edit</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <input type="text" placeholder="Product name" id="expenseInput-${i}">
              <input type="number"  placeholder="Quantity" id="inputQuantity-${i}">
              <input type="number" placeholder="Price" id="amountInput-${i}">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="editAny(${i})" data-bs-dismiss="modal">Save changes</button>
              </div>
            </div>
          </div>
        </div>
                    </div>
                  </div>
         
         `;
  }
}

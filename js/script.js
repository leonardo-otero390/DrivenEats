
let mealPrice, drinkPrice, dessertPrice, total, clientName, clientAddress;
let mealName = null, drinkName = null, dessertName = null;
let readyToAsk = false;


function isItReady() {
    if (mealName !== null) {
        if (drinkName !== null) {
            if (dessertName !== null) {
                readyToAsk = true;
                const sendReady = document.querySelector(".send-request");
                sendReady.classList.add("send-ready");
                sendReady.innerHTML = "Fechar pedido";
                total = (mealPrice + drinkPrice + dessertPrice).toFixed(2).toString().replace(".", ",");
            }
        }
    }
}
function selectMealItem(optionMealSelected) {
    let verify = document.querySelector(".meal .selected");
    if (verify !== null) {
        verify.classList.remove("selected");
    }
    optionMealSelected.classList.toggle("selected");
    mealName = optionMealSelected.querySelector(".option-name strong").innerHTML;
    mealPrice = Number(optionMealSelected.querySelector(".option-price span").innerHTML.replace(",", "."));
    isItReady();
}
function selectDrinkItem(optionDrinkSelected) {
    let verify = document.querySelector(".drink .selected");
    if (verify !== null) {
        verify.classList.remove("selected");
    }
    optionDrinkSelected.classList.toggle("selected");
    drinkName = optionDrinkSelected.querySelector(".option-name strong").innerHTML;
    drinkPrice = Number(optionDrinkSelected.querySelector(".option-price span").innerHTML.replace(",", "."));
    isItReady();
}
function selectDessertItem(optionDessertSelected) {
    let verify = document.querySelector(".dessert .selected");
    if (verify !== null) {
        verify.classList.remove("selected");
    }
    optionDessertSelected.classList.toggle("selected");
    dessertName = optionDessertSelected.querySelector(".option-name strong").innerHTML;
    dessertPrice = Number(optionDessertSelected.querySelector(".option-price span").innerHTML.replace(",", "."));
    isItReady();
}
function sendMessage(total) {
    confirmRequest();
    let message = `Olá, gostaria de fazer o pedido:
        - Prato: ${mealName}
        - Bebida: ${drinkName}
        - Sobremesa: ${dessertName}
        Total: R$ ${total}
        
        Nome: ${clientName}
        Endereço: ${clientAddress}`;
    console.log(message);
    let URI = "https://wa.me/5567992727452?text=" + encodeURIComponent(message);
    window.open(URI)
}
function confirmRequest() {
    clientName = prompt("Diga seu nome pu favoh");
    clientAddress = prompt("Onde cê táah?");
}
function reviewText() {
    let stringMealPrice = mealPrice.toFixed(2).toString().replace(".", ",");
    let stringDrinkPrice = drinkPrice.toFixed(2).toString().replace(".", ",");
    let stringDessertPrice = dessertPrice.toFixed(2).toString().replace(".", ",");
    document.querySelector(".review").innerHTML= `
    <div class="meal">
        <h2>${mealName}</h2>
        <h2>${stringMealPrice}</h2>
    </div>
    <div class="drink">
        <h2>${drinkName}</h2>
        <h2>${stringDrinkPrice}</h2>
    </div>
    <div class="dessert">
        <h2>${dessertName}</h2>
        <h2>${stringDessertPrice}</h2>
    </div>
    <div class="total">
        <h2> <strong>TOTAL</strong></h2>
        <h2> <strong>R$ ${total}</strong></h2>
    </div>`;

}
function showConfirmScreen() {
    reviewText();
    if (readyToAsk === true) {

        let element = document.querySelector(".hidden");
        element.classList.remove("hidden");

    }
}
function hideConfirmScreen() {
    let element = document.querySelector(".confirm-screen");
    element.classList.add("hidden");
}

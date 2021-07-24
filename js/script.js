
let mealPrice,drinkPrice,dessertPrice;
let mealName = null,drinkName = null,dessertName = null;

function isItReady() {
    if (mealName !== null) {
        if (drinkName !== null) {
            if (dessertName !== null) {
                const sendReady = document.querySelector(".send-request");
                sendReady.classList.add("send-ready");
                sendReady.innerHTML = "Fechar pedido";
                let total = (mealPrice + drinkPrice + dessertPrice).toFixed(2).toString().replace(".",",");
                sendMessage(total);
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
    mealPrice = Number (optionMealSelected.querySelector(".option-price span").innerHTML.replace(",","."));    
    isItReady();
}
function selectDrinkItem(optionDrinkSelected) {
    let verify = document.querySelector(".drink .selected");
    if (verify !== null) {
        verify.classList.remove("selected");
    }
    optionDrinkSelected.classList.toggle("selected");
    drinkName = optionDrinkSelected.querySelector(".option-name strong").innerHTML;
    drinkPrice = Number(optionDrinkSelected.querySelector(".option-price span").innerHTML.replace(",","."));
    isItReady();
}
function selectDessertItem(optionDessertSelected) {
    let verify = document.querySelector(".dessert .selected");
    if (verify !== null) {
        verify.classList.remove("selected");
    }
    optionDessertSelected.classList.toggle("selected");
    dessertName = optionDessertSelected.querySelector(".option-name strong").innerHTML;
    dessertPrice = Number(optionDessertSelected.querySelector(".option-price span").innerHTML.replace(",","."));
    isItReady();
}
function sendMessage(total){
        let aButton = document.querySelector(".button-bar");
        let buttonHTML = aButton.innerHTML;
        let message =  `Olá, gostaria de fazer o pedido:
        - Prato: ${mealName}
        - Bebida: ${drinkName}
        - Sobremesa: ${dessertName}
        Total: R$ ${total}`;
        let URI = "https://wa.me/5567992727452?text=" + encodeURIComponent(message);
        aButton.innerHTML = `<a target="_blank" href="${URI}">${buttonHTML}</a>`;

}
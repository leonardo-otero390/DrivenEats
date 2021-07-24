
function isItReady() {
    if (verifyMeal !== null) {
        if (verifyDrink !== null) {
            if (verifyDessert !== null) {
                const sendReady = document.querySelector(".send-request");
                sendReady.classList.add("send-ready");
                sendReady.innerHTML = "Fechar pedido";
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
    verifyMeal = document.querySelector(".meal .selected");
    isItReady();
}
function selectDrinkItem(optionDrinkSelected) {
    let verify = document.querySelector(".drink .selected");
    if (verify !== null) {
        verify.classList.remove("selected");
    }
    optionDrinkSelected.classList.toggle("selected");
    verifyDrink = document.querySelector(".drink .selected");
    isItReady();
}
function selectDessertItem(optionDessertSelected) {
    let verify = document.querySelector(".dessert .selected");
    if (verify !== null) {
        verify.classList.remove("selected");
    }
    optionDessertSelected.classList.toggle("selected");
    verifyDessert = document.querySelector(".dessert .selected");
    isItReady();
}

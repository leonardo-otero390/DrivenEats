function selectMealItem(optionMealSelected){
    let verify = document.querySelector(".meal .selected");
    if (verify !== null){
        verify.classList.remove("selected");
    }
     optionMealSelected.classList.toggle("selected");
}
function selectDrinkItem(optionDrinkSelected){
    let verify = document.querySelector(".drink .selected");
    if (verify !== null){
        verify.classList.remove("selected");
    }
     optionDrinkSelected.classList.toggle("selected");
}
function selectDessertItem(optionDessertSelected){
    let verify = document.querySelector(".dessert .selected");
    if (verify !== null){
        verify.classList.remove("selected");
    }
     optionDessertSelected.classList.toggle("selected");
}
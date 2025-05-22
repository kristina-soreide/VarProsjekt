function klikk() {
    const dropdownElm = document.querySelector(".dropdown-content2")
    if (dropdownElm.style.display == "flex") {
        dropdownElm.style.display = "none"
    } else {
        dropdownElm.style.display = "flex"
    }
}

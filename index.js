function toggle(target) {
    const targetElement = document.getElementById(target)
    if (targetElement.offsetParent !== null) {
        targetElement.style = "display: none"
        this.innerHTML = "&plus;"
    } else {
        targetElement.style = "display: block"
        this.innerHTML = "&minus;"
    } 
}
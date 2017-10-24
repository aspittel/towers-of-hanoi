let moves = 0
let moveDisc = false
let selectedDock = null
let origDiv = null

let scoreDiv = document.getElementById("#score")

function getFirstDisc (div) {
    return div.getElementsByTagName("div")[0]
}

function checkDiscSizes (divOne, divTwo) {
    return getFirstDisc(divOne).dataset.size > divTwo.dataset.size
}

function checkIfDisc (div) {
    return div.getElementsByTagName("div").length === 0
}

function selectDock (div) {
    selectedDock = getFirstDisc(div)
    origDiv = div
    div.className += " selected"
}

function moveToDock (div) {
    if (checkIfDisc(div) || checkDiscSizes(div, selectedDock)) {
        moves ++
        div.insertBefore(selectedDock, div.firstChild)
        score.innerHTML = moves
    }
    origDiv.classList.remove("selected")
}

function handleClick (e) {
    moveDisc ? moveToDock(this) : selectDock(this)
    moveDisc = !moveDisc
}  

Array.from(document.getElementsByClassName("dock")).forEach(dock => {
    dock.addEventListener("click", handleClick)
})


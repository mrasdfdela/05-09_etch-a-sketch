function createDivs(num=4) {
    for (i=0; i<num; i++) {
        var rowEl = document.createElement("div")
        rowEl.classList.add('columnContainer')

        for (j=0; j<num; j++){
            var colEl = document.createElement("div")
            // colEl.classList.add('columnContainer')
            colEl.textContent = ` `
            colEl.style.padding = `${80/(num*2)}vh`
            colEl.setAttribute('shade',0)
            darkenDivs(colEl)

            rowEl.appendChild(colEl)
        }

        document.querySelector('#container').appendChild(rowEl)
    }
}

function updateNumDivs() {
    btn = document.getElementById("chgBtn")
    btn.addEventListener("click", function event(e) {
        e.preventDefault()
        
        var num = prompt("How many squares would you like in a row/column?", "4")
        
        document.querySelector("#container").innerHTML = ''
        createDivs(num)
    })
}

createDivs()
updateNumDivs()

function darkenDivs(box){
        box.addEventListener("mouseover", function(e){
            shade = box.getAttribute("shade")
            shade = Number(shade) + 1
            box.setAttribute("shade",shade)

            s = 255 - (shade*25)
            box.style.background = `rgb(${s},${s},${s})`
    })
}

function coloredDivs(){
    boxes = document.querySelectorAll("")
}
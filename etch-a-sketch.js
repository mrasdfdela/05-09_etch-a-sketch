function createDivs(num=4) {
    for (i=0; i<num; i++) {
        var rowEl = document.createElement("div")
        rowEl.classList.add('columnContainer')

        for (j=0; j<num; j++){
            var colEl = document.createElement("div")
            colEl.textContent = ` `
            colEl.style.padding = `${80/(num*2)}vh`
            colEl.setAttribute('shade',0)
            // darkenDivs(colEl)
            coloredDivs(colEl)

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

// function darkenDivs(box){
//     box.addEventListener("mouseover", function(e){
//         shade = box.getAttribute("shade")
//         shade = Number(shade) + 1
//         box.setAttribute("shade",shade)

//         s = 255 - (shade*25)
//         box.style.background = `rgb(${s},${s},${s})`
//     })
// }

function coloredDivs(box){
    box.addEventListener("mouseover", function(e){
        r = Math.floor(Math.random()*256)
        g = Math.floor(Math.random()*256)
        b = Math.floor(Math.random()*256)

        box.style.background = `rgb(${r},${g},${b})`
    })
}
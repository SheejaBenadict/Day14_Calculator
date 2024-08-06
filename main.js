
let calculator = document.createElement("div")
calculator.style.width = "25%";
calculator.style.height = "450px";
calculator.style.backgroundColor = "#ebf2ee";
calculator.style.justifyContent = "center";
calculator.style.position = "absolute";
calculator.style.left = "490px";
calculator.style.top = "80px";
calculator. style.boxShadow = "0 0 5px grey";

document.body.appendChild(calculator)

let mydiv=document.createElement("div")
mydiv.style.width='100%'
mydiv.style.backgroundColor='red'
calculator.appendChild(mydiv)


const input = document.createElement("input")
    input.id = 'inputField';
    input.style.width='86%'
    input.style.margin='5px 20px'
    // input.style.display = "grid"
    // input.style.grid = "auto";
    input.style.backgroundColor = "#d2d9d5";
    input.style.paddingTop = "15px";
    input.style.paddingBottom = "15px";
    input.style.marginTop = "30px";
    // input.style.marginLeft = "55px";
    // input.style.marginBottom = "10px";
    input.style.border = "none"
    calculator.appendChild(input)


let mydiv1 = document.createElement("div")
mydiv1.style.display = "grid"
mydiv1.style.grid = "auto / auto auto auto auto";
// mydiv1.style.padding="20px"
mydiv1.style.width = "100%"
mydiv1.style.backgroundColor = "pink"
calculator.appendChild(mydiv1)

const btn0 = document.createElement('button')
btn0.innerText = 'C'
btn0.id = 'mainButton'
btn0.style.padding = "25px 15px"
btn0.style.border = "none"
btn0.style.color = "red"
btn0.addEventListener('click', () => {
    document.getElementById("inputField").value = '';
})
mydiv1.appendChild(btn0)



const btn00 = document.createElement('button')
btn00.innerText = 'D'
// btn00.style.padding="20px 15px"
btn00.id = 'mainButton'
btn00.style.border = "none"
btn00.addEventListener('click', () => {
    document.getElementById("inputField").value = inputField.value.toString().slice(0, -1);
})
mydiv1.appendChild(btn00)

const btn1 = document.createElement('button')
btn1.innerText = '.'
// btn1.style.padding="15px"
btn1.id = 'mainButton'
btn1.style.border = "none"
btn1.addEventListener('click', () => {
    document.getElementById("inputField").value += ".";
})
mydiv1.appendChild(btn1)





const btn2 = document.createElement('button')
btn2.innerText = '*'
btn2.id = 'mainButton'
btn2.style.color = "blue"
btn2.style.border = "none"
btn2.addEventListener('click', () => {
    document.getElementById("inputField").value += "*";
})
mydiv1.appendChild(btn2)


let mydiv2 = document.createElement("div")
mydiv2.style.display = "grid"
mydiv2.style.grid = "auto / auto auto auto auto";
mydiv2.style.width = "100%"
mydiv2.style.backgroundColor = "pink"
calculator.appendChild(mydiv2)


const btn3 = document.createElement('button')
btn3.innerText = '7'
btn3.style.padding = "25px 15px"
btn3.id = 'mainButton'
btn3.style.border = "none"
btn3.addEventListener('click', () => {
    document.getElementById("inputField").value += "7";
})
mydiv2.appendChild(btn3)

const btn4 = document.createElement('button')
btn4.innerText = '8'
btn4.id = 'mainButton'
btn4.style.border = "none"
btn4.addEventListener('click', () => {
    document.getElementById("inputField").value += "8";
})
mydiv2.appendChild(btn4)

const btn5 = document.createElement('button')
btn5.innerText = '9'
btn5.id = 'mainButton'
btn5.style.border = "none"
btn5.addEventListener('click', () => {
    document.getElementById("inputField").value += "9";
})
mydiv2.appendChild(btn5)

const btn6 = document.createElement('button')
btn6.innerText = '/'
btn6.id = 'mainButton'
btn6.style.color = "blue"
btn6.style.border = "none"
btn6.addEventListener('click', () => {
    document.getElementById("inputField").value += "/";
})
mydiv2.appendChild(btn6)


let mydiv3 = document.createElement("div")
mydiv3.style.display = "grid"
mydiv3.style.grid = "auto / auto auto auto auto";
mydiv3.style.width = "100%"
mydiv3.style.backgroundColor = "pink"
calculator.appendChild(mydiv3)

const btn7 = document.createElement('button')
btn7.innerText = '4'
btn7.style.padding = "25px 15px"
btn7.id = 'mainButton'
btn7.style.border = "none"
btn7.addEventListener('click', () => {
    document.getElementById("inputField").value += "4";
})
mydiv3.appendChild(btn7)

const btn8 = document.createElement('button')
btn8.innerText = '5'
btn8.id = 'mainButton'
btn8.style.border = "none"
btn8.addEventListener('click', () => {
    document.getElementById("inputField").value += "5";
})
mydiv3.appendChild(btn8)

const btn9 = document.createElement('button')
btn9.innerText = '6'
btn9.id = 'mainButton'
btn9.style.border = "none"
btn9.addEventListener('click', () => {
    document.getElementById("inputField").value += "6";
})
mydiv3.appendChild(btn9)

const btn10 = document.createElement('button')
btn10.innerText = '-'
btn9.id = 'mainButton'
btn10.style.color = "blue"
btn10.style.border = "none"
btn10.addEventListener('click', () => {
    document.getElementById("inputField").value += "-";
})
mydiv3.appendChild(btn10)


let mydiv4 = document.createElement("div")
mydiv4.style.display = "grid"
mydiv4.style.grid = "auto / auto auto auto auto";
mydiv4.style.width = "100%"
mydiv4.style.backgroundColor = "pink"
calculator.appendChild(mydiv4)

const btn11 = document.createElement('button')
btn11.innerText = '1'
btn11.style.padding = "25px 15px"
btn11.style.border = "none"
btn11.addEventListener('click', () => {
    document.getElementById("inputField").value += "1";
})
mydiv4.appendChild(btn11)

const btn12 = document.createElement('button')
btn12.innerText = '2'
btn12.id = 'mainButton'
btn12.style.border = "none"
btn12.addEventListener('click', () => {
    document.getElementById("inputField").value += "2";
})
mydiv4.appendChild(btn12)

const btn13 = document.createElement('button')
btn13.innerText = '3'
btn13.id = 'mainButton'
btn13.style.border = "none"
btn13.addEventListener('click', () => {
    document.getElementById("inputField").value += "3";
})
mydiv4.appendChild(btn13)

const btn14 = document.createElement('button')
btn14.innerText = '+'
btn14.id = 'mainButton'
btn14.style.color = "blue"
btn14.style.border = "none"
btn14.addEventListener('click', () => {
    document.getElementById("inputField").value += "+";
})
mydiv4.appendChild(btn14)


let mydiv5 = document.createElement("div")
mydiv5.style.display = "grid"
mydiv5.style.grid = "auto / auto auto auto ";
// mydiv5.style.width = "100%"
mydiv5.style.paddingTop = "5px"
mydiv5.style.paddingRight= "7px"

// mydiv5.style.backgroundColor="pink"
calculator.appendChild(mydiv5)

const btn15 = document.createElement('button')
btn15.innerText = '00'
//   btn15.style.padding="20px 15px"
btn15.id = 'mainButton'
btn15.style.border = "none"
btn15.addEventListener('click', () => {
    document.getElementById("inputField").value += "00";
})
mydiv5.appendChild(btn15)

const btn16 = document.createElement('button')
btn16.innerText = '0'
btn16.id = 'mainButton'
btn16.style.border = "none"
btn16.addEventListener('click', () => {
    document.getElementById("inputField").value += "0";
})
mydiv5.appendChild(btn16)

const btn17 = document.createElement('button')
btn17.innerText = '='
btn17.id = 'mainButton'
btn17.style.color = "white"
btn17.style.padding = "5px"
btn17.style.backgroundColor = "blue"
btn17.style.border = "none"
btn17.addEventListener('click', () => {
    document.getElementById("inputField").value = eval(inputField.value);
})
mydiv5.appendChild(btn17)


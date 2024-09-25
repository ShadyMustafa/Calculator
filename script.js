const screen = document.getElementById('calcScreen')
const equalBTN = document.getElementById('equal')

function displayInput(input){
    screen.value += input
    saveData()
}

function resetBtn(){
    screen.value = '';
    saveData()
}

function equalBtn(){
    screen.value = eval(screen.value)
    saveData()

}

screen.addEventListener('keydown' , (event)=>{
    if(event.key === 'Enter'){
        equalBTN.click()
    }
})
function saveData(){
    localStorage.setItem('data',screen.value)
}
function loadData(){
    screen.value = localStorage.getItem('data')
}
loadData();
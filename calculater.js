let inp = document.querySelector("#inp")

function GetItem(input){
    inp.value += input
}

function clearInput(){
    inp.value = ""
}

function GetSquare(){
    inp.value *= inp.value
}

function GetAns(){
    try{
        inp.value = eval(inp.value)
    }
    catch(error){
        inp.value("Invalid Input")
    }
}

function cut(){
    inp.value = inp.value.slice(0, -1)
}
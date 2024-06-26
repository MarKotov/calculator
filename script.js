let answer
let action = 0
try{
    function get0(value){
        console.log(value)
        document.getElementById('numbers').value += value
        action = eval(document.getElementById('numbers').value)
        


    }



    document.getElementById("clearButton").onclick = function(e) {
        document.getElementById("numbers").value = "";
        action = 0
        
    }
    function answers(){
        if (action == 'Infinity')
            document.getElementById('numbers').value = "На ноль делить нельзя"

        else
            document.getElementById('numbers').value = action.toFixed(1)

    }
}
catch{
    console.log(" ")
}
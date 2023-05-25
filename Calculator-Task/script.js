let outputData = document.getElementById('output-data');

function display(num){

    outputData.value += num; 
}

function equalto(){

    try{

        outputData.value = eval(outputData.value);
    }
    catch(err)
    {

        alert("Invalid input");
    }
}

function del(){

    outputData.value = outputData.value.slice(0,-1);
}

function remove(){
    
    outputData.value ="";
}
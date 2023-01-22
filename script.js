function szevaszSzamolos(){
    var elsobefog = parseFloat(document.getElementById("input1").value);
    var masodikbefog = parseFloat(document.getElementById("input2").value);
    var atfogo = parseFloat(document.getElementById("input3").value);

    if(elsobefog > 0 && masodikbefog > 0 && atfogo > 0){
        if((elsobefog * elsobefog) + (masodikbefog * masodikbefog) == (atfogo * atfogo) ||
         (elsobefog * elsobefog) + (atfogo * atfogo) == (masodikbefog * masodikbefog) ||
          (masodikbefog * masodikbefog) + (atfogo * atfogo) == (input1 * input1)){
            alert("A derékszögű háromszög megszerkeszthető");
        }
        else{
            alert("A derékszögű háromszög nem szerkeszthető meg");
        }
    }
    else{
        alert("Kérlek írd be a számokat helyesen. ");
    }
}

function randomSzam(){
    for(var i = 0; i < 2; i++){
        var randomNum = Math.floor(Math.random() * (100 - 10 + 1) + 10);
        if(i === 0){
            document.getElementById("input1").value = randomNum;
        }else{
            document.getElementById("input2").value = randomNum;
        }
    }
}


function miujsagKiszamolo(){
    var input1 = parseFloat(document.getElementById("input1").value);
    var input2 = parseFloat(document.getElementById("input2").value);
    var hypotenuse = Math.sqrt((input1 * input1) + (input2 * input2));
    document.getElementById("input3").value = hypotenuse;
}
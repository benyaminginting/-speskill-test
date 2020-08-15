

//no.1


function narcissistic(angka){
    var explodeAngka = angka.toString().split("");
    var countAngka = explodeAngka.length;

    var val = 0;
    explodeAngka.forEach(element => {
        val += Math.pow(element,countAngka);
    });

    if(val == angka){
        return 'true'
    }else{
        return 'false';
    }
}

console.log("no. 1 narcissistic")
console.log(narcissistic(153));
console.log(narcissistic(111));



//no.2
function keluarkanyYangBeda(listAngka){
    var tempGanjil = [];
    var tempGenap = [];

    if(listAngka.length < 3){
        return 'false'; //kurang dari 3 seperti pada soal 
    }

    listAngka.forEach(element =>{
        if(element%2 == 0){
            tempGenap.push(element);
        }else{
            tempGanjil.push(element);
        }
    });

    if(tempGanjil.length == 1){
        return tempGanjil[0];
    }
    
    if(tempGenap.length == 1){
        return tempGenap[0];
    }

    return 'false';
}


console.log("no. 2 keluarkanyYangBeda")
console.log(keluarkanyYangBeda([2, 4, 0, 100, 4, 11, 2602, 36]));


//no.3 

function findNeedle(listNeddle,stack){
    var i = 0;
    result = null;
    listNeddle.forEach(element =>{
        if(element == stack){
            result = i;
        }
        i++;
    })

    return result;
}

console.log("no. 3 findNeedle")
console.log(findNeedle(["red", "blue", "yellow", "black", "grey"], "blue"));


//no.4 
function blueOcean(listAngka, listSubtrimAngka){
    var result = [];

    listAngka.forEach(element => {
        var isAny = false; 
        listSubtrimAngka.forEach( nilai => {
            if(element == nilai) isAny = true;
        })

        if(!isAny){
            result.push(element);
        }
    })

    return result;
}

console.log("no. 4 BLUE OCEAN")
console.log(blueOcean([1,2,3,4,6,10], [1]));

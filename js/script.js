var x="";

for(let i=1; i<= 10; i++ ){
    x= x + "<br />" + i*7;
}

document.getElementById('result').innerHTML = x;
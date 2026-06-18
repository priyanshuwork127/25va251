let num1=document.getElementById("num");
let no=prompt("Please enter the no");
num1.innerText=no;

function calculateSum(){
    sum1=0;
    for(let i=1;i<=no;i++){
        sum1+=i;
    }
    let sum2=document.getElementById("sum");
    sum2.innerText=sum1;
}
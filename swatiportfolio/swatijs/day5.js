


for  (let i = 0; i<10; i++){  
    console.log(i+1)
}


function table(num) {
    console.log(`multiplication Table of ${num}:`)
    for (let i=1; i<=10; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
    }
}
table(4)
table(19)

function new1(num){
    for(let a=num; a<=10; a++){
        console.log(`the tabe of a`, a)
    for (let b=1; b<=10; b++){
        console.log(`${a}*${b} = a*b`)
    }
        
    }
}
new1(1,10)


function new2(a,b,c,d){
    for(let i=a;i<c;i++){
        console.log(`------`)
    }
    for(let j=b;j<=d;j++){
        console.log(`${i} x ${j} = ${i*j}`)
    }
}
new2(1,1,6,6)


function print (start, end){
    for (let i = start; i<=end; i++){
        console.log(`multiplication table of ${i}`);
    }
    for (let j=1; j<=10; j++){
        console.log(`${i} x ${j} =S{i * j}`);
    }
}

print(1,5)
print(1,9)


function revrsetable(num){
    for (let i = num; i>=1; i--){
        console.log(`the table of`, i)
    }
    for(let j=10; j>=1; j++){
        console.log(`${i} x ${j}=${i*j}`)
    }
}

revrsetable(10)
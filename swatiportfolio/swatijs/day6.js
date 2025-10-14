
 // even and odd numbers and its sum

function evenodd(b){
    let even=0;
    let odd=0;
    for(let i=0; i<=b; i++){
        if(i%2==0){
            console.log(i,`even`)
            even=even+i;
        }else{
            console.log(i,`odd`)
            odd=odd+i;
        }
    }
    console.log(even)
    console.log(odd)
}
evenodd(100)

sum

function number(a){
    let num=0;
    for(let i=1; i<=a; i++){
        num=num+i;
    }
    console.log(num)
}

number(5)

//   divsible by 4 and its sum

function divisible(c){
    let num=0;
    let num1=0;
    for(let i=1; i<=c; i++){
        if(i%4==0){
            console.log(i,`divisible`)
            num=num+i;
            
        }else{
            console.log(i,`not divisible`)
            num1=num1+i;
            console.log(num1)
            


        }
        
    }
    console.log(`the sum of num`, num)
    console.log(`the sum of num1`, num1)
    
}
divisible(9)


// divsible by 3 and its sum

function divisible(c){
    let nums=0;
    let nums1=0;
    for(let i=1; i<=c; i++){
        if(i%3==0){
            console.log(i,`divisible`)
            nums=nums+i;
            
        }else{
            console.log(i,`not divisible`)
            nums1=nums1+i;
            console.log(nums1)
            


        }
        
    }
    console.log(`the sum of num`, nums)
    console.log(`the sum of num1`, nums1)
    
}
divisible(10)


// even number in reverse

function evenreverse(d){
    for(let i=d; i>=1; i--){
        if(i%2==0){
            console.log(i);
   
}

}
}
evenreverse(20)

 // even number in reverse and sum

function evenreverse(d){
    let even1=0;  
    for(let i=d; i>=1; i--){
        if(i%2==0){
            console.log(i);
            even1=even1+i;
   
}

}
console.log(even1)
}
evenreverse(20)


// divisibe by 5 and its sum

function divisible(e){
    let sum=0;
    for(let i=1; i<=e; i++){
        if(i%5==0){
            console.log(i,`divisible`)
            sum=sum+i;
            
        }
            
        }
        console.log(sum)
    
}
divisible(50)

 //  sum  of product

function product(f){
    num2=1
    for(let i=1; i<=f; i++){
        num2=num2*i
    }
     console.log(f)
}
product(5)


let i=1;
while(i<=10){
    if(i%2==0){
        console.log(i)
    }else{
        console.log(i)
    }
    i++;
}


let j=1;
while(i<=20){
    if(i%4==0){
        console.log(i)
    }
    i++;
}



















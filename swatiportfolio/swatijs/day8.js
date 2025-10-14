for(let i=1; i<=5; i++){
    let row ="";
    for(j=1; j<=i; j++){
        row += j+" ";
    }
    console.log(row)
}


 for(let i=5; i>=1; i--){
    let row ="";
    for(j=1; j<=i; j++){
       row += j+" ";
    }
    console.log(row)
 }


 for(let i=1; i<=5; i++){
    let row ="";
    for(j=1; j<=i; j++){
        row += i+" ";
    }
    console.log(row)
}


for(let i=5; i>=1; i--){
    let row ="";
    for(j=1; j<=i; j++){
       row += i+" ";
    }
    console.log(row)
 }


 for(let i=1; i<=4; i++){
    let num=""
    for(let j=1; j<=4; j++){
        num +=j;
    }
console.log(num)
 }


 for(let i=1; i<=2; i++){
    let num=""
    for(let j=10; j>=1; j--){
        num +=j;
 }
console.log(num)
 }


 let count=1;
 for(let i=1; i<=5; i++){
    let num="";
      for(let j=1; j<=i; j++){
        num +=count;
        count++;
      }
      console.log(num)

      }   
      
   
let count1=0;
let count2=0

for(let i=1; i<=2; i++){
    for(let j=1; j<=2; j++){
        count1++;
        for(k=1; k<=10; k++){
            count2++;
            console.log("hello world")
        }
}
}

console.log(count1)
console.log(count2)


let count3=0

for(let i=1; i<=2; i++){
    for(let j=1; j<=2; j++){
        // count1++;
        for(k=1; k<=10; k++){
            // count2++;
            for(let l=1; l<=10; l++){
                count3++;
            }
        }
}
}

console.log(count3)



let count4=0;

for(let i=1; i<=2; i++){
   
    for(let j=1; j<=2; j++){
         
        for(k=1; k<=10; k++){
            
            for(let l=1; l<=10; l++){
                count4++;
           console.log(`k iteration ${k}`,count4) 
        //    console.log(`j iteration ${j}`,count4)
        //    console.log(`i iteration ${i}`,count4)
}
    }
}
}

console.log(count4)



let count5=0
let it=0

for(let i=1; i<=2; i++){
    for(let j=1; j<=2; j++){
        for(let k=1; k<=10; k++){
            for(let l=1; l<=10; l++){
            while(it < 10){   
                count5++;
                it++;
                    
            }
        }
    }

}
}
console.log(count5)


let count6=0

for(let i=1; i<=2; i++){
    for(let j=1; j<=2; j++){       
        for(k=1; k<=10; k++){      
                                              
                
        }
          for(let n=1; n<=10; n++)                             
           for(let m=1; m<=100; m++){                           
            count6++          
        }
}

}
console.log(count6)


let k=1;
while(m<=1){
    
}
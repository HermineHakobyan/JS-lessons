
//1
let str ="";

for(let i=0; i<10; i++){
    
    for( j=0; j<i; j++){
        
        str +=" *";
    }
    str+="\n";
}
console.log(str);


let str ="";

for(let i=10; i>0; i--){
    
    for(let j=0; j<10-i; j++){
          str +=" *";
          
    }
    str+="\n";
}
console.log(str);


//2


let str = "";
for ( i = 10; i >= 1; i--){
    for( j = 0; j < i; j++){
       str += "  ";      
    } 
    for(k=i; k<10; k++ ){
      str+= " *";
    }
    str+= "\n";
    
    
}console.log(str);



//3
let str ="";

for(let i=10; i>0; i--){
    
    for( j=0; j<i; j++){
          str +=" *";
          
    }
    str+="\n";
}
console.log(str);


//4
let str = "";
for ( i = 0; i <= 10; i++){
    for( j = 0; j < i; j++){
       str += "  ";      
    } 
    for(k=i; k<10; k++ ){
      str+= " *";
    }
    str+= "\n";
    
    
}console.log(str);


//5
let tree = "";
for(i=1;i<=10;i++){
  tree = "";
  for(j=i;j<10;j++){
    tree += " ";
  }
  for(k=0;k<(i*2)-1;k++){
    tree += "*";
  }
  console.log(tree);
}

//6
let smalltrees = "";
for(let t = 1; t<=3 ; t++){
 for(let i = 0; i <=2 ; i++){

for(let j = 0; j<=2-i ; j++){
   smalltrees+=" ";
    }
  for(let k=0; k<t+i; k++){
  smalltrees+="* ";
    }
     smalltrees+= "\n";
    }
}
console.log(smalltrees);
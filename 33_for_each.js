// -> FOR ARRAY ITERATION THERE IS USAGE OF FOREACH LOOP IT PROVIDES ALL THE 
// -> ESSENTIALS FOR ARRAY (INDEX,ELEMENT AT INDEX,ARRAY)

let x=['Ram','Shyam','Mohan','Yash','Jai'];

// -> FOREACH FUNCTION

x.forEach(function(element,index,array){
  console.log(`${element} ${index} ${array}`);
});

x.forEach(function(array,index,element){
    console.log(`${element}`);
});

// -> FOREACH USING FAT ARROW FUNCTION

x.forEach((element,index,array)=>{
    console.log(`${element} ${index} ${array}`);
})
let x = 100
for(x = 100 ; x <= 200; x++){
  // console.log(x);// print 100 - 200 (inclusive)
  if((x % 3 == 0) && (x % 4 == 0)){
    console.log("LoopyLighthouse");
  }else if(x % 3 == 0){
    console.log("Loopy");
  }else if(x % 4 == 0){
    console.log("Lighthouse");
  }else{
    console.log(x);
  }
}
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector(".target");
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list li');
  for (let i=0; i<lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
    console.log(lis[i]);
  }
}


function deepestChild(){
  const gN = document.querySelector('div#grand-node');
  for (i=0; i<gN.length; i++){
    while (typeof gN[i].innerHTML=== Array){
      
    }
  }
}

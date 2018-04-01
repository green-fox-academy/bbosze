var button = document.getElementsByTagName("button");


function click(){
  alert(`hello ${this.id}`);
}


for(let i=0;i<button.length;i+=1){
  button[i].onclick=click;
}

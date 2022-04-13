var scroll = 1;
let i = 0;

function showData(i) {
  const div = document.querySelector(".main");
  while (i < scroll * 25) {
    var h1 = document.createElement("h1");
    h1.textContent = `Masai Student${i}`;
   div.append(h1);
    i++;
  }
  scroll++;
}

showData(i);


window.addEventListener("scroll",()=>{
       if(Math.ceil(window.scrollY) + window.innerHeight >= document.documentElement.scrollHeight){
        
           showData(((scroll-1)*25));
       }
   })
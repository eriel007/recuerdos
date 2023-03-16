const texto=document.getElementById('logo');
const letras=texto.innerText.split("");
texto.innerText='';

letras.forEach((letra) => {
    let caracter=letra === ''? '&nbsp' : letra;
    texto.innerHTML=texto.innerHTML+`
    <div>
      <span>${caracter}</span>
      <span class="segundo">${caracter}</span>
    </div>
    `
});
/*texto.addEventListener('mousemove',()=>{
    let cuenta=0;
    const intervalo=setInterval(()=>{
        if (cuenta < texto.children.length) {
            texto.children[cuenta].classList.add('animacion');
            cuenta+=1;
        }else {
            clearInterval(intervalo);
        }
    },1);
});
*/
function mover(){
    let cuenta=0;
    const intervalo=setInterval(()=>{
        if (cuenta < texto.children.length) {
            texto.children[cuenta].classList.add('animacion');
            cuenta+=1;
        }else {
            clearInterval(intervalo);
            cuenta=0;
        }
    },40);
}
setInterval(mover,1000);


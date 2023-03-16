let persona={
    nombre:'eriel',
    password:'eriel007',
};
let persona2=new Object();
persona2.nombre='briza';
persona2.password='codyhermoso007';

function verificar(n,c) {
    let cont=0;
    if (n == persona.nombre || n == persona2.nombre) {
        cont++;
    }
    if (c == persona.password || c == persona2.password) {
        cont++;
    }
    return cont;
}
function cargar() {
    let nombre=document.getElementById("name").value;
    let contrasenia=document.getElementById("password").value;
    let cont=verificar(nombre, contrasenia);
    if (cont == 2) {
        alert('correcto');
        window.open('/select/select.html',);
    }else{
        alert("contrasenia Incorrecta");
        document.getElementById("name").innerHTML=null;
        document.getElementById("password").innerHTML=null;
        window.open('/select/select.html',);
    }
}
const sizeImagen=4;
const sizeList=['Briza siendo kevin',
'Briza perdio una apuesta y se vistio de kevin',
'Una noche de trabajo',
'La mano de briza'];

function reloadImages() {
    let cont=1;
    let html='';
    let oracion='';
    for (let i = 0; i < sizeList.length ; i++){
        oracion=sizeList[i]
        if (cont%2 != 0) {
            html+=`
                <div id="contenedor1" class="conteiner">
                    <div class="imagen">
                        <a href="../material/imagenes/${i+1}.jpeg">
                            <img id="imagen1" class="img" src="/material/imagenes/${i+1}.jpeg" alt="">
                        </a>
                    </div>
                    <div id="parrafo1" class="parrafo">
                        <p>
                            ${oracion}
                        </p>
                    </div>
                </div>
                `;
        }else{
            html+=`
                <div id="contenedor2" class="conteiner">
                    <div id="parrafo2" class="parrafo">
                        <p>
                            ${oracion}
                        </p>
                    </div>
                    <div class="imagen">
                        <a href="../material/imagenes/${i+1}.jpeg">
                            <img id="imagen2" class="img" src="/material/imagenes/${i+1}.jpeg" alt="">
                        </a>
                    </div>
                </div>
            `;
        }     
        cont+=1;
    }
    return html;
}
function app() {
    let words=reloadImages();
    document.getElementById('contenedor').innerHTML=words;
}
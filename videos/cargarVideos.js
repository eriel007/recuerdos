const sizeVideos=5;
const sizeList=['everyone dancing XD',
'Briza you are important to me we',
'when i see you again',
'Briza passing the bridge of evil XD',
'Eriel passing the bridge of evil XD'];

function reloadVideos() {
    let cont=1;
    let html='';
    let oracion='';
    for (let i = 0; i < sizeList.length ; i++){
        oracion=sizeList[i]
        if (cont%2 != 0) {
            html+=`
                <div id="contenedor1" class="conteiner">
                    <div class="imagen">
                        <a href="../material/videos/video${i+1}.mp4">
                            <video id="imagen1" class="img" src="/material/videos/video${i+1}.mp4" controls></video>
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
                        <a href="../material/videos/video${i+1}.mp4">
                            <video id="imagen2" class="img" src="/material/videos/video${i+1}.mp4" controls></video>
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
    let words=reloadVideos();
    document.getElementById('contenedor').innerHTML=words;
}
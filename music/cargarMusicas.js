let audio=document.querySelector('audio')
let anterior=document.querySelector('.anterior')
let siguiente=document.querySelector('.siguiente')
let titulo=document.querySelector('.titulo_cancion')

let ArrayMusic=['https://res.cloudinary.com/diz8ym76r/video/upload/v1607402006/reproductor%20de%20musica/high-ncs_atudmy.mp3',
'https://res.cloudinary.com/diz8ym76r/video/upload/v1607402005/reproductor%20de%20musica/find_you_zcajyk.mp3',
'https://res.cloudinary.com/diz8ym76r/video/upload/v1607401993/reproductor%20de%20musica/birds-ncs_igxj24.mp3',
'/material/audios/1.mp3']
let contador1=0

audio.setAttribute('src',ArrayMusic[contador1])

siguiente.addEventListener('click',()=>{

    if(contador1>=ArrayMusic.length-1)
    {
       console.log('Presione Boton Anterior') 
    }else{
        contador1++
        audio.setAttribute('src',ArrayMusic[contador1])
        audio.play()
    }
})

anterior.addEventListener('click',()=>{
    if(contador1===0){
        console.log('Presione Boton Siguiente :S')
    }else{
        contador1--
        audio.setAttribute('src',ArrayMusic[contador1])
        audio.play()
    }
  })

audio.addEventListener('timeupdate',()=>{
    let progreso=document.getElementById('progreso')
    let barra=audio.currentTime / audio.duration
    progreso.style.width=barra * 100 + '%'
   
})

let control_reproducion=document.querySelector('.control_reproducion')
let reproducir=document.querySelector('.reproducir')
let detener=document.querySelector('.detener')
let small=document.querySelectorAll('.small')
let mediun=document.querySelectorAll('.mediun')
let extralarga=document.querySelectorAll('.extralarga')

control_reproducion.addEventListener('click',()=>{
    reproducir.classList.toggle('clase1')
    detener.classList.toggle('clase2')
   
})

reproducir.addEventListener('click',()=>{
    audio.play()
   for(let index1 of small)
   {
       index1.classList.toggle('animar1')
   }
   for(let index2 of mediun)
   {
       index2.classList.toggle('animar2')
   }
   for(let index3 of extralarga)
   {
       index3.classList.toggle('animar3')
   }
  })
  detener.addEventListener('click',()=>{
      audio.pause()
      for(let index1 of small)
   {
       index1.classList.remove('animar1')
   }
   for(let index2 of mediun)
   {
       index2.classList.remove('animar2')
   }
   for(let index3 of extralarga)
   {
       index3.classList.remove('animar3')
   }
  })
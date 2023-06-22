const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenerdorLight = document.querySelector('.imagen-light')
const menu1 = document.querySelector('.menu');


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        viewImagen(imagen.getAttribute('src'));
    })
});

contenerdorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenerdorLight.classList.toggle('show')
        imagenesLight.classList.toggle('show-image')
        menu1.style.opacity = '1'
    }
})


const viewImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenerdorLight.classList.toggle('show')
    imagenesLight.classList.toggle('show-image')
    menu1.style.opacity = '0'

}
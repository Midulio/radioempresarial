const grande  = document.querySelector('.grande-img')
const punto   = document.querySelectorAll('.punto')

punto.forEach(( cadaPunto, i )=> {
    punto[i].addEventListener('click',()=>{

        let posicion = i;
        let operacion = posicion * -10;

        grande.style.transform = `translateX(${ operacion}%)`
        punto.forEach(( cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
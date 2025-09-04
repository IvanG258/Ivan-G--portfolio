//Estilizacao do item activo
var menu = document.querySelectorAll('.item')

function selecao(){
    menu.forEach((item)=>item.classList.remove('activo')) 
    this.classList.add('activo')
}
menu.forEach((item)=>
    item.addEventListener('click',selecao))

/*------------Estilizacao do slider---------*/
const prevSlide=document.getElementbyId('prevSlide');
const nextSlide=document.getElementbyId('nextSlide');
const container= document.querySelector('.container')
const {width: containerWidth}=window.getComputedStyle(container)

const slideProps ={
    width:parseInt(containerWidth),
    scroll:0,
}

function setCurrentDot(){
    const dots=document.querySelectorAll('.dot')
    for(let dot of dots){
        dot.classList.remove('current')
    }
    dots[currentSlide].classList.add('current')
}
function controler({target:{id}}){
    const contentLength=content.children.length;
    switch (id) {
        case 'nextSlide':{
            if(slideProps.scroll+slideProps.width<parseInt()){
                slideProps.scroll+= slideProps.width;
            }
            if(currentSlide<contentLength-1){
                currentSlide +=1;
                setCurrentDot()
            }
            return slider.scrollLeft = slideProps.scroll;
        }
            
            break;
            case'prevSlide' :{
                if(currentSlide>0){
                    currentSlide -=1;
                    setCurrentDot()
                }
                SlideProps.scroll = slideProps.sroll-slideProps.width<0?0:slideProps.scroll-slideProps.width;
            }
            break;
    
        default:
            break;
            nextSlide.addEventListener('click',controler)
            prevSlide.addEventListener('click', controler)
    }
}
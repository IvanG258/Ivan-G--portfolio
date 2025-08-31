//Estilizacao do item activo
var menu = document.querySelectorAll('.item')

function selecao(){
    menu.forEach((item)=>item.classList.remove('activo')) 
    this.classList.add('activo')
}
menu.forEach((item)=>
    item.addEventListener('click',selecao))

/*------------Estilizacao do slider---------*/
const Btnprev=document.getElementbyId();
const Btnnext=document.getElementbyId();

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
        case 'nextbtn':{
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
            case'previous' :{
                if(currentSlide>0){
                    currentSlide -=1;
                    setCurrentDot()
                }
                SlideProps.scroll = slideProps.sroll-slideProps.width<0?0:slideProps.scroll-slideProps.width;
            }
            break;
    
        default:
            break;
            btnNext.addEventListener('click',controler)
            btnPrev.addEventListener('click', controler)
    }
}
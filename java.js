const h3 = document.querySelectorAll('h3')
const ptag = document.querySelectorAll('.ptag')
const arrow = document.querySelectorAll('.arrowimg')

for(let i = 0; i < h3.length; i++){
    arrow[i].addEventListener('click',() =>{
        ptag[i].classList.toggle('act')
        h3[i].classList.toggle('bold')
        arrow[i].classList.toggle('turn')
        for(let j = 0; j < h3.length; j++){
            if(j !== i){
                ptag[j].classList.remove('act')
                h3[j].classList.remove('bold')
            }
        }
    })
}


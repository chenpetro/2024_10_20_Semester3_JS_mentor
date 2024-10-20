const tap = document.querySelector('.tap')
const money = document.querySelector('.money')
const cardsBuy = document.querySelectorAll('.cards-item__buy')
const boost = document.querySelector('.boost')
let boosts = 1
let count = 1
cardsBuy.forEach(function(element){
    element.addEventListener('click',function(){
        let priceElement = parseFloat(element.previousElementSibling.textContent)
        if(count > priceElement){
            
            money.textContent = `${Math.round(count - priceElement)}$`
            alert('Дякую за покупку')
        }else if(count<priceElement){
            alert(`Вам не вистачає ${priceElement-count}$. Заробіть їх`)
        }
    })
})

boost.addEventListener('click',function(){
    boosts++
})

tap.addEventListener('click',function(){
    
    if(boosts==1){
        count++
    }
    else if(boosts>=2){
        count= count+5
    }
    money.classList.toggle('active')
    money.textContent = `${count}$`
})
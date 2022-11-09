'use strict'

var select
var container = document.getElementById('container-input')
var active = document.getElementById('active')
var inputs = document.querySelectorAll("#rating-ipt")
var rating = document.getElementById('rating-selected')
var submitBtn = document.getElementById('submitBtn')


inputs.forEach(input=>{
        input.addEventListener("click",()=>{
                select = input.value
                submitBtn.disabled = false
                submitBtn.addEventListener('click',()=> {
                        container.classList.toggle('active-state')
                        active.classList.toggle('active-state')
                        rating.innerText = `you seleted ${select} out 5`
                        }
                )
        })
})

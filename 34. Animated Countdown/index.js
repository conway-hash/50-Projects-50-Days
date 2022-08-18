const spans = document.querySelectorAll('span')
const text1 = document.querySelector('#text1')
const text2 = document.querySelector('#text2')
const button = document.querySelector('#button')

spans.forEach(function(span,index) {
    setTimeout(function(){
        span.classList.add('rotate')
    }, index * 1000);
});

setTimeout( ()=>{
    spans.forEach(span => {
        span.classList.add('scaleD')
    })
    text1.classList.add('scaleD')
    text2.classList.add('scaleU')
    button.classList.add('scaleU')
},3500)

function refreshPage(){
    window.location.reload();
} 
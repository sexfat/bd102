// work

$(function(){

TweenMax.fromTo( ".section_1 .title" , 1 , {
    y : -50,
    opacity : 0,
}, {
   y : 0,
   opacity : 1,
   delay : 1,
   ease : Bounce.easeOut
});

TweenMax.fromTo( ".section_1 .content" , 1 , {
    x : -50,
    opacity : 0,
}, {
   x : 0,
   opacity : 1,
   delay : 1.5,
   ease : Quad.easeOut
});

console.log('section_1 ok');


})


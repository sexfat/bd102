// work

$(function () {

TweenMax.fromTo(".section_1 .title", 1, {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    delay: 1,
    ease: Bounce.easeOut
});

TweenMax.fromTo(".section_1 .content", 1, {
    x: -50,
    opacity: 0,
}, {
    x: 0,
    opacity: 1,
    delay: 1.5,
    ease: Quad.easeOut
});

console.log('section_1 ok');

//四個物件動畫
TweenMax.staggerFromTo('.wide_4x .item', .8, {
    //做事情
    opacity: 0,
    y: -50
}, {
    opacity: 1,
    y: 0
}, .3)

TweenMax.staggerFromTo(['.box_1', '.box_2'], 2, {
    //做事情
    opacity: 0,
    y: -50
}, {
    opacity: 1,
    y: 0,
    width: 400,
    repeat: 1,
    ease: Expo.easeOut
},1)




// var wp = new TimelineMax().staggerFromTo('.wide_4x .item', 0.5, {
//         y: -50,
//         opacity: 0
//     }, {
//         y: 0,
//         opacity: 1,
//     }, 0.1);




console.log('section_2 ok');

})
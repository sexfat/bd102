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

    //parallax 全域作用域
    var scene = document.getElementById('scenes');
    var parallax = new Parallax(scene);


    console.log('parallax ok');

    //tweenmax

    // var objects = ['.text1', '.text2', '.text3', '.text4', '.text5'];
    TweenMax.staggerFromTo('.com', 1, {
        opacity: 0,
        y : -10
    }, {
        opacity: 1,
        y : 0

    }, 0.5);
    console.log('tween st ok');

});
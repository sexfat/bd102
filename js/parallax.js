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
        y: -10
    }, {
        opacity: 1,
        y: 0

    }, 0.5);
    console.log('tween st ok');

    var text = $('#btn_hover'),
        area = $('#btn_scare'),
        move = $('#btn_move');


    $(function () {
        ////hover 事件
        // text.hover(function() {
        //     //做事情
        //     TweenMax.staggerFromTo('.comw', 1, {
        //         opacity: 0,
        //         y : -10
        //     }, {
        //         opacity: 1,
        //         y : 0

        //     }, 0.5);
        //     //結束
        //     })

        text.on('click', function () {
            //做事情
            TweenMax.staggerFromTo('.comw', 1, {
                opacity: 0,
                y: -10
            }, {
                opacity: 1,
                y: 0
            }, 0.5);
        });
        ////放大
        area.on('click', function () {
            //做事情
            TweenMax.staggerFromTo('.boxarea', 0.5, {
                opacity: 0,
                width: '150px',
                height: '140px',
                y: -10
            }, {
                opacity: '+=0.4',
                y: 0,
                width: '200px',
                height: '180px',
                scale: 1.5,
                yoyo: true
            }, 0.5);
        });

        //parallax
        var scene = document.getElementById('parallax_box');
        var parallax = new Parallax(scene);

        ////
        move.on('click', function () {
            TweenMax.fromTo('.animation_box', 1, {
                width: 0
            },{
                 width: '100%',
                 ease: Power4.easeOut
            });
            //用to 也同樣可以做到
        });
    });



});
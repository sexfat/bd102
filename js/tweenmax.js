// work

$(function () {
    //new 

    //

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


    var controller = new ScrollMagic.Controller();

    var tween_4 = TweenMax.staggerFromTo('.wide_4x .item', .8, {
        //做事情
        opacity: 0,
        y: -50
    }, {
        opacity: 1,
        y: 0
    }, .3);


    var scene_t = new ScrollMagic.Scene({
            //做事情
            triggerElement: "#trigger1",
            duration: 450,
            offset: 100
            //   reverse: false,
        })
        .setTween(tween_4)
        .addIndicators({
            name: 'scene 01'
        })
        .addTo(controller);








    TweenMax.staggerFromTo(['.box_1', '.box_2'], 2, {
        //做事情
        opacity: 0,
        y: -50
    }, {
        opacity: 1,
        y: 0,
        width: 400,
        repeat: 1,
        repeatDelay: 2,
        delay: .5,
        ease: Expo.easeOut
    }, 1)

    // var tl =new TimelineMax();

    // tl.staggerFromTo(['.box_1', '.box_2'], 2, {
    //     //做事情
    //     opacity: 0,
    //     y: -50
    // }, {
    //     opacity: 1,
    //     y: 0,
    //     width: 400,
    //     repeat: 1,
    //     delay: .5,
    //     ease: Expo.easeOut
    // },1)
    console.log('section_2 ok');

    ////parallax 滾動視差套件 



    var parallax_scroll = TweenMax.staggerFromTo(['.parallax_area', '.parallax_area_01'], 2, {
        //做事情
        opacity: 0,
        x: -100
    }, {
        opacity: 1,
        x: 0,
        delay: .5,
        ease: Expo.easeOut
    }, 1)


    var scene_p = new ScrollMagic.Scene({
            //做事情
            triggerElement: "#trigger2",
            duration: 250,
            offset: 50,
            reverse: true,
        })
        .setTween(parallax_scroll)
        .addIndicators({
            name: 'parallax'
        })
        .addTo(controller);




    var scence = document.getElementById('scenes');
    var parallax = new Parallax(scence);
    ////增加class


  var scene_bg = new ScrollMagic.Scene({
            //做事情
            triggerElement: "#trigger3",
            offset: 50,
        })
        .setClassToggle('.bgc' , 'fadein')
        .addIndicators({
            name: 'add_class'
        })
        .addTo(controller);




})
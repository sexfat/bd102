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
            }, {
                width: '100%',
                ease: Power4.easeOut
            });
            //用to 也同樣可以做到
        });
    });

    //scrollmagic 事件

    // var section_4 = $('.section_4  .title');
    var controller = new ScrollMagic.Controller();


    var tween_title = TweenMax.fromTo(".section_4 .title_4", 1.5, {
        x: -150,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        ease: Power4.easeOut
    });
    console.log('scroll magic');

    var scene_t = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            duration: 150,
            //只出現一次
            reverse: false,
            offset: 20
        })
        .setTween(tween_title)
        .addIndicators({
            name: 'secen 01'
        })
        .addTo(controller);



    var tween_content = TweenMax.from(".section_4 .content_4", 1, {
        y: 50,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        delay: .5,
        ease: Power4.easeOut
    });

    var scene_c = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            duration: 150,
            reverse: false,
            offset: 20
        })
        .setTween(tween_content)
        .addIndicators({
            name: 'secen 02'
        })
        .addTo(controller);

    console.log('section_4 ok');
    ////四格動畫

    // TweenMax.staggerFromTo('.wide_4x .item', 1.5, {
    //     opacity: 0,
    //     y: -30
    // }, {
    //     opacity: 1,
    //     y: 0
    // }, 0.8);

    var tween_4x = TweenMax.staggerFromTo('.wide_4x .item', 2, {
        opacity: 0,
        y: -30
    }, {
        opacity: 1,
        y: 0
    }, 0.8);

    var scene_w = new ScrollMagic.Scene({
            triggerElement: "#trigger3",
            duration: 250,
            //只出現一次
            // reverse: false,
            offset: 100
        })
        .setTween(tween_4x)
        .addIndicators({
            name: 'secen 03'
        })
        .addTo(controller);


    console.log('四格動畫 ok');

    //// 加入class
    var bgc_scene = new ScrollMagic.Scene({
            triggerElement: "#trigger4",
            offset: 400,
            reverse: true
        })
        .setClassToggle('.section_5 .bg_all', 'bgc')
        .addIndicators({
            name: 'secen 05'
        })
        .addTo(controller);


    console.log('add class ok');

    ////pin 住



    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, {
            z: -150
        }) // move back in 3D space
        .to("#slideContainer", 1, {
            x: "-25%"
        }) // move in to first panel
        .to("#slideContainer", 0.5, {
            z: 0
        }) // move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, {
            z: -150,
            delay: 1
        })
        .to("#slideContainer", 1, {
            x: "-50%"
        })
        .to("#slideContainer", 0.5, {
            z: 0
        })
        // animate to forth panel
        .to("#slideContainer", 0.5, {
            z: -150,
            delay: 1
        })
        .to("#slideContainer", 1, {
            x: "-75%"
        })
        .to("#slideContainer", 0.5, {
            z: 0
        });


    ////timelinemax 兩種寫法

    //第一種
    var tlo = new TimelineMax({
        delay: 4,
        repeat: 1,
        repeatDelay: 1
    });
    tlo.add(TweenMax.to('.textscroll_1', 2, {
        left: 500
    }));

    tlo.add(TweenMax.to('.textscroll_2', 2, {
        top: 100
    }));
    //第二種
    var tl2 = new TimelineMax();

    tl2.to('.textscroll_3', 4, {
        opacity: 0,
        scale: 10
    }).to('.textscroll_4', 1, {
        right: 100
    });

    //第三種
    var tl3 = new TimelineMax();

    var tweenmax_04 = TweenMax.to('.textscroll_5', 1, {
        right: 100
    });
    var tweenmax_05 = TweenMax.to('.textscroll_6', 1, {
        top: 300,
        scale: 1.5
    });

    tl3.add([tweenmax_04, tweenmax_05]);

    //set 是用在直接表示結果的
    //  tl3.set('.textscroll_5',{scale: 1.4})
    //      .to('.textscroll_6',1,{left: 100});


    //固定住畫面寫法

    var tlt = new TimelineMax();

    tlt.add(TweenMax.to('.textscroll_7', 1, {
        left: 200,
        opacity: 0
    }));
    tlt.add(TweenMax.to('.textscroll_8', 1, {
        left: 300,
        opacity: 0
    }));
    tlt.add(TweenMax.to('.textscroll_9', 1, {
        left: 400,
        opacity: 0
    }));

    var scene_s = new ScrollMagic.Scene({
        triggerElement: "#trigger5",
        duration: '300%',
        //畫面最上緣
        triggerHook: 0,
        //只出現一次
        // reverse: false,
    })
    .setPin('.section_6')
    .setTween(tlt)
    .addIndicators({
        name: 'stickview'
    })
    .addTo(controller);
    console.log('stick view ok')













});
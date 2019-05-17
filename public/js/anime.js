document.addEventListener('DOMContentLoaded', () => {

    anime.timeline({
        easing: 'easeOutExpo',
    })
    .add ({
        targets: '#left',
        translateY: ['-100vh', '0vh'],
        duration : 1300,
    })
    .add ({
        targets: '.left-col > h1',
        opacity: [0,1],
        translateX: [-10,0],
        offset : '-= 700',
    })
    .add ({
        targets: '#container_b > p',
        opacity: [0,1],
        translateY: [-10,0],
        offset : '-= 700',
    })
    .add ({
        targets: '#container_about > p',
        opacity: [0,1],
        translateX: [10,0],
        offset : '-= 700',
    })
    .add ({
        targets: '#bloc_hire > p',
        opacity: [0,1],
        translateY: [10,0],
        delay : (el, i) => 100 * i,
        offset : '-= 800',
    })
    .add ({
        targets: '#bloc_RS > p',
        opacity: [0,1],
        translateY: [10,0],
        delay : (el, i) => 100 * i,
        offset : '-= 800',
    })
})
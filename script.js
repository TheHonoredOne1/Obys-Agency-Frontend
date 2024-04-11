// var sheryjs = require("sheryjs")
function loadinganimation() {
    let tl = gsap.timeline()

    tl.from(".line h1", {
        y: 150,
        stagger: 0.2,
        duration: 0.6,
        delay: 0.4,
    })

    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            let h5timer = document.querySelector("#line1-part1 h5")
            let grow = 0;
            setInterval(() => {
                if (grow < 100) {
                    grow++
                    h5timer.innerHTML = grow
                }
                else {
                    h5timer.innerHTML = grow
                }
            }, 25);
        }
    })

    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1,
    })

    tl.to("#loader", {
        delay: 1.8,
        opacity: 0,
        duration: 0.4,
    })

    tl.from("#page1", {
        y: 1600,
        opacity: 0,
        duration: 0.4,
        ease: Power4,
    })

    tl.to("#loader", {
        display: "none",
    })
    tl.from("#nav", {
        opacity: 0,
    })
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y: 150,
        opacity: 0,
        stagger: 0.2,
    })
}
function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y,
        })
    })
    Shery.imageMasker("#nav-part2 h4" /* Element to target.*/, {
        //Parameters are optional.
        mouseFollower: true,
        text: "Shery",
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}


loadinganimation()

cursorAnimation()

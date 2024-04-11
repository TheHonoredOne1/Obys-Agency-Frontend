
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
    delay: 1.5,
    opacity: 0,
    duration: 0.4,
})

tl.from("#page1", {
    y: 1600,
    opacity: 0,
    duration: 0.6,
    ease: Power4,
})

tl.to("loader", {
    display: "none",
})
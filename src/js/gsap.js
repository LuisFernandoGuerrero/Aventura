const { default: gsap } = require("gsap/gsap-core");

gsap.from(
    '.logo', {
    x: "-300%"
});
gsap.to(
    '.logo', {
    duration: 1.5,
    ease: "bounce",
    x: "0%"
});


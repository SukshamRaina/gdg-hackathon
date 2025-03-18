document.addEventListener("DOMContentLoaded", () => {
    // Logo Animation (Bounce In)
    anime({
        targets: ".logo",
        translateY: [-50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutBounce"
    });

    // Heading Fade In
    anime({
        targets: "h1",
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: 500,
        duration: 800,
        easing: "easeOutExpo"
    });

    // Button Slide In
    anime({
        targets: ".cta-button",
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 1000,
        duration: 800,
        easing: "easeOutExpo"
    });

    // Form Fields Staggered Fade In
    anime({
        targets: ".auth-container input, .auth-container button",
        opacity: [0, 1],
        translateY: [10, 0],
        delay: anime.stagger(200),
        duration: 800,
        easing: "easeOutExpo"
    });

    // Dashboard Elements Fade In
    anime({
        targets: ".dashboard-container h2, #map",
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(300),
        duration: 1000,
        easing: "easeOutExpo"
    });

    // Button Hover Effect
    document.querySelectorAll(".cta-button, .auth-container button, .profile-container button").forEach(button => {
        button.addEventListener("mouseenter", () => {
            anime({
                targets: button,
                scale: 1.1,
                duration: 200,
                easing: "easeOutExpo"
            });
        });

        button.addEventListener("mouseleave", () => {
            anime({
                targets: button,
                scale: 1,
                duration: 200,
                easing: "easeOutExpo"
            });
        });
    });
});

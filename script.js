document.addEventListener("DOMContentLoaded", function () {
    // Your existing JS code
});


document.addEventListener("DOMContentLoaded", function () {
    const plane = document.createElement("div");
    plane.className = "plane";

    const wing = document.createElement("div");
    wing.className = "wing";

    const window1 = document.createElement("div");
    window1.className = "window";
    wing.appendChild(window1);

    const window2 = document.createElement("div");
    window2.className = "window";
    window2.style.left = "50px"; // Adjust the window positions
    wing.appendChild(window2);

    plane.appendChild(wing);
    document.body.appendChild(plane);

    let posX = 0;
    let posY = 0;

    function animatePlane() {
        posX += 2;
        posY = Math.sin(posX * 0.05) * 20;

        plane.style.left = posX + "px";
        plane.style.top = posY + "px";

        requestAnimationFrame(animatePlane);
    }

    animatePlane();
    
});

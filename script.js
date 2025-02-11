document.getElementById("colorButton").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33A6", "#33A6FF"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

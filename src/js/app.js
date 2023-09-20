var clickCount = 0;
document.getElementById("changeBackgroundButton").addEventListener("click", function () {
    if (clickCount === 0) {
        var confirmed = confirm("Are you sure?");
        if (confirmed) {
            document.body.style.backgroundColor = "black";
            clickCount++;
        }
    } else if (clickCount === 1) {
        var confirmed = confirm("Are you sure?");
        if (confirmed) {
            document.body.style.backgroundColor = "white";
            clickCount = 0;
        }
    }
});
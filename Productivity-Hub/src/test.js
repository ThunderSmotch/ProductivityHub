var a = document.getElementById("addExt");

a.addEventListener("click", function () {
    console.log("This worked!");
})

a.addEventListener("onClick", function () {
    console.log("This worked too!");
})

a.onclick = function() {
        console.log("Test");
}
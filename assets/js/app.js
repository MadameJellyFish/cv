let h3 = document.querySelector('.click');
let p = document.querySelector('.depli');

h3.addEventListener('click', afficher)
function afficher() {
    if (p.style.display === "none") {
        p.style.display = "block";
    } else { p.style.display = "none" }

}

console.log(h3);
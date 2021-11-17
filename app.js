let elements = document.getElementsByTagName("p");

function number () {
    return Math.ceil(Math.random() * 100);
}

for (let i = 0; i < elements.length ; i++) {
    elements [i].innerHTML = number().toString();
}

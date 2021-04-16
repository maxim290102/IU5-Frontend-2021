//1
document.getElementById("square").addEventListener('click', function (){
        this.setAttribute("style", "background-color: orange;" )
    }
)
//2
let timer;
let i = 1;

document.getElementById('timer').addEventListener('mouseover', function (){
    timer = setInterval(function () {
        this.innerText = i;
        i++;
    }.bind(this), 1000)
})

document.getElementById('timer').addEventListener('mouseout', function (){
    clearInterval(timer);
})
//3
const listButton = document.getElementById("list_btn");
const list = document.getElementById("list_hidden");
listButton.addEventListener("click", () => {
    list.classList.toggle("list_visible");
});


//4
const sphere = document.getElementById("sphere");
const fourthElement = document.getElementById("circle");

let sphereClicked = false;

sphere.addEventListener("click", () => {
    sphereClicked = true;
});
document.addEventListener("keydown", (event) => {
    if (event.code == "Escape") sphereClicked = false;
});
const rightBorder = fourthElement.offsetWidth - sphere.offsetWidth;
const bottomBorder = fourthElement.offsetHeight - sphere.offsetHeight;
fourthElement.addEventListener("mousemove", (event) => {
    if (sphereClicked) {
        let x = event.pageX - fourthElement.offsetLeft;
        let y = event.pageY - fourthElement.offsetTop;
        if (x < rightBorder && y < bottomBorder) {
            sphere.style.left = x + "px";
            sphere.style.top = y + "px";
        }
    }
});
let stack = [];
fetch("https://breakingbadapi.com/api/episodes")
    .then(res => res.json())
    .then(res => {
        for (let i = 0; i < 62; i++) {
            stack.push(res[i]);
        }
        console.log(res[0]);
        let body = document.getElementById('seriesBody');
        document.getElementById('seriesButton').addEventListener('click', function () {
            for (let i = 0; i < stack.length; i++) {
                let div = document.createElement('div');
                body.appendChild(div);
                div.setAttribute('style', 'margin: 20px;')
                let name = document.createElement('h1');
                div.appendChild(name);
                name.textContent = stack[i].title;
                let number = document.createElement('h3');
                div.appendChild(number);
                number.textContent = 'Сезон ' + stack[i].season + ' Эпизод ' + stack[i].episode;
                let date = document.createElement('p');
                div.appendChild(date);
                date.textContent = 'Дата выхода: ' + stack[i].air_date;
                let character = document.createElement("h2");
                div.appendChild(character);
                character.textContent = 'Персонажи';
                let characters = document.createElement("p");
                div.appendChild(characters);
                for (let j = 0; j < stack[i].characters.length; j++) {
                    characters.innerHTML += '<br>' + stack[i].characters[j];
                }
            }
        })
    })
    .catch(res => console.error(res));

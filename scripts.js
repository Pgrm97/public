const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container);

callAPI();

function callAPI(){    
    var request = new XMLHttpRequest()

    var URL = "https://my-json-server.typicode.com/Pgrm97/public/events";

    var type = document.getElementById("type").value;

    var text = document.getElementById("gsearch").value;

    var final_URL = URL + "?" + type + "=" + text;

    console.log(text);

    request.open('GET', final_URL , true);

    request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach((event) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const h1 = document.createElement('h1')
        h1.textContent = event.name

        const h2 = document.createElement('h2');
        const p = document.createElement('p');

        const image = document.createElement('img');
        image.src  = event.image;


        h2.textContent = `${event.city}`
        p.textContent = `${event.category} Category Event on ${event.date}`

        container.appendChild(card)
        card.appendChild(h1)
        card.appendChild(h2)
        card.appendChild(p);
        document.querySelector('.container').appendChild(image)

        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Gah, it's not working!`
        app.appendChild(errorMessage)
    }
    }

    request.send();
}

function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}
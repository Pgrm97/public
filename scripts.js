const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()

request.open('GET', 'http://my-json-server.typicode.com/Pgrm97/public/events', true);

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
      const p = document.createElement('p')
      //event.description = event.description.substring(0, 300)
      h2.textContent = `${event.city}`
      p.textContent = `${event.category}`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(h2)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
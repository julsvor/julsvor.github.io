


function generateOffer() {

    const image = "images/rosor.jpg"

    const titles = ['Rosor', 'Rosor2', 'Rosor3', 'Rosor4']

    const title = titles[Math.floor((Math.random()*10%4))]

    const offer_element = document.createElement('div')
    const title_element = document.createElement('h5')
    const button_element = document.createElement('button')
    const image_element = document.createElement('img')

    title_element.innerText = title
    button_element.innerText = "Köp"
    image_element.src = image


    offer_element.appendChild(title_element)
    offer_element.appendChild(button_element)
    // offer_element.appendChild(image_element)


    offer_element.classList.add("offer")

    return offer_element
}

function generateOffers(num) {
    const offers_array = []
    for (let index = 0; index < num; index++) {
        offers_array.push(generateOffer())
    }
    return offers_array
}

function main() {
    const offers = document.getElementById('offers')
    generateOffers(100).forEach(element => {
        offers.appendChild(element)
    });
}


document.addEventListener("DOMContentLoaded", function() {
    main()
});
  

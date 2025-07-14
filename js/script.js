const section = document.querySelector("section") // Selecciona la sección donde se mostrarán los producto
const requestURL = "https://fakestoreapi.com/products" // URL del archivo JSON que contiene los productos
const request = new XMLHttpRequest()  // crea el obejto par hacer una peticion

request.open("GET",requestURL) //trae el archivo json   
request.responseType = "json" //es el tipo en que se va a traer la informacion
request.send()  // confirmo el servicio

console.log(requestURL)
console.log(request)

request.onload = function () {      // esta funcion espera a que termine el proceso de traerte los datos
    const productos = request.response


    console.log(productos.length)
    console.log(productos[1].id)
    console.log(productos[1].title)
    console.log(productos[1].price)

    for(i=0; i<productos.length; i++){ 
        const article = document.createElement("article") 
        article.classList.add("article") // Añade la clase "article" al elemento article
        section.appendChild(article)
        const frente = document.createElement("div")
        frente.classList.add("frente")
        article.appendChild(frente)
        const fInfo = document.createElement("div")
        fInfo.classList.add("fInfo")    
        frente.appendChild(fInfo)
        const atras = document.createElement("div")
        atras.classList.add("atras")
        article.appendChild(atras)
        const aInfo = document.createElement("div")
        aInfo.classList.add("aInfo")
        atras.appendChild(aInfo)

        const imagen = document.createElement("img")
        imagen.src=productos[i].image
        fInfo.appendChild(imagen)

        const h2 = document.createElement("h4")
        h2.textContent = productos[i].title
        fInfo.appendChild(h2)

        const p = document.createElement("p")
        p.textContent = productos[i].description
        aInfo.appendChild(p)

        const h3 = document.createElement("h3")
        h3.textContent = "$" + productos[i].price
        h3.classList.add("colorRojo") // Añade la clase "color" al elemento p
        aInfo.appendChild(h3)

        const button = document.createElement("button")
        button.textContent = "Comprar"
        aInfo.appendChild(button)
        
    }

}

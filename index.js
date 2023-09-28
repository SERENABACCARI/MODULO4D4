/*faccio apparire tutti i libri sulla homepage con la request al server tramite API*/
/* url = "https://striveschool-api.herokuapp.com/books"*/
window.onload = () => {
    fetchBooks()
}


    /*denfinizione della funzione fetch*/

    function fetchBooks(search=null){
        fetch("https://striveschool-api.herokuapp.com/books")
            .then(response => response.json())
            .then((response,search) => {
                let cont = document.querySelector(".libri .row")
                cont.innerHTML = response.filter((book,search)=>{return book}).map((book) => {
                    console.log(book)
                    return `<div id="scompare" class="col-12 col-sm-6 col-md-4 col-lg-2"><div class="card"id='book_${book.asin}'>
            <img src="${book.img}" class="card-img-top" alt="">
            <div class="card-body">
                 <button class='btn btn-primary' onclick="addToCart('${book.title}', '${book.price}', '${book.asin}')"> EUR ${book.price} </button>
                <a href="#" onclick="azione('scompare');" class="btn btn-primary">salta</a>
                <button class='btn btn-primary' onclick="openbook(${book.asin})">open<button>
            </div>
        </div>

        </div>`
                })
                    .join("")
            })
            .catch((err) => console.error(err))
    }

    /*vado a richiamare la funzione per il button openbook del libro*/ 

function openbook(asin){
    window.open(`book.html?asin=${asin}`)
  
}

/*funzione carrello/ collegamento con onclick="addToCart per aggiungere book al carrello
e vedere il prezzo totale */

let carrello = []

function addtocart(book) {
    carrello.push(book)
    document.getElementById("numero prodotti").innerHTML = book.length      /*? da rivedere*/

}

function totale() {
    let totale = document.getElementById("totale")
    totale.innerHTML = "totale € + somma"
}

function somma() {
    let somma = 0
    for (let i = 0; i < book.length; i++)
        somma += book[i].prezzo;
    return somma
}

/*al click le card scompaiono/ collegamento con div id=" scompare e onclick="azione('scompare');"*/

function azione(scompare) {
    if (document.getElementById(scompare).style.display == "") {
        document.getElementById(scompare).style.display = "none"
    } else {
        document.getElementById(scompare).style.display = "";
    }

}

/*filtrare risultato API*/



/*function search(){
    const titles=document.querySelectorAll(".book-title")
    console.log(titles[0])
    for (let i = 0; i <books.length; i++){
        if (titles.toUpperCase().includes(titles[i]))
      {}  
    }
    const search=book.filter((book) => book.title)
const input=document.getElementById("search")
input.addEventListener("keydown", autocomplete)
const risultati=document.getElementById("risultati")
const titles=document.querySelectorAll(".book-title")

function autocomplete(input){
    console.log(input.target.value)
    const Titles=[0]
    titles.forEach((title)=>{

    })

}*/
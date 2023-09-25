/* url = "https://striveschool-api.herokuapp.com/books"*/
window.onload=()=>{
    fetch()
}
fetch("https://striveschool-api.herokuapp.com/books")
.then(response=>response.json())
.then((response)=>{
    let cont=document.querySelector(".libri .row")
    cont.innerHTML=response.map((book)=>{
        return `<div class="col-12 col-sm-6 col-md-4 col-lg-2"><div class="card"id='book_${book.asin}'>
            <img src="${book.img}" class="card-img-top" alt="">
            <div class="card-body">
                 <button class='btn btn-primary' onclick="addToCart('${book.title}', '${book.price}', '${book.asin}')"> EUR ${book.price} </button>
                <a href="#" class="btn btn-primary">saltare</a>
            </div>
        </div>

        </div>`
    })
        .join("")
})
    .catch((err) => console.error(err))
    


/*funzione carrello*/

let carrello=[]

function addtocart(book){
    carrello.push(book)
    document.getElementById("numero prodotti").innerHTML = book.length

}
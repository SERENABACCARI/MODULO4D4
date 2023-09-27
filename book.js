/*dettagli libro book.html*/

const params = new URLSearchParams(window.location.search);
const id = params.get("asin");

fetch(`https://striveschool-api.herokuapp.com/books/${1940026091}`)
then(response => response.json()).then(book)

const bookname=document.querySelector("#bookname");

function book(asin){
    console.log(book.asin)
    bookname.innerHTML = book.asin
}
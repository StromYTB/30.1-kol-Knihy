let library = []

var output = document.getElementById("bookOutput")



function addBook(){
    let book = {
        title: "",
        author: "",
        genre: "",
        publishedYear: "0",
    }

    book.title = document.getElementById("titleInput").value
    book.author = document.getElementById("authorInput").value
    book.genre = document.getElementById("genreInput").value
    book.publishedYear = document.getElementById("publishedYearInput").value

    library.push(book)

    displayBooks()

}

function displayBooks(){

    console.log(library);

    for(let i = 0; i < library.length; i++){
        output.innerHTML += library[i].title + " " + library[i].author + " " + library[i].genre + " " + library[i].publishedYear
    }

}

function findBook(){

    let findBookInput = document.getElementById("findInput").value = library.find(addBook(displayBooks(i))) = findBookOutput
    
    let findBookOutput = document.getElementById("findOutput").innerHTML

}
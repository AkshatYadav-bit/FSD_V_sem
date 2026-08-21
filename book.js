function addBook(props){
    const child = document.createElement("div");
    child.setAttribute("class","card"); //sets the attribute of class of child

    const image  = document.createElement("img");
    image.setAttribute("src",props.image);
    image.setAttribute("height","80px");
    image.setAttribute("width","80px");
    image.style.margin = "auto";


    const h2 = document.createElement("h2");
    h2.innerText = props.price;

    child.appendChild(image);
    child.appendChild(h2);

    return child;
}

const parent = document.getElementById("root") //get dom node by element id 
const book_lst = document.createElement("div")
book_lst.setAttribute("class","book_lst_class");
parent.appendChild(book_lst)

const data = [
    {image : "items/ml_book.webp",price:"525/- "},
    {image : "items/maths_book.webp",price:"1000/- "},
    {image : "items/ml_book_2.png",price:"1500/- "}
]

for(i of data){
    book_lst.appendChild(addBook(i));
}
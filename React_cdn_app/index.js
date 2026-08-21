const data = [
    {image : "../items/ml_book.webp",price:"525/- "},
    {image : "../items/maths_book.webp",price:"1000/- "},
    {image : "../items/ml_book_2.png",price:"1500/- "}
]

function addBook(props){
    const image =  React.createElement(
        //which dom to make
        "img",

        //what properties it would have
        {
            src:props.image, 
            width:"75px",
            height:"75px",
        }
    )

    const h2 = React.createElement("h2",{style: {color: "red"}}, "Price : "+props.price);
    const child = React.createElement("div",{className:"card"},[image,h2]);
    return child;
}
const bookdata = data.map((i) =>{
    return addBook(i);
})
const booklist = React.createElement("div",{className:"book_lst_class"},bookdata);

const root = ReactDOM.createRoot(document.getElementById("root"));

// ReactDOM.render(bookdata);
root.render(booklist)

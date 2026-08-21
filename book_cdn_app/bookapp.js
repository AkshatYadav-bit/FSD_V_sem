const bookdata=[
    {image:"",price: 345},
    {image:"",price: 545},
    {image:"",price: 679},
]
function Book(props){
    const image=React.createElement("img",{src:props.image,width:"100px",height:"100px"},null);
    const h2=React.createElement("h2",{},"Price:"+props.price);
    const bt=React.createElement("button",{},"AddToCart");
    const div=React.createElement("div",{className: "card"},[image,h2,bt]);
    return div;
}
const bookstore=bookdata.map((b)=>(
    Book(b)
))
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
        root.render(bookstore)
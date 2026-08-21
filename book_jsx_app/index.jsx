function Book() {
    return (
        <div>
            <img src="book-image.jpg" width="100px" height="100px" />
            <h2>Price: $475</h2>
            <button>Add To Cart</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <Book />
            <Book />
            <Book />
        </div>
    );
}

const parent = document.getElementById("root");

ReactDOM.createRoot(parent).render(<App />);
import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
  return <div className="one-book">
    <img className="book-img" src={props.image} alt="Book img" />
    <h2 className="main-heading">{props.title}</h2>
    <p className="published">{props.published}</p>
    <p className="description">{props.description}</p>
    <div className="btn-and-price">
      <OrderButton />
      <div className="price">{props.price} Kč</div>
    </div>
  </div>
}

export default Book

// komponenta je obyčejná js funkce
// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
// return dokáže vrátit jen jeden tag
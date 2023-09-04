import"./styles.css";
function Item({ data }) {
    return (
      <div className="product-container">
        <img src="./vite.svg" alt="" />
        <span>{data.name}</span>
      </div>
    );
  }
  
  export default Item;
  
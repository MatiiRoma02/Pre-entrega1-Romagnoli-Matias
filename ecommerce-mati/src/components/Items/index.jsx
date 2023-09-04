import Item from "../../components/Item";

function Items({ productos }) {
  return productos.map((data) => <Item data={data} />);
}

export default Items;

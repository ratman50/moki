import './css/ProductRow.css'
export default function ProductRow(props) {
    const prods=props.Products;
    const name=prods.stocked ? prods.name : <span style={{color:'red'}}>{prods.name}</span>;
    const price=prods.price;
  return (
    <tr>
        <td>{name}</td>
        <td>{price}</td>
    </tr>
  )
}

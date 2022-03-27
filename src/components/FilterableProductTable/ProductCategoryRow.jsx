
export default function ProductCategoryRow(props) {
    const category=props.Products.category;
  return (
    <tr >
        <td colSpan={2}>{category}</td>
    </tr>
  )
}

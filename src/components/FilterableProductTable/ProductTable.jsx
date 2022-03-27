import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import Products from "../../constants/data";
import './css/ProductTable.css';
export default function ProductTable(props) {
    const {val,searched,stock}=props.changes;
    let next=null;
    let results=Products;
    let rows=[];
    if(stock )
    {
        results=Products.filter(item=>item.stocked==true);
        // console.log(Products.find(item=>item.stocked==true))

    }
    if(val!=="" && searched)
    {
        results=results.filter(item=>item.name==val);
        
    }

    if(results.length>0)
        {

            results.forEach(item=>{
                if(item.category!==next)
                {
                    rows.push(<ProductCategoryRow key={ item.category} Products={item}/>);
                }
            
                rows.push(<ProductRow key={item.name+'-'+item.category} Products={item}/>);
                next=item.category;
           })
        }
    else
        rows=(
        <tr>
            <td colSpan={2}>
            <h1>NOT FOUND</h1>

            </td>
        </tr>
        );
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>

            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    )
}

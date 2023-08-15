import { Fragment, useContext } from "react"
import { ShopContext } from "../../context/shopContext"
import { PRODUCTS } from "../../data/product"
import { Product } from "../shop/product"

const Cart=()=>{
    const{cartItems}=useContext(ShopContext)
return(
    <Fragment>
        <h1>Your cart items</h1>
        <div className="row">
            {PRODUCTS.map((p)=>{
                if(cartItems.some((i)=>i.id===p.id && i.count>0))
                 return<Product data={p}></Product>
            })}
        </div>
    </Fragment>
)
}
export default Cart
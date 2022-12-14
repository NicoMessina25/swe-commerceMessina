import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.scss';
import '../../../scss/style.scss'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartCntx } from "../../Context/cartContext.jsx";

function ItemDetail(props){
    const {id, title, price, img, detail, stock} = props;

    const [itemCountState, setItemCountState] = useState(true);
    const {addItem, getItemInCart} = useContext(cartCntx); 

    const itemInCart = getItemInCart(id);
    
    function onAddToCart(count){
        setItemCountState(false);
        addItem({...props}, count);
    }

    return (
        <div className="itemDetail flexible--row">
            <div className="imgContainer flexible--row">
                <img src={img} alt="" />
            </div>
            <div className="info flexible--column">
                <h2 className="title">{title}</h2>
                <div className="detail">
                    <p>{detail}</p>
                </div>
                <div className="price">
                    <p>$ {price}</p>
                </div>
                {itemCountState? 
                    <ItemCount onAddToCart={onAddToCart} initial={1} added={itemInCart? itemInCart.count:1} stock={stock}/>
                    : <div className="linkContainer flexible--row">
                        <Link to='/' className="button2--blue">Volver a la Tienda</Link>
                        <Link to='/cart' className={"button2--green"}>Ver Carrito</Link>
                    </div>
                }
                
            </div>            
        </div>
    );
}

export default ItemDetail;
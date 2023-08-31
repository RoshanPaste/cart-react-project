import React from 'react';

class CartItem extends React.Component {

    render(){
        const {title, price, qty} = this.props.product;
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity} = this.props;
        return(
            <div className='cart-item' style={{ display: 'inline-flex'}}>
                <div className='left-block'>
                    <img style={styles.image} />                    
                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25, marginTop: 2.5} }>{title}</div>                   
                    <div style={ {color: "#777", marginTop: 5} }>Rs {price}</div>                   
                    <div style={ {color: "#777"} }>Qty: {qty}</div>                   
                    <div className='cart-action-icons'>
                        {/* Buttons */}
                        <img 
                            style={styles.icons} alt='increase' 
                            className='action-icons' 
                            src='https://img.icons8.com/?size=512&id=40097&format=png' 
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img 
                            style={styles.icons} alt='decrease' 
                            className='action-icons' 
                            src='https://img.icons8.com/?size=512&id=DigGIRktG1KK&format=png' 
                            onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                            style={styles.icons} alt='delete' 
                            className='action-icons' 
                            src='https://img.icons8.com/?size=512&id=83219&format=png' 
                            onClick={() => onDeleteQuantity(product.id)}
                        />
                    </div>                   
                </div>
            </div>
        )
    }
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderradius: 15,
        background: '#ccc',
        marginRight: 10
    },

    icons: {
        height: 25,
        width: 25,
        marginRight: 10,
        marginTop: 5
    }
}

export default CartItem;
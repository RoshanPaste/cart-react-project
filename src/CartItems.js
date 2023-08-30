import React from 'react';

class CartItem extends React.Component {
    constructor() {
        {
            super();
            this.state = {
                price: 999,
                title: 'phone',
                qty: 1,
                img: ''
            }
        }
    }
    
    increaseQty = () => {
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // statement form 2 - if prevState required use this
        this.setState((prev) => {
            return {
                qty: prev.qty + 1
            }
        });
    }

    decreaseQty = () => {
        const qty = this.state.qty;
        if(qty === 0){
            return;
        }
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // statement form 2 - if prevState required use this
        this.setState((prev) => {
            return {
                qty: prev.qty - 1
            }
        });
    }

    delete = () => {
        this.setState({
            qty: this.state.qty = 0
        });
    }

    render(){
        const {title, price, qty} = this.state;
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
                            onClick={this.increaseQty}
                        />
                        <img 
                            style={styles.icons} alt='decrease' 
                            className='action-icons' 
                            src='https://img.icons8.com/?size=512&id=DigGIRktG1KK&format=png' 
                            onClick={this.decreaseQty}
                        />
                        <img 
                            style={styles.icons} alt='delete' 
                            className='action-icons' 
                            src='https://img.icons8.com/?size=512&id=83219&format=png' 
                            onClick={this.delete}
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
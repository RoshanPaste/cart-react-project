import React from 'react';
import CartItem from './CartItems'


class Cart extends React.Component {

    constructor() {
        {
            super();
            this.state = {
                products: [
                    {
                        price: 999,
                        title: 'phone',
                        qty: 1,
                        img: '',
                        id: 1
                    },
                    {
                        price: 599,
                        title: 'Laptop',
                        qty: 145,
                        img: '',
                        id: 2
                    },
                    {
                        price: 119,
                        title: 'Shoes',
                        qty: 145,
                        img: '',
                        id: 3
                    },
                    {
                        price: 111,
                        title: 'Watch',
                        qty: 51,
                        img: '',
                        id: 4
                    },
                    {
                        price: 999,
                        title: 'phone',
                        qty: 156,
                        img: '',
                        id: 5
                    }

                ]
            }
        }
    }
    
    handleIncreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState ({
            products
        })
    }

    handleDecreaseQuantity = (product) => {
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){ return; }

        products[index].qty -= 1;

        this.setState ({
            products
        })
    }

    handleDeleteQuantity = (id) => {
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id);

        this.setState ({
            products: items
        })
    }

    render () {
        const { products } = this.state
        return (
            <div className='cart'>
                {products.map((product) => {
                    return (
                        <CartItem product = {product} 
                        key={product.id} 
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteQuantity = {this.handleDeleteQuantity}
                        />
                    )

                })}
            </div>
        );
    }
}

export default Cart;
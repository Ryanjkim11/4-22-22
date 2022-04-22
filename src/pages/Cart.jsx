import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div id="books__body">
            <div id="books__main">
                <div id="books__container">
                    <div className="row">
                        <div id="book__selected--top">
                            <h2 className='cart__title'>Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(book => {
                                        return (
                                                <div className="cart__item">
                                        <div className="cart__book">
                                            <img src={book.url}
                                            class="cart__book--img" 
                                            alt="" 
                                            />
                                            <div className="cart__book--info">
                                                <span className="cart__book--title">
                                                    {book.title}
                                                </span>
                                                <span className="cart__book--price">
                                                    {(book.salePrice || book.originalprice).toFixed(2)}
                                                </span>
                                                <button className="cart__book--remove">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart__quantity">
                                            <input type="number" 
                                            min={0} 
                                            max={99} 
                                            class="cart__input" 
                                            />
                                        </div>
                                        <div className="cart__total">
                                            $10.00
                                        </div>
                                    </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>$9.00</span>
                            </div> 
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>$1.00</span>
                            </div> 
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>$10.00</span>
                            </div>
                            <button className="btn btn__checkout no-cursor"
                            onClick={() => alert(`Havent got around to doing this :(`)}>
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

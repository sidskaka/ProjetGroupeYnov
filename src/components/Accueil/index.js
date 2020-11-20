import React from 'react'
import styled from 'styled-components'

const Accueil = () => {
    return (
        <div>
            <div className="product_grid">
                <Ul className="product_list list">
                    <Li className="product_item">
                        <div className="product_sale">
                            <p>On Sale</p>
                        </div>
                        <Div1 className="product_image">
                            <A1 href="#">
                                <Img src="https://bit.ly/1myplK1" alt="" />
                            </A1>
                            <Div11 className="product_buttons">
                                
                            </Div11>
                        </Div1>
                        <div className="product_values">
                            <div className="product_title">
                                <h5>White Fancy Dress</h5>
                            </div>
                            <div className="product_price">
                                <A href="#">
                                    <span className="price_old">$79.99</span>
                                    <span className="price_new">$69.99</span>
                                </A>
                                <span className="product_rating"></span>
                            </div>
                            <div className="product_desc">
                                <p className="truncate">Sed sodales odio non metus tincidunt consectetur. Integer non lobortis orci. In hac habitasse platea dictumst. Suspendisse sit amet condimentum arcu. Curabitur venenatis interdum lectus, vitae egestas sem facilisis sit amet. Praesent tortor purus, vulputate at ultricies quis, aliquet sed ante.</p>
                            </div>

                            <div className="product_buttons">
                                <button className="product_heart">
                                    <i className="fa fa-heart"></i>
                                </button>
                                <button className="product_compare">
                                    <i className="fa fa-random"></i>
                                </button>
                                <button className="add_to_cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </button>
                            </div>
                        </div>
                    </Li>    
                </Ul>
            </div>
        </div>
    )
}


/*
 <button className="product_heart">
                                    <i className="fa fa-heart"></i>
                                </button>
                                <button className="product_compare">
                                    <i className="fa fa-random"></i>
                                </button>
                                <button className="add_to_cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </button>
                                <div className="quick_view">
                                    <A href="#">
                                        <h6>Quick View</h6>
                                    </A>
                                </div>
 */

export default Accueil
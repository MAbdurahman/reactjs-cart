import React from 'react';
import CartItem from './CartItem';
import EmptyCart from './../img/empty-cart.png'
import { useGlobalContext } from './../utils/context';

export default function CartContainer() {
	const { cart, total, clearCart } = useGlobalContext();

	if (cart.length === 0) {
		return (
			<section className='cart'>
				{/* cart header */}
				<header>
					<h2>your cart</h2>
               <img src={EmptyCart} alt='empty cart' />
					<h3 className='empty-cart'>Is Empty!</h3>
				</header>
			</section>
		);
	}
	return (
		<section className='cart'>
			{/* cart header */}
			<header>
				<h2>your bag</h2>
			</header>
			{/* cart items */}
			<div>
				{cart.map(item => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			{/* cart footer */}
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>
						total <span>${total}</span>
					</h4>
				</div>
				<button className='btn clear-btn' onClick={clearCart}>
					clear cart
				</button>
			</footer>
		</section>
	);
}

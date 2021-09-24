import React from 'react';
import { SpinningCircles } from 'react-loading-icons';
import Navbar from './../components/Navbar';
import CartContainer from './../components/CartContainer';
import { useGlobalContext } from './../utils/context';

export default function App() {
	const { loading } = useGlobalContext();
  
	if (true) {
		return (
			<div className='loading'>
				<SpinningCircles
					height='8em'
					width='8em'
					fill='#003e6b'
					stroke='#003e6b'
					speed={1}
					fillOpacity={1}
					strokeWidth={2}
					strokeOpacity={0.725}
				/>
        <h4 className='loading-text'> L o a d i n g  .  .  .</h4>
			</div>
		);
	}
	return (
		<main>
			<Navbar />
			<CartContainer />
		</main>
	);
}

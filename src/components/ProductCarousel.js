import React, { useEffect } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

import { carousalProducts } from '../Products.js';

const ProductCarousel = () => {
	return (
		<div className='carousel-cont mt-3'>
			<Carousel pause='hover' className='bg-dark'>
				{carousalProducts.map((product, i) => (
					<Carousel.Item key={i}>
						<div
							className='carousel_child'
							style={{
								backgroundImage: `url(${product.image})`,
							}}
						></div>
						<div className=' slider-content'>
							<div>
								<h1>
									<span>Protect your Copyright</span>
								</h1>

								<p>Use our E-Z App(TM) Process</p>
								<p>All Categories - in About 7 minutes</p>
								<p>Your Application Reviewed by a Lawyer</p>
								<p>Sell Your Works to the Media</p>
								<p>Monetize Your Works</p>
								<h3>registration Fee $99 (most cases)</h3>
								<button style={{ backgroundColor: 'red', color: 'black' }}>Learn More</button>
							</div>
						</div>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default ProductCarousel;

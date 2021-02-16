import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
	return (
		<Card className='my-3 product'>
			<NavHashLink to={`/registration/${product.path}#${product.id}`}>
				<Card.Img src={product.image} variant='top' />
			</NavHashLink>

			<Card.Body className='px-0'>
				<NavHashLink to={`/registration/${product.path}#${product.id}`}>
					<Card.Title as='div'>
						<h1 style={{ fontSize: '20px' }} className='product_title'>
							{product.name}
						</h1>
					</Card.Title>
				</NavHashLink>

				<Card.Text as='div'>
					{product.title}
					<br />
					includes:
					<br />
					{product.li1}
					<br />
					{product.li2}
					<br />
					{product.li3}
					<br />
					{product.li4}
				</Card.Text>

				<Card.Text as='h3'>
					<NavHashLink to={`/registration/${product.path}#${product.id}`}>
						<button className='read_more'>
							More <i class='fas fa-arrow-right'></i>
						</button>
					</NavHashLink>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;

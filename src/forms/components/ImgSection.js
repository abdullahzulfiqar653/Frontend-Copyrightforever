import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ImgSection({ prop }) {
	return (
		<Row className='img_cont'>
			<Col className='p-0' sm={12} md={6} xl={4}>
				<img className='img-fluid' src={prop.img} alt='pic1' />
			</Col>
			<Col className='p-0' sm={12} md={6} xl={4}>
				<img className='img-fluid' src={prop.img2} alt='pic2' />
			</Col>
		</Row>
	);
}

export default ImgSection;

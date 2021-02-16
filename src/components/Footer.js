import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = (props) => {
	return (
		<>
			<footer className='bg-dark'>
				<Container>
					<Row className='d-flex justify-content-between mt-4 py-4'>
						<Col mx={12} md={8} xl={6} className='py-3 d-flex align-items-center'>
							<span className='icon'>
								<i class='fab fa-facebook-f'></i>
							</span>
							<span className='icon'>
								<i class='fab fa-twitter'></i>
							</span>
							<span className='icon'>
								<i class='fab fa-linkedin-in'></i>
							</span>
							<span className='icon'>
								<i class='fab fa-youtube'></i>
							</span>
						</Col>
						<Col mx={12} md={4} xl={6} className='text-right py-3  copy-right'>
							<div>
								<span>Privacy</span>
								<span>Terms of Use</span>
								<span>Contact Us</span>
							</div>
							<p>2014 copyrightforever. All rights reserved</p>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
};

export default Footer;

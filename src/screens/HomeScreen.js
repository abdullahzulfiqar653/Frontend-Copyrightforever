import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Container } from 'react-bootstrap';
import Product from '../components/Product';
import ProductCarousel from '../components/ProductCarousel';
import Products from '../Products.js';

const HomeScreen = ({ match }) => {
	return (
		<>
			<Container className='pb-4'>
				<ProductCarousel />
				<Row className='our_services' style={{ marginTop: '80px' }}>
					<Col className='m-0' sm={12} lg={4} xl={4}>
						<h1 className='m-0 pb-3 pt-0'>
							Our <span>Services</span>
						</h1>
						<h5 style={{ lineHeight: '1.49', letterSpacing: '3.395px' }}>
							<ul className='m-0 p-0'>
								<li>
									<HashLink to='/about-us#user_agreement_one'>
										USER’S AGE & RESPONSIBILITY.
									</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_two'>OWNERSHIP.</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_three'>
										USE OF THE COPYRIGHTFOREVER.COM SERVICE.
									</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_four'>
										SUBMITTED CONTENT; REVIEW OF TRANSMISSIONS.
									</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_five'>
										CLAIMS OF COPYRIGHT INFRINGEMENT.
									</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_six'>EXCLUSION OF WARRANTIES.</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_seven'>LIMITATION OF LIABILITY.</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_eight'>INDEMNIFICATION.</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_nine'>RESOLUTION OF DISPUTES.</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_ten'>
										WAIVER OF JURY AND CLASS ACTION.
									</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_eleven'>
										ONE YEAR TIME LIMITATIONS.
									</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_tweleve'>NOTICES.</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_thirteen'>ATTORNEY'S FEES.</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_fourteen'>INJUNCTIVE RELIEF.</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_fifteen'>PRIVACY.</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_sixteen'>
										TAXES, GOVERNMENTAL FEES, TAX RECOVERY CHARGES AND SERVICE FEES.
									</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_seventeen'>
										ADDITIONAL TERMS AND CONDITIONS.
									</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_eighteen'>
										LIMITED AGENCY RELATIONSHIP.
									</HashLink>
								</li>
								<li>
									<HashLink to='/about-us#user_agreement_nineteen'>MISCELLANEOUS.</HashLink>
								</li>
							</ul>
						</h5>
					</Col>
					<Col sm={12} lg={8} xl={8}>
						<Row>
							{Products.map((product) => (
								<Col sm={12} md={6} lg={6} xl={4}>
									<Product key={product._id} product={product} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
			<Row className='content-row p-0 m-0'>
				<Col xs={10} md={9} className='p-0 m-0'>
					<h1>
						Every Application Is Individual Field and <br />
						<span>Monitored under Lawyer Supervision.</span>
					</h1>
				</Col>
			</Row>
		</>
	);
};

export default HomeScreen;

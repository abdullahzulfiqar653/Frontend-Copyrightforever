import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import { checkAuthenticated } from '../actions/auth';
import { connect, useDispatch } from 'react-redux';

function NavBarLink() {
	const [dropDown, setDropDown] = useState(false);
	const [subDropDown, setSubDropDown] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(checkAuthenticated());
		const dropdownLink = document.getElementById('basic-nav-dropdown');
		dropdownLink.addEventListener('click', () => {
			history.push('/about-us');
		});
	}, [history]);

	return (
		<Navbar bg='light' expand='xl' className='p-0 mt-3 nav-link-navbar'>
			<div className='toggler'>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
			</div>
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<NavLink to='/'>HOME</NavLink>
					<NavLink to='/about-us'>
						<NavDropdown
							show={dropDown}
							onMouseEnter={() => setDropDown(true)}
							onMouseLeave={() => setDropDown(false)}
							title='ABOUT US'
							id='basic-nav-dropdown'
						>
							<NavLink to='/'>COPYRIGHT PROCESS</NavLink>
							<NavLink to='/'>OUR SERVICES</NavLink>
							<NavLink to='/copyrightcategories'>
								<NavDropdown
									key='right'
									id={`dropdown-button-drop-right`}
									drop='right'
									variant='secondary'
									className='sub-dropdown-menu'
									title='HOW TO REGISTER'
									show={subDropDown}
									onMouseEnter={() => setSubDropDown(true)}
									onMouseLeave={() => setSubDropDown(false)}
								>
									<NavHashLink to='/copyrightcategories#sound_recording' eventKey='1'>
										SOUND RECORDINGS
									</NavHashLink>
									<NavHashLink to='/copyrightcategories#virtual_art' eventKey='2'>
										VISUAL ARTS
									</NavHashLink>
									<NavHashLink to='/copyrightcategories#literary_work' eventKey='3'>
										LITERARY
									</NavHashLink>
									<NavHashLink to='/copyrightcategories#performing_art' eventKey='3'>
										PERFORMING ARTS
									</NavHashLink>
									<NavHashLink to='/copyrightcategories#single_serial' eventKey='3'>
										SINGLE SERIALS
									</NavHashLink>
								</NavDropdown>
							</NavLink>

							<NavLink to='/' href='#action/3.4'>
								GOVT FILING FEES
							</NavLink>
							<NavLink to='/' href='#action/3.4'>
								COPYRIGHT STATUTES & OTHERS LAWS
							</NavLink>
							<NavLink to='/' href='#action/3.4'>
								MANDATORY DEPOSIT
							</NavLink>
							<NavLink to='/' href='#action/3.4'>
								LICENSING YOUR RIGHTS
							</NavLink>
						</NavDropdown>
					</NavLink>
					<NavLink to='/copyrightcategories'>&copy;REGISTRATION CATEGORIES</NavLink>
					<NavLink to='/'>COPYRIGHT PROCESS</NavLink>
					<NavLink to='/'>LAWS & STATUTES</NavLink>
					<NavLink to='/'>NEWS & LINKS</NavLink>
					<NavLink to='/'>CONTACT US</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default connect(null, {checkAuthenticated})(NavBarLink);

// {
// 	/* <Container className='nav_link_cont'>
// 			<div>
// 				<NavLink exact activeClassName='active_link' to='/'>
// 					Home
// 				</NavLink>
// 				<NavLink activeClassName='active_link' className='dropdown_item' to='/about-us'>
// 					About Us
// 					<div className='dropdown_menu'>
// 						<NavLink to='/'>Copyright Basics</NavLink>
// 						<NavLink to='/'>Our Services</NavLink>
// 						<NavLink to='/' className='subdropdown_item'>
// 							How to Register
// 							<div className='navbar_submenu'>
// 								<NavLink to=''>Sound Recordings</NavLink>
// 								<NavLink to=''>Visual Arts</NavLink>
// 								<NavLink to=''>Literacy</NavLink>
// 								<NavLink to=''>Performing Arts</NavLink>
// 								<NavLink to=''>Single Serials</NavLink>
// 							</div>
// 						</NavLink>
// 						<NavLink to='/'>Govt Filling Fees</NavLink>
// 						<NavLink to='/'>Copyright Status & Other Laws</NavLink>
// 						<NavLink to='/'>Mandatory Deposit</NavLink>
// 						<NavLink to='/'>International Law</NavLink>
// 						<NavLink to='/'>Licensing Your Rights</NavLink>
// 					</div>
// 				</NavLink>

// 				<NavLink activeClassName='active_link' to='/copyrightcategories'>
// 					&copy; Registration Categories
// 				</NavLink>
// 				<NavLink activeClassName='active_link' to='/laws'>
// 					Laws & Status
// 				</NavLink>
// 				<NavLink activeClassName='active_link' to='/copyrightprocess'>
// 					Copyright Process
// 				</NavLink>
// 				<NavLink activeClassName='active_link' to='/contactus'>
// 					Contact Us
// 				</NavLink>
// 				<NavLink activeClassName='active_link' to='/link'>
// 					Links
// 				</NavLink>
// 			</div>
// 		</Container> */
// }

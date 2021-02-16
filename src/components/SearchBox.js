import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState('');
	return (
		<Form inline className='p-2'>
			<Form.Control
				type='text'
				name='q'
				placeholder='Enter Key Word...'
				className='mr-sm-2 ml-sm-5 px-4'
			></Form.Control>
			<Button style={{ backgroundColor: 'red', color: 'black' }} type='submit' className='p-2'>
				Search
			</Button>
		</Form>
	);
};

export default SearchBox;

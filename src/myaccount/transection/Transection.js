import React from 'react';
import {useSelector} from 'react-redux'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: 'red',
		color: 'white',
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export default function CustomizedTables() {
	const classes = useStyles();
	const user = useSelector(state => state.auth.user)
	// console.log(currentUser, "aaaaaaaa")

	return (
		<TableContainer component={Paper} style={{ boxShadow: 'none' }}>
			<h1 className='pt-3'>
				<span>Account Information</span>
			</h1>
			<Table className={classes.table} aria-label='customized table'>
				<TableHead>
					<TableRow>
						<StyledTableCell>Date</StyledTableCell>
						<StyledTableCell align='center'>Form Applied</StyledTableCell>
						<StyledTableCell align='center'>Gov. Fees</StyledTableCell>
						<StyledTableCell align='center'>Agent Fees</StyledTableCell>
						<StyledTableCell align='center'>Total CHG</StyledTableCell>
						<StyledTableCell align='center'>Status</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{user && user.userforms.map((row) => (
					<StyledTableRow>
						<StyledTableCell component='th' scope='row'>
							{row.submitted_at}
						</StyledTableCell>
						<StyledTableCell align='center'>{row.form_name}</StyledTableCell>
						<StyledTableCell align='center'>$34</StyledTableCell>
						<StyledTableCell align='center'>$99</StyledTableCell>
						<StyledTableCell align='center'>$133</StyledTableCell>
							<StyledTableCell align='center'>
								{row.paid ? (
									<Button className='paid' variant='contained' color='secondary'>
										Paid
									</Button>
								) : (
									<Button className='unPaid' variant='contained' color='secondary'>
										Unpaid
									</Button>
								)}
							
							
						</StyledTableCell>
					</StyledTableRow>
					 ))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
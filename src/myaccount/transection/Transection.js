import React from 'react';
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
					{/* {rows.map((row) => ( */}
					<StyledTableRow>
						<StyledTableCell component='th' scope='row'>
							29-10-2020
						</StyledTableCell>
						<StyledTableCell align='center'>Visual Art Work</StyledTableCell>
						<StyledTableCell align='center'>34</StyledTableCell>
						<StyledTableCell align='center'>29</StyledTableCell>
						<StyledTableCell align='center'>100</StyledTableCell>
						<StyledTableCell align='center'>
							<Button className='paid unPaid' variant='contained' color='secondary'>
								Unpaid
							</Button>
						</StyledTableCell>
					</StyledTableRow>
					{/* ))} */}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

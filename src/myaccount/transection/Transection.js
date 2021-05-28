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
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { savingId } from '../../actions/auth';
import moment from 'moment';

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
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const state = useSelector((state) => state);
  const user = state.auth.user;
  const id = state.auth.id;
  const formName = state.auth.formName;
  console.log(user, id, formName);

  const clickHandler = (formName, id, date) => {
    const show = true
    dispatch(savingId(show, id, formName, date));
  };

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
          {user &&
            user.userforms.map((row) => (
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  {moment(row.submitted_at).format('llll')}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {row.form_name}
                </StyledTableCell>
                <StyledTableCell align='center'>$34</StyledTableCell>
                <StyledTableCell align='center'>$99</StyledTableCell>
                <StyledTableCell align='center'>$133</StyledTableCell>
                <StyledTableCell align='center'>
                  {row.paid ? (
                    <Button
                      className='badge rounded-pill bg-success'
                      variant='contained'
                      color='secondary'>
                      Paid
                    </Button>
                  ) : (
                    <Button
                      className='badge rounded-pill bg-danger'
                      variant='contained'
                      color='secondary'
                        onClick={() => {
                        clickHandler(row.form_name, row.id, row.submitted_at);
                      }}>
                      Pay here
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

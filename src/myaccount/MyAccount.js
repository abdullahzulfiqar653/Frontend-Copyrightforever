import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import AccountDetail from './accountDetail/AccountDetail.js';
import Transection from './transection/Transection.js';
import { useSelector } from 'react-redux';
import PaymentScreen from '../business/Payments';

function MyAccount() {
  const [show, setShow] = React.useState(false);
  const state = useSelector((state) => state);
  const id = state.auth.id;
  const formName = state.auth.formName;
  return (
    <div className='container'>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col sm={12} md={3} className='border'>
            {show && <PaymentScreen />}
            <Nav variant='pills' className='flex-column mt-3 pb-5'>
              <Nav.Item className='my-2 mx-0'>
                <Nav.Link className='p-3' eventKey='first'>
                  {' '}
                  <i className='fas fa-user-circle'></i> Account Detail
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className='my-2 mx-0'>
                <Nav.Link className='p-3' eventKey='second'>
                  {' '}
                  <i class='fas fa-wallet'></i> My Transactions
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className='my-2 mx-0'>
                <Nav.Link className='p-3' eventKey='third'>
                  {' '}
                  <i className='fas fa-sign-out-alt'></i> Logout
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12} md={9} className='border'>
            <Tab.Content className='pb-5 '>
              <Tab.Pane eventKey='first'>
                <AccountDetail />
              </Tab.Pane>
              <Tab.Pane eventKey='second'>
                <Transection setShow={setShow} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default MyAccount;

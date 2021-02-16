import React from 'react'
import {Tab,Row,Col,Nav} from "react-bootstrap"
import AccountDetail from "./accountDetail/AccountDetail.js"
import Transection from "./transection/Transection.js"

function myaccount() {
    return (
        <div className="container">
       <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={12} md={4} className="border">
      <Nav variant="pills" className="flex-column mt-3 pb-5">
        <Nav.Item className="my-2">
          <Nav.Link className="p-3" eventKey="first"> <i className="fas fa-user-circle"></i> Account Detail</Nav.Link>
        </Nav.Item>
   
         <Nav.Item className="my-2">
          <Nav.Link className="p-3" eventKey="second"> <i class="fas fa-wallet"></i> My Transactions</Nav.Link>
        </Nav.Item>

          <Nav.Item className="my-2">
          <Nav.Link className="p-3" eventKey="third">  <i className="fas fa-sign-out-alt"></i> Logout</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={12} md={8} className="border">
      <Tab.Content className="pb-5">
        <Tab.Pane eventKey="first">
          <AccountDetail/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          <Transection/>
        </Tab.Pane>
   
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</div>
    )
}

export default myaccount

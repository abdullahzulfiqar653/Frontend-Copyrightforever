import { Divider } from "@material-ui/core";
import React from "react";
import "./payments.css";
import ReactDOM from "react-dom";
import axios from 'axios';
import {REQUEST_URL} from '../constant/Constant'
 
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Payments() {

    
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "11",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
      actions.order.capture().then(function (details) {
          console.log(details);
        console.log(details.status, "this is paying status");
      })
    return actions.order.capture();
  };

  return (
    <div className="app">
      <div className="wrapper">
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </div>
  );
}

export default Payments;

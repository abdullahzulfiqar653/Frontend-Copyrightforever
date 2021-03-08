import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
import { REQUEST_URL } from '../constant/Constant.js';
import { load_user } from '../actions/auth.js';
import { savingId } from '../actions/auth.js';
import Loader from "react-loader-spinner";
import LoadingOverlay from "react-loading-overlay";

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

function PaymentScreen() {
  const [loading, setLoading] = useState(false);
  const show = false
  const dispatch = useDispatch()
  const history = useHistory();
  const state = useSelector((state) => state);
  const id = state.auth.id;
  const formName = state.auth.formName;
  const date = state.auth.date;
  console.log(id, formName);
  // use this id where you want
  
  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    if (!id) {
      history.push('/myaccount');
    }
  }, [history, id]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '11',
          },
        },
      ],
    });
  };

  const paying = async (details) => {
        const exact_details = details.purchase_units[0].payments.captures[0]
    
        const form_id = id;
        const payment_order_id = details.id
        const amount_paid = exact_details.amount.value
        const date_time = exact_details.create_time
        const paid = exact_details.final_capture
        const transaction_id = exact_details.id
    const body = JSON.stringify({
            formName,
            form_id,
            amount_paid,
            date_time,
            paid,
            transaction_id,
            payment_order_id
        })
        const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `JWT ${localStorage.getItem('access')}`,
			Accept: 'application/json',
			},
        }
        try {
      		const res = await axios.post(
        	REQUEST_URL + `/api/add/payment`,
        	body,
        	config
          );
          if (res.data.success) {
            dispatch(load_user());
            dispatch(savingId(show))
            setLoading(false)
            setTimeout(function () {
              alert(
                "Dear " + details.payer.name.given_name + '\n' +
                "Payment done successfuly! Thank You. Our Agent will contact you soon.");
            }, 700);
          }
        } catch (error) {
          setLoading(false)
          dispatch(savingId(show))
          setTimeout(function () {
              alert(
                "Dear " + details.payer.name.given_name + '\n' +
                "There is something bad happend. Please Contact us using Our ContactUs Form.");
            }, 700);
    	}
    }

  const onApprove = (data, actions) => {
    actions.order.capture().then(function (details) {
      console.log(details);
      setLoading(true)
      if (details.status === 'COMPLETED') {
              paying(details);
          }
      console.log(details.status, 'this is paying status');
    });
    return actions.order.capture();
  };

  return (
    <>
      {loading && (
        <LoadingOverlay
          className="overlay"
          active={true}
          spinner={
            <Loader
              style={{ display: "inline-block" }}
              type="TailSpin"
              color="white"
              height={50}
              width={50}
            />
          }
        >
          {" "}
          Uploading
        </LoadingOverlay>
      )}
    <div style={{ marginTop: '50px' }}>
      <h1
        className='m-0 py-3 text-center'
        style={{
          backgroundColor: '#FF0000',
          color: 'white',
          fontSize: '20px',
        }}>
        {formName}
      </h1>
      <p className='m-0 py-1' style={{ fontSize: '20px' }}>
        submitOn:
      </p>
      <p className='p-0' style={{ color: '#ff0000', fontSize: '16px' }}>
        {moment(date).format('llll')}
      </p>

      <PayPalButton
        style={{
          size: 'responsive',
          color: 'blue',
          layout: 'vertical',
          shape: 'rect',
          label: 'paypal',
          fundingicons: true
        }}
        funding={{
          fundingicons: true,
          allowed: [ window.paypal.FUNDING.CARD ]
          }}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
      </div>
      </>
  );
}

export default PaymentScreen;
// &disable-funding=credit
// &enable-funding=bancontact,card
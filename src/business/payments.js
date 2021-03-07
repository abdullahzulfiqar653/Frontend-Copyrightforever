import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

function PaymentScreen() {
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

  const onApprove = (data, actions) => {
    actions.order.capture().then(function (details) {
      console.log(details);
      console.log(details.status, 'this is paying status');
    });
    return actions.order.capture();
  };

  return (
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
          layout: 'vertical',
          shape: 'rect',
          label: 'paypal',
          fundingicons: true,
        }}
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>
  );
}

export default PaymentScreen;

import React from 'react';
import Button from '../components/Button';

const CardKitchen = (props) => {
  return (
    // <div>
    <section>
      <p>Cliente : {props.customer}</p>
      Mesa: {props.table}
      <div>
        {props.clientOrder}
      </div>
      <p>Status: {props.status}</p>
      <p>{props.time}</p>
      <div>
        <Button title= "Pedido Pront"/>
      </div>
    </section>
      // </div>
  );
}

export default CardKitchen;
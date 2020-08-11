import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Nav from '../components/Navbar';
//import Card from '../components/Card';
import {StyleSheet,css} from 'aphrodite'
const Kitchen = () => {
  const [order, setOrder] = useState([]);
  //const orderKitchen =() =>{
  //  firebase
  //  .firestore()
  //  .collection('orders')
  //  .get()
  //  .then((snapshot) => {
  //    const name = snapshot.data().customer
  //    //const table = snapshot.data().table
  //    console.log(name)
  //  })
  //  console.log(orderKitchen)
  //}

  const orderKitchen = () => {
    firebase
    .firestore()
    .collection('orders')
    .orderBy('id')
    .onSnapshot((snap)=>{
      const name = snap.data().customer
      console.log(name)
    })
}
//console.log(orderKitchen)
  return (
    <main className={css(styles.main)}>
      <Nav/>
      <div className={css(styles.title)}>
      <p className={css(styles.p)}>Cozinha</p>
      </div>
      {/*<div>
        {orders.map((ord)=>{
          < Card key={ord.id}
          nameClient ={ord.customer}
          tableNumber ={ord.table}
          />
        })}
        
      </div>*/}
    </main>
  );  
}

const styles = StyleSheet.create({
  main: {
    background: '#0D0D0D',
    width:'100%',
    height: '100vh',
    fontSize:'18px'
  },
  
  title: {
    color: '#ccc',
    fontSize: '36px',
    fontFamily: 'Roboto'
  },
  p: {
  fontFamily: 'Spectral SC',
  fontWeight: 'normal',
  fontSize: '30px',
  color: '#F2F2F2',
  //"@media (min-width: 360px)": {
  //    fontSize: '24px
}
})
export default Kitchen;

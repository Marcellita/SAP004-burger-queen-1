import React, {useState } from 'react';
import Input from '../components/Input';
import Logo from '../images/new-logo-burger.png';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { StyleSheet, css } from 'aphrodite';
import firebase from '../firebase';
import { Link,useHistory } from 'react-router-dom';

//import { queries } from '@testing-library/react';
const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const login = () => {
        if (!email || !password){
            alert('Verifique se todos os campos estão preenchidos');
        } else{
            //firebase.auth()
            firebase
            .auth()
           .signInWithEmailAndPassword(email,password)
           .then((user_id)=>{
               firebase
               .firestore()
               .collection('users')
               .doc(user_id.user.uid)
               .get()
               .then((doc) =>{
                   if(doc.data().workplace === 'true'){
                       history.push('/kitchen');
                   }else {
                        history.push('/saloon');
                   }
                   })
                   .catch((error) => {
                    const err = error.code
                    if (err ==='auth/email-already-in-use') {
                      alert('conta já existe');
                    } else if (err === 'auth/invalid-email') {
                      alert('email invalido');
                    } else if (err === 'auth/weak-password') {
                      alert('senha fraca');
                    } else {
                      alert('putz');
                    }
                  });
               })
            }
        }
  return (
    <main className={css(styles.main)}>
      <form className={css(styles.form)}>
      <img className={css(styles.img)} src={Logo} alt='burger logo'/>
        <Input style={css(styles.input)} type='e-mail' title='E-mail' onChange={(e) => setEmail(e.target.value)} />
        <Input style={css(styles.input)} type='password' title='Senha'  onChange={(e) => setPassword(e.target.value)}/>
        <Button style={css(styles.button)} children='Login' onClick={(e) => {e.preventDefault(); login()}}/>
        <p className={css(styles.p)}> Não possui conta?
        <Link to='/register' className={css(styles.link)}> Registre-se</Link>
        </p>
        <Footer style={css(styles.footer)}/>
      </form>
    </main>
  );
  }
    

const styles = StyleSheet.create({
  main: {
    background: '#0D0D0D',
    width:'100%',
    height: '100vh'
  },

  img: {
    margin: '40px'
  },

  input: {
    borderRadius: '10px',
    width: '30%',
    padding: '15px',
    margin: '0% 3% 2%',
    fontSize: '14px',
    background: '#F2F2F2',
    borderStyle: 'none'
//    "@media (max-width: 360px)": {
//        width: "50vw",
//        height: "4vh",
//        fontSize: '34px',
//      }
  },
  button: {
    background: '#D97904',
    borderRadius: '10px',
    width: '15%',
    margin: '0% 3% 2%',
    padding:'10px',
    color: '#F2F2F2',
    fontSize: '14px',
    borderStyle: 'none',
    cursor: 'pointer'
    //"@media (max-width: 360px)": {
    //    width: "35vw",
    //    height: "5vh",
    //    fontSize: '40px',
    //  }
  },
  form: {
    fontSize: '18px',
    fontWeight: 'bold',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px'
  },
  p: {
    fontFamily: 'Spectral SC',
    fontWeight: 'normal',
    fontSize: '20px',
    color: '#F2F2F2',
     //  "@media (min-width: 360px)": {
    //    fontSize: '20%',
    //    color: '#F2F2F2',
    //transition: '0.2s linear',
    //  }
  },
    link: {
        fontFamily: 'Spectral SC',
        fontWeight: 'normal',
        fontSize: '20px',
        textDecoration: 'none',
        color: '#F2F2F2',
        transition: '0.5s linear',
        ':hover': {
          color: '#D97904',
          cursor: 'pointer'
        }
      },
    footer: {
        fontFamily: 'Spectral SC',
        fontWeight: 'normal',
        fontSize: '14px',
        textAlign: 'center',
        color: '#F2F2F2'
    }
});


export default Login;
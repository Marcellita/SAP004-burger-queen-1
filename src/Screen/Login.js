import React from 'react';
import Input from '../components/Input';
import logo from '../images/logo-burger-queen.png'
import Button from '../components/Button';
import Paragraph from '../components/Phrase';
import Footer from '../components/Footer';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <main className={css(styles.main)}>
      <form className={css(styles.form)}>
      <img className={css(styles.image)} src={logo}/>
        <Input style={css(styles.input)} title='E-mail'/>
        <Input style={css(styles.input)} title='Senha'/>
        <Button style={css(styles.button)} children='Login'/>
        <Paragraph style={css(styles.p)}children='Já possui uma conta? Faça o login'/>
        <div>
          <Footer style={css(styles.footer)}/>
        </div>
      </form>
    </main>
    
  );
}
/*const font = {
  fontFamily: 'Spectral SC',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontFamily: 'Arial'
}*/

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    color: '#37210D',
    fontFamily: 'Spectral SC',
    fontWeight: 'bold',
    fontSize: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  main: {
    background: 'E5E5E5',
    width:'100%',
    height: '100%'
  },
  image: {
        width: '80%',
        height: '50%',
  }, 
  input: {
        padding: "2%",
        margin: "0% 3% 2%",
        width: "60%",
        background: 'rgba(154, 93, 38, 0.70)',
        borderRadius: '15px',
        fontSize: '36px',
  },
  button: {
            background: 'rgba(217, 105, 7, 0.80)',
            color:'rgba(242, 242, 242, 0.8)',
            borderRadius: '40px',
            padding: "2%",
            margin: "0% 3% 2%",
            width: "50%",
            fontFamily: 'Spectral SC',
            fontSize: '36px',
            borderStyle: 'none'
  },

  form: {
    fontSize: '18px',
    fontWeight: 'bold',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    padding: '5px',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    padding: '5px',
  },

  p: {
    fontFamily: 'Alegreya Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '25px',
    color: '#37210D'
  },

  footer: {
    width: '100%',
    backgroundColor: 'red',
    fontSize: '12px',
    textAlign: 'center'
  }
});


export default Login;
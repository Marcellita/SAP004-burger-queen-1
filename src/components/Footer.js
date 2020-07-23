import React from 'react';
import Paragraph from '../components/Phrase'

export const Footer = (props) => {
  return (
    <Paragraph  className={props.style} children='Desenvolvido por Aline e Marcella'/>
  );
}

export default Footer;






//import React from 'react';
////import Paragraph from '../components/Phrase'
//import { css } from 'aphrodite'
//export const Footer = (props) => {
//  return (
//    <div class={css(props.style)} >
//        <p> Desenvolvido por Aline e Marcella </p>
//        {/*<Paragraph class={css(props.style)} children='Desenvolvido por Aline e Marcella'/>*/}
//    </div>
//  );
//}

//export default Footer;
import React from 'react';
import './style.css';
import './responsive.css'

export default function Rodape() {
    return (
        <footer>
          <div className='limitar-secao container-rodape'>
            <img src='imagens/logo.png' alt='Logo Rodapé'/>

            <div className='secao-endereco'>
              <h3>ENDEREÇO</h3>   
              <p className='paragrafo-endereco'>Av. Bernardino de Campos, 98</p>
              <p>São Paulo, SP 12345-678</p>
            </div>
            <div>
              <h3>CONTATO</h3>   
              <p>info@meusite.com</p>
              <p>Tel: (11) 3456-7890</p>
            </div>
            <div>
              <h3>HORÁRIOS</h3>   
              <p>ABERTO TODOS OS DIAS</p>
              <p>10:00 - 22:00</p>
            </div>
          </div>
          <div className='copy'>
            <p>Gelateria. Orgulhosamente desenvolvido por "SilvioJR DeV"</p>
          </div>
        </footer>
    );
}
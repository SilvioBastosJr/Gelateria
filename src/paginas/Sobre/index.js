import React from 'react';
import './style.css';
import './responsive.css';
import './estiloSobre.css';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

export default function Sobre() {
  return (
    <div>
      <Topo />

      <section className='secao-gelateria'>
        <h1>A GELATERIA</h1>
      </section>
      <section className='secao-texto'>
        <h2>Sobre Nós</h2>
        <spam>Nós simplismente amamos sorvete!</spam>
        <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
           sorvete produzido. Fazemos o melhor sorvete para os nossos
           clientes e gostamos de receber elogios. Estamos operando desde
           2009 com as melhores matérias-primas para a produção final do
           sorvete. Vendemos tanto para varejo como para atacado.</p>
        
        <p>Nossos clientes podem comprar os nossos sorvetes e degustar na
           nossa loja ou levar para sua residência e aproveitar junto com a
           família. Também vendemos para estabelecimentos e criamos eventos
           como festa de aniversário, formaturas e eventos empresariais. Para
           contratar os nossos serviços, basta entrar em contato conosco.
           Iremos proporcionar o melhor atendimento e os melhores produtos
           para você fazer a sua festa mais saborosa, com o melhor sorvete da
           cidade.</p>
      </section>
      <section className='secaoImagens'>
        <img className='img-amigos' src='imagens/sobre-image.jpg' alt='Amigos tomando sorvete'/>
        <img src='imagens/sorveteria.jpg' alt='Nosso Espaço'/>
      </section>
      
      <Rodape />
    </div>  
  );
}
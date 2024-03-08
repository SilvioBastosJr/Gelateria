import React from 'react';
import './style.css';
import './responsive.css'
import './estiloSabores.css';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

export default function Sabores() {
  return (
    <div>
      <Topo />
      <section className='secao-capa'>
        <h1>NOSSOS SABORES</h1>
      </section>
      <section>
        <h2>SABORES DE SORVETE</h2>
       <div className='secaoSabores'>
        <figure>
          <img src='imagens/sabor-oreo.png' alt='Sorvete de Oreo'></img>
          <h3>Sorvete de Oreo</h3>
          <figcaption>Delicioso sorvete sabor Oreo. Uma explosão de sabor. </figcaption>
        </figure>
        <figure>
        <img src='imagens/sabor-pistache.png' alt='Sorvete de Pistache'></img>
        <h3>Sorvete de Pistache </h3>
        <figcaption>Cremoso sorvete sabor pistache com pedacinhos de semente.</figcaption>
        </figure>
        <figure>
        <img src='imagens/sabor-cookies-avela.png' alt='Sorvete de Cookies e Avelã'></img>
        <h3>Sorvete de Cookies e Avelã</h3>
        <figcaption>O nosso melhor sorvete. Você vai adorar o sabor.</figcaption>
        </figure>
        <figure>
        <img src='imagens/sorbet-kiwi.png' alt='Sorvete de Kiwi'></img>
        <h3>Sorvete de Kiwi</h3>
        <figcaption>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</figcaption>
        </figure>
        <figure>
        <img src='imagens/sorbet-morango.png' alt='Sorvete de Morango'></img>
        <h3>Sorvete de Morango</h3>
        <figcaption>Sorvete de morango gourmet. Tradicional e saboroso.</figcaption>
        </figure>
        <figure>
        <img src='imagens/sorbet-limao.png' alt='Sorvete de Limão Siciliano'></img>
        <h3>Sorvete de Limão Siciliano</h3>
        <figcaption>O incrível sorvete gourmet de limão siciliano vai te encantar.</figcaption>
        </figure>
       </div> 
      </section>
      <Rodape />
    </div>
  );
}
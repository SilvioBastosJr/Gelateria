import React from 'react';
import './style.css';
import './responsive.css'

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

export default function Home() {
  return(
    <div>
      <Topo />
      <main>
        <section className='secao-banner'>
          <div className='container-banner'>
            <h1>SORVETE ARTESANAL</h1>
          </div>
        </section>
        <section className='secao-sabores'>
          <img className='img-sabores' src='imagens/banner-sabores.jpg' alt='Banner Sabores'/>
          <div className='container-sabores'>
            <h2>NOSSOS SABORES</h2>
            <spam> Novos e deliciosos!</spam>
            <p>Sorvete bom é aquele feito com os melhores ingredientes. Aqui na geleateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante. Também temos opções sem lactose e sem açucar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo.</p>
          </div>
        </section>
        <section className='secao-eventos'>
          <div className='container-eventos'>
            <h2>NOSSOS EVENTOS</h2>
            <spam>Delicias com sorvete!</spam>
            <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
          </div>
          <img src='imagens/eventos-image.jpg' alt='Imagem eventos'/>
        </section>
        <section className='secao-sobre'>
          <img src='imagens/sobre-image.jpg' alt='Banner sobre'/>
          <div className='container-sobre'>
            <h2>SOBRE NÓS</h2>
            <spam>Alegria em cada casquinha!</spam>
            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  ); 
}
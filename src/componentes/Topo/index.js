import React from 'react';
import './style.css';
import './responsive.css';
import { Link } from 'react-router-dom';

export default function Topo() {
    return(
        
          <header>  
            <div className='limitar-secao secao-topo'>
              <img src='imagens/logo.png' alt='logomarca'/>
              
              <nav>
                <Link className='link-topo' to='/'>Home</Link>
                <Link className='link-topo' to='/sabores'>Sabores</Link>
                <Link className='link-sobre' to='/sobre'>Sobre</Link>
              </nav>
            </div>  
          </header>          
    );
}
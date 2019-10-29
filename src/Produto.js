import React, { Component } from 'react'
import DetalheEntrega from './DetalheEntrega';

class Produto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Jogo',
            quantidade: 1
        }

        this.adicionarProduto = this.adicionarProduto.bind(this);
    }

    adicionarProduto() {
        this.setState((state) => ({
            quantidade: state.quantidade + 1
        }));
    }

    render() {
      return (
            <div>
                <p>Cliente {this.state.nome}</p>
                Quantidade: {this.state.quantidade} <button onClick={this.adicionarProduto}>Mais um</button>
                <DetalheEntrega produto={this.state.nome}></DetalheEntrega>
            </div>
        );
    }
  }

export default Produto
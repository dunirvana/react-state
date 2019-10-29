import React, { Component } from 'react'

class DetalheEntrega extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produto: props.produto,
            detalhes: 'Será entregue na rua das flores'
        }
    }

    render() {
      return (
            <div>
                <p>Entrega de {this.state.produto}</p>
                Detalhes: {this.state.detalhes}
            </div>
        );
    }
  }

export default DetalheEntrega
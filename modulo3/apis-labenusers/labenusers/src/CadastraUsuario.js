import React from 'react'
import axios from 'axios'
import ListaUsuarios from './ListaUsuarios'
import './App.css'

class CadastraUsuario extends React.Component {
  state = {
    inputNome: '',
    inputEmail: ''
  }

  onChangeNome = event => {
    this.setState({ inputNome: event.target.value })
  }

  onChangeEmail = event => {
    this.setState({ inputEmail: event.target.value })
  }

  criarCadastroDoUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        {
          headers: {
            Authorization: 'rafael-beserra-hopper'
          }
        }
      )
      .then(() => {
        alert(`Usuário ${this.state.inputNome} criado com sucesso!`)
        this.setState({ inputNome: '', inputEmail: '' })
      })
      .catch(error => {
        alert('Erro ao criar o usuário')
        console.log(error.response.data)
      })
  }

  renderizaPagina = () => {
    return <ListaUsuarios />
  }

  render() {
    return (
      <div>
        <input
          placeholder="Nome"
          type="text"
          value={this.state.inputNome}
          onChange={this.onChangeNome}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.criarCadastroDoUsuario}>Criar Usuário</button>
      </div>
    )
  }
}

export default CadastraUsuario
import React from 'react'
import axios from 'axios'
import './App.css'

class ListaUsuarios extends React.Component {
  state = {
    cadastros: [],
    id: '',
    name: ''
  }

  componentDidMount() {
    this.exibirCadastro()
  }

  exibirCadastro = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
          headers: {
            Authorization: 'rafael-beserra-hopper'
          }
        }
      )
      .then(response => {
        this.setState({ cadastros: response.data })
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  deletaUsuario = id => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: 'rafael-beserra-hopper'
          }
        }
      )
      .then(() => {
        alert('Usuário apagado com sucesso!')
      })
      .catch(error => {
        alert('ERRO AO APAGAR USUARIO')
      })
  }


  render() {
    return (
      <div>
        <div>
          <ul>
            {this.state.cadastros.map((nomes, index) => {
              return (
                <li key={index}>
                  {nomes.name} {nomes.email}
                  <button onClick={() => this.deletaUsuario(nomes.id)}>
                    X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default ListaUsuarios
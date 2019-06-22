import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [
        {
          nombre: 'jose',
          correo: 'josepadron.go@gmail.com',
          enlace: 'padronjose.com'
        },
        {
          nombre: 'eric',
          correo: 'ericrodrguez.go@gmail.com',
          enlace: 'ericrodrguez.com'
        }
      ]
    }
  }

  ponerFilas = () => (
    this.state.usuarios.map((usuario) => (
      <tr>
        <td> {usuario.nombre} </td>
        <td> {usuario.correo} </td>
        <td> {usuario.enlace} </td>
      </tr>
    ))
  );

  render() {
    return (
      <div className="margen">
        <table className="tabla">
          <thead>
            <tr>
              <th> Nombre </th>
              <th> Correo </th>
              <th> Enlace </th>
            </tr>
          </thead>

          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
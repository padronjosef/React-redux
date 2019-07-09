import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Spinner from '../General/Spinner'
import Fatal from '../General/Fatal'
import Editar from '../../assets/edit.svg'
import Eliminar from '../../assets/delete.svg'
import Agregar from '../../assets/add.svg'

import * as tareasActions from '../../actions/tareasActions'

class Tareas extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.tareas).length) {
      this.props.traerTodas()
    }
  }

  componentDidUpdate() {
    const { tareas, cargando, traerTodas } = this.props


    if (!Object.keys(tareas).length && !cargando) {
      traerTodas()
    }
  }

  mostrarContenido = () => {
    const { tareas, cargando, error } = this.props

    if (cargando) {
      return < Spinner />
    }

    if (error) {
      return < Fatal mensaje = {error} />
    }

    return Object.keys(tareas).map((usu_id) => (
      <div key={usu_id}>
        <h2> Usuario {usu_id} </h2>
        <div className="contenedor_tareas">
          {this.ponerTareas(usu_id)}
        </div>
      </div>
    ))
  }

  ponerTareas = (usu_id) => {
    const { tareas, cambioCheck, eliminar } = this.props
    const por_usuario = {
      ...tareas[usu_id]
    }

    return Object.keys(por_usuario).map((tar_id) => (
      <div key={tar_id}>
        <input
          type="checkbox"
          defaultChecked= {por_usuario[tar_id].completed}
          onChange={ () => cambioCheck(usu_id, tar_id)}
        />

        <Link to={`/tareas/guardar/${usu_id}/${tar_id}`}>
          <img className='usuario_btn m_left' src={ Editar } alt='editar' />  
        </Link>

        <img  className='m_left m_right usuario_btn' onClick={ () => eliminar(tar_id) } src={ Eliminar } alt='eliminar' />
        { por_usuario[tar_id].title }
      </div>
    ))
  }

  render() {
    return (
      <div>
        <button> <Link className="nueva_tarea_btn" to="/tareas/Guardar"> Agregar Nueva Tarea <img className='usuario_btn' src={ Agregar } alt='agregarIcon' /> </Link> </button>
        { this.mostrarContenido() }
      </div>
    )
  }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer

export default connect(mapStateToProps, tareasActions)(Tareas)

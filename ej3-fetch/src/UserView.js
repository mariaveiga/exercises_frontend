import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListaUsuarios from './ListaUsuarios'
import FichaUsuario from './FichaUsuario'

const UserView = () => {
  return (
    <>
        <ListaUsuarios />
        <div className="ficha-y-boton">
            <Switch>
                <Route path="/users" exact>
                    Pick any user on the left menu
                </Route>
                <Route path="/users/:id" exact>
                    <FichaUsuario />
                </Route>
            </Switch>
        </div>      
    </>
  )
}

export default UserView

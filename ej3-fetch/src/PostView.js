import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListaPosts from './ListaPosts'
import FichaPost from './FichaPost'

const PostView = () => {
  return (
    <>
        <ListaPosts />
        <div className="ficha-y-boton">
            <Switch>
                <Route path="/posts" exact>
                    Pick any user on the left menu
                </Route>
                <Route path="/posts/:id" exact>
                    <FichaPost />
                </Route>
            </Switch>
        </div>      
    </>
  )
}

export default PostView

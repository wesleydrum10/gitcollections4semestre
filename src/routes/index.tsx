import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard } from '../pages/DashBoard'
import { Repository } from '../pages/Repository'
// importa as classes do react-router-dom


export const Routes: React.FC = () => {

    return (
        // vai trocar entre as páginas
        <Switch>
            <Route component={Dashboard} path="/" exact/> 
            <Route component={Repository} path="/repositories"/>
        </Switch>
    )
}
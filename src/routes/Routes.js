import React from 'react';
import { Route, Switch } from 'react-router-dom' // Redirect
import PageNotFound from '../shared/components/page-not-found/PageNotFound'
import Home from '../app/components/home/Home'
import PropertyDetails from '../app/components/property-details/PropertyDetails'
import News from '../app/components/news/News'
import Agents from '../app/components/agents/Agents'

const Routes = () => (
    <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/details/:id' component={PropertyDetails} />
         <Route exact path='/news' component={News} />
         <Route exact path='/agents' component={Agents} />
        <Route component={PageNotFound} />
    </Switch>
)

export default Routes
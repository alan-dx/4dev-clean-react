import { SurveyList } from '@/presentation/pages'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

type Factory = {
  makeLogin: React.FC
  makeSignUp: React.FC
}

const Router: React.FC<Factory> = (factory) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={factory.makeLogin} />
        <Route path="/signup" exact component={factory.makeSignUp} />
        <Route path="/" exact component={SurveyList} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router

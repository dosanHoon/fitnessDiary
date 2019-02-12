import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { InputDiary, Main } from "./pages"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Main} />
          <Route path={"/inputdiary"} component={InputDiary} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

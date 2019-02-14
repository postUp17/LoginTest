import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css';
import Layout from './hoc/Layout/Layout'
import Auth from './containers/Auth/Auth'
import MainPage from './containers/MainPage/MainPage'
import ToDoList from './containers/ToDoList/ToDoList'
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index'
class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup()
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/mainpage" component={MainPage} />
        <Route path="/auth" component={Auth} />
        <Redirect to='/mainpage' />
      </Switch>
    )
    if(this.props.isAuthenticated){
      routes=(
        <Switch>
          <Route path="/mainpage" component={MainPage} />
          <Route path="/logout" component={Logout} />
          <Route path="/todolist" component={ToDoList} />
          <Redirect to='/mainpage' />

        </Switch>

      )
    }
    return (
      <div >
        <Layout>
        {routes}
        </Layout>
       
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

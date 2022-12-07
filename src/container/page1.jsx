import React, { Component } from 'react'
import Admin from '../components/admin'
import Main from '../components/main'
import Nav from '../components/nav'

export default class page1 extends Component {
  render() {
    return (
      <div>
        <Admin/>
        <Nav/>
      </div>
    )
  }
}

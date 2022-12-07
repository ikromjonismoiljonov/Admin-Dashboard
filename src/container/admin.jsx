import React, { Component } from 'react'
import Admin from '../components/admin'
import Nav from '../components/nav'
import Main from '../components/main'

export default class admin extends Component {
  render() {
    return (
      <div>
        <div>
            <Nav/>
            <Admin/>
            <Main/> 
        </div>
      </div>
    )
  }
}

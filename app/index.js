import React from 'react';
import { BottomTab } from './config/navigation';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <BottomTab />
    )
  }
}

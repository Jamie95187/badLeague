import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/AuxComp';

class Layout extends Component {
  render() {
    return(
      <Aux>
        <Toolbar/>
          <main>
            {this.props.children}
          </main>
      </Aux>
    )
  }
}

export default Layout;

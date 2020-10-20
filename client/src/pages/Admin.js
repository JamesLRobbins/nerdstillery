import React, { Component } from 'react';
import News from '../components/Admin/News/News';
import Shane from '../components/Admin/Shane/Shane';

class Admin extends Component {

    render() {
        return(
            <div>
            <News />
            <Shane />
           </div>
        )
    }
}

export default Admin;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataList from './DataList';
import { Actions } from 'react-native-router-flux';


class DaysList extends Component {
    static onEnter = () => {
        Actions.refresh({
            title: this.props.title
        })
    }

    render() {
        console.log(this.props);
        return (
           <DataList {...this.props} pressItem={(id, name) => Actions.exercises({title: name})}/>
        )    
    }
}

export default connect()(DaysList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableWithoutFeedback } from 'react-native';
import DataList from './DataList';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

class Exercises extends Component {
    static onEnter = () => {
        Actions.refresh({
            title: this.props.title
        })
    }
    static renderRightButton = (props) => {
          return (
              <TouchableWithoutFeedback onPress={() => Actions.exercisesList()}>
                  <Icon name='ios-add' size={30} style={{color: '#E9F1DF', marginRight: 18}} />
              </TouchableWithoutFeedback>
          );
    }

    render() {
        console.log(this.props);
        return (
           <DataList {...this.props} />
        )    
    }
}

const mapStateToProps = state => {
    const { exercises } = state.training;
    return {
        exercises
    }
}

export default connect(mapStateToProps, {})(Exercises);
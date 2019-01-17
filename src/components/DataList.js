import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItems from './ListItems';
import { Actions } from 'react-native-router-flux';

class DataList extends Component {
    
    _renderDays = ({ item }) => {
        return (
            <ListItems days={item} name={item.name} onPressItem={this.props.pressItem} />
        )
    }
    
    render() {
        return (
            <View>
                <FlatList 
                    data={this.props.days}
                    renderItem={this._renderDays}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </View>
        )    
    }
}

export default connect()(DataList);

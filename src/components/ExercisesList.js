import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, TouchableWithoutFeedback, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import ListItems from './ListItems';
import { selectExercise } from '../actions/TrainingActions';
import Icon from 'react-native-vector-icons/Ionicons';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);


class ExercisesList extends Component {

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    state = {
        expanded: false
    }

    _sectionHeader = ({ section }) => {
        const { sectionHeader } = styles;
        return (
            <TouchableWithoutFeedback onPress={() => this.setState((prevState) => ({
                expanded: {[section.id]: !prevState.expanded[section.id]}
            }))}
            >
                <Text style={sectionHeader}>{ section.title }</Text>
            </TouchableWithoutFeedback>
        );
    }

    _onPressItem = (id, name) => {
        return this.props.selectExercise({id, name});
    }

    _renderItem = ({item, index, section}) => {
        if(this.state.expanded[section.id]) {
            return <ListItems days={item} id={item.id} name={item.name} onPressItem={this._onPressItem}/>
        } else {
            return null
        }
    }

    render() {
        console.log(this.props);
        return (
            <SectionList 
                sections={this.props.exercises}
                renderSectionHeader={ this._sectionHeader }
                renderItem={this._renderItem}
                keyExtractor={(item, index) => item.name}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        exercises: state.exercises.muscles
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        padding: 10,
        borderBottomWidth: .4,
        fontSize: 16,
        backgroundColor: '#F0EDE5',
        color: "#000"
    }
});

export default connect(mapStateToProps, { selectExercise })(ExercisesList);
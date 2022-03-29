import React, {Component} from 'react';
import {FlatList} from 'react-native';
import EventCard from './EventCard'
import {Text,View} from 'react-native';


class EventList extends Component{
    state = {
        Day: []
    }

    componentDidMount() {
        const Day = require('./data.json').Day;
        this.setState( {Day} );
    }
    render() {
        return(
            <FlatList
                data = {this.state.Day }
                renderItem = { ({item}) => <EventCard eventItem = {item} />}
            ></FlatList>
        );
    };
};

export default EventList;
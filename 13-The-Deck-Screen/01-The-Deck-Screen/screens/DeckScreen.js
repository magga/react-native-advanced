import React, { Component } from 'react';
import { View } from 'react-native';
// 13-01
// We want to display the list of job that's saved in the state
// To do that, as usual, use the connect method
import { connect } from 'react-redux';

class DeckScreen extends Component {
    render() {
        return (
            <View>
                {/* 13-01 */}
                {/* For now we can console log the array of jobs that we get */}
                {/*   from the state */}
                {console.log(this.props.jobs)}
            </View>
        );
    }
}

// 13-01
// Use mapStateToProps to get the jobs object from the state
// As the jobs data that we've got from the Indeed Jobs API is located
//   in the "results" property, we can pull out that property and pass it 
//   to the component
// The name "jobs" here is rather confusing as now it's type is an array, not object
const mapStateToProps = ({ jobs }) => {
    return { jobs: jobs.results };
};

// 13-01
// Lastly, connect the mapStateToProps to the component using connect function
export default connect(mapStateToProps)(DeckScreen);

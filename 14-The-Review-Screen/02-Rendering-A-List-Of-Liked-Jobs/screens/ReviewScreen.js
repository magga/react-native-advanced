import React, { Component } from 'react';
// 14-02
// Import the ScrollView from react-native module
import { View, Text, ScrollView } from 'react-native';
// 14-02
// Import the Card from react-native-element module
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Review Jobs',
            headerTitleStyle: {
                alignSelf: 'center'
            },
            headerRight: (
                <Button 
                    title='Setting' 
                    onPress={() => navigation.navigate('setting')} 
                    backgroundColor='rgba(0,0,0,0)'
                    color='rgba(0, 122, 255, 1)'
                />
            )
        };
    }

    componentWillMount() {
        this.navigate = this.props.navigation.navigate();
    }

    // 14-02
    // Map all the jobs that the user liked and style it inside this helper method
    // We can make another component to do that and use the "ListView" component
    // But for this case, we can safely use this helper method
    renderLikedJobs() {
        return this.props.likedJobs.map((job) => {
            return (
                <Card key={job.jobkey}>
                    <View style={{ height: 200 }}>
                        <View style={styles.detailContainer}>
                            <Text style={styles.italic}>{job.company}</Text>
                            <Text style={styles.italic}>{job.formattedRelativeTime}</Text>
                        </View>
                    </View>
                </Card>
            );
        });
    }

    render() {
        console.log(this.props.likedJobs.length);
        return (
            // 14-02
            // Use the ScrollView so the Card can be scrolled
            <ScrollView>
                {/* 14-02 */}
                {/* Call the helper method to help us render the liked jobs array */}
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}

// 14-02
// Add some styling
const styles = {
    detailContainer: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italic: {
        fontStyle: 'italic'
    }
};

const mapStateToProps = (state) => {
    return { likedJobs: state.likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);

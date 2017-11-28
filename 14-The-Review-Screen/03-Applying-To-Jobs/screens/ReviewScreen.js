import React, { Component } from 'react';
// 14-03
// Import Linking object from react-native to help us open a url in the device's browser
import { View, Text, ScrollView, Linking } from 'react-native';
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

    renderLikedJobs() {
        return this.props.likedJobs.map((job) => {
            // 14-03
            // Destructure the job object so we don't have to refer to the job object repeatedly
            const { company, formattedRelativeTime, url } = job;

            return (
                <Card key={job.jobkey}>
                    <View style={{ height: 200 }}>
                        <View style={styles.detailContainer}>
                            <Text style={styles.italic}>{company}</Text>
                            <Text style={styles.italic}>{formattedRelativeTime}</Text>
                        </View>

                        {/* 14-03 */}
                        {/* Create a button in every job's card that when pressed, it'll open */}
                        {/*   a browser where the user can apply for that particular job */}
                        <Button
                            title='Apply Now'
                            backgroundColor='#03A9F4'
                            onPress={() => Linking.openURL(url)}
                        />
                    </View>
                </Card>
            );
        });
    }

    render() {
        return (
            <ScrollView>
                {this.renderLikedJobs()}
            </ScrollView>
        );
    }
}

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

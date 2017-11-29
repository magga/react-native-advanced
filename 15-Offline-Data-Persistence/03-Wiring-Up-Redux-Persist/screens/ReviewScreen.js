import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

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
            const { 
                company, 
                formattedRelativeTime, 
                url,
                longitude,
                latitude,
                // 14-05
                // Add jobtitle as the title for the card
                jobtitle,
                jobkey
            } = job;

            const initialRegion = {
                longitude,
                latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };

            return (
                // 14-05
                // Set jobtitle as the title for the card
                <Card key={jobkey} title={jobtitle}>
                    <View style={{ height: 200 }}>
                        <MapView
                            scrollEnabled={false}
                            style={{ flex: 1 }}
                            cacheEnabled
                            initialRegion={initialRegion}
                        />

                        <View style={styles.detailContainer}>
                            <Text style={styles.italic}>{company}</Text>
                            <Text style={styles.italic}>{formattedRelativeTime}</Text>
                        </View>

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
        // 14-05
        // Add some margin above the job's company
        marginTop: 10,
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

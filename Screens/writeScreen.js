import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'

export default class WriteScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            storyText: ''
        }
    }
    submitStory = async() => {
        db.collection("Story").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
        ToastAndroid.show("Story Submitted", ToastAndroid.SHORT);
    }
    render(){
        return(
            <KeyboardAvoidingView>
                <View>
                    <Header
                        backgroundColor={'#00688B'}
                        centerComponent={{
                            text: 'Story Hub',
                            style: { color: '#00B2EE', fontSize: 20 },
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        secureTextEntry = {true}
                        placeholder="Title"
                        onChangeText={(text)=>{
                            this.setState({
                                title: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        secureTextEntry = {true}
                        placeholder="Author"
                        onChangeText={(text)=>{
                            this.setState({
                                author: text
                            })
                        }}
                    />
                    <TextInput
                        style={styles.inputBox}
                        secureTextEntry = {true}
                        placeholder="Story"
                        onChangeText={(text)=>{
                            this.setState({
                                storyText: text
                            })
                        }}
                    />
                    <TouchableOpacity style={styles.submitButton} onPress = {this.submitStory}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
  }

  const styles = StyleSheet.create({
    inputBox:{
        width: 250,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20
    },
    submitButton:{
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        marginTop: 30,
        width: 330,
        height: 50,
        backgroundColor: '#00688B',
    },
    buttonText:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 18,    
        marginTop: 5,
        marginBottom: 5,
        color: "#00B2EE"
    }
  })
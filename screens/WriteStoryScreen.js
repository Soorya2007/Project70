import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert, Header } from 'react-native';

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            titleOfStory:'',
            authorOfStory:'',
            storyInput:''
        }
    }
    render(){
        return(
            <View>
              <Header
                backgroundColor={'#007bff'}
                centerComponent={{
                text: 'Write Your Story',
                style: { color: 'azure', fontSize: 20},
                }}
              />
            <KeyboardAvoidingView>
                <TextInput 
                style={styles.titleInput}
                placeholder="Title Of Story"
                onChangeText={(text)=>{
                   this.setState({
                       titleOfStory:text
                   })
                }}
                />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
                <TextInput
                style={styles.authorInput}
                placeholder="Author Of The Story"
                onChangeText={(text)=>{
                    this.setState({
                        authorOfStory:text
                    })
                }}
                />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
                <TextInput
                style={styles.storyInput}
                placeholder="Type your story here"
                multiline={true}
                onChangeText={(text)=>{
                    this.setState({
                        storyInput:text
                    })
                }}
                />
                <TouchableOpacity
                 style={styles.submitButton}
                 onPress={() => {
                    Alert.alert("Submited Successfully")
                  }}>
                 <Text style={styles.submitButtoTnext}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>  
        )
    }
}

const styles = StyleSheet.create({
    titleInput:{
    width: 100,
    height: 20,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10,
    borderColor:'yellow'
    },
    authorInput:{
    width: 100,
    height: 20,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10,
    borderColor:'teal'
    },
    storyInput:{
    width: 400,
    height: 90,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10,
    borderColor:'orange'
    },
    submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
    },
    submitButtonText:{
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight:"bold",
    color: 'white'
    },
})
import { StyleSheet, Text, TouchableWithoutFeedback, View, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Home = () => {
    const {navigate} = useNavigation();
   
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => navigate('AddEmployee')}>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Add Employee</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigate('EmployeeDetails')}>
            <View style={[styles.viewStyle, {marginTop:20}]}>
                <Text style={styles.textStyle}>View Employee</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2a9e53',
        alignItems: 'center',
        justifyContent: 'center',
        // marginVertical:40
    },
    viewStyle:{
        backgroundColor:'#0e4220',
        paddingHorizontal:25,
        paddingVertical:25,
        borderRadius:6
    },
    textStyle:{
        color:'#fff',
        fontSize:20,
        fontWeight:'800',
        textTransform:'uppercase'
    },
    
})
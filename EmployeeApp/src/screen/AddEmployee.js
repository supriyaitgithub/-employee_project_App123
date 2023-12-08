import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputText from '../component/InputText';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeActions } from '../redux/actions';
import { useNavigation } from '@react-navigation/native';

const AddEmployee = () => {
    const {navigate} = useNavigation();
    // Ref
    const firstNameRef = React.createRef();
    const lastNameRef = React.createRef();
    const jobTitleRef = React.createRef();
    const salaryRef = React.createRef();
    // state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [salary, setSalary] = useState('');

    const employee = useSelector((state) => state.employee);
console.log('employee',employee);
    const dispatch = useDispatch();

    const submitData = () => {
        let data = 
            {
            firstname:firstName,
            lastname:lastName,
            jobTitle:jobTitle,
            salary:salary
        }
    
        dispatch(addEmployeeActions(data));
        navigate('EmployeeDetails',employee)
    }

  return (
    <View style={styles.container}>
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>enter employee details </Text>
        </View>
        <View>
            <InputText
                label={'First Name'}
                ref={firstNameRef}
                asterisk={true}
                onSubmitEditing={() => lastNameRef?.current?.focus()}
                style={{
                  marginTop: 10,
                  color: '#377c24',
                }}
                returnKeyType='done'
                value={firstName}
                onChangeText={(e) => setFirstName(e)}
            />
        </View>
        <View>
            <InputText
                label={'Last Name'}
                ref={lastNameRef}
                asterisk={true}
                onSubmitEditing={() => jobTitleRef?.current?.focus()}
                style={{
                  marginTop: 10,
                  color: '#377c24',
                }}
                returnKeyType='done'
                value= {lastName}
                onChangeText={(e) => setLastName(e)}
            />
        </View>
        <View>
            <InputText
                label={'Job Title'}
                ref={jobTitleRef}
                asterisk={true}
                onSubmitEditing={() => salaryRef?.current?.focus()}
                style={{
                  marginTop: 10,
                  color: '#377c24',
                }}
                returnKeyType='done'
                value={jobTitle}
                onChangeText={(e) => setJobTitle(e)}
            />
        </View>
        <View>
            <InputText
                label={'Salary'}
                ref={salaryRef}
                asterisk={true}
                style={{
                  marginTop: 10,
                  color: '#377c24',
                }}
                returnKeyType='done'
                value={salary}
                onChangeText={(e) => setSalary(e)}
            />
        </View>
        <View style={styles.buttonStyle}>
            <Button
                title="Save"
                color="#377c24"
                onPress={() => submitData()}
                style={styles.saveStyle}
            />
        </View>
        
    </View>
  )
}

export default AddEmployee

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle:{
        color:'#4fc42f',
        fontSize:20,
        fontWeight:'800',
        textTransform:'capitalize'
    },
    viewStyle:{
        paddingHorizontal:25,
        paddingVertical:15,
    },
    buttonStyle:{
        marginVertical:50,
        width:"80%",
        // marginHorizontal:40
    },
   
})
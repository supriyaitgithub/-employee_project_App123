import { StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import InputText from '../component/InputText';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeActions, editEntry } from '../redux/actions';
import { useNavigation } from '@react-navigation/native';
import Button from '../component/Button';

const AddEmployee = ({route}) => {
    const {params} = route;
    // console.log('parama=====',params);
    const {navigate} = useNavigation();
    // Ref
    const firstNameRef = React.createRef();
    const designationRef = React.createRef();
    const experienceRef = React.createRef();
    // state
    const [firstName, setFirstName] = useState('');
    const [designation, setDesignation] = useState('');
    const [experience, setExperience] = useState('');

    const employee = useSelector((state) => state.employee?.data);
    const editData = useSelector((state) => state.employee?.edit_data);
    // console.log('employee===================',editData);
    const dispatch = useDispatch();
    const generateUniqueId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
      };
    const submitData = () => {
        if (params) {
            const id = params?.id;
            let data = {
                id,
                firstname:firstName,
                designation:designation,
                experience:experience
            }
            dispatch(editEntry(data));
            navigate('Home',editData)
          }
          else{
            const id = generateUniqueId(); 
            let data = {
                id,
                firstname:firstName,
                designation:designation,
                experience:experience
            }
        
        dispatch(addEmployeeActions(data));
        navigate('Home',employee)
        }
        setFirstName('');
        setDesignation('');
        setExperience('');
    }

    useEffect(() => {
        if (params) {
            // console.log('paramsss',params);
        const entryToEdit = employee?.find(entry => entry.id === params?.id);
        // console.log('entryToEdit',entryToEdit);
        if (entryToEdit) {
            setFirstName(entryToEdit.firstname);
            setDesignation(entryToEdit.designation);
            setExperience(entryToEdit.experience.toString());
        }
        }
    }, [params, employee]);

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
                onSubmitEditing={() => designationRef?.current?.focus()}
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
                label={'designation'}
                ref={designationRef}
                asterisk={true}
                onSubmitEditing={() => experienceRef?.current?.focus()}
                style={{
                  marginTop: 10,
                  color: '#377c24',
                }}
                returnKeyType='done'
                value={designation}
                onChangeText={(e) => setDesignation(e)}
            />
        </View>
        <View>
            <InputText
                label={'year of experience'}
                ref={experienceRef}
                asterisk={true}
                style={{
                  marginTop: 10,
                  color: '#377c24',
                }}
                returnKeyType='done'
                value={experience}
                onChangeText={(e) => setExperience(e)}
                keyboardType="numeric"
            />
        </View>
        <View style={styles.buttonStyle}>
            <Button
                title="Save"
                onPress={() => submitData()}
            />
        </View>
        
    </View>
  )
}

export default AddEmployee;

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
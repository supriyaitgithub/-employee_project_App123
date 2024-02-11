import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEntry } from '../redux/actions';


const Home = () => {
    const {navigate} = useNavigation();
    const dispatch = useDispatch(); 
    const employee = useSelector((state) => state.employee?.data);
    // console.log('addEmployeeData',employee);
    
    const HandleDeleteItem = (id) => {
        // console.log('id==================',id);
        dispatch(deleteEntry(id));
      };
  return (
    <View style={styles.container}>
        {employee?.length !== 0 ? (
        <View style={styles.mainViewStyle}>
            <FlatList 
              data={employee}
              keyExtractor={item=> item.id}
              renderItem={(item,index) => {
                return (
                <View style={styles.containers}>
                
                    <View style={styles.viewStyless}>
                        <View style={styles.cardStyle}>
                            <Text style={[styles.textStyless,{color:'#377c24'}]}>First Name :</Text>
                            <Text style={[styles.textStyless,{width:200}]}>{item?.item?.firstname}</Text>
                        </View> 
                        <View style={styles.cardStyle}>
                            <Text style={[styles.textStyless,{color:'#377c24'}]}>Designation:</Text>
                            <Text style={[styles.textStyless,{width:200}]}>{item?.item?.designation}</Text>
                        </View>
                        <View style={styles.cardStyle}>
                            <Text style={[styles.textStyless,{color:'#377c24'}]}>Experience:</Text>
                            <Text style={[styles.textStyless,{width:200}]}>{item?.item?.experience}</Text>
                        </View>
                        <View style={[styles.cardStyle,{marginHorizontal:20,marginVertical:10}]}>
                            <TouchableOpacity onPress={() => navigate('AddEmployee',item?.item)}>
                                <AntDesign name="edit" size={24} color="#377c24" />
                            </TouchableOpacity>
                        <View style={{marginLeft:70}}> 
                           <TouchableOpacity onPress={()=> HandleDeleteItem(item?.item?.id)}>
                                <AntDesign name="delete" size={24} color="#e51d35" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                    
                </View> 
                )
              }}
            />
        </View>
         ): (
        <View style={{alignItems:'center',margin:40}}>
           <Text style={styles.textStyless}>No Data Found</Text> 
        </View>
        )} 
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        falignItems: 'center',
        justifyContent: 'center',
    },
    containers:{
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingHorizontal:5,
        marginVertical:5,
        marginHorizontal:10,
        paddingVertical:10,
        borderWidth:2,
        borderRadius:10,
        borderColor:'#027209'
    },
    mainViewStyle:{
        backgroundColor:'#e2e0e0',
        width:'100%'
    },
    viewStyless:{
        flex:1,
        justifyContent:'flex-start',
    },
    textStyless:{
        fontSize: 13, 
        color: "#064c0a", 
        fontWeight:"700",
        paddingLeft: 25,
        marginTop:3 
    },
    cardStyle:{
        flexDirection:'row',
        justifyContent:'flex-start',

    }
    
})
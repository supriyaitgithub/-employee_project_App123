import { Animated, StyleSheet, Text, TouchableWithoutFeedback, View, FlatList, TextInput, TouchableOpacity, ScrollView,Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';




const EmployeeDetails = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    
    const employeeData = [
        {
            id:0,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:1,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:2,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:3,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:4,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:5,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:6,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:7,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:8,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:9,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
        {
            id:10,
            firstname: 'Happy Rock',
            lastname: 'Benjamin Tissot',
            image: require('../../assets/profile.png')
          },
    ]
    const employee = useSelector((state) => state.employee);
    const [data, setData] = useState([]);
    const [filterData, setfilterData] = useState([]);
    const [search, setSearch] = useState('')
    const [addData, setAddData] = useState(false)
    
    useEffect(() => {
        let employeeData = employee?.data_add;
          setData(employeeData)
          setfilterData(employeeData)
    },[]);

    
    const searchFilterFunction = (text) => {
        const textData = text.toLowerCase();
        const dataOfEmployee = data.filter((item) => {
            if(item.firstname.includes(textData)){
                return item
            }
        })
        setfilterData(dataOfEmployee)
        setSearch(text)
      }; 
    
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <View style={[styles.menuStyle,{marginTop:10}]}>
                <TouchableWithoutFeedback>
                    <Entypo name="menu" size={24} color="black" />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.menuStyle}>
                <Text style={styles.inboxStyle}>
                    Inbox
                </Text>
            </View>
            <View style={[styles.menuStyle,{marginTop:10,alignItems:'flex-end'}]}>
                <TouchableWithoutFeedback>
                    <Feather name="more-vertical" size={24} color="black" />
                </TouchableWithoutFeedback>
            </View>
        </View>
        <View  style={styles.mainViewStyle}>
            
                <TextInput
                    placeholder='Search'
                    clearButtonMode='always'
                    style={styles.searchBox}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={search}
                    onChangeText={(text) => searchFilterFunction(text)}
                    onClear={(text) => searchFilterFunction('')}

                />
            
        <Animated.FlatList
            keyExtractor={item =>item.id}
            pagingEnabled
            showsVerticalScrollIndicator={true}
            onScroll={Animated.event(
                [
                    {
                    nativeEvent : {
                        contentOffset : {x: scrollX}
                    }
                    }
                ]
                )}
            data={filterData}
            renderItem={({item}) => {
                return (
                    <View style={{ margin: 10 }}>
                        <ScrollView style={styles.scrollView}>
                            <View style={styles.containers}>
                                <View style={{marginTop: 6,}}> 
                                
                                    <Image
                                        // source={item.image} 
                                        source={require('../../assets/profile.png')} 
                                        style={{width:30,height:30}} 
                                    /> 
                            </View>
                            <View style={styles.viewStyless}>
                                <View>
                                    <Text style={styles.textStyless}>{item.firstname}</Text>
                                </View> 
                                <View>
                                    <Text style={[styles.textStyless,{color:'gray'}]}>{item.lastname}</Text>
                                </View>
                                
                            </View>
                            <View style={[styles.viewStyless,{alignItems:'flex-end',marginTop:10}]}>
                                <TouchableOpacity onPress={()=> setAddData(!addData)}>
                                    {
                                        addData == true ? (
                                            <Entypo name="star" size={24} color="yellow" />
                                        ):
                                            <AntDesign name="staro" size={24} color="black" />
                                    }
                                    
                                </TouchableOpacity>
                            </View>
                            </View>
                        </ScrollView> 
                    </View>
                )}
            }
        />
        </View>
    </View>
  )
}

export default EmployeeDetails

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#2a9e53',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical:40
    },
    containers:{
        backgroundColor:'#fff',
        flexDirection:'row',
        // backgroundColor: 'pink',
        paddingHorizontal:15,
        marginVertical:5,
        marginHorizontal:20,
        paddingVertical:10
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
    subContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20
    },
    menuStyle:{
        flex:1,
    },
    inboxStyle:{
        color:'#000',
        fontSize:25,
        fontWeight:'800',
    },
    mainViewStyle:{
        backgroundColor:'#e2e0e0',
        width:'100%'
    },
    searchBox:{
        borderBottomWidth:2,
        borderBottomColor:'#0e4220',
        width:300,
        marginHorizontal:30,
        height:40
    },
    viewStyless:{
        flex:1,
        // flexDirection:'row',
        justifyContent:'flex-start',
        // marginTop:5
    },
    textStyless:{
        fontSize: 13, 
        color: "#000", 
        fontWeight:"700",
        // textAlign:'left',
        paddingLeft: 25,
        marginTop:3 
    },
})
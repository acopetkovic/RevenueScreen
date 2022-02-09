import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput
} from 'react-native';

import Modal from "react-native-modal";

import { gql, useMutation } from '@apollo/client';




const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        tokenAuth(input: {email: $email, password: $password}) {
            token
            
        }
    }
`;

const ProjectDetailsCard = (props) => {

    const [userLogin, { data, loading, error }] = useMutation(LOGIN, 
        {
            onCompleted(data) {
               setIsUserLogedin(true)
            },
            onError(data){
                setIsUserLogedin(false)
            }
        });

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
    const [isUserLogedin, setIsUserLogedin] = useState(false);

    const loginTest = () =>{
        userLogin({ variables: { email: userEmail, password: userPassword } })
    }

    return (
        <>
            <View style={styles.projectDetailsCard}>
                <View style={styles.projectDetailsCardHeader}>
                    <View style={styles.projectDetailsCardHeaderHalf}>
                        <Text style={styles.cardTitleText}>
                            {props.cardTitle}                
                        </Text>
                    </View>
                    <View style={styles.projectDetailsCardHeaderHalf}>
                        <Pressable style={styles.projectDetailsCardActionBtn} onPress={()=>setIsModalVisible(true)}>
                            <Text style={styles.actionBtnTxt}>View all transactions</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.projectDetailsCardContent}>
                    <View style={styles.projectDetailsCardContentImg}></View>
                    <Text style={styles.projectDetailsCardContentTxt}>{props.cardText}</Text>
                </View>
            </View>
            
            <Modal  isVisible={isModalVisible}
                backdropOpacity={0.5}
                onBackdropPress={()=>setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <TextInput  style={styles.modalTextInput} 
                                placeholder="email"
                                onChangeText={setUserEmail}/>
                    <TextInput  style={styles.modalTextInput} 
                                placeholder="password"
                                onChangeText={setUserPassword}/>
                    <Pressable style={[isUserLogedin ? styles.successButton : styles.errorButton]} onPress={()=> loginTest()}>
                        <Text style={styles.actionBtnTxt}>Login</Text>
                    </Pressable>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    projectDetailsCard:{
        width: '100%',
        height: '30%',
        marginTop: '2.5%',
        backgroundColor: '#fff',
    },
    projectDetailsCardHeader:{
        flexDirection: 'row',
        width: '100%',
        height: '50%',
    },
    projectDetailsCardHeaderHalf:{
        width: '50%',
        height: '100%',
        justifyContent: 'center'
    },
    cardTitleText:{
        marginLeft: '10%',
        color: '#535D5C',
        fontSize: 20,
        fontWeight: 'bold'
    },
    projectDetailsCardActionBtn:{
        height: '80%',
        width: '80%',
        alignSelf: 'flex-end',
        marginRight: '10%',
        borderRadius: 10,
        backgroundColor: '#E8F2F1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionBtnTxt:{
        fontWeight: 'bold',
        color: '#2E5D56'
    },
    projectDetailsCardContent:{
        flexDirection: 'row',
        width: '100%',
        height: '50%',
        alignItems: 'center'
    },
    projectDetailsCardContentImg:{
        width: 40,
        height: 40,
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        marginLeft: '5%'
    },
    projectDetailsCardContentTxt:{
        marginLeft: '5%',
        color: '#535D5C',
        fontWeight: 'bold'
    },
    modalContainer:{
        width: '100%',
        height: '30%',
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center'
      },
    modalTextInput:{
        width: '80%',
        height: '20%',
        marginTop: '5%',
        borderBottomWidth: 1,
        borderColor: "#bbb"
    },
    successButton:{
        width: '20%',
        height: '20%',
        marginTop: '10%',
        backgroundColor: '#52BF90',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorButton:{
        width: '20%',
        height: '20%',
        marginTop: '10%',
        backgroundColor: '#bf5252',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProjectDetailsCard;
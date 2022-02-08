import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';


const ProjectDetailsCard = (props) => {
  return (
    <View style={styles.projectDetailsCard}>
        <View style={styles.projectDetailsCardHeader}>
            <View style={styles.projectDetailsCardHeaderHalf}>
                <Text style={styles.cardTitleText}>
                    {props.cardTitle}                
                </Text>
            </View>
            <View style={styles.projectDetailsCardHeaderHalf}>
                <Pressable style={styles.projectDetailsCardActionBtn}>
                    <Text style={styles.actionBtnTxt}>View all transactions</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.projectDetailsCardContent}>
            <View style={styles.projectDetailsCardContentImg}></View>
            <Text style={styles.projectDetailsCardContentTxt}>{props.cardText}</Text>
        </View>
    </View>
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
    }
});

export default ProjectDetailsCard;
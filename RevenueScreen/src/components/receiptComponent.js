import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import ProjectDetailsComponent from './projectDetailsComponent';



const ReceiptComponent = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.navigationTab}>

        </View>
        <View style={styles.userInfoContainer}>
            <Image style={styles.profilePic} source={require('../assets/img/profile_pic.jpeg')}></Image>
            <Text style={styles.profileTxt}>From: Darrell Steward</Text>
            <View style={styles.paymentTypeContainer}>
                <View style={styles.paymentLine}></View>
                <View style={styles.paymentTypeTab}>
                    <Text style={styles.paymentTypeText}>Bank account</Text>
                </View>
                <View style={styles.paymentLine}></View>
            </View>
            <Text style={styles.profileTxt}>11 Aug 2018</Text>
        </View>
        <View style={styles.receiptDetailsContainer}>
            <View style={styles.receiptDetailsItem}>
                <View style={styles.receiptDetailsIcon}></View>
                <View style={styles.receiptDetailsAmountText}><Text>Amount due</Text></View>
                <View style={styles.receiptDetailsRightAmountText}><Text>$14,312</Text></View>
            </View>
            <View style={styles.receiptDetailsItem}>
                <View style={styles.receiptDetailsIcon}></View>
                <View style={styles.receiptDetailsAmountText}><Text>Amount paid</Text></View>
                <View style={styles.receiptDetailsRightAmountText}><Text>$14,312</Text></View>
            </View>
            <View style={styles.receiptDetailsItem}>
                <View style={styles.receiptDetailsIcon}></View>
                <View style={styles.receiptDetailsAmountText}><Text>Outstanding debt</Text></View>
                <View style={styles.receiptDetailsRightAmountText}><Text>$0</Text></View>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    width: '100%',
    height: '60%',
    backgroundColor: '#fff',
  },
  navigationTab:{
    width: '100%',
    height: '20%',
    backgroundColor: '#EFF2F2'
  },
  userInfoContainer:{
    width: '100%',
    height: '50%',
    alignItems: 'center',
    marginTop: -40,
  },
  profilePic:{
    width: 80,
    height: 80,
    borderRadius: 40 * 2,
    borderWidth: 5,
    borderColor: '#fff',
  },
  profileTxt:{
    marginTop: '5%'
  },
  paymentTypeContainer:{
    flexDirection: 'row',
    width: '90%',
    height: '20%',
    marginTop: '5%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  paymentLine:{
      height: '2.5%',
      width: '30%',
      backgroundColor: '#E7EAEA'
  },
  paymentTypeTab:{
      width: '30%',
      height: '60%',
      backgroundColor: '#35786F',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
  },
  paymentTypeText:{
    color: '#fff'
  },
  receiptDetailsContainer:{
      width: '100%',
      height: '40%',
      alignItems: 'center'
  },
  receiptDetailsItem:{
    flexDirection: 'row',
    width: '90%',
    height: '25%',
    marginTop: '2.5%',
    alignItems: 'center',
    
  },
  receiptDetailsIcon:{
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#EFF2F2'
  },
  receiptDetailsText:{
    marginLeft: '5%'
  },
  receiptDetailsAmountText:{
    width: '40%',
    marginLeft: '5%',
  },
  receiptDetailsRightAmountText:{
    width: '40%',
    marginLeft: '5%',
    alignItems: 'flex-end'
  }
});

export default ReceiptComponent;

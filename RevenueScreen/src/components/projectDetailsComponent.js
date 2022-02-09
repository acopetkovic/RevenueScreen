import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';



// === MOLECULES === //
import ProjectDetailsCard from './molecules/projectDetailsCardComponent'

const ProjectDetailsComponent = () => {
  return (
    <View style={styles.mainContainer}>
        <ProjectDetailsCard cardTitle = 'Tenant'
                            cardImgUrl = ''
                            cardText = 'Darrel Steward'
        />
        <ProjectDetailsCard cardTitle = 'Building'
                            cardImgUrl = ''
                            cardText = '89 Great Street Shelbyville'
        />
        <ProjectDetailsCard cardTitle = 'Unit'
                            cardImgUrl = ''
                            cardText = '7H'
        />
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        width: '100%',
        height: '40%',
    },
});

export default ProjectDetailsComponent;

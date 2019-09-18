import React, { Component } from "react";
import {
    View, Text, StyleSheet, SafeAreaView, TextInput, Dimensions,
    Modal,
    Image, ScrollView, TouchableOpacity, ActivityIndicator
} from "react-native";

const { height, width } = Dimensions.get('window');

class Loader extends Component {
    render() {
        const { visible } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={visible}>
                        <View style={[styles.modalDiv, { backgroundColor: '#00000040' }]}>
                            <View style={[styles.modalInnerDiv]}>
                                <ActivityIndicator size="large" color="#FF5B00" />
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Loader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    header: {
        height: 60,
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
    },
    searchSection: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        elevation: 1,
        borderRadius: 5,
    },
    searchIcon: {
        paddingLeft: 15,
        paddingRight: 15,
        color: 'grey'
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: 'grey',
        fontWeight: '700',
    },
    sliderImg: { resizeMode: 'stretch', flex: 1, width: null, height: null, alignItems: 'center' },

    promoImg: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        borderWidth: 0.1, borderColor: '#888',
    },
    brandImg: {
        width: '100%',
        height: width / 8 - 20,
        resizeMode: 'contain',
        borderWidth: 0.1, borderColor: '#888',
    },
    hdng: {
        fontSize: 18,
        color: '#555',
        fontWeight: '700'
    },
    btn: {
        color: '#fff', backgroundColor: '#C7B048', paddingVertical: 3, fontSize: 13, borderRadius: 3, fontWeight: '500', paddingHorizontal: 7, textAlign: 'center',
    },
    modalDiv: {
        flex: 1, justifyContent: 'center'
    },
    modalInnerDiv:{
        flex:1, justifyContent:'center' , alignItems:'stretch',
                             marginVertical: height/2.5 , 
                             backgroundColor:'#f8f8ff', marginHorizontal:width/8 , borderRadius:5
    }
});
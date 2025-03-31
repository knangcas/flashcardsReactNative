import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as React from "react";


export default function Study({route}) {
    //const navigation = useNavigation();
    console.log(route.params);
    return (
        <>

        <View style={styles.container}>

            <View style={styles.flashCard}>
                <Text style={styles.flashCardText}>
                    What is the coolest name for the coolest man in the universe on planet earth lmao this doesn't make sense.?
                    What is the coolest name for the coolest man in the universe on planet earth lmao this doesn't make sense.?
                    What is the coolest name for the coolest man in the universe on planet earth lmao this doesn't make sense.?
                    What is the coolest name for the coolest man in the universe on planet earth lmao this doesn't make sense.?
                    What is the coolest name for the coolest man in the universe on planet earth lmao this doesn't make sense.?


                </Text>
            </View>

        </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>console.log("restart pressed")}>
                    <Text>Restart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>console.log("restart pressed")}>
                    <Text>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>console.log("restart pressed")}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: 'grey',
    },
    buttonContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth:1,
    },
    button: {
        width: '25%',
        height: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    flashCard: {
        height: '80%',
        width: '98%',
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        marginHorizontal: 20,
    },
    flashCardText: {
        fontSize: 20,
    }

})
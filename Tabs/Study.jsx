import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import storage from "../storage";
import {useQuery} from "@tanstack/react-query";
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono/400Regular';
import { useFonts } from '@expo-google-fonts/jetbrains-mono/useFonts';

export default function Study({route}) {
    let [fontsLoaded] = useFonts({
        JetBrainsMono_400Regular,
    })

    const [currentCard, setCurrentCard] = useState(0);
    const {isPending, error, data} = useQuery({
        queryKey: ['flashCards'],
        queryFn: getCards,
    })

    async function getCards() {
        const cards = await storage.load({key:'flashcarddeck', id: '1'});
        //console.log(cards);
        return cards;
    }



    console.log(route.params);
    return (
        <>

        <View style={styles.container}>

                <Text style={styles.flashcardTopText}>
                    Card {currentCard + 1} out of {isPending ? 'null' : data.cards.length}
                </Text>

            <View style={styles.flashCard}>
                <Text style={styles.flashCardText}>
                    {isPending ? "Loading" : data.cards[currentCard].question}
                </Text>
            </View>

        </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>console.log("restart pressed")}>
                    <Text style={styles.buttonText}>Restart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>console.log("restart pressed")}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>console.log("restart pressed")}>
                    <Text style={styles.buttonText}>Skip</Text>
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
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#2f2f2f',
    },
    buttonContainer: {
        flex:0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2f2f2f',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    button: {
        backgroundColor: '#626262',
        width: '25%',
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    buttonText: {
      fontSize: 12,
      fontFamily: "JetBrainsMono_400Regular",
        color:'white',
    },
    flashCard: {
        height: '90%',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#626262',
        borderWidth: 0,
        borderRadius: 10,
        marginHorizontal: 20,
    },
    flashcardTopText: {
        alignSelf:"flex-end",
        marginRight: 15,
        color:'white',
        fontFamily: "JetBrainsMono_400Regular",
        fontSize: 14,
    },
    flashCardText: {
        fontSize: 16,
        fontFamily: "JetBrainsMono_400Regular",
        color:'white',
    }

})
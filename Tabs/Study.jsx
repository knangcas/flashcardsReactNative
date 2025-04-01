import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import storage from "../storage";
import {useQuery} from "@tanstack/react-query";

export default function Study({route}) {
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

            <View style={styles.flashCard}>
                <Text style={styles.flashCardText}>
                    {isPending ? "Loading" : data.cards[currentCard].question}
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

    },
    button: {
        backgroundColor: 'grey',
        width: '25%',
        height: 30,
        borderRadius: 10,
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
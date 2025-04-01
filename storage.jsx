import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = new Storage({
    size:3000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
    sync: {}
});

storage.save({
    key: 'flashcarddeck',
    id: '1',
    data: {cards:[{question:"What is 1+1", answer: "2", cardID: 1, deckID: 1}, {question:"What is 2+1", answer: "3", cardID: 2, deckID:1}],
        deckID:1, name:"FirstDeck"}
})

export default storage;
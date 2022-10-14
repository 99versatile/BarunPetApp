import { StyleSheet, Text, View } from 'react-native';

function NewPetScreen({ navigation }) {

    function onPressNewPet () {
        navigation.navigate("Main");
    }

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Text>New pet?</Text>
            <Text onPress={onPressNewPet}>Move to MainScreen</Text>
        </View>
    )
}

export default NewPetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
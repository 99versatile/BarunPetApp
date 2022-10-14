import { StyleSheet, Text, View } from 'react-native';

function CreateUserScreen ({ navigation }) {
    function onPressCreate() {
        navigation.navigate("Login", {
            Id: 'id',
            Pwd: 'password',
        });
    }

    return (
        <View style={styles.container}>
            <Text onPress={onPressCreate}>Create User</Text>
        </View>
    )
}

export default CreateUserScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
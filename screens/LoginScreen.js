import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';


function LoginScreen({ navigation, route }) {
    const [userId, setUserId] = useState(route.params.Id);
    const [userPwd, setUserPwd] = useState(route.params.Pwd);

    function onPressLogin () {
        navigation.navigate("NewPet");
    }

    return (
        <View style={styles.container}>
            <TextInput onChangeText={setUserId} value={userId} style={styles.input} />
            <TextInput onChangeText={setUserPwd} value={userPwd} style={styles.input} />
            <Text onPress={onPressLogin}>Login</Text>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    input: {
        height: 40, 
        margin: 12, 
        padding: 10, 
        borderWidth: 2,
    }
});
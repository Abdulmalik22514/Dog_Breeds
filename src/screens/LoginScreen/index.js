import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Surface, TextInput, Text} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../constants/colors';
import {Login} from '../../store/authStore/actions';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Login(username, password));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Surface style={styles.box}>
        <View>
          <TextInput
            label="Username"
            mode="outlined"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Button
          mode="contained"
          color={COLORS.purple}
          style={{marginTop: 20}}
          onPress={submit}>
          Submit
        </Button>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
  },
  box: {
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    height: 250,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    color: COLORS.grey,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

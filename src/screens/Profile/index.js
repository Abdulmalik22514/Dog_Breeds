import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {COLORS} from '../../constants/colors';
import {useDispatch} from 'react-redux';
import {Logout} from '../../store/authStore/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout());
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/user.png')}
        resizeMode="contain"
        style={styles.user}
      />
      <Text style={styles.name}>Hi, Rudisha </Text>
      <Button
        mode="contained"
        color={COLORS.purple}
        style={{marginTop: 20}}
        onPress={submit}>
        LOGOUT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 100,
  },
});

export default Profile;

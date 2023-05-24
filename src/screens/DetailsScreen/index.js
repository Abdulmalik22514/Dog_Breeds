import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetBreedDetails} from '../../store/breedStore/actions';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {capitalize} from '../../utils/capitalize';
import Container from '../../components/Container';

const DogDetails = ({navigation, route}) => {
  const {breed} = route.params;

  const {image, loading} = useSelector(state => state.dogsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBreedDetails(breed));
  }, []);

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Ionicon
            name="arrow-back"
            size={24}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.breed}>{capitalize(breed)}</Text>
          <View />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <Image
            source={{uri: image}}
            style={{width: '100%', height: 400}}
            resizeMode="cover"
          />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  breed: {
    fontSize: 20,
    fontWeight: '600',
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

export default DogDetails;

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {BreedComponent} from '../../components/BreedComponent';
import {useDispatch, useSelector} from 'react-redux';
import {GetAllBreeds} from '../../store/breedStore/actions';

const AllBreeds = ({navigation}) => {
  const {dogs, loading} = useSelector(state => state.dogsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllBreeds());
  }, []);

  const _renderItem = ({item}) => {
    const {name, options} = item;

    return (
      <BreedComponent
        name={name}
        options={options}
        onPress={breed => {
          navigation.navigate('DogDetails', {
            breed,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose your Dog Breed</Text>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList data={dogs} renderItem={_renderItem} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  heading: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20,
  },
});

export default AllBreeds;

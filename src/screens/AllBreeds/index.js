import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {BreedComponent} from '../../components/BreedComponent';
import {useDispatch, useSelector} from 'react-redux';
import {GetAllBreeds} from '../../store/breedStore/actions';
import Container from '../../components/Container';

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
    <Container>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <Text style={styles.heading}>Choose your Dog Breed</Text>
        {loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <FlatList
            data={dogs}
            renderItem={_renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </Container>
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

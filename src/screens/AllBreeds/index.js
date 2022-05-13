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

const AllBreeds = () => {
  const {dogs, loading} = useSelector(state => state.dogsReducer);

  const dispatch = useDispatch();

  console.log(loading);

  useEffect(() => {
    dispatch(GetAllBreeds());
  }, []);

  const _renderItem = ({item}) => {
    const {name, options} = item;

    return <BreedComponent name={name} options={options} />;
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
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
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
  title: {
    elevation: 0.05,
    shadowColor: '#000',
    borderRadius: 5,
    height: 60,
    shadowOpacity: 0.5,
  },
  listItem: {
    backgroundColor: 'grey',
  },
});

export default AllBreeds;

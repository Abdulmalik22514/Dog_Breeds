import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {List} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites} from '../store/breedStore/types';
import {COLORS} from '../constants/colors';

export const BreedComponent = ({options, name, onPress}) => {
  const {favorites} = useSelector(state => state.dogsReducer);

  const dispatch = useDispatch();

  const handlePress = breed => {
    dispatch(addToFavorites(breed));
  };

  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      {options.length < 1 ? (
        <TouchableOpacity
          style={styles.itemCard}
          onPress={onPress}
          activeOpacity={0.8}>
          <Text style={{fontSize: 19}}>{name}</Text>
          <TouchableOpacity onPress={() => handlePress(name)}>
            <MaterialIcons
              name="heart"
              size={22}
              color={favorites.includes(name) ? 'red' : COLORS.grey}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      ) : (
        <List.Accordion
          style={styles.title}
          title={name}
          titleStyle={{fontSize: 19}}
          expanded={expanded}
          id={`${name}-id`}
          onPress={() => setExpanded(!expanded)}>
          {options.map(item => {
            return (
              <List.Item
                onPress={onPress}
                key={`${item}-id`}
                title={item}
                style={styles.listItem}
                right={props => (
                  <TouchableOpacity
                    {...props}
                    onPress={() => handlePress(item)}>
                    <MaterialIcons
                      name="heart"
                      size={22}
                      color={favorites.includes(name) ? 'red' : COLORS.grey}
                    />
                  </TouchableOpacity>
                )}
              />
            );
          })}
        </List.Accordion>
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
    borderBottomWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    borderBottomWidth: 1,
  },
  listItem: {
    borderBottomWidth: 0.6,
    marginHorizontal: 20,
    paddingHorizontal: 0,
    borderColor: 'grey',
  },
});

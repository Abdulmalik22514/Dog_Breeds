import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {List} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorites} from '../store/breedStore/types';
import {COLORS} from '../constants/colors';
import {capitalize} from '../utils/capitalize';

export const BreedComponent = ({options, name, onPress}) => {
  const {favorites} = useSelector(state => state.dogsReducer);

  const dispatch = useDispatch();

  const handleFavorite = breed => {
    dispatch(addToFavorites(breed));
  };

  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      {options.length < 1 ? (
        <TouchableOpacity
          style={styles.itemCard}
          onPress={() => onPress(name)}
          activeOpacity={0.8}>
          <Text style={{fontSize: 19}}>{capitalize(name)}</Text>
          <TouchableOpacity
            onPress={() => handleFavorite(name)}
            activeOpacity={0.8}>
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
          title={capitalize(name)}
          titleStyle={{fontSize: 19}}
          expanded={expanded}
          id={`${name}-id`}
          onPress={() => setExpanded(!expanded)}>
          {options.map(item => {
            return (
              <List.Item
                onPress={() => onPress(item)}
                key={`${item}-id`}
                title={capitalize(item)}
                style={styles.listItem}
                right={props => (
                  <TouchableOpacity
                    {...props}
                    onPress={() => handleFavorite(item)}
                    activeOpacity={0.8}>
                    <MaterialIcons
                      name="heart"
                      size={22}
                      color={favorites.includes(item) ? 'red' : COLORS.grey}
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

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {List} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const BreedComponent = ({options, name, onFavorite, isFav}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      {options.length < 1 ? (
        <View style={styles.itemCard}>
          <Text>{name}</Text>
          <TouchableOpacity onPress={onFavorite}>
            <MaterialIcons
              name="favorite-outline"
              size={24}
              color={isFav ? 'red' : 'blue'}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <List.Accordion
          style={styles.title}
          title={name}
          titleStyle={{color: 'black'}}
          expanded={expanded}
          id={`${name}-id`}
          onPress={() => setExpanded(!expanded)}>
          {options.map(item => {
            return (
              <List.Item
                key={`${item}-id`}
                title={item}
                style={styles.listItem}
                right={props => (
                  <TouchableOpacity {...props} onPress={onFavorite}>
                    <MaterialIcons
                      name="favorite-outline"
                      size={24}
                      color={isFav ? 'red' : 'blue'}
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

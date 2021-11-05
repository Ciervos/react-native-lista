import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  FlatList
} from 'react-native';
import colors from '../../constants/colors';

function ListComponent({itemList,handleRemoveItem}) {
  return (
    <View style={styles.items}>
    <FlatList
    data={itemList}
    keyExtractor={item => item.id}
    renderItem={({item}) =>(
      <View style={styles.item} key={item.id}>
      <Text>{item.value}</Text>
      <Button title="X" onPress={() => handleRemoveItem(item.id)} color={colors.color2} />
    </View>
    )}
    /> 

  
  </View>
  )
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: colors.color1,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
      },
      item: {
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: colors.color6,
        borderWidth: 1,
      },
})

export default ListComponent;
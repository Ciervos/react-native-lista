import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';
import ModalComponent from './components/Modal';
import ListComponent from './components/List';
import colors from './constants/colors';

export default function App() {
  const [text,setText] = useState('');
  const [itemList,setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText =(value)=>{
    setText(value);
  }

  const handleAddItem = () =>{
     const item={
         value: text,
         id: Math.random().toString(),
      }; 
      setItemList([
        ...itemList,
        item,
      ]);
      setText('');
     }

  const handleRemoveItem = (id) =>{
   setModalVisible(true);
   setItemSelected(itemList.find(item => item.id === id))

  } 

  const handleRemoveConfirm = () =>{
    const newList = itemList.filter(item=> item.id !== itemSelected.id);
    setItemList(newList)
    setModalVisible(false);
    setItemSelected({});
  
  }

  const handleCancelOption = () =>{
    setModalVisible(false);
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
       <TextInput 
       style={styles.input} 
       placeholder="Ingrese item"
       onChangeText={handleChangeText}
       value={text}
       />
       <Button 
       title="Agregar"
       onPress={handleAddItem}
       color={colors.color2}/>
        </View>
      
      <ListComponent itemList={itemList} handleRemoveItem={handleRemoveItem} />
      <ModalComponent modalVisible={modalVisible} itemSelected={itemSelected} handleRemoveConfirm={handleRemoveConfirm} handleCancelOption={handleCancelOption}/>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
  height: '100%',  
  padding: 50,
  backgroundColor: colors.color3,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: colors.color6,
    borderBottomWidth: 1,
    width: 200,
    height: 40,
  },

  
});

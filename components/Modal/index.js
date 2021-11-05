import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Modal,
} from 'react-native';
import colors from '../../constants/colors';

function ModalComponent({modalVisible, itemSelected, handleRemoveConfirm,handleCancelOption}) {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, styles.shadow]}>
          <Text style={styles.modalMessage}>¿Está seguro que desea borrar?</Text>
          <Text style={styles.modalTitle}>{itemSelected.value}</Text>
          <View style={styles.button}>
            <Button
              onPress={handleRemoveConfirm}
              title="CONFIRMAR"
              color={colors.colorrojo}
            />
            <Button
             onPress={handleCancelOption}
             title="CANCELAR"
             color={colors.color2}  />
          </View>


        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    padding: 30,
    backgroundColor: colors.color6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalMessage: {
    fontSize: 18,
    color: colors.color1,
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    color: colors.color2,
  },
  button:{
   margin: 10,   
   width: 200,
   flexDirection: 'row',
   justifyContent: 'space-between',

   
  },  
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default ModalComponent;
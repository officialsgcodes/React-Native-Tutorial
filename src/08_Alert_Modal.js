import {View, Text, Alert, Modal} from 'react-native';
import React, {useState} from 'react';
import Btn from './Components/Btn';

export default function Alert_Modal() {
  const [showModal, setShowModal] = useState(true);

  const showAlert = () =>
    Alert.alert('Title of the message', 'Description of the message', [
      {
        text: 'Ok',
        onPress: () => console.log('Ok button clicked'),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);

  return (
    <View>
      <Btn title="Show Alert" Press={showAlert} />
      <Btn title="Toggle Modal" Press={() => setShowModal(!showModal)} />

      <Modal
        visible={showModal}
        animationType={'slide'}
        onRequestClose={() => setShowModal(false)}>
        <Text style={{ fontSize: 40, color: 'black' }}>This is the modal</Text>
        <Btn title='Hide Modal' Press={() => setShowModal(false)} />
      </Modal>
    </View>
  );
}

import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import Btn from './Components/Btn';

export default function Lists() {
  return (
    <View>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        >
        <Btn title="First" Press={() => {}} />
        <Btn title="Second" Press={() => {}} />
        <Btn title="Third" Press={() => {}} />
        <Btn title="Fourth" Press={() => {}} />
        <Btn title="Fifth" Press={() => {}} />
        <Btn title="Sixth" Press={() => {}} />
        <Btn title="Seventh" Press={() => {}} />
        <Btn title="Eighth" Press={() => {}} />
        <Btn title="Ninth" Press={() => {}} />
        <Btn title="Tenth" Press={() => {}} />
      </ScrollView> */}

      <FlatList
        data={[
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
          'Sixth',
          'Seventh',
          'Eighth',
          'Ninth',
          'Tenth',
        ]}
        ListEmptyComponent={() => (
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>List is Empty..</Text>
        )}
        renderItem={({item}) => (
          <View style={{marginVertical: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 40, color: 'black'}}>{item}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{borderTopColor: 'black', borderTopWidth: 1}}></View>
        )}
        ListHeaderComponent={() => (
          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 40, color: 'white'}}>
              This is the header
            </Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 40, color: 'white'}}>
              This is the footer
            </Text>
          </View>
        )}
      />
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [show, setShow] = useState(false);
  const [name,setName] = useState('');
  const [desc,setDesc] = useState('');
  const [link,setLink] = useState('');
    const [data,setData] = useState([{
      id: 1,
      name: 'Nguyễn Đức Thắng',
      desc: 'Ph20487',
      link: 'https://reactnative.dev/img/tiny_logo.png'
    }, {
      id: 2,
      name: 'Nguyễn Văn A',
      desc: 'Ph20487',
      link: 'https://reactnative.dev/img/tiny_logo.png'
    }, {
      id: 3,
      name: 'Nguyễn Văn B',
      desc: 'Ph20487',
      link: 'https://reactnative.dev/img/tiny_logo.png'
    }]);
    const [id,setId] = useState(data.length+1);
    const [list,setList] = useState(data);
    return (
    <View style={styles.container}>
      {
        show ?
          (
            <View>
              <Text style={{margin:12,fontSize:20}}>Thêm Mới</Text>
              <TextInput style={styles.input}
                placeholder='Tên'
                onChangeText={text => setName(text)}
              />
              <TextInput style={styles.input}
                placeholder='Mô tả'
                onChangeText={text => setDesc(text)}
              />
              <TextInput style={styles.input}
                placeholder='Link ảnh'
                onChangeText={text => setLink(text)}
              />

              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button title='Hủy' onPress={() => setShow(!show)} />
                <Button title='Lưu' onPress={() => {
                  const newItem = {
                    id: id,
                    name: name,
                    desc: desc,
                    link: link
                  };
                  const newArray = [...data,newItem];
                  setId(id+1);
                  setList(newArray)
                  setData(newArray);
                  console.log(list);
                  setName('');
                  setDesc('');
                  setLink('');
                  setShow(!show);
                }} />
              </View>
            </View>

          ) :
          <>
            <Text style={styles.text}>Họ Tên: Nguyễn Đức Thắng</Text>
            <Text style={styles.text}>MSV: PH20487</Text>
            <Button title='Thêm mới' onPress={() => setShow(!show)} />
            <FlatList
              data={list}
              renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'row', marginVertical: 16 }}>
                  <Image style={styles.tinyLogo} source={{ uri: item.link }} />
                  <View>
                    <Text style={{ marginVertical: 4, marginHorizontal: 6 }}> {item.name}</Text>
                    <Text style={{ marginVertical: 4, marginHorizontal: 6 }}> {item.desc}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id} />
          </>
      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  tinyLogo: {
    width: 50,
    height: 50,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  text: {
    fontSize: 20,
    marginVertical: 4,
  },

  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
});

import {
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'
import { Button, Divider, Flex, Text } from '@react-native-material/core'
import React, { useState } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    height: '100%',
  },
  iconbtn: {
    position: 'absolute',
    bottom: 720,
    left: 24,
    color: '#111',
    fontSize: 20,
  },
  bximg: {
    width: '100%',
    height: '100%',
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  from: {
    width: '80%',
    position: 'absolute',
    bottom: 150,
    left: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.1,
    borderRadius: 10,
    padding: 16,
  },
  btn: {
    position: 'absolute',
    right: 24,
    bottom: 64,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#00629D',
    borderRadius: 10,
  },
  txinput: {
    width: '55%',
    height: 56,
    position: 'absolute',
    left: 32,
    bottom: 64,
    padding: 16,

    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  btn_load: {
    backgroundColor: 'transparent',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#00629D',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  iconbtn: {
    borderWidth: 1,
    borderColor: '#111',
    padding: 10,
    borderRadius: 20,
  },
  iconbtnn: {
    position: 'absolute',
    bottom: 720,
    left: 24,
    color: '#111',
    fontSize: 20,
  },
  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.1,
    borderRadius: 8,
    padding: 8,
    marginTop: 4,
  },
  item: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
  },
})

const Order_3 = ({ navigation }) => {
  const [loading, setLoading] = useState(true)

  const [modalVisible, setModalVisible] = useState(false)
  const pressNoOrder = () => {
    navigation.navigate('NoOrder')
  }
  const pressHanderBack = () => {
    navigation.goBack()
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <Flex style={styles.container}>
        <Flex style={styles.bximg}>
          <Image style={styles.img} source={require('../../assets/map.png')} />
        </Flex>

        <Flex
          style={{
            position: 'absolute',
            top: 70,
            left: 0,
            right: 0,
            bottom: 0,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              lineHeight: 24,
            }}
          >
            Đang đưa khách tới điểm đến
          </Text>
          <Button
            style={styles.btn_load}
            disabled
            title="Button"
            loading={loading}
            loadingIndicatorPosition="overlay"
          />
        </Flex>
        <Flex
          center
          style={{
            position: 'absolute',
            top: 400,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Flex style={{ width: '90%' }}>
            <Flex style={styles.form}>
              <TouchableOpacity style={{ width: '100%' }}>
                <Flex style={styles.item}>
                  <Flex
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <FontAwesome5 name="map-pin" size={24} color="black" />
                    <Flex style={{ marginLeft: 16 }}>
                      <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                        Điểm đón
                      </Text>
                      <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                        Địa chỉ chính xác
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </TouchableOpacity>
              <Divider
                style={{
                  color: 'black',
                  borderBottomWidth: 0.2,
                  width: '80%',
                  height: 1,
                }}
              />
              <TouchableOpacity style={{ width: '100%' }}>
                <Flex style={styles.item}>
                  <Flex
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Entypo name="location" size={24} color="black" />
                    <Flex style={{ marginLeft: 16 }}>
                      <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                        Điểm đến
                      </Text>
                      <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                        Địa chỉ chính xác
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </TouchableOpacity>
            </Flex>
          </Flex>
          <Flex
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 24,
            }}
          >
            <Flex>
              <TouchableOpacity
                style={{
                  fill: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={pressNoOrder}
              >
                <Ionicons
                  name="checkmark-done-circle-outline"
                  size={40}
                  color="green"
                />
                <Text style={{ fontSize: 14 }}>Hoàn thành chuyến xe</Text>
              </TouchableOpacity>
            </Flex>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <FontAwesome5
                name="user-circle"
                size={50}
                style={{ marginLeft: 16 }}
                color="black"
              />
            </TouchableOpacity>
          </Flex>
        </Flex>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Flex style={{ width: '100%' }}>
                <Flex style={{ marginLeft: 16 }}>
                  <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                    Họ và tên
                  </Text>
                  <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                    Nguyễn Văn A
                  </Text>
                </Flex>
                <Flex style={{ marginLeft: 16, marginTop: 8 }}>
                  <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)' }}>
                    Số điện thoại
                  </Text>
                  <Text style={{ fontWeight: 'bold', lineHeight: 24 }}>
                    0987654321
                  </Text>
                </Flex>
              </Flex>
              <Flex
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 32,
                  marginBottom: 32,
                  gap: 24,
                }}
              >
                <TouchableOpacity>
                  <Ionicons
                    name="ios-call"
                    style={styles.iconbtn}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    name="chatbubble"
                    style={styles.iconbtn}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </Flex>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Đóng</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </Flex>
    </TouchableWithoutFeedback>
  )
}

export default Order_3

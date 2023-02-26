import React, { useState, useEffect } from 'react';
import {
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  Picker,
} from 'react-native';

const FIREBASE_API_ENDPOINT = 'https://myfirebase-f7ed9-default-rtdb.firebaseio.com/';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { PaymentIcon } from 'react-native-payment-icons';  

const Drawer = createDrawerNavigator();
var arr = [];

export default function App({ navigation }) {
  const [total, setTotal] = useState(0);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000814',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="Williams Fallade"
          component={Products}
          options={{
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Cart & Wishlist')}
                title="Cart"
                color="#284b63"
              />
            ),
          }}
        />
        <Drawer.Screen name="Consultancy Portal" component={Contact} />
        <Drawer.Screen name="Cart & Wishlist" component={Cart} />
        <Drawer.Screen
          name="Checkout"
          component={Checkout}
          options={{ drawerLabel: () => null }}
        />
        <Drawer.Screen
          name="Payment Modes"
          component={PaymentModes}
          options={{ drawerLabel: () => null }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );

  function Contact({ navigation }) {
    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [cont, setCont] = useState();
    const [msg, setMsg] = useState();

    const postMesage = () => {
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        Name: name,
        Email:mail,
        Contact: cont,
        Message: msg
        
      }),
    };

    fetch(`${FIREBASE_API_ENDPOINT}/message.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error)); 
  };

    return (
      <View style={styles.screen}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="white"
            onChangeText={(val) => setName(val)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contact"
            placeholderTextColor="white"
            onChangeText={(val) => setCont(val)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(val) => setMail(val)}
          />
        </View>
        <View>
          <TextInput
            style={[
              styles.input,
              {
                borderWidth: 2,
                height: 100,
                justifyContent: 'center',
                marginBottom: 30,
              },
            ]}
            placeholder="Message"
            placeholderTextColor="white"
            onChangeText={(val) => setMsg(val)}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>postMesage()}
          disabled={
            name == null || msg == null || mail == null || cont == null
          }>
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function Products({ navigation }) {
    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate('Cart & Wishlist')}
            title="Cart"
            color="#284b63"
          />
        ),
      });
    }, [navigation]);

    return (
      <View style={styles.screen}>
        <View>
          <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>
            Choose Your Plan
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            Join Today
          </Text>
        </View>
        <ScrollView>
          <TouchableOpacity
            style={[styles.button, { flexDirection: 'row', height: 100 }]}
            onPress={() => {
              [
                arr.push({
                  key: Math.random().toString(),
                  name: 'All Round Shape & Strength',
                  price: 19.99,
                }),
                setTotal(total + 19.99),
                console.log(arr),
                console.log(total),
              ];
            }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require('@expo/snack-static/react-native-logo.png')}
              resizeMode="cover"
            />
            <Text style={styles.text}>All Round Shape & Strength</Text>
            <Text style={[styles.text, { color: 'cyan' }]}>$19.99</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { flexDirection: 'row', height: 100 }]}
            onPress={() => {
              [
                arr.push({
                  key: Math.random().toString(),
                  name: "Let's Grow Pecs",
                  price: 10.0,
                }),
                setTotal(total + 10.0),
                console.log(arr),
              ];
            }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require('@expo/snack-static/react-native-logo.png')}
              resizeMode="stretch"
            />
            <Text style={styles.text}>Let's Grow Pecs</Text>
            <Text style={[styles.text, { color: 'cyan' }]}>$10.00</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { flexDirection: 'row', height: 100 }]}
            onPress={() => {
              [
                arr.push({
                  key: Math.random().toString(),
                  name: 'The Shred King',
                  price: 24.99,
                }),
                setTotal(total + 24.99),
                console.log(arr),
              ];
            }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require('@expo/snack-static/react-native-logo.png')}
              resizeMode="contain"
            />
            <Text style={styles.text}>The Shred King</Text>
            <Text style={[styles.text, { color: 'cyan' }]}>$24.99</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { flexDirection: 'row', height: 100 }]}
            onPress={() => {
              [
                arr.push({
                  key: Math.random().toString(),
                  name: 'All Round Power & Strength',
                  price: 9.99,
                }),
                setTotal(total + 9.99),
                console.log(arr),
              ];
            }}>
            <Image
              style={{ width: 100, height: 100 }}
              source={require('@expo/snack-static/react-native-logo.png')}
              resizeMode="contain"
            />
            <Text style={styles.text}>All Round Power & Strength</Text>
            <Text style={[styles.text, { color: 'cyan' }]}>$9.99</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  function Cart({ navigation }) {
    const RemoveItem = (ik, ip) => {
      setTotal(total - ip);
      var arr1 = arr.filter((item) => item.key != ik);
      arr = arr1.slice();
    };
    return (
      <View style={styles.screen}>
        <TouchableOpacity style={styles.button} disabled={true}>
          <Text style={styles.text}>
            Confirm your order and checkout your cart
          </Text>
        </TouchableOpacity>

        <SafeAreaView style={styles.screen}>
          <ScrollView>
            {arr.map((item) => (
              <TouchableOpacity
                style={styles.button}
                key={item.key}
                onPress={() => RemoveItem(item.key, item.price)}>
                <View style={[styles.button, { flexDirection: 'row' }]}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>${item.price}</Text>
                  <View
                    style={{
                      backgroundColor: 'red',
                      width: 20,
                      borderRadius: 5,
                      height: 30,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'white',
                        padding: 5,
                        alignSelf: 'right',
                      }}>
                      X
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>

        <View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'left',
              marginTop: 20,
              fontSize: 20,
            }}>
            Total: ${total.toFixed(2)}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              marginTop: 50,
              backgroundColor: '#000814',
              borderRadius: 5,
              width: '150%',
              alignSelf: 'center',
            }}
            onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.text}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function PaymentModes({ navigation }) {
    const [selectedValue, setSelectedValue] = useState('1');
    
    const postItems = () => {
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        CartItems: arr,
        
      }),
    };

    fetch(`${FIREBASE_API_ENDPOINT}/items.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error)); 
  };
    return (
      <ScrollView style={[styles.screen]}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <PaymentIcon style={{ padding: 10 }} type="master" width="50%" />
          <PaymentIcon style={{ padding: 10 }} type="paypal" width="50%" />
          <PaymentIcon style={{ padding: 10 }} type="visa" width="50%" />
          <PaymentIcon
            style={{ padding: 10 }}
            type="american-express"
            width="50%"
          />
        </TouchableOpacity>
        <View style={{ marginTop: 40 }}>
          <Text style={[styles.text, { fontSize: 20 }]}>Card Details</Text>
        </View>
        <View style={{ flexDirection: 'row', marginBottom: 40 }}>
          <TextInput
            style={[
              styles.input,
              { padding: 10, marginRight: 20, borderWidth: 2 },
            ]}
            placeholder="Card Number"
            placeholderTextColor="black"
            maxLength={14}
            //onChangeText={(val)=>setAdd(val)}
          />
          <TextInput
            style={[styles.input, { padding: 10, borderWidth: 2 }]}
            placeholder="Card Holder Name"
            placeholderTextColor="black"
            //onChangeText={(val)=>setAdd(val)}
          />
        </View>
        <View
          style={{ flexDirection: 'row', padding: 20, alignContent: 'left' }}>
          <Text style={[styles.text]}>Expiration Date</Text>
          <Picker
            selectedValue={selectedValue}
            style={{ width: 50, marginRight: 20, backgroundColor: '#284b63' }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
            <Picker.Item label="7" value="7" />
            <Picker.Item label="8" value="8" />
            <Picker.Item label="9" value="9" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="11" value="11" />
            <Picker.Item label="12" value="12" />
          </Picker>
          <Picker
            selectedValue={selectedValue}
            style={{ width: 70, backgroundColor: '#284b63' }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="2022" value="2022" />
            <Picker.Item label="2023" value="2023" />
            <Picker.Item label="2024" value="2024" />
            <Picker.Item label="2025" value="2025" />
            <Picker.Item label="2026" value="2026" />
            <Picker.Item label="2027" value="2027" />
            <Picker.Item label="2028" value="2028" />
            <Picker.Item label="2029" value="2029" />
            <Picker.Item label="2030" value="2030" />
            <Picker.Item label="2031" value="2031" />
            <Picker.Item label="2032" value="2032" />
            <Picker.Item label="2033" value="2033" />
          </Picker>
        </View>
        <View style={{ flexDirection: 'row', alignContent: 'left' }}>
          <Text style={[styles.text]}>CVV</Text>
          <TextInput
            style={[styles.input, { padding: 10, borderWidth: 2 }]}
            placeholderTextColor="black"
            maxLength={3}
            //onChangeText={(val)=>setAdd(val)}
          />
        </View>
        <TouchableOpacity style={styles.button} 
        onPress={()=>postItems()}
        >
          <Text style={styles.text}>
            Pay Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  function Checkout({ navigation }) {

   const postItems = () => {
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        CartItems: arr,
        
      }),
    };

    fetch(`${FIREBASE_API_ENDPOINT}/items.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error)); 
  };

    const [name, setName] = useState();
    const [add, setAdd] = useState();
    const [cont, setCont] = useState();
    const [mail, setMail] = useState();

    return (
      <View style={styles.screen}>
        <View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 20,
            }}>
            Address
          </Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#000814"
            onChangeText={(val) => setName(val)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contact"
            placeholderTextColor="#000814"
            onChangeText={(val) => setCont(val)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000814"
            onChangeText={(val) => setMail(val)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor="#000814"
            onChangeText={(val) => setAdd(val)}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: 30,
            }}>
            Payment Options
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              marginTop: 50,
              backgroundColor: '#000814',
              borderRadius: 5,
              width: '150%',
              alignSelf: 'center',
            }}
            disabled={
              name == null || add == null || mail == null || cont == null
            }
            onPress={() => [alert('Order Processed'),postItems()]}>
            <Text style={styles.text}>Cash on Delivery</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{
              marginTop: 50,
              backgroundColor: '#000814',
              borderRadius: 5,
              width: '150%',
              alignSelf: 'center',
            }}
            disabled={
              name == null || add == null || mail == null || cont == null
            }
            onPress={() => navigation.navigate('Payment Modes')}>
            <Text style={styles.text}>Pay by Credit / Debit Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#284b63',
    padding: 20,
  },
  text: {
    padding: 10,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: '#000814',
    borderRadius: 5,
    width: 340,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 2,
    marginTop: '20%',
    borderColor: '#000814',
    width: '150%',
    alignSelf: 'center',
  },
  postCard: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    marginBottom: 20,
  },
});

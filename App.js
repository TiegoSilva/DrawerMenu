import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

  import Icon from 'react-native-vector-icons/MaterialIcons';

// importações react-navigation
  // Componente para envolver todo o aplicativo
  import { NavigationContainer } from '@react-navigation/native';

  //Componente para a contrução do DrawerMenu
  import { createDrawerNavigator } from '@react-navigation/drawer';

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
function AppTwo() {
  return (
    <View style={styles.container}>
      <Text>App 2</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Menu(){
  return(
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="App"
        drawerStyle={{
          backgroundColor: "#313131",
          paddingVertical: 20
        }}
        drawerContentOptions={{
          activeBackgroundColor: "#fff",
          inactiveTintColor: "#fff"
        }}>

          
        <Drawer.Screen 
            name="App" 
            component={App} 
            options={
              {
                drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#fff' }}>Primeira Tela</Text>),
                drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="home" />)
              }
            } 
        />
        <Drawer.Screen 
          name="MeuApp" 
          component={AppTwo} 
          options={
            {
              drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#fff' }}>Segunda Tela</Text>),
              drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="chat" />)
            }
          }
         
          />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

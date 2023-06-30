import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Você esta vendo Neymar andando e tem uma ideia</Text>
      <Image
      source={require('../assets/neyandando.jpg')}
      style={{ width: 500, height: 700 }}
    />
      <View style={styles.botao}><Link href="/telaA">Assaltar Neymar</Link></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:26,
    fontWeight:'bold',
    marginBottom:10,
  },
  botao:{
    marginTop:10,
    marginBottom: 10,
    padding: 8,
    cursor: 'pointer',
    backgroundColor: '#fff',
    textDecorationLine: 'none',
    fontSize: 20,
    color: '#fff',
    borderRadius: 6,
    borderWidth: 2,

  }
});


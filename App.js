import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native';
import { backgroundColor, borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style ={styles.header}>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      <View style={styles.ImageContainer}>
      <Image source={require("./assets/BB.jpeg")} style={styles.Image}/>
      </View>

      <View style={styles.FormContainer}>
        <View >
        <Text style ={styles.greyText}>School</Text>
        <TextInput style={styles.defualtInputs}>CodeTrain</TextInput>
        </View>

        <View >
        <Text style ={styles.greyText}>Email Address</Text>
        <TextInput style={styles.defualtInputs}>raymond.bondzie.2@gmail.com</TextInput>
        </View>

        <View style = {styles.InputField} >
        <Text style ={styles.blueText}>Name </Text>
        <TextInput style={styles.defualtInputs}>Raymond Bondzie</TextInput>
        </View>

        <View style = {styles.InputField} >
        <Text style ={styles.blueText}>Nick Name</Text>
        <TextInput style={styles.defualtInputs}>debonzy</TextInput>
        </View>

        <View style = {styles.InputField} >
        <Text style ={styles.blueText}>Emergency Contact </Text>
        <TextInput style={styles.defualtInputs}>+233550432079</TextInput>
        </View>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    height: 50,
  },

  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  ImageContainer: {
    alignItems: 'center'
  },

  Image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 30,
  },

  FormContainer:{
    marginStart: 50,
    marginTop: 30,
    marginEnd: 50,
  },

  greyText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 14,
    
  },

  blueText:{
    color: '#07b1fa',
  },

  InputField: {
    marginTop: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    paddingBottom: 5,
  },

  defualtInputs: {
    fontSize: 17,
  },

  buttonContainer:{
    marginEnd: 40,
    marginStart: 40,
  },

  buttonText:{
    color: 'white',
  },


  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02a0d9',
    marginTop: 40,
    height: 50,
    borderRadius: 30,
  }


});

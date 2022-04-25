import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';
import { Entypo, FontAwesome, MaterialIcons, AntDesign, Ionicons, Foundation} from '@expo/vector-icons';

export default function App() {
  return (

    <ScrollView>
    <View style={styles.container}>

      <View style={styles.layer1}>
        <View style= {{flexDirection: 'row', justifyContent: 'space-between',width: 140,alignItems: 'center'}}>
        <TouchableOpacity>
      <Entypo name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style= {{fontWeight:'bold', fontSize: 18}}>E-Lectures</Text>
      </View>

      <View style= {{flexDirection: 'row', justifyContent: 'space-between',width: 90,alignItems: 'center'}}>
      <TouchableOpacity>
      <Image style= {{height:30, width: 30,borderRadius: 35}}
          source= {require('./assets/studentPP.jpg')}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
      <Entypo name="dots-three-vertical" size={20} color="#757575" />
      </TouchableOpacity>
      </View>
      </View>

   
    <ScrollView horizontal= {true}>
        <View>
        <View style={styles.layer2}>

          <View style= {styles.b1}>
          <TouchableOpacity>
          <Text style= {{fontWeight:'600', fontSize: 10, color: '#78909c'}}>LUCT - Lesotho</Text>
          </TouchableOpacity>
          </View>

          <View style= {styles.b2}>
          <TouchableOpacity>
          <Text style= {{fontWeight:'600', fontSize: 10, color: '#37474f'}}>LUCT - Malaysia</Text>
          </TouchableOpacity>
          </View>

          <View style= {styles.b3}>
          <TouchableOpacity>
          <Text style= {{fontWeight:'600', fontSize: 10, color: '#37474f'}}>LUCT - Botswana</Text>
          </TouchableOpacity>
          </View>

          <TouchableOpacity>
          <Text style= {{fontWeight:'600', fontSize: 12, color: 'blue'}}>See all</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.tittle}>
        <Text style= {{fontWeight:'600', fontSize: 12, color: '#37474f'}}>Courses</Text>
        </View>
       
        <View style={styles.layer3}>

        <ImageBackground style= {styles.c1}
          source= {require('./assets/bssm.jpg')}>

          <View style={{marginTop:10, width: 300, height: 20, alignItems: 'center'}}>
          <Text style= {{fontWeight:'700', fontSize: 13, color: '#0277bd'}}>Bsc in software Engineering with Multimedia</Text>
         </View>

         <Text style= {{fontWeight:'700', fontSize: 8, color: '#bdbdbd'}}>Faculty of Information & Communication Technology</Text>
         
         <View style= {{marginTop: 20}}>
         <Text style= {{fontWeight:'700', fontSize: 11, color: '#cfd8dc', width: 288}}>This Programme will direct students to the development and use of Multimedia systems,
          Students are exposed and trained in the relevent Programming skills with use of Multimedia applications </Text>
         </View>

        </ImageBackground>
     
        <ImageBackground style= {styles.c2}
          source= {require('./assets/fashin.jpg')}>

          <View style={{marginTop:10, width: 200, height: 20, alignItems: 'center',
          borderBottomWidth: 1, borderBottomColor: '#37474f'}}>
          <Text style= {{fontWeight:'700', fontSize: 11, color: 'hotpink'}}>Bachelor of Arts in Fashion Design</Text>
          </View>
      
          <Text style= {{fontWeight:'700', fontSize: 8, color: '#bdbdbd'}}>Faculty of Fashion & Lifestyle Creativity</Text>
       
        <View style= {{marginTop: 20}}>
         <Text style= {{fontWeight:'700', fontSize: 11, color: '#cfd8dc', width: 288}}>This Programme prepares students for a successful career as a Fashion designer and develor. Students will be able to explore and exploit 
         cutting- edge technology and aesthetics for clothing </Text>
         </View>

        </ImageBackground>

        <ImageBackground style= {styles.c3}
          source= {require('./assets/arch.jpg')}>
          
          <View style={{marginTop:10, width: 170, height: 20, alignItems: 'center',
           borderBottomWidth: 1, borderBottomColor: '#37474f'}}>
           <Text style= {{fontWeight:'700', fontSize: 11, color: 'limegreen'}}>Bsc in Architectural Studies</Text>
          </View>

          <Text style= {{fontWeight:'700', fontSize: 8, color: 'gray'}}>Faculty of Fashion Architecture & The Built Environment</Text>
        
         <View style= {{marginTop: 20}}>
         <Text style= {{fontWeight:'700', fontSize: 11, color: '#cfd8dc', width: 288}}>The Bachelor of Science in Architecture Studies is the first part of the architect's training. The three years in this Programme precede the final two years availaible in the Bachelor of Architecture </Text>
         </View>

        </ImageBackground>

        <View style= {{paddingTop: 130}}>
        <TouchableOpacity>
          <Text style= {{fontWeight:'600', fontSize: 12, color: 'gray'}}>See all</Text>
          </TouchableOpacity>
        </View>

        </View>
       
        </View>

    </ScrollView>

   <TextInput
      style={styles.search}
      placeholder="                   Search"
      onChangeText={(Text)=>(Text)} 
      />

    <View style={styles.layer5}>
      
    <View style={{marginTop:10, width: 330, height: 30, alignItems: 'center',
     justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#37474f'}}>
    <Text style= {{fontWeight:'600', fontSize: 12, color: '#37474f'}}>Bsc in software Engineering with Multimedia Y2S2</Text>
    </View>

    <View style= {styles.m1}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '78%'}}>
    <TouchableOpacity>
      <Image style= {{height:30, width: 30,borderRadius: 35}}
          source= {require('./assets/mdp.png')}></Image>
      </TouchableOpacity>

      <Text style= {{fontWeight:'bold', fontSize: 18, color: '#455a64'}}>Mobile Device Programming</Text>
      </View>
      <TouchableOpacity>
      <Entypo name="dots-three-vertical" size={20} color="#757575" />
      </TouchableOpacity>
      </View>

      <View style= {{marginRight: 288, marginTop: 40}}>
      <Text style= {{fontWeight:'600', fontSize: 10, color: '#455a64'}}>Ntholi Nkhatho</Text>
      </View>
      </View>
    
    <View style={styles.ib1}>
    <TouchableOpacity>
    <FontAwesome name="microphone" size={18} color="#37474f" />
    </TouchableOpacity>
    <TouchableOpacity>
    <FontAwesome name="video-camera" size={18} color="#37474f" />
    </TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="upgrade" size={18} color="#37474f" />
    </TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="grade" size={18} color="#37474f" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="people" size={18} color="#37474f" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Foundation name="clipboard-notes" size={18} color="#37474f" />
    </TouchableOpacity>
    </View>

    <View style= {styles.m2}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '78%'}}>
    <TouchableOpacity>
      <Image style= {{height:30, width: 30,borderRadius: 35}}
          source= {require('./assets/p.png')}></Image>
      </TouchableOpacity>

      <Text style= {{fontWeight:'bold', fontSize: 18, color: '#00b8d4', paddingRight: 28}}>Probability And Statistics</Text>
      </View>
      <TouchableOpacity>
      <Entypo name="dots-three-vertical" size={20} color="#00b8d4" />
      </TouchableOpacity>
      </View>

      <View style= {{marginRight: 288, marginTop: 40}}>
      <Text style= {{fontWeight:'600', fontSize: 10, color: '#00b8d4', marginRight: 21}}>Mrs Mathe</Text>
      </View>
      </View>
    
    <View style={styles.ib2}>
    <TouchableOpacity>
    <FontAwesome name="microphone" size={18} color="#00b8d4" />
    </TouchableOpacity>
    <TouchableOpacity>
    <FontAwesome name="video-camera" size={18} color="#00b8d4" />
    </TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="upgrade" size={18} color="#00b8d4" />
    </TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="grade" size={18} color="#00b8d4" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="people" size={18} color="#00b8d4" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Foundation name="clipboard-notes" size={18} color="#00b8d4" />
    </TouchableOpacity>
    </View>
 
    <View style= {styles.m3}>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '78%'}}>
    <TouchableOpacity>
      <Image style= {{height:30, width: 30,borderRadius: 35}}
          source= {require('./assets/database.jpeg')}></Image>
      </TouchableOpacity>

      <Text style= {{fontWeight:'bold', fontSize: 18, color: '#004d40', marginRight:90}}>Database Systems</Text>
      </View>
      <TouchableOpacity>
      <Entypo name="dots-three-vertical" size={20} color="#004d40" />
      </TouchableOpacity>
      </View>

      <View style= {{marginRight: 288, marginTop: 40}}>
      <Text style= {{fontWeight:'600', fontSize: 10, color: '#004d40'}}>Mrs Mahlakeng</Text>
      </View>
      </View>
    
    <View style={styles.ib3}>
    <TouchableOpacity>
    <FontAwesome name="microphone" size={18} color="#004d40" />
    </TouchableOpacity>
    <TouchableOpacity>
    <FontAwesome name="video-camera" size={18} color="#004d40" />
    </TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="upgrade" size={18} color="#004d40" />
    </TouchableOpacity>
    <TouchableOpacity>
    <MaterialIcons name="grade" size={18} color="#004d40" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Ionicons name="people" size={18} color="#004d40" />
    </TouchableOpacity>
    <TouchableOpacity>
    <Foundation name="clipboard-notes" size={18} color="#004d40" />
    </TouchableOpacity>
    </View>

    <View style= {styles.m4}>

<View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
<View style={{flexDirection: 'row', justifyContent: 'space-between', width: '78%'}}>
<TouchableOpacity>
<Image style= {{height:30, width: 30,borderRadius: 35}}
    source= {require('./assets/cpp.jpg')}></Image>
</TouchableOpacity>

<Text style= {{fontWeight:'bold', fontSize: 18, color: '#0d47a1', marginRight: 86}}>C++ Programming</Text>
</View>
<TouchableOpacity>
<Entypo name="dots-three-vertical" size={20} color="#0d47a1" />
</TouchableOpacity>
</View>

<View style= {{marginRight: 288, marginTop: 40}}>
<Text style= {{fontWeight:'600', fontSize: 10, color: '#0d47a1'}}>Mr Bhila</Text>
</View>
</View>

<View style={styles.ib4}>
<TouchableOpacity>
<FontAwesome name="microphone" size={18} color="#0d47a1" />
</TouchableOpacity>
<TouchableOpacity>
<FontAwesome name="video-camera" size={18} color="#0d47a1" />
</TouchableOpacity>
<TouchableOpacity>
<MaterialIcons name="upgrade" size={18} color="#0d47a1" />
</TouchableOpacity>
<TouchableOpacity>
<MaterialIcons name="grade" size={18} color="#0d47a1" />
</TouchableOpacity>
<TouchableOpacity>
<Ionicons name="people" size={18} color="#0d47a1" />
</TouchableOpacity>
<TouchableOpacity>
<Foundation name="clipboard-notes" size={18} color="#0d47a1" />
</TouchableOpacity>
</View>

    </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite'
  },
  layer1: {
    width: '100%',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#cfd8dc',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#eceff1'
  },
  layer2: {
    width: '47%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cfd8dc',
    backgroundColor: '#eceff1',
    paddingHorizontal: 10
  },
  b1: {
    width: 110,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderTopWidth: 1,
    borderTopColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    backgroundColor: '#eceff1',
    borderRadius: 14,
    marginRight: 25
  },
  b2: {
    width: 110,
    height: 28,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderTopWidth: 1,
    borderTopColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    backgroundColor: '#eceff1',
    borderRadius: 14,
    marginRight: 25,
    justifyContent: 'center'
  },
  b3: {
    width: 110,
    height: 28,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderTopWidth: 1,
    borderTopColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    backgroundColor: '#eceff1',
    borderRadius: 14,
    marginRight: 25,
    justifyContent: 'center'
  },
  tittle: {
    width: 110,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderTopWidth: 1,
    borderTopColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    backgroundColor: 'ghostwhite',
    borderRadius: 14,
    marginLeft: 140,
    marginTop: 10
  },
  layer3: {
    width: '100%',
    height: 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'ghostwhite',
    paddingHorizontal: 10,
    
  },
  c1: {
    width: 300,
    height: 135,
    alignItems: 'center',
    marginRight: 25,
  },
  c2: {
    width: 300,
    height: 135,
    alignItems: 'center',
    marginRight: 25,
    
  },
  c3: {
    width: 300,
    height: 135,
    alignItems: 'center',
    marginRight: 25,
    
  },
  layer4: {
    width: '82%',
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#37474f',
    borderRadius: 15,
    marginLeft: 36,
    marginTop:10,
    paddingHorizontal: 20
  },
  layer5: {
    width: 375,
    height: 720,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    backgroundColor: '#eceff1',
    borderRadius: 14,
    marginTop: 20
  },
  m1: {
    width: 370,
    height: 105,
    alignItems: 'center',
    backgroundColor: '#b0bec5',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    //justifyContent: 'center',
    marginTop: 15,
    paddingTop: 10,
    paddingLeft: 5
  },
 
  ib1: {
    width: 370,
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eceff1',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  m2: {
    width: 370,
    height: 105,
    alignItems: 'center',
    backgroundColor: '#b0bec5',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    //justifyContent: 'center',
    marginTop: 15,
    paddingTop: 10,
    paddingLeft: 5
  },
 
  ib2: {
    width: 370,
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eceff1',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  m3: {
    width: 370,
    height: 105,
    alignItems: 'center',
    backgroundColor: '#b0bec5',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    //justifyContent: 'center',
    marginTop: 15,
    paddingTop: 10,
    paddingLeft: 5
  },
 
  ib3: {
    width: 370,
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eceff1',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  m4: {
    width: 370,
    height: 105,
    alignItems: 'center',
    backgroundColor: '#b0bec5',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    //justifyContent: 'center',
    marginTop: 15,
    paddingTop: 10,
    paddingLeft: 5
  },
 
  ib4: {
    width: 370,
    height: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eceff1',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14
  },
  search: {
    width: 200,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#b0bec5',
    borderTopWidth: 1,
    borderTopColor: '#b0bec5',
    borderLeftWidth: 1,
    borderLeftColor: '#b0bec5',
    borderRightWidth: 1,
    borderRightColor: '#b0bec5',
    backgroundColor: 'ghostwhite',
    borderRadius: 14,
    marginLeft: 100,
    marginTop: 10
  },
});

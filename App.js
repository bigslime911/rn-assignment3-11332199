import { View, Text , SafeAreaView, FlatList, TextInput, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import CategoryMockUp from './src/MockUpData/CategoryMockUp'
import OngoingTaskMockUp from './src/MockUpData/OngoingTaskMockUp'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollstyle} showsVerticalScrollIndicator={false}>
        <View style={styles.profile}>
          <View style={{marginTop:"10px"}}>
            <View>
              <Text style={styles.profileText}> Hello , Devs</Text>
            </View>
            <View><Text> 14 task today</Text></View>
          </View>
          <TouchableOpacity>
            <Image source={require('./assets/person.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.searchDesign}>
          <View style={styles.searchInput}>
            <Image source={require("./assets/search.png")}/>
            <TextInput placeholder='Search' style={{width:270, marginLeft: 10,}}/>
          </View>
          <View>
            <Image source={require("./assets/setting.png")}/>
          </View>          
        </View>
        <View>
          <Text style={styles.category} >
            Categories
          </Text>
        </View>
        <View>
          <FlatList
            data={CategoryMockUp}
            keyExtractor={item => item.id.toString()}
            renderItem={({item})=>(
              <View style={styles.categoryItems}>
                <View>
                  <Text style={styles.categoryText}>{item.title}</Text>
                  <Text>{item.task}</Text>
                </View>
                <View>
                  <Image source={item.image}/>
                </View>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{columnGap: 15}}
            />
        </View>
        <View>
          <Text style={styles.category}>Ongoing Task</Text>
        </View>
        <View>
          <FlatList
            data={OngoingTaskMockUp}
            keyExtractor={item=>(item.id.toString())}
            renderItem={({item})=>(
              <View style={styles.Ongoing}>
                <Text style={styles.OngoingText}>{item.text}</Text>
              </View>
            )}
           contentContainerStyle={{rowGap:15}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}




export default App
const styles = StyleSheet.create({

  container:{
  flex:1,
  backgroundColor:"#F7F0E8",
  gap: 5,

  
  
 
    
  },
  profile:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    alignItems : "center",
    
  },
  profileText:{
    fontSize: 24,
    fontWeight: "bold"
  },
  scrollstyle:{
    marginHorizontal: 15
  },
  searchDesign:{
    flexDirection: "row",
    marginTop: 50,
    

  },
  searchInput: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 15,
    borderRadius: 15,

  },
  category:{
  marginTop: 25,
  fontSize: 15,
  fontWeight: "bold",
  marginBottom: 15,
  },
  categoryItems:{
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    
  },
  categoryText:{
    fontSize:15,
    fontWeight: "bold",
  },
  Ongoing:{
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E8D1BA"
  },
  OngoingText:{
    fontSize: 20,
    fontWeight: "bold"
  }
  
  
});

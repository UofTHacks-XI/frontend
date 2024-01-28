import styled from 'styled-components/native';
import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, AppRegistry } from 'react-native';
import NavBar from '../navbar';
import { Link } from 'expo-router';
import  { name }  from './index';
// import { Image } from 'react-native';
import {StyleSheet, TextInput} from 'react-native';
import { imgexp } from '../navbar'





const images = {
    beach: require("../../assets/images/beach_memories.png"),
    mountain: require("../../assets/images/mountain_memories.png"),
    aprilfools: require("../../assets/images/april_fools_memories.png"),
}

export default function HomePage() {
    let username: string = name;

    // const [imageUri, setImageUri] = useState(null);
    const [dynamicImageUri, setDynamicImageUri] = useState(null);

    useEffect(() => {
        // Assuming imgexp is an object with a valid URI property
        if (imgexp && imgexp.uri) {
          setDynamicImageUri({ uri: imgexp.uri });
        } else {
          // Placeholder image source or fallback
          setDynamicImageUri(require("../../assets/images/beach_memories.png"));
        }
    
        // Set the URI to the state
        // setImageUri(dynamicImageUri);
    }, [imgexp]); // Add imgexp as a dependency
    


    return (
        <>
            <ScrollView>
                <MainContainer>
                    <WelcomeTitle username={username} />
                    

                    {dynamicImageUri && <AlbumEntryTest key={1} pictures={dynamicImageUri} />}
                    <AlbumEntry key={2} pictures={images.mountain} albumdata={{ name: "Vancouver Mounts!", location: "Victoria, BC", date: "May 15th, 2023" }} />
                    <AlbumEntry key={3} pictures={images.aprilfools} albumdata={{ name: "April Fools", location: "Thunder Bay, ON", date: "Apr 1st" }} />
                </MainContainer>
            </ScrollView>

              <NavBar />

        </>
    );
}
const WelcomeH1 = styled.Text`
    margin: 124px 24px 12px 24px;
    font-size: 36px;
    font-family: "Inter";
`
const MainContainer = styled.View`
    flex: 1;
    background-color: rgb(176, 156, 204);
    overflow-y: scroll;

`

// ======================================================== Homepage welcome message

interface WelcomeTitleProps { username: string; }
function WelcomeTitle({ username }: WelcomeTitleProps) {
    return (
        <View>
            <WelcomeH1>Welcome Back {username} </WelcomeH1>
            <Divider />
        </View>
    );
} function Divider() {
    return (
        <View style={{
            borderStyle: 'solid',
            borderWidth: 1,
            borderRadius: 1,
        }}>
        </View>
    );
}

// ======================================================== Albums Entry

interface AlbumEntryProps { albumdata: object; pictures: any; }
interface AlbumEntryPropsTest { pictures: any; }

interface AlbumPictureProps { pictures: any; }
interface AlbumTextProps { albumdata: object; }
function AlbumEntry({ pictures, albumdata }: AlbumEntryProps) {
    return (
        <AlbumPair>
            <AlbumPictures pictures={pictures} />
            <AlbumText albumdata={albumdata} />
        </AlbumPair>
    );
} function AlbumEntryTest({ pictures }: AlbumEntryPropsTest) {
    return (
        <AlbumPair>
            <AlbumPictures pictures={pictures} />
            <AlbumTextTest />
        </AlbumPair>
    );
} function AlbumPictures({ pictures }: AlbumPictureProps) {
    // const albumimg: NodeRequire = require(pictures);
    return (
        <>
            <AlbumImage style={{ flex: 1 }} source={pictures} />
        </>
        /*
        <View style={{backgroundColor: "blue", height: 200, width: "auto", flex: 1, boxSizing: "border-box"}}>
            <AlbumImage source={pictures} />
        </View>
        */
    );

} 
let eventN = '';
let locationN = '';
let dateN = '';

function AlbumTextTest() {

    const [textEvent, onChangeEvent] = React.useState('');
    const [textLocation, onChangeLocation] = React.useState('');
    const [textDate, onChangeDate] = React.useState('');

    eventN = textEvent;
    locationN = textLocation;
    dateN = textDate

    return (

        <MasterContainer>
        
        <AlbumView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEvent}
                value={textEvent}
                placeholder="Event Name"
                placeholderTextColor={`rgba(0, 0, 0, 0.40)`}
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeLocation}
                value={textLocation}
                placeholder="Location"
                placeholderTextColor={`rgba(0, 0, 0, 0.40)`}
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeDate}
                value={textDate}
                placeholder="Date"
                placeholderTextColor={`rgba(0, 0, 0, 0.40)`}
            />  
            
           

        </AlbumView>



        <Container>
        <Link href = './memory_view'>
                  <BackButtonContainer>
                      <BackButtonText>View</BackButtonText>
                  </BackButtonContainer>
        </Link>
        </Container>

        

        </MasterContainer>


    );
} function AlbumText({ albumdata }: AlbumTextProps) {

    return (

        <MasterContainer>
        
        <AlbumView>
            
            
            {albumdata && <AlbumTextName>{albumdata?.name}</AlbumTextName>}
            {albumdata && <AlbumTextLocation>{albumdata?.location}</AlbumTextLocation>}
            {albumdata && <AlbumTextDate>{albumdata?.date}</AlbumTextDate>}

        </AlbumView>



        <Container>
        <Link href = './memory_view'>
                  <BackButtonContainer>
                      <BackButtonText>View</BackButtonText>
                  </BackButtonContainer>
        </Link>
        </Container>

        

        </MasterContainer>



    );
}

const styles = StyleSheet.create({
    input: {
      margin: 0,
      padding: 10,
      height: 40,
    //borderBottomWidth: 1,
    
    },

    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
      },
  });


const AlbumView = styled.View`
    background-color: "white";
    height: 120px;
    width: 100%;
    border-radius: 24px;
    flex-direction: column;
    display: flex;
    /* border: 1px solid blue;  */

`

const AlbumImage = styled.Image`
    width: auto;
    height: 200px;
    border-radius: 8px;
`

const AlbumPair = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow: hidden;
    align-items: center;
    margin: 14px 0;
`

const AlbumTextName = styled.Text`
    position: absolute;
    top: 18px;
    left: 15px;
    /* border: 1px solid blue;
    border-bottom-width: 1px; */
`

const AlbumTextLocation = styled.Text`
    position: absolute;
    top: 54px;
    left: 15px;
`

const AlbumTextDate = styled.Text`
    position: absolute;
    top: 90px;
    left: 15px;
`

// const Lines = styled.View`
//     position: absolute;
//     margin: 24px 0 0 20px;
// `

// const AlbumContainer = styled.View`
//   display: flex;
// `


const MasterContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-left: 10px;
    

`

const BackButtonContainer = styled.View`
    display: flex;
    position: relative; 
    transition: 0.375s;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    width: 70px;
    height: 35px;
    justify-content: center;
`

const BackButtonText = styled.Text`
    font-size: 16px;
    
`
const Container = styled.View`
  padding-left: 20px;
  position: relative;
  top: 10px;
  right: 10px;


`

export {dateN, locationN, eventN}; 
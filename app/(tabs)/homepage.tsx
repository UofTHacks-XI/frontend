import styled from 'styled-components/native';
import { View, Text, ScrollView, AppRegistry } from 'react-native';
import NavBar from '../navbar';
import { Link } from 'expo-router';
// import { Image } from 'react-native';

const images = {
    beach: require("../../assets/images/beach_memories.png"),
    mountain: require("../../assets/images/mountain_memories.png"),
    aprilfools: require("../../assets/images/april_fools_memories.png"),
}

export default function HomePage() {
    let username: string = "Carl";
    return (
        <>
            <ScrollView>
                <MainContainer>
                    <WelcomeTitle username={username} />
                    

                    <AlbumContainer>
                      <AlbumEntry key={1} pictures={images.beach} albumdata={{ name: "Awesome Beach Days", location: "Thunder Bay, ON", date: "June 23rd, 2023" }} />
                    </AlbumContainer>


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
interface AlbumPictureProps { pictures: any; }
interface AlbumTextProps { albumdata: object; }
function AlbumEntry({ pictures, albumdata }: AlbumEntryProps) {
    return (
        <AlbumPair>
            <AlbumPictures pictures={pictures} />
            <AlbumText albumdata={albumdata} />
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
    left: 22px;
`

const AlbumTextLocation = styled.Text`
    position: absolute;
    top: 54px;
    left: 22px;
`

const AlbumTextDate = styled.Text`
    position: absolute;
    top: 90px;
    left: 22px;
`

// const Lines = styled.View`
//     position: absolute;
//     margin: 24px 0 0 20px;
// `

const AlbumContainer = styled.View`
  display: flex;
`


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


`
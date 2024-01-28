// import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import { launchImageLibrary } from "react-native-image-picker";
import styled from 'styled-components/native';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon  from 'react-native-vector-icons/Feather'
import FontAwesome  from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from "expo-image-picker";


interface FullIconProps {
  isButtonActive: boolean;

}

let imgexp;
const NavBar: React.FC = () => {
  const [img, setimg] = useState({});
  const [isButtonActive, setIsButtonActive] = useState(false);
  const handleButtonPress = () => {
    // Toggle the direction when the button is pressed
    setIsButtonActive(!isButtonActive);
  };

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      exif: true,
      quality: 0
    });

    let data = result.assets[0].exif;
    if (!result.canceled) {
      const output = {
        uri: result.assets[0].uri,
        
        // Ignore errors
        lat: (data.GPUSLatitudeRef !== "N" ? 1 : -1) * data.GPSLatitude,
        lng: (data.GPUSLongitudeRef === "E" ? 1 : -1) * data.GPSLongitude,
      };
      // console.log(result.assets[0].exif);
      setimg(output);
      imgexp = output;
    }
  }
  
  return (
    <Nav isButtonActive={isButtonActive}>
      <NavbarContainer>
      {/* <Text style={styles.title}>Welcome back {username}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/*<EditScreenInfo path="app/(tabs)/index.tsx" />*/}
        <TouchableOpacity onPress={handleButtonPress} >
          <FullIcon isButtonActive={isButtonActive} >
              <FontAwesome5Icon name="equals" size={25} color="black" />
          </FullIcon>
        </TouchableOpacity>

        <SideBarContainer isButtonActive={isButtonActive}>
          <IconContainer>
            <TouchableOpacity onPress={uploadImage}>
            {/* <Link href = "/(tabs)/memory_view"> */}
              <Icons>
                <FeatherIcon name="plus" size={25} color="black" /> 
              </Icons>
              {/* </Link> */}

            </TouchableOpacity>
            <IconText>create a new memory</IconText>
          </IconContainer>

          <IconContainer>
              <TouchableOpacity>
              <Link href = "/(tabs)/homepage">

                <Icons>
                  <FontAwesome name="pencil" size={25} color="black" />
                </Icons>
                </Link>
              </TouchableOpacity>
            <IconText>view memories</IconText>
          </IconContainer>

          <IconContainer>
            <TouchableOpacity>
              <Link href = "/(tabs)/memory_pano">
              <Icons>
                <MaterialIcons name="settings" size={25} color="black" /> 
              </Icons>
              </Link>
            </TouchableOpacity>
            <IconText>settings</IconText>
          </IconContainer>

          <IconContainer>
            <TouchableOpacity>
              <Icons>
                <Ionicons name="person" size={25} color="black" /> 
              </Icons>
            </TouchableOpacity>
            <IconText>account</IconText>
          </IconContainer>




          </SideBarContainer>

        </NavbarContainer>
      </Nav>
    );
  }

export default NavBar;

//Button styles

const Nav = styled.View<FullIconProps>`
    display: flex;
    font-size: 1rem; 
    width:  ${({ isButtonActive }) => (isButtonActive ? '100%' : '0px')};
    height:  ${({ isButtonActive }) => (isButtonActive ? '100%' : '0px')};
    position: absolute;
    /* border: 1px solid blue;    */
    left: ${({ isButtonActive }) => (isButtonActive ? '0px' : '86%')};
    padding-top: ${({ isButtonActive }) => (isButtonActive ? '180%' : '660px')};
    background-color: ${({ isButtonActive }) => (isButtonActive ? 'rgba(0,0,0,0.8)' : 'transparent')};
`

const NavbarContainer = styled.View`
    display: flex; 
    justify-content: space-between; 
    height: 80px;
    z-index: 1;
    transition: 0.375s;
    flex-direction: column-reverse;
    align-items: flex-end;    
    padding: 25px;
    /* border: 1px solid blue;    */

`

const FullIcon = styled.View<FullIconProps>`
    display: flex;
    position: relative; 
    transition: 0.375s;
    align-items: center;
    background-color: white;
    border-radius: 25px;
    width: 48px;
    height: 48px;
    opacity: ${({ isButtonActive }) => (isButtonActive ? '1' : '0.4')};
    justify-content: center;
    transition: 0.5s ease-in-out; 
    transform: ${({ isButtonActive }) => (isButtonActive ? 'rotate(90deg)' : 'rotate(0deg)')};
`

//Navbar 

const SideBarContainer = styled.View<FullIconProps>`
    z-index: 999; 
    display: ${({isButtonActive }) => (isButtonActive ? "flex" : "none")}; 
    transition: 0.375s ease;
    /* ]border: 1px solid blue;  */
    width: 200px;
    transition: 0.375s;
    height: 315px;
    flex-direction: column;
    gap: 30px;
    align-items: flex-end;
  
`

const Icons = styled.View`
    display: flex;
    font-size: 24px; 
    position: relative; 
    transition: 0.375s;
    align-items: center;
    background-color: white;
    border-radius: 25px;
    width: 48px;
    height: 48px;
    justify-content: center;
`
const IconContainer = styled.View`
    width: 220px;
    display: flex;
    align-items: flex-end;
    /* border: 1px solid blue;  */
    flex-direction: row-reverse;

`

const IconText = styled.Text`
    color: white;
    display: flex;
    align-items: center;
    font-size: 18px;
    justify-content: center;
    /* border: 1px solid blue;  */
    padding-bottom: 7%;
    padding-right: 10%;

`

export { imgexp };
import React from "react";
import styled from 'styled-components/native';
import { Link } from 'expo-router';
import { Image } from "react-native";
import AntDesign  from 'react-native-vector-icons/AntDesign'


import {StyleSheet, TextInput} from 'react-native';
// import { useRootNavigationState, Redirect } from "expo-router";



let name = ''; 
export default function LoginPage() {
    // const rootNavigationState = useRootNavigationState();

    // if (!rootNavigationState?.key) return null;

    const [textEmail, onChangeText] = React.useState('');
    const [textPass, onChangeNumber] = React.useState('');

    const style = {
        height: "auto",
        width: "36px"
    }

    name = textEmail;
    return (
        <MainContainer>
            <TitleContainer>
                <Logo source={ require("../../assets/images/Frame_3.png") } />
                <Text>Nos Album</Text>
            </TitleContainer>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={textEmail}
                placeholder="Name"
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={textPass}
                placeholder="Password"
                placeholderTextColor={'black'}
            />

            <MasterButtons>
                <Link href = './homepage'>
                    <LoginButtonContainer>
                        <LoginButtonText>Login</LoginButtonText>
                    </LoginButtonContainer>
                </Link>

                <Link href = './homepage'>
                    <SignButtonContainer>
                        <SignButtonText>Sign Up</SignButtonText>
                    </SignButtonContainer>
                </Link>

            </MasterButtons>

            <TextContainerOR>
                <TextOR>- OR -</TextOR>
            </TextContainerOR>


            <MasterButtonsLogo>
                    <AntDesign name="google" size={55} color="black" />

                    <AntDesign name="apple1" size={55} color="black" />
            </MasterButtonsLogo>


        </MainContainer>
    );
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderBottomWidth: 1,
      padding: 10,

    },
  });
  

const MainContainer = styled.View`
    flex: 1;
    background-color: rgb(218, 189, 152);
    
`

const Text = styled.Text`
    color: black;
    font-size: 45px;
`

const TitleContainer = styled.View`
    padding-top: 50%;
    align-items: center;
`

const MasterButtons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 35px;
    top: 17%;
    /* border: 1px solid blue;   */

`

// const LoginButtonMasterContainer = styled.View`

// `

const LoginButtonContainer = styled.View`
    display: flex;
    position: relative; 
    transition: 0.375s;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    width: 130px;
    height: 50px;
    justify-content: center;

`

const LoginButtonText = styled.Text`
    font-size: 28px;
`

// const SignButtonMasterContainer = styled.View`
    
// `

const SignButtonContainer = styled.View`
    display: flex;
    position: relative; 
    transition: 0.375s;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    width: 130px;
    height: 50px;
    justify-content: center;

`

const SignButtonText = styled.Text`
    font-size: 28px;
`

const TextContainerOR = styled.View`
    display: flex;
    align-items: center;
    margin-top: 30%;
        /* border: 1px solid blue;   */


`

const TextOR = styled.Text`
    font-size: 20px;
`

const Logo = styled.Image`
    position: absolute;
    top: 48px;
    height: 124px;
    width: 124px;
`
const MasterButtonsLogo = styled.View` 
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100%;
    padding-top: 10%;
`

export { name };
import React from "react";
// import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Link } from 'expo-router';
import CarouselComponent from "../carousel";
import FontAwesome6  from 'react-native-vector-icons/FontAwesome6'
import { imgexp } from "../navbar";
import { TouchableOpacity } from 'react-native';
import * as Linking from "expo-linking";


export default function MemoryView() {
    let albumname: string = "Beach Days";
    let albumdate: string = "2023 June 27th";
    let photos: any[] = [];

    if (imgexp) console.log(imgexp.lng, imgexp.lat);
    console.log(1);

    const carouselItems = [
        { title: 'Item 1', text: 'Text 1' },
        { title: 'Item 2', text: 'Text 2' },
        { title: 'Item 3', text: 'Text 3' },
        { title: 'Item 4', text: 'Text 4' },
        { title: 'Item 5', text: 'Text 5' },
    ];

    const handleButtonPress = () => {
        const server: string = "https://100.65.3.231:8080/";
        console.log(`${server}?lng=${imgexp.lng}&lat=${imgexp.lat}`);
        Linking.openURL(`${server}?lng=${imgexp.lng}&lat=${imgexp.lat}`);
    };

    return (
        <MainContainer>
            <ContentContainer>  
                <BackButtonMasterContainer>
                    <Link href = './homepage'>
                        <BackButtonContainer>
                            <BackButtonText>Back</BackButtonText>
                        </BackButtonContainer>
                    </Link>
                </BackButtonMasterContainer>

                <Date> 
                    <TextTitle>{albumname}</TextTitle>
                    <TextDate>{albumdate}</TextDate>
                </Date>

                {/* Render your photos here */}

            </ContentContainer>

            <CarouselContainer>
                <CarouselComponent items={carouselItems} />
            </CarouselContainer>


        <TouchableOpacity onPress = {handleButtonPress} >
            <RevisitMainContainer>
                {/* <Link href = './homepage'> */}
                <RevisitContainer>
                    <Icons>
                        <FontAwesome6 name="wand-magic-sparkles" size={25} color="black" /> 
                    </Icons>
                    <RevisitText>Revisit</RevisitText>
                </RevisitContainer>
                {/* </Link> */}
            </RevisitMainContainer>

        </TouchableOpacity>
            
        </MainContainer>
    );
}

const MainContainer = styled.View`
    flex: 1;
    background-color: rgb(136, 204, 172);
`;

const ContentContainer = styled.View`
    padding-top: 20%;
    display: flex;
    flex-direction: row;
    gap: 50px;
    /* border: 1px solid blue; */
`

const Date = styled.View`

`

const TextTitle = styled.Text`
    font-size: 24px;
`

const TextDate = styled.Text`
    font-size: 16px;
    opacity: 0.4;
`

const BackButtonMasterContainer = styled.View`
    position: relative;
    left: 15px;
`

const BackButtonContainer = styled.View`
    display: flex;
    position: relative; 
    transition: 0.375s;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    width: 78px;
    height: 43px;
    justify-content: center;
`

const BackButtonText = styled.Text`
    font-size: 16px;
    
`

const CarouselContainer = styled.View`
    padding-top: 15%;
`


const RevisitMainContainer = styled.View`
    position: relative;
    justify-content: center;
    align-items: center;
    padding-top: 15%;
`

const RevisitContainer = styled.View`
    display: flex;
    position: relative; 
    transition: 0.375s;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    width: 180px;
    height: 70px;
    gap: 10px;
    flex-direction: row-reverse;
    justify-content: center;
`

const RevisitText = styled.Text`
    font-size: 30px;
`

const Icons = styled.View`
    display: flex;
    position: relative;
    right: 10%;
    width: 48px;
    height: 48px;
    justify-content: center;
`
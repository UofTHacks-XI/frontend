import React, { RefObject, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image
} from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import styled from 'styled-components/native';

interface CarouselItem {
  title: string;
  text: string;
  img: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

interface CarouselState {
  activeIndex: number;
  text: string;
}

export default class CarouselComponent extends React.Component<CarouselProps, CarouselState> {
  private carouselRef: RefObject<Carousel<CarouselItem>>;


  
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      activeIndex: 0,
      text: ""
    };
    this.carouselRef = React.createRef();
  }

  
  

  _renderItem({ item, index }: { item: CarouselItem; index: number }) {
    // let imageSource;

    // // if (item.img && typeof item.img === 'string') {
    //   if (item.img && item.img.startsWith('file')) {
    //     // If item.img is a URI
    //     imageSource = { uri: item.img };
    //   } else {
    //     // If item.img is a local image path
    //     imageSource = require(item.img);
    //   }
    // // }
  
    return (
      <View style={carouselStyles.carouselItem}>
        {item.img  && <PhotoImage style={{ flex: 1 }} source={{ uri: item.img }}/>}
        
        {/* <Text style={carouselStyles.carouselTitle}>{item.title}</Text>
        <Text>{item.text}</Text> */}
      </View>
    );
  }

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;
    // const [text, settext] = useState("");
    return (
      <SafeAreaView>
        <Container >
          <Carousel
            layout="default"
            ref={this.carouselRef}
            data={items}
            sliderWidth={350}
            itemWidth={330}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeIndex: index })}
          />
          <TextInput
                style={styles.input}
                onChangeText={(e) => { 
                  this.setState({text: e})
                }}
                value={this.state.text}
                placeholder="Description :)"
                placeholderTextColor={`rgba(0, 0, 0, 0.40)`}
          />
          <Pagination
            dotsLength={items.length}
            activeDotIndex={activeIndex}
            containerStyle={carouselStyles.paginationContainer}
            dotColor="black"
            dotStyle={carouselStyles.paginationDot}
            inactiveDotColor="gray"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </Container>
      </SafeAreaView>
    );
  }
}

const carouselStyles = StyleSheet.create({
  
  carouselItem: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    height: 350,
    width: 300,
    marginLeft: 25,
    marginRight: 25,
  },
  carouselTitle: {
    fontSize: 30,
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    textAlign: `center`,

  },
});

const SafeAreaView = styled.SafeAreaView`
    /* border: 1px solid blue;  */
    justify-content: center;
    align-items: center;
    height: 400px;

`

const Container = styled.View`
    flex-direction: 'row';
    justify-content: 'center';
    width: 100%;
    height: 400px;
    /* border: 1px solid blue;  */

`

const PhotoImage = styled.Image`
    width: auto;
    height: 200px;
    border-radius : 8px;
`
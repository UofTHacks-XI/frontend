import React, { RefObject } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';
import styled from 'styled-components/native';


interface CarouselItem {
  title: string;
  text: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

interface CarouselState {
  activeIndex: number;
}

export default class CarouselComponent extends React.Component<CarouselProps, CarouselState> {
  private carouselRef: RefObject<Carousel<CarouselItem>>;

  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.carouselRef = React.createRef();
  }

  _renderItem({ item, index }: { item: CarouselItem; index: number }) {
    return (
      <View style={carouselStyles.carouselItem}>
        <Text style={carouselStyles.carouselTitle}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    const { items } = this.props;
    const { activeIndex } = this.state;

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
    backgroundColor: 'floralwhite',
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


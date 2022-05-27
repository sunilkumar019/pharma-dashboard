import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  //CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.dexonbiotech.com/wp-content/uploads/2022/03/b2.jpg',
    altText: 'Slide 3',
    caption: ''
  },
  {
    src: 'https://thumbs.dreamstime.com/z/banner-stethoscope-drug-pill-doctor-medical-nursing-people-check-up-healing-patients-banner-stethoscope-drug-210129410.jpg',
    altText: 'Slide 1',
    caption: '',
  },
  {
    src: 'https://www.dexonbiotech.com/wp-content/uploads/2022/03/b3.jpg',
    altText: 'Slide 2',
    caption: ''
  },

];

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
       
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                width: 100%;
                height: 500px;
                background: black;
              }`
          }
        </style>

        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous} >

          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}
export default Slider;
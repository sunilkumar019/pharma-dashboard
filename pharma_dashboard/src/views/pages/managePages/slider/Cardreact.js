


{/*import React, { Component } from 'react';
import { GetProducts } from "src/api/products/allProducts/products";

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CardImg
} from 'reactstrap';



class Cardreact extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            activeIndex: 0
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }


    getProducts = async () => {
        let res = await GetProducts();

        if (res.success === true) {
            this.setState({ items: res.data });
        }

    }
    componentDidMount() {
        this.getProducts()
    }

    componentDidMount
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = this.state.items.map((item) => {
            return (
                <CarouselItem

                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={this.state.items.src}
                >

                    <div className="cards-wrapper pt-3 " style={{ display: "flex", justifyContent: "center" }}>
                        <div className="card  d-none d-md-block">
                            <CardImg src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/Acedex-P-1.jpg" height={200} width={300} className="card-img-top" alt="..." />
                            <div className="card-body">
                            </div>
                            <div>
                            <a href="#" className="h5 text-decoration-none bg-dark text-light py-2 px-5"><b>{item.name}</b></a>
                        </div>

                        </div>
                        
                    </div>
                </CarouselItem>
            );
        });

        return (
            <div>


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
export default Cardreact;*/}
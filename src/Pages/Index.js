import React, { Component } from "react";
import HeaderNav from "../Components/Layout/HeaderNav";
import Footer from "../Components/Layout/Footer";
import CarouselHead from "../Components/Carousel";
import Introduction from "../Components/Text/Introduction";
import Flyer from "../Components/Assets/Flyer";
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (
            <div>
                <HeaderNav/>
                <CarouselHead/>
                <Flyer/>
                <Introduction/>
                <Footer/>
            </div>);
    }
}

export default Index;

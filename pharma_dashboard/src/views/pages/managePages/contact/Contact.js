
import React, { Component } from "react";
//import { GetAbout } from "src/api/about/about";
import { Button, Form } from "reactstrap";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    Col,
    CardTitle,
    Row
} from 'reactstrap';


class Contact extends Component {



    /*constructor(props) {
      super(props);
      this.state = {
        items: [],
       
        loading: true
      };
    }
  
    getData = async () => {
      let rs = await GetAbout();
      if (rs.success === true) {
        this.setState({ items: rs.data });
        this.setState({ loading: false })
      }
    }
  
    //** ComponentDidMount Function **
  
    async componentDidMount() {
      this.getData()
    }
  */

    render() {

           return (

            <div >

                {/*contact us*/}
                <div>
                    <Card inverse>
                        <CardImg
                            alt="Card image cap"
                            src="https://thumbs.dreamstime.com/b/contact-us-banner-suitable-website-header-58969407.jpg"
                            width="100%"
                            height="224px"
                        />
                        <CardImgOverlay>

                            <CardText className="animated fadeInRight slower infinite pt-5">
                                <h1 style={{ fontWeight: "bold", fontSize: "52px" }}>Contact Us</h1>
                            </CardText>
                        </CardImgOverlay>
                    </Card>
                </div>

                <section >
                    <div className="container-lg py-8 mt-5">
                        <div className="row justify-content-center"></div>
                        <Row className="justify-content-center h-100 pt-3 g-4">

                            <Col sm="4"   >
                                <Card body className="animated pulse slower infinite rounded-lg p-3 p-md-2 p-lg-3 p-xl-5 text-center text-md-start  pt-md-5" style={{ height: "250px" }}>
                                    <div> <i className="border border-danger p-3 rounded-circle globalColor10 fas fa-map-marker-alt mx-5"></i></div>
                                    <CardTitle className="h4">
                                        <strong>Our Location</strong>
                                    </CardTitle>
                                    <CardText>
                                        <a className="globalColor10" href="#" >{this.props.value.address}</a>
                                    </CardText>

                                </Card>
                            </Col>
                            <Col sm="4"  >
                                <Card body className="animated pulse slower infinite rounded-lg p-3 p-md-2 p-lg-3 p-xl-5 text-center text-md-start pt-md-5" style={{ height: "250px" }}>
                                    <div className=""><i className="border border-danger p-3 rounded-circle globalColor10 fa fa-phone mx-5"></i></div>
                                    <CardTitle className="h4">
                                        <strong>Contact Us Anytime</strong>
                                    </CardTitle>
                                    <CardText>
                                        <a className="globalColor10" href="">{this.props.value.phone}</a>
                                    </CardText>

                                </Card>
                            </Col>
                            <Col sm="4"  >
                                <Card className="animated pulse slower infinite rounded-lg  p-3 p-md-2 p-lg-3 p-xl-5 text-center text-md-start  pt-md-5" style={{ height: "250px" }}>
                                    <div className="">  <i className="border border-danger p-3 rounded-circle  globalColor10 fa fa-envelope mx-5"></i></div>
                                    <CardTitle className="h4">
                                        <strong>Write Some Words</strong>
                                    </CardTitle>
                                    <CardText>
                                        <a className="globalColor10" href="">{this.props.value.email}</a>
                                    </CardText>

                                </Card>
                            </Col>

                        </Row>
                    </div>
                </section>


                {/* map & email */}
                <section >



                    <div className="container-fluid my-3">
                        <div className="row text-center" >

                            <div className="col-12 col-md-6" >
                                <h1 className=" h2 text-dark text-center pt-3 pl-5"><b>Get In Touch </b></h1>
                            </div>
                            <div className="col-12 col-md-6" >
                                <h1 className=" h2 text-dark  text-md-center text-center pt-3 "><b><span className="globalColor10">Send Us A Message
                                </span></b></h1>
                            </div>
                        </div>
                        <div className="container" >


                            <div className="row text-center" >

                                <div className="col-12 col-md-6 mb-4" >

                                    <div className="map-responsive ">
                                        <iframe frameBorder="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=+(Arlak%20Biotech%20Pvt%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ height:"420px", width:"500px" }} allowFullScreen></iframe>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 mb-4 rounded-lg" style={{ backgroundColor: "LightGray",height:"420px", width:"500px" }}>

                                    <div className="row pt-2">
                                        <div className="col-xl-9 mx-auto  wow zoomIn" data-wow-duration="1.1s">
                                            <div className="cta-inner text-center rounded">

                                                <div className="contactForm pt-5">
                                                    <Form>
                                                        <div className="form-group">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <input type="text" className="form-control" placeholder="Your Name" />
                                                                </div>
                                                                <div className="col">
                                                                    <input type="email" className="form-control" placeholder="Email" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="mobile" className="form-control" placeholder="Phone Number " required="required" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="mobile" className="form-control" placeholder="City" required="required" />
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea className="form-control" rows="4" cols="50" placeholder="Message"></textarea>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-md-4 mr-5">
                                                                <Button color="primary" type="submit" className="rounded-lg mr-3" size="md" >Submit</Button>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;














{/*import React from "react";

import { Button, Form } from "reactstrap";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    Col,
    CardTitle,
    Row
} from 'reactstrap';


const Contact = () => {
    return (

        <div >

         
            <div>
                <Card inverse>
                    <CardImg
                        alt="Card image cap"
                        src="https://thumbs.dreamstime.com/b/contact-us-banner-suitable-website-header-58969407.jpg"
                        width="100%"
                        height="224px"
                    />
                    <CardImgOverlay>

                        <CardText className="animated fadeInRight slower infinite pt-5">
                            <h1 style={{ fontWeight: "bold", fontSize: "52px" }}>Contact Us</h1>
                        </CardText>
                       </CardImgOverlay>
                </Card>
            </div>

            <section >
                <div className="container-lg py-8 mt-5">
                    <div className="row justify-content-center"></div>
                    <Row className="justify-content-center h-100 pt-3 g-4">

                        <Col sm="4"   >
                            <Card body className="animated pulse slower infinite rounded-lg p-3 p-md-2 p-lg-3 p-xl-5 text-center text-md-start  pt-md-5" style={{ height: "250px" }}>
                                <div className=""> <i className="border border-success p-3 rounded-circle  text-success fas fa-map-marker-alt mx-5"></i></div>
                                <CardTitle className="h4">
                                    <strong>Our Location</strong>
                                </CardTitle>
                                <CardText>
                                    <a className="text-success" href="">Ground floor 101/2 - Rani bagh
                                        Ambala Cantt, 133001, Haryana,</a>
                                </CardText>

                            </Card>
                        </Col>
                        <Col sm="4"  >
                            <Card body className="animated pulse slower infinite rounded-lg p-3 p-md-2 p-lg-3 p-xl-5 text-center text-md-start pt-md-5" style={{ height: "250px" }}>
                                <div className=""><i className="border border-success p-3 rounded-circle text-success fa fa-phone mx-5"></i></div>
                                <CardTitle className="h4">
                                    <strong>Contact Us Anytime</strong>
                                </CardTitle>
                                <CardText>
                                    <a className="text-success" href="">+91 7015957123</a>
                                </CardText>

                            </Card>
                        </Col>
                        <Col sm="4"  >
                            <Card className="animated pulse slower infinite rounded-lg  p-3 p-md-2 p-lg-3 p-xl-5 text-center text-md-start  pt-md-5" style={{ height: "250px" }}>
                                <div className="">  <i className="border border-success p-3 rounded-circle  text-success fa fa-envelope mx-5"></i></div>
                                <CardTitle className="h4">
                                    <strong>Write Some Words</strong>
                                </CardTitle>
                                <CardText>
                                    <a className="text-success" href="">dexonbiotech@gmail.com
                                        ambalavivek@gmail.com</a>
                                </CardText>

                            </Card>
                        </Col>

                    </Row>
                </div>
            </section>


         
            <section >

                <h1 className=" h2 text-dark  text-center pt-3 ">Get In Touch & <span className="text-success">Send Us A Message

                </span></h1>
                <div className="container pb-5" >


                    <div className="row text-center" >

                        <div className="col-12 col-md-6 mb-4 " >

                            <div className="map-responsive">
                                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" style={{ padding: "0 25px 0 15px" }} allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 mb-4 rounded-lg" style={{ backgroundColor: "LightGray" }}>

                            <div className="row pt-2">
                                <div className="col-xl-9 mx-auto  wow zoomIn" data-wow-duration="1.1s">
                                    <div className="cta-inner text-center rounded">

                                        <div className="contactForm pt-5">
                                            <Form>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col">
                                                            <input type="text" className="form-control" placeholder="Your Name" />
                                                        </div>
                                                        <div className="col">
                                                            <input type="email" className="form-control" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="mobile" className="form-control" placeholder="Phone Number " required="required" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="mobile" className="form-control" placeholder="City" required="required" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea className="form-control" rows="4" cols="50" placeholder="Message"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-4 mr-5">
                                                        <Button color="primary" type="submit" className="rounded-lg mr-3" size="md" >Submit</Button>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section>




        </div>
    )
}


export default Contact; */}
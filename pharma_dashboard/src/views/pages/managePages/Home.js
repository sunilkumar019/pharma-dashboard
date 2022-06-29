import React, { useEffect, useState } from "react";
import {
  CCard,
  CRow,
  CCol,
  CCardBody,
  CCardTitle,
  CCardText,
} from '@coreui/react'
import {
  Button, Form,
  Card,
  CardText,
  Col,
  CardTitle,
  Row
} from "reactstrap";
import Slider from './slider/Slider';
import { GetType } from "src/api/products/productType/productType";
import { GetAbout } from "src/api/about/about.js";
import Bannerimage from "../../../assets/dashboard/banner.jpg";
import { Link } from "react-router-dom";
import { UserProfile } from "src/api/user/user";



const Home = (props) => {
  const [data, setData] = useState([]);
  const [banner, setBanner] = useState("");
  const [loading, setLoading] = useState(true);
  const [noOfElement, setnoOfElement] = useState(8);
  const [user, setUser] = useState('');

  const slice = data.slice(0, noOfElement);


  const viewAll = () => {

    setnoOfElement(noOfElement + noOfElement);
  
    
  }

  //Product category
  async function getType() {
    let rs = await GetType();
    if (rs.success === true) {
      setData(rs.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    const getUser = async () => {
      let rs = await UserProfile();

      if (rs.success === true) {
        setUser(rs.data);
      }
    }
    getUser();
  }, []);


  //banner
  async function getAbout() {
    let res = await GetAbout();
    if (
      res.success === true &&
      res.data != null &&
      res.data.about_img != null
    ) {
      setBanner(res.data.about_img);
    } else {
      setBanner(Bannerimage);
    }
    setLoading(false);
  }

  useEffect(() => {
    getType();
    getAbout()
  }, []);


  
  return (
    <div>
      {/*carousel*/}
      <Slider />


      {/*welcome*/}

      <div className="container pt-5">
        <div className="row text py-3">
          <div className="col-lg-12 m-auto">
            <h1 className="h1 pl-3 animated pulse slower infinite "><span className=" slide-out-right text-dark">Welcome To</span>&nbsp;<span className="globalColor10">{user.company}</span></h1>
            <p>{props.value.about}
            </p>
          </div>
        </div>
      </div>


      {/*our products*/}
     
      <section >
        <div className="container ">
          <div className="row text-center py-4 ">
            <div className="col-lg-6 m-auto">
              <h1 className="h3 text-dark"><b>Our <span className="globalColor10">Products</span></b></h1>
            </div>
          </div>
          <div className="row text-center mt-2">
            {
              props.pro.slice(0,4).map((item)=> {
                return (
                  <>
                    <div className="col-12 col-md-3 mb-5 ">
                      <CCard className="shadow rounded  card19" >
                        <a href="#">
                          <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/Cefdex-200-300x300.jpg" className="card-img-top" style={{height:"250px", width:"100%"}} alt="medicine" />
                        </a>
                      </CCard>
                      <CCardBody className=" py-2 bg-dark">

                        <a href="#" className="h6 text-decoration-none  text-light">{item.name}</a>
                       </CCardBody>
                    </div>
                  </>
                )
              })
            }


          </div>
        </div>
      </section >


      {/* cards*/}
      <section className="bg-light py-5 mt-5">
        <div   >
          <CRow xs={{ cols: 1 }} md={{ cols: 4 }} className="g-4 mx-1 py-3">
            <CCol xs>
              <CCard className="h-100 card20" style={{ borderRadius: "10px" }}>
                <img className=" rounded-lg px-4 pt-4 " src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/network-1.jpg" />
                <CCardBody>

                  <CCardText>
                    <span> This is a wider card with supporting text below as a natural lead-in to additional</span>

                  </CCardText>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 card20" style={{ borderRadius: "10px" }}>
                <img className=" rounded-lg px-4 pt-4 " src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/network-2.jpg" />
                <CCardBody>

                  <CCardText>
                    <span> This is a wider card with supporting text below as a natural lead-in to additional</span>

                  </CCardText>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 card20" style={{ borderRadius: "10px" }}>
                <img className=" rounded-lg px-4 pt-4 " src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/network-3.jpg" />
                <CCardBody>

                  <CCardText>
                    <span> This is a wider card with supporting text below as a natural lead-in to additional</span>

                  </CCardText>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 card20" style={{ borderRadius: "10px" }} >
                <img className=" rounded-lg px-4 pt-4 " src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/network-4.jpg" />
                <CCardBody>

                  <CCardText>
                    <span> This is a wider card with supporting text below as a natural lead-in to additional</span>

                  </CCardText>
                </CCardBody>

              </CCard>
            </CCol>
          </CRow>
        </div>
      </section>


      {/*products category*/}
      <section className="text-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h3 text-dark"><span>{user.company}</span>&nbsp;<span className="globalColor10">Medicines</span></h1>
            </div>
          </div>
          {loading ? (
            <div className="loader"></div>
          ) : (<CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
            {
              slice.map((items) => {
                return (
                  <>
                  
                    <CCol sm={3} style={{ float: "left" }}  >
                      <CCard className="h-60 w-100  align-items-center text-center card19 "style={{backgroundColor:"rgb(225,32,77)"}}>

                        <CCardBody >

                          <CCardTitle className=" h5 text-center py-4">{items.name}</CCardTitle>
                        </CCardBody>

                      </CCard>
                    </CCol>
                  </>
                )
              })
              
            }
            <div className="col-12 d-flex justify-content-center mt-2  "><a className="btn btn" onClick={() => viewAll()} style={{ backgroundColor: "rgb(48,60,84)", }}> <b>View All</b> </a></div>
          </CRow>

          )}


          {/*          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4 ">
            <CCol xs>
              <CCard className="h-60 bg-danger align-items-center text-center card19 ">

                <CCardBody >
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/tablet.png" alt="" />
                  <CCardTitle className=" h5 text-center pt-2">Tablet</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-60 bg-dark align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/capsule.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2">Capsules</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-60 bg-danger align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/injection.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2">Injectable</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-60 bg-dark align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/syrup.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2" ><p>Dry Syrups</p></CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <br />

          </CRow>
          <br />
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
            <CCol xs>
              <CCard className="h-60 bg-dark align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/syrup.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2">Syrup</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-60 bg-danger align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/powder.png" alt="" />
                  <CCardTitle className=" h5 text-center  pt-2">Protein Powder</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-60 bg-dark align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/soap.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2">Soap</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-60 bg-danger align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/loation.png" alt="" />
                  <CCardTitle className=" h5 text-center  pt-2"><p>Lotion</p></CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <br />
          </CRow>
        */}
        </div>
      </section>

      {/*banner*/}
      <section>
        <CCard>
          <CCardBody>
            <CRow>
              <img alt="pharma banner" style={{ width: "100%" }} src={banner} />
            </CRow>
          </CCardBody>
        </CCard>
      </section>

      {/* two cards*/}
      <section >
        <div className="container py-4" >

          <div className="row text-center" >
            <div className="col-12 col-md-6 mb-4 " >
              <div className="card h-70 " style={{ borderRadius: "10px" }}>
                <Link to='/Categorytable'>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/tablet-new-banner.jpg" className="card-img-top " style={{ borderRadius: "10px" }} alt="..." />
                </Link>

              </div>

            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card h-70 " style={{ borderRadius: "10px" }}>
                <a href="/Categorytable">
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/product-banner-1.jpg" className="card-img-top " style={{ borderRadius: "10px" }} alt="..." />
                </a>

              </div>

            </div>


          </div>
        </div>
      </section>

      {/*our services*/}
      <section className=" mb-5">
        <div className="container-lg pt-4 pb-5 " style={{
          backgroundImage: `url("https://wallpaperaccess.com/full/1385482.jpg")`
          , backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",
          maxWidth: "100%"
        }}>
          <div className="row justify-content-center  text-center">
            <div className="col-3 text-center">
              <h1 className="h3 text-light  "><b>Our Services</b></h1>
              <hr className="w-25 mx-auto text-dark" style={{ height: "2px" }} />
            </div>
          </div>
          <div className="row justify-content-center">
          </div>
          <Row className="justify-content-center h-100 pt-7 g-4" >
            <Col sm="4">
              <Card className="animated pulse slower infinite p-3 p-md-2 p-lg-3 p-xl-5 pt-md-5 text-start text-md-start" body style={{ borderRadius: "20px", height: "350px" }}>
                <CardTitle className="h4">
                  PCD PHARMA
                </CardTitle>
                <CardText>
                  <small> Dexon Biotech Offer PCD Pharma based wholesalers for extensive variety of items all through India. Genuine, committed and experienced individual are welcome for sole Marketing and Distribution rights.</small>
                </CardText>
              </Card>
            </Col>
            <Col sm="4">
              <Card className="animated pulse slower infinite p-3 p-md-2 p-lg-3 p-xl-5 pt-md-5 text-start text-md-start" body style={{ borderRadius: "20px", height: "350px" }}>
                <CardTitle className="h4">
                  PHARMA FRANCHISE
                </CardTitle>
                <CardText>
                  <small>  We Provide Ethical Based Pcd Pharma Franchise In India, Where You Can Be Your OWN BOSS In Your Territory, No Politics, No Work Pressure, – Only Results And Rewards To Complete Your Dreams.</small>
                </CardText>
              </Card>
            </Col>
            <Col sm="4" className="col-md-4 mb-4">
              <Card className="animated pulse slower infinite p-3 p-md-2 p-lg-3 p-xl-5 pt-md-5 text-start text-md-start" body style={{ borderRadius: "20px", height: "350px" }}>
                <CardTitle className="h4 ">
                  CONTRACT MANUFACTURING
                </CardTitle>
                <CardText>
                  <small>The Company provides fully integrated contract manufacturing and development solutions to our customers, from early development to high-volume commercial manufacturing and packaging.</small>
                </CardText>
              </Card>
            </Col>
          </Row>
        </div>
      </section>


      {/*information */}
      <section className="py-6 py-lg-8 ">
        <div className="container ">
          <div className="row g-xl-0 align-items-center pb-4 ">
            <div className="col-md-3 order-md-1 text-md-end">
              <div className="card h-50 w-100 shadow card19 p-3 p-md-2 p-lg-3 p-xl-0" style={{ borderRadius: "10px" }} >
                <div className="card-body text-center text-md-start" >
                  <div className="py-3" ><img className="img-fluid" src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/vision.png" width="80" alt="" /></div>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-start text-md-start order-md-0">
              <h1 className="h3 globalColor10 lh-base"><b>Our Vision</b></h1>
              <hr className="text-dark mx-auto mx-md-0" style={{ height: "0px", width: "0px" }} />
              <p >Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>

            </div>
          </div>
        </div>
      </section>

      <section className="py-6 py-lg-8" id="about">
        <div className="bg-holder dotbg2"></div>

        <div className="container">
          <div className="row g-xl-0 align-items-center pb-4">
            <div className="col-md-3 ">
              <div className="card h-50 w-100 shadow card19  p-3 p-md-2 p-lg-3 p-xl-0" style={{ borderRadius: "10px" }} >
                <div className="card-body text-center text-md-start" >
                  <div className="py-3" ><img className="img-fluid" src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/mission.png" width="80" alt="" /></div>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-start text-md-start">
              <h1 className="h3 globalColor10 lh-base"><b>Our Mission</b></h1>
              <hr className="text-dark mx-auto mx-md-0" style={{ height: "0px", width: "0px" }} />
              <p>Jassa provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</p>

            </div>
          </div>
        </div>
      </section>
      <section className="py-6 py-lg-8">
        <div className="container">
          <div className="row g-xl-0 align-items-center pb-4">
            <div className="col-md-3 order-md-1 text-md-end">

              <div className="card h-50 w-100 shadow card19  p-3 p-md-2 p-lg-3 p-xl-0" style={{ borderRadius: "10px" }} >
                <div className="card-body text-center text-md-start" >
                  <div className="py-3" ><img className="img-fluid" src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/product.png" width="80" alt="" /></div>
                </div>
              </div>

            </div>
            <div className="col-md-9 text-start text-md-start order-md-0">
              <h1 className="h3 globalColor10 lh-base"><b>Products Detail</b></h1>
              <hr className="text-dark mx-auto mx-md-0" style={{ height: "0px", width: "0px" }} />
              <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>

            </div>
          </div>
        </div>
      </section>

      {/*products details */}
      <section >
        <div className="container py-5" >

          <div className="row text-start" >
            <div className="col-12 col-md-6 mb-4 " >
              <h1 className="h3 text-dark lh-base"><b>Products <span className="globalColor10">Detail</span></b></h1>
              <hr className="text-dark mx-auto mx-md-0" style={{ height: "0px", width: "0px" }} />
              <p>One can only get the benefits of owning a pharma franchise if that person invests in the right pharma franchise company. With the growth of the pharma industry, you will see the many options for the pharma franchise in the market. This sometimes makes it difficult for the investor to choose the right pharma franchise company and as a result, they often go for the wrong one. Here are some points that can help you going for the right pharma franchise company:</p>

              <ul>
                <li>ISO and WHO certifications</li>
                <li>High-quality products matching the required quality standard</li>
                <li>A large product inventory, which will help you to become successful as a franchise</li>
                <li>High degree of commitment to providing quality products for the benefit of common people</li>
              </ul>
              <div className="col-md-4 ">
                <Button color="primary" type="submit" className="rounded-lg float-right " size="md" >Call Us</Button>
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

export default Home;
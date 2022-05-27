import React from "react";
import {
  CCard,
  CRow,
  CCol,
  CCardBody,
  CCardText,
  CCardTitle,
}
  from '@coreui/react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText
} from 'reactstrap';
import FourCards from "./FourCards";

const About = (props) => {

  return (

    <div >

      {/*about us*/}
      <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://thumbs.dreamstime.com/b/modern-microscope-many-test-tubes-analysis-laboratory-banner-design-184405096.jpg"
            width="100%"
            height="224px"
          />
          <CardImgOverlay>

            <CardText className="animated fadeInRight slower infinite pt-5">
              <h1 style={{ fontWeight: "bold", fontSize: "52px" }}>About Us</h1>
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
      <div className="container mb-4 " >
        <div className=" row">
          <div className=" col-md-12 text-center mt-4 ">
            <h1 className=" h2 text-dark pb-2"><b>About <span className="globalColor10">Us</span></b></h1>

            <p className="text-dark">
              {props.value.about}

            </p>
          </div>
        </div>
      </div>

      <div className="container  " style={{ height: "650px" }}>
        <div className=" row">
          <div className=" col-md-12 text-center ">
            <h1 className=" h2 text-dark pb-4"><b>Our <span className="globalColor10">Certificate
            </span></b></h1>

            <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/new-certificate.jpg" alt="cretificate" />
          </div>
        </div>
      </div>

      {/*cards*/}
      <section className="bg-light pt-5 pb-4">
        <div className="container mb-4">
          <div className=" row">
            <div className=" col-md-12  mt-4 ">
              <h1 className=" h2 text-dark  text-center pb-2"><b>Business <span className="globalColor10">Beliefs</span></b></h1>

              <p className="text-dark text-start">
                Dexon Biotech Pvt.Ltd is a responsible Pharma PCD company dedicated to serve the nation and its people. We have huge contribution in the field of health and pharmaceutical are:
              </p>
            </div>
          </div>
        </div>

        <div   >
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4 pb-5 mx-1">
            <CCol xs>
              <CCard className="h-100 card20" style={{ borderRadius: "10px" }}>
                <img className="rounded-lg px-4 pt-4 " src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-1.jpg" />
                <CCardBody>

                  <CCardText>
                    <CCardTitle className='text-dark'><b>Quality</b></CCardTitle>
                    <span> This is a wider card with supporting text below as a natural lead-in to additional</span>

                  </CCardText>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 card20" style={{ borderRadius: "10px" }}>
                <img className="rounded-lg px-4 pt-4 " src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-2.jpg" />
                <CCardBody>

                  <CCardText>
                    <CCardTitle className='text-dark'><b>Ethics</b></CCardTitle>
                    <span> This is a wider card with supporting text below as a natural lead-in to additional</span>

                  </CCardText>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 card20" style={{ borderRadius: "10px" }}>
                <img className="rounded-lg px-4 pt-4 " src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-3.jpg" />
                <CCardBody>

                  <CCardText>
                    <CCardTitle className='text-dark'><b>Customer Focus</b></CCardTitle>
                    <span> This is a wider card with supporting text below as a natural lead-in to additional</span>

                  </CCardText>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-100 card20" style={{ borderRadius: "10px" }}>
                <img className=" rounded-lg px-4 pt-4 " src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-4.jpg" />
                <CCardBody>

                  <CCardText>
                    <CCardTitle className='text-dark'><b>Respect for People</b></CCardTitle>
                    <span> This is a wider card with supporting text below as a natural lead-in to additional</span>

                  </CCardText>
                </CCardBody>

              </CCard>
            </CCol>
          </CRow>
        </div>

      </section>

      {/* our goal */}
      <section className="mt-5">
        <FourCards />
      </section>

    </div>

  )
}
export default About;
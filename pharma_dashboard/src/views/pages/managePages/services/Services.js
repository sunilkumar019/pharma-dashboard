import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText
} from 'reactstrap';

const Services = (props) => {
  return (
    <div>
      {/*sevices*/}
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
              <h1 style={{ fontWeight: "bold", fontSize: "52px" }}>{props.profile.company}</h1>
            </CardText>
           
          </CardImgOverlay>
        </Card>
      </div>
      <section>
        <div className="container mb-2">
          <div className=" row">
            <div className=" col-md-12  mt-4 ">
              <h1 className=" h2 text-dark  text-center pb-2"><b>Pharma Franchise <span className="globalColor10">Company</span></b></h1>

              <p className="text-dark text-start">
                <strong>Pharma Biotech </strong> is the fastest growing pharmaceutical manufacturing company based at Ambala Cantt, Haryana, India adhering to WHO GMP Compliance and producing quality products. We are a Leading Pharmaceutical Franchise Company in India serving a wide range of health care products such a Tablets, Syrup, Drops, Health Tonic, and Injection etc. We Provides Ethical Based Pcd Pharma Franchise In India, Where You Can Be Your OWN BOSS In Your Territory, No Politics, No Work Pressure, – Only Results And Rewards To Complete Your Dreams. <br /> <br />
                PCD Pharma Franchise Companies are those companies, which provides products to its franchise partners and also distributorship rights and monopoly of marketing for the given geographic area or location. <br /> <br />
                PCD Pharma means Propoganda Distribution. A PCD pharma company which gives products, support and brand name to its franchise partner is also called the “PCD pharma franchise company” or “pharma franchiser” <br /> <br />
                We are one of the top PCD pharma Company and welcome Pharma Franchisee Associates from all over India for career opportunity in Ethical Pharma Franchise Marketing. We provide complete monopoly rights to our PCD Franchise Partners which lets them enjoy benefits of owing an entrepreneur ship without a huge investment
              </p>
            </div>
          </div>
          <br />
        </div>
      </section>
      <section>
        <div className="container mb-2">
          <div className=" row">
            <div className=" col-md-12  mt-2 ">
              <h1 className=" h2 text-dark  text-center pb-2"><b>Choose The Best Company To Get <span className="globalColor10">The Advantages Of Owning Pharma Franchise</span></b></h1>

              <p className="text-dark text-start">
                Choose The Best Company To GetThe Advantages Of Owning Pharma Franchise
                One can only get the benefits of owning a pharma franchise if that person invests in the right pharma franchise company. With the growth of the pharma industry, you will see the many options for the pharma franchise in the market. This sometimes makes it difficult for the investor to choose the right pharma franchise company and as a result, they often go for the wrong one. Here are some points that can help you going for the right pharma franchise company:
              </p>
              <ul className="text-dark text-start ">
                <li >ISO and WHO certifications</li>
                <li>High-quality products matching the required quality standard</li>
                <li>A large product inventory, which will help you to become successful as a franchise</li>
                <li>High degree of commitment to providing quality products for the benefit of common people</li>
              </ul>
            </div>
          </div>
          <br />
        </div>
      </section>

    </div>

  )
}


export default Services
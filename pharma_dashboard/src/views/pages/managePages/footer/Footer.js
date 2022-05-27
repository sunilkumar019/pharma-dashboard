import React, { Component } from "react";

//import { GetAbout } from "src/api/about/about";


class Footer extends Component {


  /* constructor(props) {
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
 
   async componentDidMount() {
     this.getData()
   }*/



  render() {

    return (
      <>
      

        <footer id="tempaltemo_footer mt-5 " style={{ backgroundColor: "rgb(60,75,100)" }}>
          <div className="container my-5" style={{ backgroundColor: "rgb(60,75,100)" }} >
            <div className="row pb-4 pr-2 pl-2">
              <div className="col-lg-3 col-md-6 col-12 pt-5 mt-4 text-light">
                <img className=' rounded animated pulse slower infinite' src={this.props.value.about_img} alt="" height={100} width={200} /> <br /> <br />
                <div className="row">
                  <div className="d-inline-block text-truncate">
                    {this.props.value.about}
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 pt-5">
                <h2 className="h4 text-light  pb-3">Follow Us</h2>

                <div className="map-responsive">
                  <iframe frameBorder="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=+(Arlak%20Biotech%20Pvt%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ width: "290px", height: "210px", }} allowFullScreen></iframe>

                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 pt-5 pl-5 ">
                <h2 className="h4 text-light pb-3 ">Quick Links</h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li >
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.facebook} ><i className="fab fa-facebook-f fa-md fa-fw"></i><b><i>Facebook</i></b></a>
                  </li>

                  <br />
                  <li>
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.twitter}><i className="fab fa-twitter fa-md fa-fw"></i><b><i>Twitter</i></b></a>
                  </li>
                  <br />
                  <li >
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.facebook}><i className="fab fa-instagram fa-md fa-fw"></i><b><i>Instagram</i></b></a>
                  </li>
                  <br />
                  <li >
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.pinterest}><i className="fab fa-pinterest fa-md fa-fw"></i><b><i>Pinterest</i></b></a>
                  </li>
                  <br />
                  <li >
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.linkedin}><i className="fab fa-linkedin fa-md fa-fw"></i><b><i>Linkedin</i></b></a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-12 pt-5">
                <h2 className="h4 text-light  pb-3  logo">Contact With US</h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw"></i>
                    <b>{this.props.value.address}</b>
                  </li>
                  <br />
                  <li>

                    <b>Phone&nbsp;:&nbsp;<a className="text-decoration-none  text-light" href="#">  {this.props.value.phone} </a></b>
                    <br />
                    <b>Whatsapp &nbsp;:&nbsp;<a className="text-decoration-none  text-light" href="#">{this.props.value.whatsapp}</a></b>
                  </li>
                  <br />
                  <li>
                    <b> <b>Email:</b> <br /> <i className="fa fa-envelope fa-fw"></i>
                      <a className="text-decoration-none text-light" href="#"> {this.props.value.email}</a>

                    </b>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          <div className="w-100  py-4 my-3 border-top border-muted" style={{ backgroundColor: "rgb(48,60,84)" }}>
            <div className="container" >
              <div className="row pt-2">
                <div className="col-12">
                <b> <p className="text-left text-light">
                     &copy; 2022 {this.props.profile.company} All Rights Reserved. || Web Development and Designing By <a rel="sponsored" href="https://www.webhopers.com/" target="_blank"><strong><span className="info">web</span><span className="text-warning">Hopers.</span></strong></a>
                  </p></b>
                </div>
              </div>
            </div>
          </div>

        </footer>


      </>
    );
  }
}

export default Footer;

 {/* <footer className="footer">

          <div className="footer-top section">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">

                  <div className="single-footer about">
                    <div className="logo">
                      <img className=' rounded animated pulse slower infinite' src={this.props.value.about_img} alt="" height={100} width={230} />
                    </div>
                   <div className="row">
                      <div className="d-inline-block text-truncate">
                        {this.props.value.about}
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12">

                  <div className="single-footer links">
                    <h2 className="h4 text-light  pb-3">Follow Us</h2>
                    <div className="map-responsive">
                  <iframe frameBorder="0" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=+(Arlak%20Biotech%20Pvt%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ width: "230px", height: "300px", padding: "80px 0 0 15px" }} allowFullScreen></iframe>

                </div>
                  </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12">

                  <div className="single-footer links">
                  <h2 className="h4 text-light pb-3 ">Quick Links</h2>
                  <ul className="list-unstyled text-light footer-link-list">
                  <li >
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.facebook} ><i className="fab fa-facebook-f fa-md fa-fw"></i><b><i>Facebook</i></b></a>
                  </li>

                  <br />
                  <li>
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.twitter}><i className="fab fa-twitter fa-md fa-fw"></i><b><i>Twitter</i></b></a>
                  </li>
                  <br />
                  <li >
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.facebook}><i className="fab fa-instagram fa-md fa-fw"></i><b><i>Instagram</i></b></a>
                  </li>
                  <br />
                  <li >
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.pinterest}><i className="fab fa-pinterest fa-md fa-fw"></i><b><i>Pinterest</i></b></a>
                  </li>
                  <br />
                  <li >
                    <a className="text-light text-decoration-none" target="_blank" href={this.props.value.linkedin}><i className="fab fa-linkedin fa-md fa-fw"></i><b><i>Linkedin</i></b></a>
                  </li>
                </ul>
                  </div>

                </div>
                <div className="col-lg-3 col-md-6 col-12">

                  <div className="single-footer social">
                  <h2 className="h4 text-light  pb-3  logo">Contact With US</h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw"></i>
                    <b>{this.props.value.address}</b>
                  </li>
                  <br />
                  <li>

                    <b>Phone&nbsp;:&nbsp;<a className="text-decoration-none  text-light" href="/">  {this.props.value.phone} </a></b>
                    <br />
                    <b>Whatsapp &nbsp;:&nbsp;<a className="text-decoration-none  text-light" href="/">{this.props.value.whatsapp}</a></b>
                  </li>
                  <br />
                  <li>
                    <b> <b>Email:</b> <br /> <i className="fa fa-envelope fa-fw"></i>
                      <a className="text-decoration-none text-light" href="#"> {this.props.value.email}</a>

                    </b>
                  </li>
                </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="copyright">
            <div className="container">
              <div className="inner">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="left">
                      <p>Copyright © 2021 <a href="#" target="_blank">Jassa</a>  -  All Rights Reserved.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="right">
                      <img src="assets/images/payments.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </footer>*/}





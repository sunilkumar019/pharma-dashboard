import React from 'react'

const FourCards = () => {
  return (
    <div>
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
    </div>
  )
}

export default FourCards;

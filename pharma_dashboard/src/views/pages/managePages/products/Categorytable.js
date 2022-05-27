





import React, { useState, useEffect } from "react";
import { CDataTable, } from "@coreui/react";
import { GetCategoryType } from "src/api/products/category/category";
import { Button, Form } from "reactstrap";
import { Link } from "react-router-dom";

const Catetable = () => {
  const [Data, setData] = useState(null);

  const fields = [
    { key: "name", label: "Brand Name" },
    { key: "rep_name", label: "Composition" },
    { key: "view", label: "" },

  ];

  const fetchMyAPI = async () => {

    let rs = await GetCategoryType();
    if (rs.success === true) {

      setData(rs.data)
    }

  }
  useEffect(() => {
    fetchMyAPI();
  }, [])


  return (
    <>
      <section >
        <div className="container py-4" >

          <div className="row text-center" >
            <div className="col-12 col-md-7 mb-4 " >
              <CDataTable
                items={Data}
                fields={fields}
                hover
                striped
                border
                outlined
                scopedSlots={{
                  name: (item, index) => {
                    return (
                      <td className="">
                        <Link>
                          <strong>{item.name}</strong>
                        </Link>
                      </td>
                    );
                  },view: (item, index) => {
                    return (
                      <td className="">
                    <strong>  <Link>
                         view more
                        </Link></strong>
                      </td>
                    );
                  },

                }}
              />
            </div>
            <div className="col-12 col-md-5 mb-4 ">

              <div className="col-xl-9  py-5  mx-auto  wow zoomIn" data-wow-duration="1.1s" style={{ backgroundColor: "LightGray", color: "white" }}>
                <div className="cta-inner text-center rounded ">

                  <div className="contactForm pb-2">
                    <h3><strong>Contact Us</strong></h3>
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
                        <div className="col-md-4 ml-3">
                          <Button color="primary" type="submit" className="rounded-lg ml-5" size="md" >Submit</Button>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Catetable;


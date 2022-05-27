
import { useEffect, useState, } from 'react'
//import { GetProducts } from "src/api/products/allProducts/products";
import { CCard, CCardBody } from '@coreui/react'
import CardView from './CardView'




const Products = (props) => {

  /*
  const [data, setData] = useState([]);



  async function getProducts() {
    let res = await GetProducts();

    if (res.success === true) {
      setData(res.data)
    }

  }

  useEffect(() => {
    getProducts();
  }, [])

  */

  return (
    <div>

      <section >
        <div className="container-fluid ">
          <div className="row text-center py-4 " style={{ backgroundColor: "rgb(48,60,84)" }}>
            <div className="col-lg-6 m-auto">
              <h1 className="h3 text-light">Our Products</h1>
            </div>
          </div>
          <div className="row text-center mt-5 mx-5">
            {
              props.pro.map((item) => {
                return (
                  <>
                    <div className="col-12 col-md-3 mb-5 ">
                      <CCard className="shadow rounded  card19" >
                        <a >
                          <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/Cefdex-200-300x300.jpg" className="card-img-top" style={{ height: "250px", width: "100%" }} alt="medicine" />
                        </a>
                      </CCard>
                      <CCardBody className=" py-2" style={{ background: "rgb(225,32,77)" }}>

                        <a className="h5 text-decoration-none overflow-hidden text-light"><b>{item.name}</b></a>
                      </CCardBody>
                      
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section >
    </div >
  )
}

export default Products

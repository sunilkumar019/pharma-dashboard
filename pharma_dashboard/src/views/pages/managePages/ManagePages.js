import { useEffect, useState } from "react";
import { Input } from "reactstrap";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./Home";
import About from "./about/About";
import Services from "./services/Services";
import Products from './products/Products';
import Contact from "./contact/Contact";

import Categorytable from './products/Categorytable';
import { GetAbout } from "src/api/about/about";
import { UserProfile } from "src/api/user/user";
import { GetProducts } from "src/api/products/allProducts/products";



const ManagePages = () => {
    const [data, setData] = useState([]);
    const [change, setChange] = useState('select');
    const [render, setRender] = useState(null);
    const [values, setValues] = useState('');
    const [user, setUser] = useState('');


    


    const getAbout = async () => {
        const res = await GetAbout();

        if (res.success === true) {
            setValues(res.data);
        }
        else {
            console.error("error");
        }
    }

    const getUser = async () => {
        const rs = await UserProfile();

        if (rs.success === true) {
            setUser(rs.data);

        }
    }

    async function getProducts() {
        let res = await GetProducts();

        if (res.success === true) {
            setData(res.data)
        }

    }
  
    useEffect(() => {
        getAbout();
        getUser();
        getProducts();
    }, [])

      useEffect(()=>{
      
            
            if (render == null) {
        
                setRender(<Home value={values} pro={data} />)
            }
            console.log(values)
        
          
      },[])


    const handlerChange = (event) => {

        if (event === "home") {

            setRender(<Home value={values} pro={data} />)
        }

        else if (event === "aboutus") {
            setRender(<About value={values} />)
        }

        else if (event === "contactus") {
            setRender(<Contact value={values} />)
        }

        else if (event === "products") {
            setRender(<Products pro={data} />)
        }

        else if (event === "services") {
            setRender(<Services profile={user} />)
        }

        else if (event === "category") {
            setRender(<Categorytable />)
        }

        setChange(event);
        //console.log(event);
    }
    
  
    return (
        <div>
            <div>
                <Input type="select" name="select" value={change} onChange={(e) => handlerChange(e.target.value)}
                    style={{ float: "left", width: "20%",backgroundColor:"rgb(60,75,100)", color:"white" }}>
                    <option value="select" >Select</option>
                    <option value="home">Home</option>
                    <option value='aboutus'>About Us</option>
                    <option value='contactus'>Contact Us</option>
                    <option value='products'>Products</option>
                    <option value='services'>Services</option>
                    <option value='category'>Category</option>
                </Input>
            </div>
            <br />
            <br />
            <div>
                
                <Header value={values} profile={user} />
                {render}
                <Footer value={values} profile={user} />

            </div>

        </div>
    )
}
export default ManagePages;
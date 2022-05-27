import React from "react";
import { useSelector, useDispatch } from 'react-redux';
//import { GetAbout } from "src/api/about/about";
//import { UserProfile } from "src/api/user/user";
import {
    CNav,
    CNavItem,
    CNavLink,
    CDropdown,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CToggler,
    CHeader

} from '@coreui/react';

const Header = (props) => {

    const dispatch = useDispatch()
    const sidebarShow = useSelector(state => state.sidebarShow)


    const toggleSidebar = () => {
        const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
        dispatch({ type: 'set', sidebarShow: val })
    }

    const toggleSidebarMobile = () => {
        const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
        dispatch({ type: 'set', sidebarShow: val })
    }


    /*  constructor(props) {
      super(props);
      this.state = {
          item: [],
      };
  }
  getUser = async () => {
      let rs = await UserProfile();
      if (rs.success === true) {
          this.setState({ item: rs.data });
      }
  }
  /* getAbout = async () => {
         let rs = await GetAbout();
         if (rs.success === true) {
             this.setState({ items: rs.data });
             this.setState({ loading: false })
         }
     }
  //
  async componentDidMount() {
      // this.getAbout();
      this.getUser();
  }
*/

    return (
        <div>
            <div className="app">
                <CHeader style={{ backgroundColor: "rgb(48,60,84)" }}  >
                    <CNav className="pt-3 fixed-topnavbar-expand-lg d-none d-lg-block">
                        <div className="container text-light" >

                            <div className=" d-flex justify-content-end">
                                <CNavItem >
                                    <CToggler
                                        inHeader
                                        className="ml-md-3 d-lg-none "
                                        onClick={toggleSidebarMobile}

                                    />
                                    <CToggler
                                        inHeader
                                        className="ml-3 d-md-down-none "
                                        onClick={toggleSidebar}

                                    />
                                </CNavItem>
                                <CNavItem>
                                    <marquee direction="left"
                                        behavior="scroll" style={{ width: "699px" }}>{props.value.about} </marquee>
                                </CNavItem>
                                <CNavItem>
                                    <i className="fa fa-phone mx-2"></i>
                                    <a className="navbar-sm-brand text-light text-decoration-none" href="#"><b>{props.value.phone}</b></a> &nbsp;
                                    <i className="fa fa-envelope mx-2"></i>
                                    <a className="navbar-sm-brand text-light text-decoration-none" href="#"><b>{props.value.email}</b></a>

                                </CNavItem>
                            </div>
                        </div>
                    </CNav>

                </CHeader>
                <nav className="navbar navbar-expand-lg navbar-light shadow" style={{ backgroundColor: "rgb(60,75,100)" }}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <a className="navbar-brand text-light logo h1 align-self-center" href="#">
                            <h3 className="pt-2"><strong>{props.profile.company}</strong></h3>
                        </a>

                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                            <div className="flex-fill ">
                                <ul className="nav navbar-nav d-flex justify-content-end mx-lg-auto pr-5">
                                    <CNav className='pr-5'>
                                        <CNavItem >
                                            <CNavLink className="text-light" >

                                            </CNavLink>
                                        </CNavItem>
                                        <CNavItem>
                                            <CNavLink className="text-light" disabled href="/About"><strong>About Us</strong></CNavLink>
                                        </CNavItem>
                                        <CNavItem>
                                            <CNavLink className="text-light" disabled href="/contactus"><strong>Contact Us</strong></CNavLink>
                                        </CNavItem>
                                        <CNavItem>
                                            <CDropdown variant="nav-item"
                                                inNav
                                                popper={false}>

                                                <CDropdownToggle disabled className='text-light'><strong>Products</strong></CDropdownToggle>
                                                <CDropdownMenu>
                                                    <CDropdownItem href="#">Tablet</CDropdownItem>
                                                    <CDropdownItem divider />
                                                    <CDropdownItem href="#">Capsule</CDropdownItem>
                                                    <CDropdownItem divider />
                                                    <CDropdownItem href="#">Soft Gel Capsule</CDropdownItem>
                                                    <CDropdownItem divider />
                                                    <CDropdownItem href="#">Injectable</CDropdownItem>
                                                    <CDropdownItem divider />
                                                    <CDropdownItem href="#">Dry Syrups</CDropdownItem>
                                                    <CDropdownItem divider />
                                                </CDropdownMenu>
                                            </CDropdown>
                                        </CNavItem>
                                        <CNavItem>
                                            <CNavLink className="text-light" disabled href="/services"><strong>Servies</strong></CNavLink>
                                        </CNavItem>
                                    </CNav>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>

                <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="w-100 pt-1 mb-5 text-right">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="" method="get" className="modal-content modal-body border-0 p-0">
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                                <button type="submit" className="input-group-text bg-success text-light">
                                    <i className="fa fa-fw fa-search text-white"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>























            {/*   <div className="app">
               
               <CNav className="navbar   fixed-topnavbar-expand-lg  navbar-light d-none d-lg-block" id="templatemo_nav_top" style={{ backgroundColor: "rgb(48,60,84)" }} >
               <div className="container text-light" >
               <div className="w-100 d-flex justify-content-end">
               <CNavItem>

               <CToggler
               inHeader
               className="ml-md-3 d-lg-none "
               onClick={toggleSidebarMobile}
               />
               <CToggler
               inHeader
               className="ml-3 d-md-down-none"
               onClick={toggleSidebar}
               />
               </CNavItem>
                            <CNavItem>
                                <marquee direction="left"
                                    behavior="scroll" style={{ width: "695px" }}>{props.value.about} </marquee>
                            </CNavItem>
                            <CNavItem>
                                <i className="fa fa-phone mx-2"></i>
                                <a className="navbar-sm-brand text-light text-decoration-none" href="#"><b>{props.value.phone}</b></a> &nbsp;
                                <i className="fa fa-envelope mx-2"></i>
                                <a className="navbar-sm-brand text-light text-decoration-none" href="#"><b>{props.value.email}</b></a>
                                
                                </CNavItem>
                                </div>
                                </div>
                                </CNav>
                                
                                <nav className="navbar navbar-expand-lg navbar-light shadow" style={{ backgroundColor: "rgb(60,75,100)" }}>
                                <div className="container d-flex justify-content-between align-items-center">
                                <a className="navbar-brand text-light logo h1 align-self-center" href="#">
                                <h3><strong>{props.profile.company}</strong></h3>
                                </a>
                                
                                <CNav variant="" className="pr-5" >
                                <CNavItem >
                                <CNavLink className="text-light" >
                                
                                </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                <CNavLink className="text-light" disabled href="/About"><strong>About Us</strong></CNavLink>
                                </CNavItem>
                                <CNavItem>
                                <CNavLink className="text-light" disabled href="/contactus"><strong>Contact Us</strong></CNavLink>
                                </CNavItem>
                                <CNavItem>
                                <CDropdown variant="nav-item"
                                    inNav
                                    popper={false}>

                                    <CDropdownToggle disabled className='text-light'><strong>Products</strong></CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem href="#">Tablet</CDropdownItem>
                                        <CDropdownItem divider />
                                        <CDropdownItem href="#">Capsule</CDropdownItem>
                                        <CDropdownItem divider />
                                        <CDropdownItem href="#">Soft Gel Capsule</CDropdownItem>
                                        <CDropdownItem divider />
                                        <CDropdownItem href="#">Injectable</CDropdownItem>
                                        <CDropdownItem divider />
                                        <CDropdownItem href="#">Dry Syrups</CDropdownItem>
                                        <CDropdownItem divider />
                                        </CDropdownMenu>
                                        </CDropdown>
                                        </CNavItem>
                                        <CNavItem>
                                        <CNavLink className="text-light" disabled href="/services"><strong>Servies</strong></CNavLink>
                                        </CNavItem>
                                        
                                        </CNav>
                                        </div>
                                        </nav>
                                        <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg" role="document">
                        <div className="w-100 pt-1 mb-5 text-right">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form action="" method="get" className="modal-content modal-body border-0 p-0">
                            <div className="input-group mb-2">
                            <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                            <button type="submit" className="input-group-text bg-success text-light">
                            <i className="fa fa-fw fa-search text-white"></i>
                            </button>
                            </div>
                            </form>
                            </div>
                            </div>

            </div>*/}




        </div>
    );

}

export default Header;









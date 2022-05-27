import { useEffect, useState } from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CButton,
  CBadge,
  CDropdownDivider
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router';
// import Constants from 'src/secrets';
import { UserProfile } from 'src/api/user/user';
import User from '../assets/images/user.png'

// API Helper Method
import {GetNotification,UpdateNotification} from 'src/api/notification/notification';

const TheHeaderDropdown = () => {

  // ** React States
  const [avatar, setAvatar] = useState("")
  const [data, setData] = useState([]);

  // ** History Hook
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem("token")
    window.location.assign("/")
  }

  const profile = () => {
    history.push({ pathname: "/profile" })
  }

  async function getData() {
    let rs = await GetNotification();
    if (rs.success === true) {
      setData(rs.data);
    }
  }

  const distributor = async(e, id) => {
    history.push({pathname: "/Distributor"});
    let rs =await UpdateNotification({id});
    if (rs.success === true) {
        await getData()
    }
 }

  useEffect(() => {
    async function fetchMyAPI() {
      let rs = await UserProfile()
      await getData()
      if (rs.success === true && rs.data.profile_pic !== null) {
        setAvatar(rs.data.profile_pic)
      }
      else {
        setAvatar(User)
      }
    }
    fetchMyAPI()
  }, [])

  const handleClickOpen = function () { 
  
      window.open('http://localhost:3000/#/managePages',"_blank");
    
   }

  return (
    <>
      <CDropdown
        inNav
        className="c-header-nav-items mfe-0"
        direction="down"
      >
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <div className="c-avatar">
            <CButton color="link" 
              shape="rounded-circle"
              >
                <i className="fas fa-bell fa-lg text-muted" />
             <CBadge color="danger" position="top-end" shape="pill">
              {data.length}
            </CBadge>
          </CButton>

          </div>
        </CDropdownToggle>
        <CDropdownMenu placement="bottom-end" style={{ minWidth: 400, maxHeight: 350, overflow: 'scroll' }}>
          { data.map((item) => {
              return (
                <div key={item._id}>
                  <CDropdownItem key={item._id} onClick={e => distributor(e, item._id)} className="p-2 drop_items text-wrap">
                    <CBadge color='info' shape="pill"> {item.label} </CBadge> 
                    &nbsp;<small>
                      <b>{item.name.toUpperCase()} </b>
                      <u>({item.email})</u>
                      </small>. 
                    <p style={{margin: 0}}> 
                      <small>  
                          Please activate the distributor.
                      </small>
                    </p>
                  </CDropdownItem>
                  <CDropdownDivider />
                </div>
              )
            })
          }
        </CDropdownMenu>
      </CDropdown>
      <CDropdown
        key={'profile'}
        inNav
        className="c-header-nav-items mfe-0"
        direction="down"
      >
        <CDropdownToggle className="c-header-nav-link" caret={false}>
          <div className="c-avatar">
            <CImg
              style={{ width: "40px", height: "40px" }}
              src={avatar}
              className="c-avatar-img"
              alt="user avatar"
            />
          </div>

        </CDropdownToggle>
        <CDropdownMenu placement="bottom-end">
          <CDropdownItem className="drop_items" onClick={profile}>
            <CIcon name="cil-user" className="mfe-2" />Profile
          </CDropdownItem>
          <CDropdownItem divider />
          <CDropdownItem onClick={logout} className="drop_items">
            <CIcon name="cil-lock-locked" className="mfe-2" />
            Log Out
          </CDropdownItem>
          <CDropdownItem divider />
          <CDropdownItem onClick={handleClickOpen} className="drop_items">
            <CIcon name="cil-Settings" className="mfe-2" />
            Manage Site
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}

export default TheHeaderDropdown

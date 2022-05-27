import React, { useEffect, useState } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import { NotificationContainer } from 'react-notifications';
import { useHistory } from 'react-router-dom';

const TheLayout = () => {
  const [visible, setVisible] = useState( <TheHeader/>);

  const history = useHistory();

  const hide = history.location.pathname

  useEffect(()=>{
       if(hide==='/managePages'){
         setVisible('')
       }
  },[])


  
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        {visible}
        <div className="c-body">
          <NotificationContainer />
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  )
}

export default TheLayout;

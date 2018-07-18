import React from 'react';
import './ImageStyle.scss'

//Should I override or have either or for className??
const Image = ({className, ...props}) => {
   return <img
      className={
         className ? className : 'Default-Image'
      }
      {...props}
      alt="Source Not Found 404"
   />
};

export default Image;

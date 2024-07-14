import React from 'react'
import { useEffect, useState } from 'react';

// Code source: https://blog.openreplay.com/creating-a-collapsible-component-for-react/
const Collapsible = ( {title, pcontent, presetOpen }) => {
    const [open, setOPen] = useState(false);
       
    useEffect(() => {
      setOPen( presetOpen );
    }, []);

    const toggle = () => {
        setOPen(!open);
      };

  return (
    <div className="collapsible-container">
        <div className="collapsible-toggle-wrapper" onClick={toggle}>
            <h3 className="collapsible-name">{title}</h3>
            <button className="collapsible-button" onClick={toggle}>
              {open ?
                <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm4.843-8.211c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291z" fillRule="nonzero"/></svg>
                :
                <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm4.843 8.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291z" fillRule="nonzero"/></svg>
                
              }
            </button>
        </div>
        
    {open && (
      <div className="toggle">        
        <p className="collapsible-toggle" dangerouslySetInnerHTML={pcontent}></p>
      </div>
    )}
  </div>
  )
}

export default Collapsible
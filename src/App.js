import React, { Fragment, useState, useEffect } from 'react';
import cx from 'classnames'

export const LightElement = (props) => (
  <div id="light-bulb" className={ props.illuminated ? 'on':'off' } >
      <span className="bulb off"></span>
      <span className="bulb on"></span>
  </div>
)

export const LightSwitch = (props) => (    
  <div className={ cx("cube-switch", { "active": props.isLightOn } ) }>
      <span className="switch" onClick={props.onClick}>
          <span className="switch-state off">Off</span>
          <span className="switch-state on">On</span>
      </span>
  </div>
)

const App = () => {
  const [isLightOn, changeLight ] = useState(false)

  const toggleLight = () => {
    changeLight(!isLightOn)
  }
  return (
    <Fragment>
      <LightElement illuminated={isLightOn}/>
      <LightSwitch onClick={toggleLight} isLightOn={isLightOn}/>
    </Fragment>
  )
}

export default App;

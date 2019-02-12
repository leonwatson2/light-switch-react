import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";

import App, { LightSwitch, LightElement } from './App';

describe('App existence', ()=>{
  let tree
  beforeEach(() => {
    tree = renderApp({ });
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('light switch exist', ()=>{
    expect( tree.lightSwitch() ).toExist()
  })
  
  it('light bulb should exist', () => {
    expect( tree.lightElement() ).toExist()
  })

})

describe('Light Switch', ()=>{

  let lightSwitch


  it('calls the on click when clicked', ()=>{
    
    const onClickFn = jest.fn()
    lightSwitch = renderLightSwitch({ onClick: onClickFn })

    lightSwitch.find('.switch').simulate('click')

    expect(onClickFn).toHaveBeenCalled()
    
  })

  it('should have switch container with class active', ()=>{
    lightSwitch = renderLightSwitch({ isLightOn: true })
    const container = lightSwitch.find('.cube-switch')

    expect(container.hasClass('active')).toEqual(true)

  })
  it('should have switch container without the class active', ()=>{
    lightSwitch = renderLightSwitch({ isLightOn: false })
    const container = lightSwitch.find('.cube-switch')

    expect(container.hasClass('active')).toEqual(false)

  })

})

function renderLightSwitch(propsOverrides){
  return  mount(
    <LightSwitch
      onClick={()=>{}}
      isLightOn={ true }
      {...propsOverrides}
    />,
  );
}

function renderApp(){
  const tree = mount(
    <App />,
  );

  tree.lightSwitch = ()=>{
    const el = tree.find(LightSwitch)
    el.switch = () => el.find('.switch')
    return el
  }

  tree.lightElement = () => {
    const el = tree.find(LightElement)
    el.lightBulb = () => el.find('#light-buld')
    return el
  }

  return tree
}
import React, { useState } from "react";
import {Drawer, Space } from "antd";
import {StyledBurger } from "./style";

export const Modal = () => {
  const [visible, setVisible] = useState(false  );
  const [placement] = useState("left");

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  

  return (
    <div style={{width:'100%'}}>
      <Space style={{width:'100%'}}>
        <StyledBurger  onClick={showDrawer}>
          <div />
          <div />
          <div />
        </StyledBurger>
      </Space>
      
    
      <Drawer    
        title={<button onClick={onClose} style={{ border: 'none', background: 'white'}}>X</button>}
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
        >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
          
    </div>
  );
};

export default Modal;

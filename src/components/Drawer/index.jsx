import React , {useState} from 'react'
import { Container } from './style'
import { Button, Drawer, Radio, Space } from 'antd';

const Modal = () => {
    const [visible, setVisible] = useState(false);
    const [placement, setPlacement] = useState("left");

    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };

    const onChange = (e) => {
      setPlacement(e.target.value);
    };
  return (
    <Container>
        <Space>
          <Radio.Group value={placement} onChange={onChange}>
            {/* <Radio value="left">left</Radio> */}
          </Radio.Group>
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
        </Space>
        <Drawer
          title="Basic Drawer"
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
    </Container>
  );
}

export default Modal
import React from 'react';
import { Modal } from 'antd';

const CreateModal: React.FC = () => {
  const onOk = () => console.log('ok');
  const onCancel = () => console.log('cancel');
  const visible = false;
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
export default CreateModal;

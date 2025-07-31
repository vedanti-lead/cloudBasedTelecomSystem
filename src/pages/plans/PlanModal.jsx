import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const PlanModal = ({ visible, onClose, onSubmit, initialValues }) => {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.validateFields().then(values => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <Modal open={visible} title={initialValues ? 'Update Plan' : 'Add Plan'} onCancel={onClose} onOk={handleOk} footer={null}>
      <Form form={form} layout="vertical" initialValues={initialValues}>
        <Form.Item name="name" label="Plan Name" rules={[{ required: true, message: 'Enter plan name' }]}> <Input /> </Form.Item>
        <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Select type' }]}> <Select> <Option value="Data">Data</Option> <Option value="Call">Call</Option> <Option value="SMS">SMS</Option> <Option value="Combo">Combo</Option> </Select> </Form.Item>
        <Form.Item name="value" label="Value" rules={[{ required: true, message: 'Enter value' }]}> <Input /> </Form.Item>
        <Form.Item name="validity" label="Validity" rules={[{ required: true, message: 'Enter validity' }]}> <Input placeholder="e.g. 28 days" /> </Form.Item>
        <Form.Item name="price" label="Price (₹)" rules={[{ required: true, message: 'Enter price' }]}> <Input type="number" /> </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleOk} style={{ marginRight: 8 }}>Submit</Button>
          <Button onClick={onClose}>Cancel</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PlanModal; 
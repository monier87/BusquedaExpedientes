import React, { useState } from 'react';
import { Form, Input, Checkbox, DatePicker, Select, Row, Col, Button } from 'antd';

const { Option } = Select;

function ExpedienteForm() {
  const [form] = Form.useForm();
  const [isPropietario, setIsPropietario] = useState(false);

  const handlePropietarioChange = (e) => {
    setIsPropietario(e.target.checked);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log('Valores del formulario:', values);
      // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor
    });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsPropietario(false);
  };

  return (
    <div>
      <Form form={form} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Propietario">
              <Checkbox onChange={handlePropietarioChange}>Marcar como propietario</Checkbox>
            </Form.Item>
            <Form.Item label="Fecha" name="fecha">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Tipo de Expediente" name="tipoExpediente">
              <Select>
                <Option value="tipoA">Tipo A</Option>
                <Option value="tipoB">Tipo B</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Resumen" name="resumen">
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Destinatario" name="destinatario">
              <Input />
            </Form.Item>
            <Form.Item label="Ubicación del Archivo" name="ubicacionArchivo">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Fecha" name="fechaRegistro">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Entidad" name="entidad">
              <Input />
            </Form.Item>
            <Form.Item label="Departamento" name="departamento">
              <Input />
            </Form.Item>
            <Form.Item label="Registro" name="registro">
              <Input />
            </Form.Item>
            <Form.Item label="Descripción" name="descripcion">
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item label="Observaciones" name="observaciones">
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Adjuntar archivo PDF" name="archivoPdf">
          <Input type="file" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSave}>
            Guardar
          </Button>
          <Button onClick={handleCancel}>Cancelar</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default ExpedienteForm;

import React from 'react';
import { Form, Input, Button } from 'antd';

function Authentication() {
    const handleSubmit = (values) => {
        // Aquí puedes realizar acciones con los valores del formulario, como enviar una solicitud de autenticación
        console.log('Valores del formulario:', values);
    };

    return (
        <div className="Authentication">
            <Form onFinish={handleSubmit} layout="vertical">
                <Form.Item
                    name="username"
                    label="Nombre de usuario"
                    rules={[{ required: true, message: '¡Ingrese el nombre de usuario!' }]}
                >
                    <Input placeholder="Nombre de usuario" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Contraseña"
                    rules={[{ required: true, message: '¡Ingrese la contraseña!' }]}
                >
                    <Input.Password placeholder="Contraseña" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Iniciar sesión
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Authentication;

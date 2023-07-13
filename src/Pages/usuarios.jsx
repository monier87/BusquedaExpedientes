import { Space, Typography, Table, Rate, Avatar } from 'antd';
import { useEffect, useState } from 'react';
import { getCustomers} from '../API/API';

function Usuarios () {
    const [loading, setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
  
    useEffect(() => {
      setLoading(true);
      getCustomers().then((res) => {
        setDataSource(res.users);
        setLoading(false);
      });
    }, []);
  
    return (
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Usuarios</Typography.Title>
        <Table
          loading={loading}
          columns={[
            {
              title: "Foto",
              dataIndex: "image",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "Nombre",
              dataIndex: "firstName",
            },
            {
              title: "Apellidos",
              dataIndex: "lastName",
            },
            {
              title: "Correo Electronico",
              dataIndex: "email",
            },
            {
              title: "Telefono",
              dataIndex: "phone",
            },
  
            {
              title: "Direccion",
              dataIndex: "address",
              render: (address) => {
                return (
                  <span>
                    {address.address}, {address.city}
                  </span>
                );
              },
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    );
  }
  export default Usuarios;
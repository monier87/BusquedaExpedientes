import { Space, Typography, Table, Rate, Avatar } from 'antd';
import { useEffect, useState } from 'react';
import { getOrders } from '../API/API';

function Ordenes() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then(res => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction='vertical'>
      <Typography.Title level={5}>Expedientes</Typography.Title>
      <Table
        loading={loading}
        dataSource={dataSource}
        columns={[
          {
            title: 'Descripción',
            dataIndex: 'title',
          },
          {
            title: 'Precio',
            dataIndex: 'price',
            render: (value) => <span>${value}</span>,
          },
          {
            title: 'Descuento',
            dataIndex: 'discountedPrice',
            render: (value) => <span>${value}</span>,
          },
          {
            title: 'Clasificación',
            dataIndex: 'quantity',
          },
          {
            title: 'Total',
            dataIndex: 'total',
          },
        ]}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}

export default Ordenes;
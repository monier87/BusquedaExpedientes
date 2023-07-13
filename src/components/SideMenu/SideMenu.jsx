import React from 'react';
import Menu from './Menu';
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function SideMenu() {
    const navigate = useNavigate()
    return (
        <div className='SideMenu'>
            <Menu
                onClick={(item) => {
                    //item.key
                    navigate(item.key);
                }}
                items={[
                    {
                        label: "Dashboard",
                        key: '/',
                        icon: <AppstoreOutlined />
                    },
                    {
                        label: "Configuracion",
                        key: '/inventario',
                        icon: <ShopOutlined />
                    },
                    {
                        label: "Expedientes",
                        key: '/ordenes',
                        icon: <ShoppingCartOutlined />
                    },
                    {
                        label: "Usuarios",
                        key: '/usuarios',
                        icon: <UserOutlined />
                    },
                ]}
            />
        </div>
    );
};

export default SideMenu;

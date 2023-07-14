import React from 'react';
import Menu from './Menu';
import { SearchOutlined, UserOutlined, FolderOutlined, FileAddOutlined } from '@ant-design/icons';
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
                        label: "Buscar Expedientes",
                        key: '/',
                        icon: <SearchOutlined />
                    },
                    {
                        label: "Insertar Expedientes",
                        key: '/inventario',
                        icon: <FileAddOutlined />
                    },
                    {
                        label: "Expedientes",
                        key: '/ordenes',
                        icon: <FolderOutlined />
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

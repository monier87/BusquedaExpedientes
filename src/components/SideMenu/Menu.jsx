import React from 'react';
import { Menu as AntMenu } from 'antd';


function Menu({ items, onClick }) {
    return (
        <AntMenu onClick={onClick} mode="vertical">
            {items.map((item) => (
                <AntMenu.Item key={item.key} icon={item.icon}>
                    {item.label}
                </AntMenu.Item>
            ))}
        </AntMenu>
    );
};

export default Menu;

import React from "react";
import './Header.less'
import { Avatar } from 'antd';
import { Button } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="Header">
            <div className="Header__home">
                <Link to="/">
                    <Button type="primary" shape="circle" icon={<HomeOutlined/>}/>
                </Link>
            </div>
            <div className="Header__avatar">
                <Avatar icon={<UserOutlined />}/>
            </div>
        </header>
    );
}

export default Header;

/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'


const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]
const footerCustomerLinks = [
    {
        display: "chính sách đổi trả",
        path: "/about"
    },
    {
        display: "chính sách bảo hành",
        path: "/about"
    },
    {
        display: "chính sách hoàn tiền",
        path: "/about"
    }
]

const Footer = () => {
    return (
        <div>
            Footer
        </div>
    )
}

export default Footer

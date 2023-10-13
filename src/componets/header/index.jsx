import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.css'
export default function Header() {
    let nav =new useNavigate()
    const hanleNav=(path)=>{
        nav(path)
    }
    return (
        <div className={style.top}>
            <div className={style.logo}></div>
            <div className={style.navList}>
                <div className={style.navitem} onClick={()=>hanleNav('/home')}>主页</div>
                <div className={style.navitem}  onClick={()=>hanleNav('/about')}>关于</div>
                <div className={style.navitem} onClick={()=>hanleNav('/research')}>研究</div>
                <div className={style.navBtn}>联系我们
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import style from './index.module.css'
export default function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footerTop}>
                <div className={style.address}>
                    <h2 >联系我们</h2>
                    <p>地址：中国(四川)自由贸易试验区成都市天府新区兴隆街道湖畔路西段99号</p>
                    <p>邮箱：contact@finetool.cn</p>
                </div>
                <div className={style.footerLogo}></div>
            </div>
            <div className={style.footerbottom}>
                <div><p >Copyright © 2023 FineTool 方田医创</p></div>
                <div><p >ICP备案/许可证号：<a href="https://beian.miit.gov.cn">蜀ICP备2022029263号</a></p></div>

            </div>
        </div>
    )
}

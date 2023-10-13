import React from 'react'
import style from './index.module.css'
import Footer from '../../componets/footer'
export default function Aboout() {
  return (
    <div className={style.main}>
        <div className={style.topPlane}>
          <h1>关于 方田</h1>
        </div>
        <div className={style.centerPlane}>
            <div className={style.content}>
                <div className={style.jiuzhangText}>
                《方田》是中国最早数学典籍《九章算术》开篇第一章。“方田医创”表现了团队使用理工思维，创新解决临床问题的愿景。李籍《九章算术音义》阐述方田为：方田者，田之正也。诸田不等，以方为正，故曰方田。
                </div>
            </div>
        </div>
        <div className={style.imagePlane}></div>
    </div>
  )
}

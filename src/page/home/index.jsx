
import React from 'react'

import style from './index.module.css';
import Header from '../../componets/header'
import { Gallery, Item } from 'react-photoswipe-gallery'
export default function Home() {
    return (
        <div className={style.mian}>
            <div className={style.topPlane} >
                <Header></Header>
                <div className={style.topCenetr}>
                    <div className={style.text} style={{ height: '40px', lineHeight: "40px", fontSize: "20px", fontFamily: 'sans-serif', fontWeight: '1000' }}>欢迎到来</div>
                    <div className={style.text} style={{ height: '80px', lineHeight: "80px", fontSize: "50px" }}>方田医创</div>
                    <div className={style.text} style={{ height: '40px', lineHeight: "40px", fontSize: "30px" }}>科技融合医学</div>
                </div>
                <div className={style.arrow}>

                </div>
            </div>
            <div className={style.centerPlane}>
                <div className={style.centerPlaneCenter}>
                    <div style={{ fontWeight: '1000', fontFamily: 'sans-serif' }}>关于方田医创</div>
                    <h2>
                        运用科技力量赋能传统医学
                    </h2>
                    <p>
                        联合国内口腔医学、计算机科学的顶级学府以及行业优势力量，方田医创致力于将前沿数字化科技引入传统医学。
                    </p>
                    <div className={style.centerPlaneButtom}>
                        搜索更多
                    </div>
                </div>
            </div>
            <div className={style.Introduction}>
                <div className={style.IntroductionCenter}>
                    <div className={`${style.IntroductionCenterLeft} ${style.IntroductionCenterItem}`} >
                        <div style={{ width: '100%' }}>
                            <h2>FT001 - 外科混合现实平台</h2>
                            <div className={style.IntroductionLine}>
                                <div className={style.line}></div>
                            </div>
                            <div className={style.IntroductionText}>
                                基于混合现实平台这一底层技术，结合人工智能、区块链等技术应用，构建先进技术赋能的全流程数字化治疗体系，实现数字化技术革命，为建设社会主义现代化国家提供领先的医疗工具。
                            </div>
                        </div>
                        <img className={style.operateImage} src={require('../../public/images/FullSizeRender.jpeg')} alt="" />
                    </div>
                    <Gallery >
                        <div className={`${style.IntroductionCenterRight} ${style.IntroductionCenterItem}`}>
                            <Item
                                original={require('../../public/images/finretool.jpeg')}
                                thumbnail={require('../../public/images/finretool.jpeg')}
                                width="1086"
                                height="724"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/finretool.jpeg')} style={{ gridArea: 'a', width: '100%', height: '100%' }} />
                                )}
                            </Item>
                            <Item
                                original={require('../../public/images/Introduct2.jpeg')}
                                thumbnail={require('../../public/images/Introduct2.jpeg')}
                                width="1086"
                                height="724"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/Introduct2.jpeg')} style={{ width: '100%', height: '100%' }} />
                                )}
                            </Item>
                            <Item
                                original={require('../../public/images/WechatIMG283.jpeg')}
                                thumbnail={require('../../public/images/WechatIMG283.jpeg')}
                                width='1616'
                                height='1278'
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/WechatIMG283.jpeg')} style={{ width: '100%', height: '100%' }} />
                                )}
                            </Item>
                            <Item
                                original={require('../../public/images/WechatIMG280.jpeg')}
                                thumbnail={require('../../public/images/WechatIMG280.jpeg')}
                                width="357"
                                height='508'
                            >
                                {/* WechatIMG280 */}
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/20231012112655.png')} style={{ width: '100%', height: '100%' }} />
                                )}
                            </Item>
                            <Item
                                original={require('../../public/images/WechatIMG285.png')}
                                thumbnail={require('../../public/images/WechatIMG285.png')}
                                width="1616"
                                height="1278"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/WechatIMG285.png')} style={{ width: '100%', height: '100%' }} />
                                )}
                            </Item>
                            <Item
                                original={require('../../public/images/Introduct3.jpeg')}
                                thumbnail={require('../../public/images/Introduct3.jpeg')}
                                width='1061'
                                height='741'
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/Introduct3.jpeg')} style={{ width: '100%', height: '100%' }} />
                                )}
                            </Item>
                            <Item
                                original={require('../../public/images/introduct4.jpeg')}
                                thumbnail={require('../../public/images/introduct4.jpeg')}
                                width='2560'
                                height='1468'
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/introduct4.jpeg')} style={{ width: '100%', height: '100%' }} />
                                )}
                            </Item>
                        </div>
                    </Gallery>
                </div>
            </div>

        </div>
    )
}

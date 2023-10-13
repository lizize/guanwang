import React from 'react'
import style from './index.module.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
export default function Research() {
    return (
        <div className={style.main}>
            <div className={style.topPlane}>
                <h1 style={{ margin: '0px' }}>研究</h1>
            </div>
            <div className={style.articlePlane}>
                <div className={style.articleitem}>
                    <div className={style.articleitemLeft}>
                        <h2 style={{ margin: "0px 0px" }}>种植体识别神经网络的构建与临床模式识别</h2>
                        <div className={style.line}></div>
                        <p style={{ fontSize: '15px', lineHeight: '20px', fontWeight: '400' }}>在预训练模型VGG16基础上构建的用于种植体识别的神经网络，在实现对Straumann、NobelBiocare、Bicon种植体99%识别率的同时，使用Grad-CAM算法激活识别区域，并结合临床经验，用于识别不同系统种植体在临床治疗模式的不同。</p>
                        <p style={{ fontSize: '15px', lineHeight: '20px', fontWeight: '400' }}>不同于传统的影像学信息识别，该网络的构建与应用提出了一种医学对人工智能应用的新认识。</p>
                        <p style={{ fontSize: '15px', lineHeight: '20px', fontWeight: '400' }}>该论文发表于国际期刊 Journal of Applied Clinical Medical Physics&nbsp;(2023): e14141.</p>
                    </div>
                    <Gallery>
                        <div className={style.articleitemRight} >
                            <Item
                                original={require('../../public/images/WechatIMG265-e1671089595544.png')}
                                thumbnail={require('../../public/images/WechatIMG265-e1671089595544.png')}
                                width="2125"
                                height="1268"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/WechatIMG265-e1671089595544.png')} style={{ gridArea: 'a', width: '100%', height: '100%' }} />
                                )}
                            </Item>
                            <Item
                                original={require('../../public/images/WechatIMG264.png')}
                                thumbnail={require('../../public/images/WechatIMG264.png')}
                                width="1620"
                                height="1252"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/WechatIMG264.png')} style={{ width: '100%', height: '100%' }} />
                                )}
                            </Item>
                            <Item
                                original={require('../../public/images/Picture1-1-225x300.jpg')}
                                thumbnail={require('../../public/images/Picture1-1-225x300.jpg')}
                                width="225"
                                height="300"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/Picture1-1-225x300.jpg')} style={{ width: '100%', height: '100%' }} />
                                )}
                            </Item>
                        </div>
                    </Gallery>
                </div>
                <div className={style.articleitemline}>
                    <div className={style.xuline}></div>
                </div>
                <div className={style.articleitem1}>
                    <div className={style.articleitemLeft1}>
                        <h2 style={{ margin: "0px 0px" }}>数字化虚拟手术在口腔种植教学中的应用展望</h2>
                        <div className={style.line}></div>
                        <p style={{ fontSize: '15px', lineHeight: '20px', fontWeight: '400' }}>随着材料学及医学技术的发展，口腔种植修复正在口腔修复领域扮演着越来越重要的角色，这对口腔种植临床前教学提出越来越高的要求。数字化技术的应用对口腔种植学的发展起到了极大的促进作用。而在临床前教学的领域，数字化技术应用还较为少见。数字化虚拟手术设计是口腔种植学临床常用的数字化技术，将其引入临床前教学将有希望在多个层面促进学科发展，这也符合方田医创的发展愿景。本文就将数字化虚拟手术设计引入临床前教学的前景及问题进行系统讨论。</p>
                        <p style={{ fontSize: '15px', lineHeight: '20px', fontWeight: '400' }}>本文发表于中华口腔医学研究杂志(电子版) , 2022, 16 (03): 189 -193.</p>
                    </div>
                    <Gallery>
                        <div className={style.articleitemRight1} >
                            <Item
                                original={require('../../public/images/Picture1-1.png')}
                                thumbnail={require('../../public/images/Picture1-1.png')}
                                width="856"
                                height="1158"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src={require('../../public/images/Picture1-1.png')} style={{ width: '177px', height: '239px' }} />
                                )}
                            </Item>
                        </div>
                    </Gallery>
                </div>
            </div>
        </div>
    )
}

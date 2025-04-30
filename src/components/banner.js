"use client"
import React from "react"
import { useState,useEffect } from "react"

export default function Banner(props){
  const remoteURL = 'https://www.yangdong.co:8443/yangdong-new/'
  const {suf} = props
  return <div className="bannerWrap">
    {/* {windowSize.innerWidth > 680 && <img src={remoteURL + 'banner/pc/' + suf+ '.png'}/>}
    {windowSize.innerWidth < 680 && <img src={remoteURL + 'banner/m/' + suf + '.png'}/>} */}
    <img src={remoteURL + 'banner/pc/' + suf+ '.png'}/>
    {suf =='contact' && <div className="contactDown" onClick={()=>window.scrollTo(0,890)}></div>}
  </div>
}
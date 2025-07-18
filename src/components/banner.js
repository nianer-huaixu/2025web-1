import React from "react"

export default function Banner(props){
  const remoteURL = 'https://www.yangdong.co:8443/yangdong-new/'
  const {suf} = props
  return <div className="bannerWrap">
    {/* {windowSize.innerWidth > 680 && <img src={remoteURL + 'banner/pc/' + suf+ '.webp'}/>}
    {windowSize.innerWidth < 680 && <img src={remoteURL + 'banner/m/' + suf + '.webp'}/>} */}
    <img src={remoteURL + 'banner/pc/' + suf + '.webp'}/>
    {suf =='contact' && <div className="contactDown" onClick={()=>window.scrollTo(0,890)}></div>}
  </div>
}
"use client"
import { useState,useEffect } from "react";
import useStore from "@/hook/useStore"
import styles from'@/styles/cate.module.scss'
export default function Cate1({data}){
  const store = useStore()
  return <div style={{background:`url('${store.common.url}product/com1-bg.webp')no-repeat`,backgroundSize:'cover'}}>
    <div className="main pb-[100]">
      <h4 className={styles.title}>精工之作 品质保障</h4>
      <div className={["grid grid-cols-4 gap-[20]",styles.cate1Box].join(' ')}>
        {data.map((item,i)=>{
          return <div key={i} className={[(i==3||i==7?'text-right':'text-left'),styles.cate1Item].join(' ')} 
            style={{background:`url('${store.common.url+item.img}')no-repeat`,backgroundSize:'cover'}}>
            <p>{item.text}</p>
            {item.text1.map((li,l)=>{
              return <span key={l}>{li}</span>
            })}
          </div>
        })}
      </div>
    </div>
  </div>
}
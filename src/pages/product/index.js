"use client" 
import { useState,useEffect } from "react"
import Link from "next/link"
import Banner from "@/components/banner"
import styles from "@/styles/product.module.scss"
// observer 是一个高阶组件函数，需要包裹一个组件，这样组件才会更新
import { observer } from 'mobx-react'
import useStore from '@/hook/useStore'
function Product(){
  const store = useStore()
  const labelData = [
    {index:0,lebel:'铝板'},
    {index:1,lebel:'铝棒'},
    {index:2,lebel:'铝卷'},
    {index:3,lebel:'铝管'},
    {index:4,lebel:'铝型材'},
    {index:5,lebel:'铝锻件'},
  ]
  const [isshow,setShow] = useState(false)
  const [showIndex,setIndex] = useState(null)
  const [data,setData] = useState({list:{classify:[]}})
  const fetchData = async()=>{
    const categoryIndex = store.common.cate
    const req = {categoryIndex}
    try{
      await fetch('/api/productData',{
        method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify(req)
      }).then((res)=>{
        if(res.ok){return res.json()}
        throw new Error('network response was not ok')
      }).then(res=>{
        console.log(res);
        const arr = res.list.classify.reverse()
        setData(res)
      })
    }catch{}
  }
  const [index,setCateIndex] =useState(store.common.cate)
  function setCate(i){
    setCateIndex(i)
    store.common.changeCate(i)
  }
  function showItem(index){
    if(isshow){
      setShow(false)
      setIndex(null)
    }else{
      setShow(true)
      setIndex(index)
    }
  }
  useEffect(()=>{
    fetchData()
  },[store.common.cate])
  return (
    <div style={{backgroundColor: '#eef2f5'}}>
      <Banner suf='product'/>
      <div className={styles.productTag}>
        <div className="main">
          <div className={styles.tagWrap}>
            {labelData.map((item,i)=>{
              return <div key={i} className={store.common.cate == item.index ? styles.activeDiv : ''}
                onClick={()=>setCate(item.index)}
              >
                <img src={store.common.url + 'product/icon-'+(store.common.cate == item.index? 'r' :'w')+'-'+i+'.png'}/>
                <p>{item.lebel}</p>
              </div>
            })}
          </div>
          <img src={store.common.url + 'product/label-r.png'}/>
        </div>
      </div>
      <div className={[styles.productBox,'main'].join(' ')}>
        {data.list?.classify.map((item,i)=>{
          return <div key={i} className={styles.productWrap}>
            <div className={styles.productL}>
              <p>{item.e_t}</p>
              <img src={store.common.url + 'product/' + data.list.type + '/' + item.serise + '.png'}/>
              <b>&times;</b>
              <h4>{item.serise}列{item.texture}</h4>
              {item.product.length>4&& <pre onClick={()=>showItem(i)}>查看更多<img src={store.common.url + 'product/'+(isshow == false ?'down-arrow':'top-arrow')+'.png'}/></pre>}
            </div>
            <div className={styles.productR} style={{height:showIndex== i?'859px':'562px'}}>
              {item.product.map((productItem,Pi)=>{
                return <div key={Pi}>
                  <h5>{productItem.name}{item.texture}</h5>
                  <b>· {productItem.name}-{productItem.ply[0]}{data.list.type}</b>
                  {productItem.ply[1] && <b>· {productItem.name}-{productItem.ply[1]}{data.list.type}</b>}
                  <Link href={{pathname:'/product/detail',query:{model:productItem.name,type:data.list.type}}}>查看更多</Link>
                  <img src={'https://www.yangdong.co:8443/' + data.list.type +'/'+ productItem.name + '/1.png'}/>
                </div>
              })}
          </div>
          </div>
        })}
      </div>
    </div>
  )
}

// 用于解决动态路由刷新丢失bug
// Product.getInitialProps = async () => {
//   return {};
// }
export default observer(Product)

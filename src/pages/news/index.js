'use client';
import { useState,useEffect } from "react"
import useStore from "@/hook/useStore"
import Banner from "@/components/banner"
import VideoPlayer from "@/components/videoPlay"
import styles from '@/styles/new.module.scss'
import Router from 'next/router'


function CompanyNews(props){
  const store = useStore()
  const {list} = props.data
  function chooseLink(i){
    Router.push({
      pathname:`/news/0_${i}`
    })
  }
  return <div className={[styles.companyNew,"main"].join(' ')}>
    <div className={styles.firstNew} onClick={()=> chooseLink(0)}>
      <img src={store.common.url + list[0]?.img}/>
      <div className={styles.firstNewR}>
        <h4>多年沉淀  笃志前行</h4>
        <div className={styles.firstNewRC}>
          <h6>{list[0]?.title}</h6>
          <p>{list[0]?.content1}</p>
          <p>{list[0]?.content2}</p>
          <span>{list[0]?.day}</span>
          <i>{list[0]?.year}-{list[0]?.month}</i>
        </div>
      </div>
    </div>
    <div className={styles.newsWrap}>
      {list.map((item,i)=> {
        if(i>0) return <div key={i} className={styles.itemNew} onClick={()=> chooseLink(i)}>
          <div className={styles.imgBox}><img src={store.common.url + item.img}/></div>
          <div className={styles.itemNewC}>
            <span>{item.year}-{item.month}-{item.day}</span>
            <p>{item.title}</p>
            <i>More+</i>
          </div>
        </div>
      })}
    </div>
  </div>
}

function IndustryNews(props){
  const store = useStore()
  const {list} = props.data
  function chooseLink(i){
    Router.push({
      pathname:`/news/1_${i}`
    })
  }
  return <div className={[styles.industryNew,"main"].join(' ')}>
    <div className={styles.newsWrap}>
      {list.map((item,i)=> {
        return <div key={i} className={styles.itemNew} onClick={()=> chooseLink(i)}>
          <div className={styles.imgBox}><img src={store.common.url + item.img}/></div>
          <div className={styles.itemNewC}>
            <span>{item.year}-{item.month}-{item.day}</span>
            <p>{item.title}</p>
            <i>More+</i>
          </div>
        </div>
      })}
    </div>
  </div>
}

function Knowledge(props){
  const store = useStore()
  const {list} = props.data
  function chooseLink(i){
    Router.push({
      pathname:`/news/2_${i}`
    })
  }
  return <div className={[styles.industryNew,"main"].join(' ')}>
    <div className={styles.newsWrap}>
      {list.map((item,i)=> {
        return <div key={i} className={styles.itemNew} onClick={()=> chooseLink(i)}>
          <div className={styles.imgBox}><img src={store.common.url + item.img}/></div>
          <div className={styles.itemNewC}>
            <span>{item.date}</span>
            <p>{item.title}</p>
            <i>More+</i>
          </div>
        </div>
      })}
    </div>
  </div>
}

function VideoCom(){
  const videoList =[
    {
      title:'铝板切割',
      src:'https://www.yangdong.co:8443/video/%E9%93%9D%E6%9D%BF%E5%88%87%E5%89%B2.mp4'},
    {
      title:'铝卷分切',
      src:'https://www.yangdong.co:8443/video/%E5%88%86%E5%88%87.mp4'
    },{
      title:'铝卷分条',
      src:'https://www.yangdong.co:8443/video/%E5%88%86%E6%9D%A1.mp4'
    },{
      title:'机械加工-铣',
      src:'https://www.yangdong.co:8443/video/%E6%9C%BA%E6%A2%B0%E5%8A%A0%E5%B7%A5-%E9%93%A3.mp4'
    },{
      title:'激光切割',
      src:'https://www.yangdong.co:8443/video/%E6%BF%80%E5%85%89%E5%88%87%E5%89%B2.mp4'
    },{
      title:'挤压',
      src:'https://www.yangdong.co:8443/video/%E6%8C%A4%E5%8E%8B.mp4'
    },{
      title:'剪板',
      src:'https://www.yangdong.co:8443/video/%E5%89%AA%E6%9D%BF.mp4'
    },{
      title:'铝板分切',
      src:'https://www.yangdong.co:8443/video/%E9%93%9D%E6%9D%BF%E5%88%86%E5%88%87.mp4'
    },{
      title:'铝板覆膜',
      src:'https://www.yangdong.co:8443/video/%E9%93%9D%E6%9D%BF%E8%A6%86%E8%86%9C.mp4'
    },{
      title:'铝板整平',
      src:'https://www.yangdong.co:8443/video/%E9%93%9D%E6%9D%BF%E6%95%B4%E5%B9%B3.mp4'
    },{
      title:'铝棒切割',
      src:'https://www.yangdong.co:8443/video/%E9%93%9D%E6%A3%92%E5%88%87%E5%89%B2.mp4'
    },{
      title:'铝件锻造',
      src:'https://www.yangdong.co:8443/video/%E9%93%9D%E4%BB%B6%E9%94%BB%E9%80%A0.mp4'
    },{
      title:'喷涂',
      src:'https://www.yangdong.co:8443/video/%E5%96%B7%E6%B6%82.mp4'
    },{
      title:'水刀切割',
      src:'https://www.yangdong.co:8443/video/%E6%B0%B4%E5%88%80%E5%88%87%E5%89%B2.mp4'
    },{
      title:'锯切',
      src:'https://www.yangdong.co:8443/video/%E9%94%AF%E5%88%87.mp4'
    }
  ]
  const Item = videoList.map((item,i)=>{
    return <div className={styles.videoItem} key={i}>
      <VideoPlayer src={item.src}/>
      <div className={styles.videoTitle}>{item.title}</div>
    </div>
  })
  return <div className={[styles.videoBox,"main"].join(' ')}>{Item}</div>
}

export default function New(){
  const store = useStore()
  const [index,setIndex] = useState(store.common.newIndex) 
  const list = [
    {text:'公司动态'},
    {text:'行业新闻'},
    {text:'铝材知识'},
    {text:'加工视频'}
  ]
  const [data,setData] = useState({list:[]})
  // 请求数据
  const fetchData = async () => {
		try {
			const response = await fetch('/api/newsDataAll',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify({category:store.common.newIndex})
			})
			const res = await response.json()
			setData(res)
		} catch (err) {
			console.error(err)
		}
	}
  
  useEffect(() => {
    fetchData()
  }, [])
  function change(i){
    store.common.changeNewIndex(i)
    setIndex(i)
    if(i != 3){
      fetchData()
    }
  }
  return (
    <>
      <Banner suf='new'/>
      <div className={styles.newTop}>
        <div className="main">
          {list.map((item,i)=>{
            return <span key={i} 
            className={i==store.common.newIndex ? styles.activeSpan : ' '}
            onClick={()=>change(i)}
            >{item.text}</span>
          })}
        </div>
      </div>
      {store.common.newIndex == 0 && <CompanyNews data={data}/>}
      {store.common.newIndex == 1 && <IndustryNews data={data}/>}
      {store.common.newIndex == 2 && <Knowledge data={data}/>}
      {store.common.newIndex == 3 && <VideoCom/>}
    </>
  )
}
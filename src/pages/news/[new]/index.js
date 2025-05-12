import { useState,useEffect } from "react"
import useStore from "@/hook/useStore"
import Banner from "@/components/banner"
import styles from '@/styles/new.module.scss'
import { useRouter } from "next/router"
import Link from "next/link"



function NewDetail(){
  const store = useStore()
  const [index,setIndex] = useState(store.common.newIndex) 
  const list = [
    {text:'公司动态'},
    {text:'行业新闻'},
    {text:'铝材知识'},
    {text:'加工视频'}
  ]
  const router = useRouter();
  const searchArr = router.query?.new.split('_')
  const [data,setData] = useState({detail:{}})

  // 请求数据
  const fetchData = async () => {
    const req ={category:Number(searchArr[0]),id:Number(searchArr[1])}
		try {
			const response = await fetch('/api/newDataDetail',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify(req)
			})
			const res = await response.json()
			setData(res)
		} catch (err) {
			console.error(err)
		}
	}
  
  useEffect(() => {
    fetchData()
  }, [router.query])
  function change(i){
    store.common.changeNewIndex(i)
    router.push({
      pathname:'/news'
    })
  }
  const imgUrl = searchArr[0] == 0 ? store.common.url + 'news/company'+ (Number(searchArr[1])+1) + '.webp' : (searchArr[0] == 1 ? store.common.url + 'news/industry'+ (Number(searchArr[1])+1) + '.webp' : store.common.url + 'news/knowledge'+ (Number(searchArr[1])+1) + '.webp')
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
      <div className={styles.newDetail}>
        <h5>{data.detail.title}</h5>
        <p style={{textAlign:'center'}}>发布时间：{data.detail.year}-{data.detail.month}-{data.detail.day} &nbsp;&nbsp;&nbsp;&nbsp; 浏览：{data.detail.viewCount}次</p>
        <hr></hr>
        <img src={imgUrl}/>
        {data.detail.content && data.detail.content.split('。').map((item,i)=>{
          if(i < data.detail.content.split('。').length-1) return <p key={i}>{item}。</p>
        })}
        {data.detail.imgs && data.detail.imgs.map((item,i)=>{
          return <img key={i} src={store.common.url +'news/detail/'+ item+'.webp'}/>
        })}
        <hr></hr>
        <div className={styles.linkBox}>
          {searchArr[1] != 0 && <Link href={`/news/${Number(searchArr[0])}_${Number(searchArr[1])-1}`}>上一篇：{data.detail.prec}</Link>}
          {data.detail.next !='' && <Link href={`/news/${Number(searchArr[0])}_${Number(searchArr[1])+1}`}>下一篇：{data.detail.next}</Link>}
        </div>
      </div>
    </>
  )
}

NewDetail.getInitialProps = async () => {
  return {};
}
export default NewDetail
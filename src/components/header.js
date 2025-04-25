"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter,usePathname } from 'next/navigation'
import useStore from '@/hook/useStore'

function ProductMain(){
  const router = useRouter()
  const store = useStore()
  const [data,setData] = useState([])
  const fetchData = async()=>{
    try{
      const response = await fetch('/api/headerData')
      const res = await response.json()
      setData(res)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
      fetchData()
  }, [])
  const [cate,setCate] = useState(store.common.cate)
  function changeCate(i){
    setCate(i)
    store.common.changeCate(i)
  }
  const [serise,setSerise] = useState(0)
  function selectSerise(i){
    setSerise(i)
  }
  const [productIndex,setProductIndex] = useState(0)
  function selectProductIndex(i){
    setProductIndex(i)
  }
  function selectProduct(name,type){
    router.push({
      pathname:'/product/detail',
      query:{model:name,type:type}
    })
  }
  return <>
  <div className='header-product-top main'>
    {data.map((item,i)=>{
      return <div key={i} onClick={()=>changeCate(i)}>
        <img src={store.common.url + 'header/'+ item.type + (cate == i?'-r':'-g')+ '.png'}/>
        <span style={{color:cate == i ? '#CD241D':'#333'}}>{item?.type}系列</span>
      </div>
    })}
  </div>
  <div className='header-product-main'>
    <div className='header-product-left'>
      {data[cate]?.classify.map((item,i)=>{
        return <div key={i} style={{backgroundColor: serise == i ?"#CD241D":'#FDFCFC'}} onClick={()=>selectSerise(i)}>
          <span style={{color:serise == i ?"#FDFCFC":'#CD241D'}}>{item.serise}列</span>
          <img src={store.common.url +'header/' + data[cate].type +'/'+ item.serise + '.png'}/>
          <b style={{color:serise == i ?"#FDFCFC":'#CD241D'}}>&gt;</b>
        </div>
      })}
    </div>
    <div className='header-product-center'>
      {data[cate]?.classify[serise]?.product.map((item,i)=>{
        return <div key={i} style={{backgroundColor: productIndex == i ?"#CD241D":'#FDFCFC'}} onClick={()=>selectProductIndex(i)}>
          <span style={{color:productIndex==i?'#FDFCFC':'#CD241D'}}>{item.name}{data[cate]?.type}</span>
          <b style={{color:productIndex == i ?"#FDFCFC":'#CD241D'}}>&gt;</b>
          </div>
      })}
    </div>
    <div className='header-product-right' onClick={()=>selectProduct(data[cate].classify[serise].product[productIndex].name,data[cate].type)}>
      <img src={'https://www.yangdong.co:8443/' + data[cate]?.type + '/' +data[cate]?.classify[serise].product[productIndex].name + '/1.png'}/>
      <p>{data[cate]?.classify[serise].product[productIndex]?.name}{data[cate]?.type}&nbsp;&nbsp;{data[cate]?.classify[serise].texture}</p>
    </div>
  </div>
  </>
}
function Apply(){
  const store = useStore()
  const [index,setIndex] = useState(0)
  function selectIndex(i){
    setIndex(i)
  }
  const data = [
    {text:'航天航空铝合金产品应用',href:'#/apply/#apply01',img: store.common.url +'header/apply/1.png'},
    {text:'轨道交通铝合金产品应用',href:'/apply/#apply02',img: store.common.url +'header/apply/2.png'},
    {text:'汽车铝合金产品应用',href:'/apply/#apply03',img: store.common.url +'header/apply/3.png'},
    {text:'船舶用铝合金产品应用',href:'/apply/#apply04',img: store.common.url +'header/apply/4.png'},
    {text:'消费电子铝合金产品应用',href:'/apply/#apply05',img: store.common.url +'header/apply/5.png'},
    {text:'医疗设备用铝合金产品应用',href:'/apply/#apply06',img: store.common.url +'header/apply/6.png'},
    {text:'化工容器铝合金产品应用',href:'/apply/#apply07',img: store.common.url +'header/apply/7.png'},
    {text:'工业模具用铝合金产品应用',href:'/apply/#apply08',img: store.common.url +'header/apply/8.png'},
    {text:'机械加工铝合金产品应用',href:'/apply/#apply09',img: store.common.url +'header/apply/9.png'},
    {text:'建筑建材用铝合金产品应用',href:'/apply/#apply10',img: store.common.url +'header/apply/10.png'}
  ]
  return <div className='header-appList'>
    <div className='header-appList-main main'>
      <div className='header-appList-left'>
        {data.map((item,i)=>{
          return <Link key={i} onClick={()=>selectIndex(i)} href={item.href} style={{color:i ==index ?'#CD241D':'#333',borderColor:i ==index ?'#CD241D':'#eee'}}>{item.text}</Link>
        })}
      </div>
      <div><img src={data[index].img}/></div>
    </div>
  </div>
}
function Case(){
  const store = useStore()
  const data = [
    {text:'工程机械'},
    {text:'电子电器'},
    {text:'医疗零件'},
    {text:'建筑工程'},
    {text:'新能源'}
  ]
  return <div className='header-case'>
    <img src={store.common.url +'header/case.png'}/>
    <div className='right-box'>
      {data.map((item,i)=>{
        return <Link key={i} href='/case' onClick={()=>store.common.changeCaseIndex(i)}>
          {item.text}<span>&rarr;</span>
        </Link>
      })}
    </div>
  </div>
}
function About(){
  const store = useStore()
  const data = [
    {text:'关于扬东',href:'/about/#about1'},
    {text:'发展历程',href:'/about/#about2'},
    {text:'企业文化',href:'/about/#about3'},
    {text:'荣誉证书',href:'/about/#about4'},
    {text:'公司实力',href:'/about/#about5'},
    {text:'核心价值观',href:'/about/#about6'},
  ]
  return <div className='header-about'>
    <img src={store.common.url +'header/about.png'}/>
    <div className='right-box'>
      {data.map((item,i)=>{
        return <Link key={i} href={item.href}>{item.text}<span>&rarr;</span></Link>
      })}
    </div>
  </div>
}
function News(){
  const store = useStore()
  const data = [
    {text:'公司动态'},
    {text:'行业新闻'},
    {text:'铝材知识'},
    {text:'加工视频'}
  ]
  return <div className='header-news'>
    <img src={store.common.url +'header/news.png'}/>
    <div className='right-box'>
      {data.map((item,i)=>{
        return <Link key={i} href='news' onClick={()=>store.common.changeNewIndex(i)}>{item.text}<span>&rarr;</span></Link>
      })}
    </div>
  </div>
}
// 导航栏一级菜单 start
function MuneItem(props){
  let { path } = props
  const headData = [
    {label:'首页',route:'/'},
    {label:'产品中心',route:'/product',isChildren:true},
    {label:'加工中心',route:'/process',isProcess:true},
    {label:'应用领域',route:'/apply',isApp:true},
    {label:'行业方案',route:'/case',isCase:true},
    {label:'走进扬东',route:'/about',isAbout:true},
    {label:'新闻资讯',route:'/news',isNews:true},
    {label:'联系我们',route:'/contact'}
  ]
  const muneItem = headData.map(item =>{
    // 
    return <li key={item.label} className={[('/'+path.split('/')[1]) == item.route?'menu-ul-li selectAcitve':'menu-ul-li'].join('')}>
      <Link href={{pathname:item.route}} className='menu-route-a'>{item.label}</Link>
      {item.isChildren && (<div className='header-product'><ProductMain /></div>)}
      {item.isApp && <Apply />}
      {item.isCase && <Case />}
      {item.isAbout && <About />}
      {item.isNews && <News />}
      {/* {item.isList && (<div className='header-newList'><NewSList /></div>)}
      {item.isProcess && (<div className='header-process'><Process /></div>)} */}
    </li>
  });
  return (<ul className='menu-ul'>{muneItem}</ul>)
}

export default function Header(){
  
  // alert('test')
  // console.log('test');
  
  // console.log(useRouter,'useRouter');
  const pathname = usePathname();
  // console.log(pathname,'searchParams');
  // console.log(pathname,'pathname');
  
  // let curPath = router.asPath
  // useEffect(()=>{
  //   // console.log(pathname,'searchParams');
    
  // },[pathname])
  return <header>
    <div className="header-warp main">
        <div className='logo-wrap'>
          <Link href='/'><img src='https://www.yangdong.co:8443/yangdong-new/header/logo-white.png' alt='logo'/></Link>
        </div>
        <MuneItem path={pathname}/>
      </div>
  </header>
}
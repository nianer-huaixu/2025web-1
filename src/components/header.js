"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter,usePathname } from 'next/navigation'
import useStore from '@/hook/useStore'

function Product1(){
  const data = [
    {
      series:'7',
      child:['7003','7020','7050','7075','7A04','7A09','LC4','LC9']
    },
    {
      series:'6',
      child:['6060','6061','6063','6082','6101','6005A','LD2','LD5','LD7','LD10','LY12']
    },
    {
      series:'5',
      child:['5049','5052','5083','5754','5A02','5A03','5A05','5A06','LF5','LF6']
    },
    {
      series:'3',
      child:['3003','3004','3103','3A21']
    },
    {
      series:'2',
      child:['2011','2014','2017','2024','2219','2618','2A12','2A14','2A50','2A70']
    },
    {
      series:'1',
      child:['1050','1060']
    }
  ]
  return <div className='header-product'>
    <div className='header-product-new main'>
      {data.map((item,i)=>{
        return <ul key={i}>
          <span>{item.series}系铝合金</span>
          {item.child.map((chi,l)=>{
            return <li key={l}><Link href={{pathname:'/product/'+chi}}>{chi}铝合金</Link></li>
          })}
        </ul>
      })}
    </div>
  </div>
}

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
    // store.common.changeCate(i)
    setSerise(0)
    setProductIndex(0)
  }
  const [serise,setSerise] = useState(0)
  function selectSerise(i){
    setSerise(i)
    setProductIndex(0)
  }
  const [productIndex,setProductIndex] = useState(0)
  function selectProductIndex(i){
    setProductIndex(i)
  }
  function selectProduct(name,type){
    router.push({
      pathname:'/product/detail/',
      query:{detail:name+type}
    })
  }
  return <div className='header-product'>
  <div className='header-product-top main'>
    {data.map((item,i)=>{
      return <div key={i} onMouseEnter={()=>changeCate(i)}>
        <img src={store.common.url + 'header/'+ item.type + (cate == i?'-r':'-g')+ '.webp'}/>
        <span style={{color:cate == i ? '#CD241D':'#333'}}>{item?.type}系列</span>
      </div>
    })}
  </div>
  <div className='header-product-main'>
    <div className='header-product-left'>
      {data[cate]?.classify.map((item,i)=>{
        return <div key={i} className={serise == i ? 'activeSerise' :''} onMouseEnter={()=>selectSerise(i)}>
          <span style={{color:serise == i ?"#FDFCFC":'#CD241D'}}>{item.serise}列</span>
          <img src={store.common.url +'header/' + data[cate].type +'/'+ item.serise + '.webp'}/>
          </div>
      })}
    </div>
    <div className='header-product-center'>
      {data[cate]?.classify[serise]?.product.map((item,i)=>{
        return <div key={i} className={productIndex == i ?"activeItem":''} onMouseEnter={()=>selectProductIndex(i)}>
          <span style={{color:productIndex==i?'#FDFCFC':'#CD241D'}}>{item?.name}{data[cate]?.type}</span>
          </div>
      })}
    </div>
    <div className='header-product-right' onClick={()=>selectProduct(data[cate].classify[serise].product[productIndex]?.name,data[cate].type)}>
      <img src={'https://www.yangdong.co:8443/' + data[cate]?.type + '/' +data[cate]?.classify[serise].product[productIndex]?.name + '/1.png'}/>
      <p>{data[cate]?.classify[serise].product[productIndex]?.name}{data[cate]?.type}&nbsp;&nbsp;{data[cate]?.classify[serise].texture}</p>
    </div>
  </div>
  </div>
}
function Process(){
  const store = useStore()
  const data = [
    {text:'加工服务',href:'/process/#process1'},
    {text:'加工优势',href:'/process/#process2'},
    {text:'加工案例',href:'/process/#process3'},
    {text:'加工实力',href:'/process/#process4'}
  ]
  return <div className='header-process'>
  <div className='header-img-wrap'><span>加工中心</span><img src={store.common.url +'header/process.webp'}/></div>
  <div className='right-box'>
    {data.map((item,i)=>{
      return <Link key={i} href={item.href}>{item.text}</Link>
    })}
  </div>
</div>
}
function Apply(){
  const store = useStore()
  const [index,setIndex] = useState(0)
  function selectIndex(i){
    setIndex(i)
  }
  const data = [
    {text:'航天航空铝合金产品应用',href:'/applicationfields#application01',img: store.common.url +'header/apply/1.webp'},
    {text:'轨道交通铝合金产品应用',href:'/applicationfields#application02',img: store.common.url +'header/apply/2.webp'},
    {text:'汽车铝合金产品应用',href:'/applicationfields#application03',img: store.common.url +'header/apply/3.webp'},
    {text:'船舶用铝合金产品应用',href:'/applicationfields#application04',img: store.common.url +'header/apply/4.webp'},
    {text:'消费电子铝合金产品应用',href:'/applicationfields#application05',img: store.common.url +'header/apply/5.webp'},
    {text:'医疗设备用铝合金产品应用',href:'/applicationfields#application06',img: store.common.url +'header/apply/6.webp'},
    {text:'化工容器铝合金产品应用',href:'/applicationfields#application07',img: store.common.url +'header/apply/7.webp'},
    {text:'工业模具用铝合金产品应用',href:'/applicationfields#application08',img: store.common.url +'header/apply/8.webp'},
    {text:'机械加工铝合金产品应用',href:'/applicationfields#application09',img: store.common.url +'header/apply/9.webp'},
    {text:'建筑建材用铝合金产品应用',href:'/applicationfields#application10',img: store.common.url +'header/apply/10.webp'}
  ]
  return <div className='header-appList'>
    <div className='header-appList-main main'>
      <div className='header-appList-left'>
        {data.map((item,i)=>{
          return <Link key={i} onMouseEnter={()=>selectIndex(i)} href={item.href} style={{color:i ==index ?'#CD241D':'#333',borderColor:i ==index ?'#CD241D':'#eee'}}>{item.text}</Link>
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
    <div className='header-img-wrap'><span>行业方案</span><img src={store.common.url +'header/case.webp'}/></div>
    <div className='right-box'>
      {data.map((item,i)=>{
        return <Link key={i} href='/case' onClick={()=>store.common.changeCaseIndex(i)}>
          {item.text}
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
    <div className='header-img-wrap'><span>走进扬东</span><img src={store.common.url +'header/about.webp'}/></div>
    <div className='right-box'>
      {data.map((item,i)=>{
        return <Link key={i} href={item.href}>{item.text}</Link>
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
    <div className='header-img-wrap'><span>新闻咨询</span><img src={store.common.url +'header/news.webp'}/></div>
    <div className='right-box'>
      {data.map((item,i)=>{
        return <Link key={i} href='news' onClick={()=>store.common.changeNewIndex(i)}>{item.text}</Link>
      })}
    </div>
  </div>
}
// 导航栏一级菜单 start
function MuneItem(props){
  let { path } = props
  const router = useRouter()
  const store = useStore()
  const headData = [
    {label:'首页',route:'/'},
    {label:'产品中心',route:'/',isChildren:true},
    {label:'加工中心',route:'/process',isProcess:true},
    {label:'应用领域',route:'/applicationfields',isApp:true},
    {label:'行业方案',route:'/case',isCase:true},
    {label:'走进扬东',route:'/about',isAbout:true},
    {label:'新闻资讯',route:'/news',isNews:true},
    {label:'联系我们',route:'/contact'}
  ]
  function clickLink(text,link){
    if(text=='产品中心'){
      router.push({
        pathname:link,
        query:{
          cate:store.common.cate
        }
      })
    }else{
      router.push(link)
    }
  }
  const muneItem = headData.map(item =>{
    // 
    return <li key={item.label} className={[('/'+path.split('/')[1]) == item.route?'menu-ul-li selectAcitve':'menu-ul-li'].join('')}>
      <a onClick={()=>clickLink(item.label,item.route)} className='menu-route-a'>{item.label}</a>
      {/* {item.isChildren && <ProductMain/>} */}
      {item.isChildren && <Product1/>}
      {item.isProcess && <Process/>}
      {item.isApp && <Apply/>}
      {item.isCase && <Case/>}
      {item.isAbout && <About/>}
      {item.isNews && <News/>}
    </li>
  });
  return (<ul className='menu-ul'>{muneItem}</ul>)
}

export default function Header(){
  const [scrollHeight,setScrollHeight] = useState(0)
  const pathname = usePathname()

  useEffect(()=>{
    let throttleTimeout = null;
    const handleScroll =()=>{
      if(throttleTimeout === null){
        throttleTimeout = setTimeout(()=>{
          setScrollHeight(document.documentElement.scrollTop)
          throttleTimeout = null
        },200)
      }
    }
    window.addEventListener('scroll',handleScroll)
    return()=>{
      window.removeEventListener('scroll',handleScroll)
      clearTimeout(throttleTimeout)
    }
  },[scrollHeight])
  return <header style={{backgroundColor:scrollHeight>980?'#000':''}}>
    <div className="header-warp main">
      <div className='logo-wrap'>
        <Link href='/'><img src='https://www.yangdong.co:8443/yangdong-new/header/logo-white.webp' alt='logo'/></Link>
      </div>
      <MuneItem path={pathname}/>
    </div>
    <div className='up' style={{opacity:scrollHeight>1000?'1':'0'}} onClick={()=>window.scrollTo(0,0)}></div>
  </header>
}
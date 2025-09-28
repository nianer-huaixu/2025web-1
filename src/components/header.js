"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect,useRef } from 'react'
import { useRouter,usePathname } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import useStore from '@/hook/useStore'

function Product1(){
  const store = useStore()
  const router = useRouter()
  const data = [
    {
      series:'7',
      lists:[
        {label:'7003',img:false},
        {label:'7020',img:false},
        {label:'7050',img:false},
        {label:'7075',img:store.common.url +'header/hot1.png'},
        {label:'7A04',img:store.common.url +'header/hot2.png'},
        {label:'7A09',img:false},
        {label:'LC4',img:store.common.url +'header/hot2.png'},
        {label:'LC9',img:false}
      ],
      cate:{
        img:store.common.url +'header/ban.webp',
        text:'板材/Plate',
        href:'/product/lvban'
      }
    },
    {
      series:'6',
      lists:[
        {label:'6060',img:false},
        {label:'6061',img:store.common.url +'header/hot1.png'},

        {label:'6063',img:store.common.url +'header/hot1.png'},
        {label:'6082',img:store.common.url +'header/hot2.png'},
        {label:'6101',img:false},
        {label:'6A02',img:false},
        {label:'6005A',img:false},
        {label:'LD2',img:false}
      ],
      cate:{
        img:store.common.url +'header/bang.webp',
        text:'棒材/Bar',
        href:'/product/lvbang'
      }
    },
    {
      series:'5',
      lists:[
        {label:'5049',img:false},
        {label:'5052',img:store.common.url +'header/hot1.png'},
        {label:'5083',img:store.common.url +'header/hot1.png'},
        {label:'5754',img:store.common.url +'header/hot2.png'},
        {label:'5A02',img:false},
        {label:'5A03',img:false},
        {label:'5A05',img:false},
        {label:'5A06',img:store.common.url +'header/hot2.png'},
        {label:'LF5',img:false},
        {label:'LF6',img:false}
      ],
      cate:{
        img:store.common.url +'header/guan.webp',
        text:'管材/PIPE',
        href:'/product/lvguan'
      }
    },
    {
      series:'3',
      lists:[
        {label:'3003',img:store.common.url +'header/hot1.png'},
        {label:'3004',img:false},
        {label:'3103',img:false},
        {label:'3A21',img:store.common.url +'header/hot2.png'}
      ],
      cate:{
        img:store.common.url +'header/juan.webp',
        text:'卷材/Coil',
        href:'/product/lvjuan'
      }
    },
    {
      series:'2',
      lists:[
        {label:'2011',img:false},
        {label:'2014',img:false},
        {label:'2017',img:false},
        {label:'2024',img:store.common.url +'header/hot1.png'},
        {label:'2219',img:false},
        {label:'2618',img:false},
        {label:'2A12',img:store.common.url +'header/hot1.png'},
        {label:'2A14',img:store.common.url +'header/hot2.png'},
        {label:'2A50',img:store.common.url +'header/hot2.png'},
        {label:'2A70',img:false},
        {label:'LD5',img:false},
        {label:'LD7',img:false},
        {label:'LD10',img:false},
        {label:'LY12',img:store.common.url +'header/hot2.png'}
      ],
      cate:{
        img:store.common.url +'header/xingcai.webp',
        text:'型材/Profile',
        href:'/product/lvxingcai'
      }
    },
    {
      series:'1',
      lists:[
        {label:'1050',img:false},
        {label:'1060',img:store.common.url +'header/hot1.png'},
        {label:'1070',img:false},
        {label:'1100',img:false}
      ],
      cate:{
        img:store.common.url +'header/duanjian.webp',
        text:'锻件/Forging',
        href:'/product/lvduanjian'
      }
    }
  ]
  const headerRef = useRef(null)
  function clickCate(href){
    // 1. 强制设置内联样式覆盖高度
    if (headerRef.current) {
      headerRef.current.style.height = '0px'; // 使用你的初始高度
      // headerRef.current.style.overflow = 'hidden'
      headerRef.current.style.transition = 'height 0.5s ease' // 保持动画效果
      
      // 2. 等待样式应用后再跳转
      requestAnimationFrame(() => {
        router.push(href)
        // 不需要then回调，直接跳转
      })
    } else {
      router.push(href)
    }
  }
  return <div className='header-product' ref={headerRef}
    // 保留原有的鼠标事件
    onMouseLeave={() => {
      if (headerRef.current) {
        // 恢复CSS类控制的高度
        headerRef.current.style.height = '';
        headerRef.current.style.overflow = 'hidden';
        headerRef.current.style.transition = 'height 0.5s ease'; // 保持动画效果
      }
    }}
  >
    <div className='header-product-new main'>
      {data.map((item,i)=>{
        return <ul key={i}>
          <div>
            <span>{item.series}系铝合金</span>
            {item.lists?.map((chi,l)=>{
              return <li key={l}
                style={{background:chi.img ? `url('${chi.img}')no-repeat right`:''}}>
                <a onClick={()=>clickCate('/product/'+chi.label)}>{chi.label}铝合金</a>
                </li>
            })}
          </div>
          <div onClick={()=>{clickCate(item.cate.href)}}>
            <img src={item.cate.img}/>
            <p className='text-center'>{item.cate.text}</p>
          </div>
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
function MuneItem(props){
  let { path } = props
  const router = useRouter()
  const store = useStore()
  const headData = [
    {label:'首页',route:'/'},
    {label:'产品中心',route:'/product',isChildren:true},
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
  const store = useStore()
  const router = useRouter()

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
  // 复制功能
  // const [email, setEmail] = useState('18852996299');
  // const [isCopied, setIsCopied] = useState(false);

  // const copyEmail = async () => {
  //   try {
  //     await navigator.clipboard.writeText(email);
  //     setIsCopied(true);
  //     setTimeout(() => setIsCopied(false), 2000);
  //   } catch (err) {
  //     console.error('复制失败:', err);
  //   }
  // }
  function copyText(text){
    // 检查是否支持现代API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(() => alert('微信号复制成功!'))
        .catch(() => fallbackCopy(text)); // 失败时使用降级方案
    } else {
      // 直接使用降级方案
      fallbackCopy('18852996299');
    }
  }
  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      alert('微信号复制成功!');
    } catch (err) {
      alert('复制失败，请手动选择文本复制');
    } finally {
      document.body.removeChild(textArea);
    }
  }
  return <header style={{backgroundColor:scrollHeight>280?'#000':''}}>
    <div className="header-warp main pc-header">
      <div className='logo-wrap'>
        <Link href='/'><img src='https://www.yangdong.co:8443/yangdong-new/header/logo-white.webp' alt='logo'/></Link>
      </div>
      <MuneItem path={pathname}/>
    </div>
    <div className='up' style={{opacity:scrollHeight>1000?'1':'0'}} onClick={()=>window.scrollTo(0,0)}></div>
    {/* <div className='m-header'>
      <div className='logo-wrap'>
        <Link href='/'><img src='https://www.yangdong.co:8443/yangdong-new/header/logo-white.webp' alt='logo'/></Link>
      </div>
    </div> */}
      <Sidebar/>
      <div className='footer-bottom'>
        <div onClick={()=>router.push('/')}>
          <img src={store.common.url + '/index/footer-icon-1.png'}/>
          <Link href='/'>首页</Link>
        </div>
        <div onClick={()=>router.push('/product')}>
          <img src={store.common.url + '/index/footer-icon-2.png'}/>
          <Link href='/product'>产品</Link>
        </div>
        <div>
          <img src={store.common.url + '/index/footer-icon-3.png'}/>
          <a href={`tel:18852996299}`}>电话</a>
        </div>
        <div id="copyText" onClick={()=>copyText('18852996299')}>
          <img src={store.common.url + '/index/footer-icon-4.png'}/>
          <span>微信</span>
        </div>
      </div>
  </header>
}
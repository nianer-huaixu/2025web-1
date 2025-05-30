"use client"
import { useState,useEffect,useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Router from 'next/router'
import Link from 'next/link'
import Slider from "react-slick"
import ProductCom from '@/components/productCom'
import styles from '@/styles/detail.module.scss'
import useStore from '@/hook/useStore'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Detail1(props){
  const {data,model,type} = props
  const store = useStore()
  let imgListArr = []
  for(let i = 1;i<=data.png;i++){
    imgListArr.push(`https://www.yangdong.co:8443/${type}/${model}/${i}.png`)
  }
  const [currImg,setImg] = useState(0)
  // 点击选中图片
  function selectImg(index){
    setImg(index)
  }
  const settings = {
    dots: false,
    infinite: true,
    autoplay:false,
    slidesToShow: 4,
    slidesToScroll: 1,
		variableWidth: true,
		// arrows:false
    arrows:imgListArr.length == 4 ? false :true,
  };
  useEffect(()=>{
    setImg(0)
  },[model,type])
  return <div className={styles.detail1}> 
			<div className={[styles.productDetail1,'main'].join(' ')}>
				<div className={styles.productImgWrap}>
          <div className={styles.imgBig}><img src={imgListArr[currImg]}/></div>
					<div className={styles.productImgList}>
						<div>
							<div className='slider-container product-slider'>
							<Slider {...settings}>
								{imgListArr.map((item,i)=>{
									return <div key={i} style={{width:160.8}}
                    className={currImg == i? 'active' :'bgF'}
										onClick={()=>selectImg(i)}
									>
										<img src={item}/>
									</div>
								})}
							</Slider>
							</div>
						</div>
					</div>
			</div>
			<div className={styles.produceParamWrap}>
				<h6>{model + type + " " + data?.classes}</h6>
				{data?.old_name!=='null' && <h6 style={{lineHeight:'36px',margin:0}}>{data?.old_name}</h6>}
				<p style={{marginTop:'10px'}}>铝材类别：{data?.classes}</p>
				<p>{data?.refer1}</p>
				{data?.refer2 != 'null' && <p>{data?.refer2}mm</p>}
				{data?.refer3 != 'null' && <p>长度: {data?.refer3}mm</p>}
				<p>硬度: {data?.stiffness}（不同规格及状态数值会有差异）</p>
				<p>全国库存量: ≈100000KG</p>
				<p>优势: 大存量，全国送，闪电发，保质量，价格低</p>
				<p>物流: 当天发货，送货上门</p>
				<p>加工: 按客户需求加工定制</p>
				<p className={styles.productParamList1}>
						<a><img src={store.common.url +'product/icon1.webp'}/>产品手册</a>
						<a><img src={store.common.url +'product/icon2.webp'}/>视频介绍</a>
						<a><img src={store.common.url +'product/icon3.webp'}/>服务与支持</a>
				</p>
				<p className={styles.productParamBtnGroup}>
					<button className='redBtn'><a  target="_blank" href='https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=3&source=100'>立即询价</a></button>
					<button className='whiteBtn' style={{marginLeft:'20px'}}><Link href='/contact'>联系我们</Link></button>
				</p>
			</div>
		</div>
  </div>
}

function Intro({intro,model,type}){
	const {kinds,criterion,status} = intro
	const store = useStore()
	const URL = 'https://www.yangdong.co:8443/video/'
	const videoRef = useRef(null);
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }
	return <div className={styles.introWrap}>
		<div className={[styles.introMain,'main'].join(' ')}>
		<div className={styles.introL}>
			<video width={700} type="video/mp4" onClick={()=>togglePlay()} autoPlay muted playsInline loop ref={videoRef} src={URL + type +'/'+ model +'.mp4'}/>
			{/* <div className={styles.videoKZ}>
				<img onClick={()=>togglePlay()} src={store.common.url + (videoRef.current?.paused ? 'product/pause.webp' : 'product/play.webp')}/>
			</div> */}
		</div>
		<div className={styles.introR}>
			<h5>产品简介 product brief introduction</h5>
			<div className={styles.introRI}>
				<img src={store.common.url + 'product/intro1.webp'}/>
				<div>
					<p>{type}种类</p>
					<ul>
					{kinds && kinds.split(',').map((item,i)=>{return <li key={i}>{item}</li>})}
					</ul>
				</div>
			</div>
			<div className={styles.introRI}>
				<img src={store.common.url + 'product/intro2.webp'}/>
				<div>
					<p>生产标准</p>
					<ul>
					{criterion && criterion.split(',').map((item,i)=>{return <li key={i}>{item}</li>})}
					</ul>
				</div>
			</div>
			<div className={styles.introRI}>
				<img src={store.common.url + 'product/intro3.webp'}/>
				<div>
					<p>供货状态</p>
					<ul>
					{status && status.split(',').map((item,i)=>{return <li key={i}>{item}</li>})}
					</ul>
				</div>
			</div>
		</div>
	</div>
	</div>
	
}

function Param({chemical,physics,mechanical}){
	return (
	<div className={styles.paramM}>
		<div className={[styles.paramMC,'main'].join(' ')}>
			<div className={styles.tableL}>化学成分</div>
			<table border={0} className={styles.productTableW}>
				<thead>
					<tr>
						<th colSpan={2}>合金牌号</th>
						<th>硅Si</th>
						<th>铁Fe</th>
						<th>铜Cu</th>
						<th>锰Mn</th>
						<th>镁Gg</th>
						<th>铬Cr</th>
						<th>锌Zn</th>
						<th>钛Ti</th>
						<th>锆Zr</th>
						<th>镍Ni</th>
						<th colSpan={2}>其他</th>
						<th>铝Al</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>新牌号</td>
						<td>旧牌号</td>
						<td rowSpan={2}>{chemical.si}</td>
						<td rowSpan={2}>{chemical.fe}</td>
						<td rowSpan={2}>{chemical.cu}</td>
						<td rowSpan={2}>{chemical.mn}</td>
						<td rowSpan={2}>{chemical.gg}</td>
						<td rowSpan={2}>{chemical.cr}</td>
						<td rowSpan={2}>{chemical.zn}</td>
						<td rowSpan={2}>{chemical.ti}</td>
						<td rowSpan={2}>{chemical.zr}</td>
						<td rowSpan={2}>{chemical.ni}</td>
						<td>每个</td>
						<td>总量</td>
						<td rowSpan={2}>{chemical.al}</td>
					</tr>
					<tr>
					<td>{chemical.new_mark}</td>
					<td>{chemical.old_mark}</td>
					<td>{chemical.each}</td>
					<td>{chemical.amount}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div className={[styles.paramMC,'main'].join(' ')}>
			<div className={styles.tableL}>物理性能</div>
			<table border={0} className={styles.productTableW}>
				<thead>
					<tr>
						<th>铝合金牌号及状态<br></br>(参考值)</th>
						<th>热膨胀系数<br></br>(20-100°C)μm/m·k </th>
						<th>熔点范围<br></br>(°C)</th>
						<th>电导率<br></br>20°C(68°F)(%IACS)</th>
						<th>电阻率<br></br>20°C(68*F) Ωmm2/m</th>
						<th>密度<br></br>(20°C)(g/cm3)</th>
					</tr>
			</thead>
			<tbody>
				<tr>
					<td>{physics.refer}</td>
					<td>{physics.coefficent}</td>
					<td>{physics.melting}</td>
					<td>{physics.conductance}</td>
					<td>{physics.electrical}</td>
					<td>{physics.density}</td>
				</tr>
				</tbody>
			</table>
		</div>
		<div className={[styles.paramMC,'main'].join(' ')}>
			<div className={styles.tableL}>机械性能</div>
			<table border={0} className={styles.productTableW}>
				<thead>
					<tr>
						<th>铝合金牌号及状态<br></br>（参考值）</th>
						<th>抗拉强度<br></br>Rm/Mpa</th>
						<th>屈服强度<br></br>Rp0.2/Mpa</th>
						<th>延伸率/%</th>
						<th>硬度/HBWa</th>
					</tr>
			</thead>
			<tbody>
					<tr>
						<td>{mechanical.refer}</td>
						<td>{mechanical.resist}</td>
						<td>{mechanical.surrender}</td>
						<td>{mechanical.extend}</td>
						<td>{mechanical.hardness}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	)
}

function Typical({use,model,type}){
	const store = useStore()
	return (
		<div className={styles.typical}>
			<div className={[styles.typicalC,'main'].join(' ')}>
				<div>
					<img src={store.common.url +'product/use_t.webp'}/>
					<p>
						<b>{use.title}主要特征及应用范围：</b><br></br>
						{use.introduce}
					</p>
					<p>{use.typeuse}</p>
				</div>
				<img src={store.common.url + 'product/' + type + '.webp'}/>
			</div>
		</div>
	)
}

function Reco({type}){
	const store = useStore()
	const cate = ['铝板','铝棒','铝卷','铝管','铝型材','铝锻件']
	const index = cate.indexOf(type)
	const data = [
		[
			{title:'2A12',type:'军工硬铝',ply:['T3','T4']},
			{title:'6063',type:'工业硬铝',ply:['T6','T651']},
			{title:'6082',type:'工业硬铝',ply:['T6','T651']},
			{title:'5052',type:'耐腐蚀铝镁合金',ply:['H32','H112']},
			{title:'5083',type:'耐腐蚀铝镁合金',ply:['O','H112']},
			{title:'7050',type:'航空超硬铝',ply:['T7451']}
		],
		[
			{title:'2A12',type:'军工硬铝',ply:['T3','T4']},
			{title:'2024',type:'军工硬铝',ply:['T3','T4']},
			{title:'5083',type:'耐腐蚀铝镁合金',ply:['O','H112']},
			{title:'6061',type:'工业硬铝',ply:['T6','T651']},
			{title:'6082',type:'工业硬铝',ply:['T6','T651']},
			{title:'7075',type:'航空超硬铝',ply:['T6','T651']}
		],
		[
			{title:'2A12',type:'军工硬铝',ply:['O','T4']},
			{title:'5052',type:'耐腐蚀铝镁合金',ply:['O','H32']},
			{title:'5083',type:'耐腐蚀铝镁合金',ply:['O','H111']},
			{title:'6061',type:'工业硬铝',ply:['O','T6']},
			{title:'6063',type:'工业硬铝',ply:['O','T6']},
			{title:'7050',type:'航空超硬铝',ply:['O','T6']}
		],
		[
			{title:'2A12',type:'军工硬铝',ply:['T4','T112']},
			{title:'2024',type:'军工硬铝',ply:['T3','T4']},
			{title:'6061',type:'军工硬铝',ply:['T5','T6']},
			{title:'6082',type:'军工硬铝',ply:['T6','T651']},
			{title:'6063',type:'军工硬铝',ply:['T5','T6']},
			{title:'7075',type:'航空超硬铝',ply:['T6','T651']}
		],
		[
			{title:'2024',type:'军工硬铝',ply:['T4','T112']},
			{title:'2A12',type:'军工硬铝',ply:['T3','T4']},
			{title:'6061',type:'工业硬铝',ply:['T5','T652']},
			{title:'6063',type:'工业硬铝',ply:['T5','T6']},
			{title:'6082',type:'工业硬铝',ply:['T6','T651']},
			{title:'7075',type:'航空超硬铝',ply:['T6','T651']}
		],
		[
			{title:'2024',type:'军工硬铝',ply:['T3','T4']},
			{title:'2A12',type:'军工硬铝',ply:['T4','T112']},
			{title:'5083',type:'耐腐蚀铝镁合金',ply:['H26','H112']},
			{title:'6061',type:'工业硬铝',ply:['T5','T652']},
			{title:'6082',type:'工业硬铝',ply:['T6','T651']},
			{title:'7075',type:'航空超硬铝',ply:['T6','T651']}
		]
	]
	function selectProduct(model){
		Router.push({
			pathname:'/product/detail',
      query:{
        detail:model+type
      }
		})
	}
	return <div className={styles.recoWrap}>
		<h4>相关推荐</h4>
		<div className={['main',styles.recoWrapBox].join(' ')}>
			{data[1].map((item,i)=>{
				return <div key={i} onClick={()=>{selectProduct(item.title)}}>
					<span>{item.title + item.type}</span>
					{item.ply.map((pl,l)=>{
						return <p key={l}>· {item.title}-{pl}{type}</p>
					})}
					<Link href={{pathname:'/product/detail/',query:{detail:item.title+type}}}>查看更多</Link>
					<img src={'https://www.yangdong.co:8443/'+ type + '/' + item.title + '/1.png'}/>
				</div>
			})}
		</div>
	</div>
}
function productDetail(){
  const searchParams = useSearchParams()
	const detail = searchParams.get('detail')
	const lastDigitIndex = detail.search(/\d(?=\D*$)/)
	const model = detail.slice(0, lastDigitIndex + 1)
	const type = detail.slice(lastDigitIndex + 1)
	
  const [data,setData] = useState({productMain:{},intro:{},chemical:{},physics:{},mechanical:{},use:{}})
	useEffect(() => { 
		if(model != null)fetchData()
	}, [detail])
	const fetchData = async () => {
		try {
			const response = await fetch('/api/productAPI',{
				method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify({name:detail})
			})
			const res = await response.json()
			setData(res)
		} catch (err) {
			console.error(err)
		}
	}
  return <>
    <Detail1 data={data.productMain} model={model} type={type}/>
		<div className={styles.anchor}>
			<div className='main'>
				<a href='#intro'>产品简介</a>
				<a href='#param'>性能参数</a>
				<a href='#typical'>典型用途</a>
				<a href='#advantage'>产品优势</a>
				<a href='#apply'>应用领域</a>
				<a href='#strength'>公司实力</a>
			</div>
		</div>
    <div className='upwards' id='intro'></div>
		<Intro intro={data.intro} model={model} type={type}/>
    <div className='upwards' id='param'></div>
		<div className={styles.paramTitle}>
			<p className='main'>性能参数Parameters of performance</p>
		</div>
		<Param chemical={data.chemical} physics={data.physics} mechanical={data.mechanical}/>
    <div className='upwards' id='typical'></div>
		<Typical use={data.use} model={model} type={type}/>
		<ProductCom/>
		<Reco type={type}/>
  </>
}

// 用于解决动态路由刷新丢失bug
productDetail.getInitialProps = async () => {
  return {};
}
export default productDetail
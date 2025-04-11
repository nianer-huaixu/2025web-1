import { useState,useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Slider from "react-slick"
import styles from '@/styles/detail.module.scss'
import useStore from '@/hook/useStore'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Detail1(props){
  const {data,product} = props
  const store = useStore()
  const lastDigitIndex = product.search(/\d(?=\D*$)/);
  let imgListArr = []
  for(let i = 1;i<=data.amount;i++){
    imgListArr.push(`https://www.yangdong.co:8443/${product.slice(lastDigitIndex + 1)}/${product.slice(0, lastDigitIndex + 1)}/${i}.png`)
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
    arrows:imgListArr.length == 4 ? false :true,
  };
  useEffect(()=>{
    setImg(0)
  },[product])
  return <div className={styles.detail1}> 
			<div className={[styles.productDetail1,'main'].join(' ')}>
				<div className={styles.productImgWrap}>
          <div className={styles.imgBig}><img src={imgListArr[currImg]}/></div>
					<div className={styles.productImgList}>
						<div>
							<div className='slider-container product-slider'>
							<Slider {...settings}>
								{imgListArr.map((item,i)=>{
									return <div key={i} 
                    className={currImg == i? 'active' :' '}
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
				<h6>{data?.name + " " + data?.classes}</h6>
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
						<a><img src={store.common.url +'product/icon1.png'}/>产品手册</a>
						<a><img src={store.common.url +'product/icon2.png'}/>视频介绍</a>
						<a><img src={store.common.url +'product/icon3.png'}/>服务与支持</a>
				</p>
				<p className={styles.productParamBtnGroup}>
						<button className='redBtn'><a  target="_blank" href='https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=2&source=100'>立即询价</a></button>
						<button className='whiteBtn' style={{marginLeft:'20px'}}><Link href='/contactus'>联系我们</Link></button>
				</p>
			</div>
		</div>
  </div>
}

function productDetail(){
  const searchParams = useSearchParams()
  const detail = searchParams.get('detail')
  const [data,setData] = useState({productMain:{},intro:{},chemical:{},physics:{},mechanical:{},use:{}})
	useEffect(() => {
		if(detail != null)fetchData()
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
    <Detail1 data={data.productMain} product={detail}/>
  </>
}

// 用于解决动态路由刷新丢失bug
productDetail.getInitialProps = async () => {
  return {};
}
export default productDetail
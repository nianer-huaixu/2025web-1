"use client"
import styles from "@/styles/product.module.scss"
// observer 是一个高阶组件函数，需要包裹一个组件，这样组件才会更新
import { observer } from 'mobx-react'
import useStore from '@/hook/useStore'
import { useState } from "react"
import Link from "next/link"
import Router from 'next/router'
function Product(){
  const store = useStore()
  
  const dataList = [
    [
      {
        mode:'7003',
        text:'航空超硬铝',
        zt:'T652,T7351'
      },
      {
        mode:'7020',
        text:'航空超硬铝',
        zt:'T6,T651'
      },
      {
        mode:'7050',
        text:'航空超硬铝',
        zt:'T7451,H112'
      },
      {
        mode:'7075',
        text:'航空超硬铝',
        zt:'T6511,T652'
      },
      {
        mode:'7A04',
        text:'航空超硬铝',
        zt:'T6,T651'
      },
      {
        mode:'7A09',
        text:'航空超硬铝',
        zt:'T6511,H112'
      },
      {
        mode:'LC4',
        text:'航空超硬铝',
        zt:'T6511,T62'
      },
      {
        mode:'LC9',
        text:'航空超硬铝',
        zt:'T6511,H112'
      },
      {
        mode:'6060',
        text:'工业硬铝',
        zt:'T4,T5'
      },
      {
        mode:'6061',
        text:'工业硬铝',
        zt:'T6,T651'
      },
      {
        mode:'6063',
        text:'工业硬铝',
        zt:'T651,T6511'
      },
      {
        mode:'6082',
        text:'工业硬铝',
        zt:'T6'
      },
      {
        mode:'6101',
        text:'工业硬铝',
        zt:'T6'
      },
      {
        mode:'6A02',
        text:'工业硬铝',
        zt:'T4,T6'
      },
      {
        mode:'6005A',
        text:'工业硬铝',
        zt:'T4,T6'
      },
      {
        mode:'LD2',
        text:'工业硬铝',
        zt:'T652,H112'
      },
      {
        mode:'5049',
        text:'耐腐蚀铝镁合金',
        zt:'H112,H22'
      },
      {
        mode:'5052',
        text:'耐腐蚀铝镁合金',
        zt:'H111,H112'
      },
      {
        mode:'5083',
        text:'耐腐蚀铝镁合金',
        zt:'H32,H26'
      },
      {
        mode:'5754',
        text:'耐腐蚀铝镁合金',
        zt:'H112,H22'
      },
    ],
    [
      {
        mode:'5A02',
        text:'耐腐蚀铝镁合金',
        zt:'H112,H24'
      },
      {
        mode:'5A03',
        text:'耐腐蚀铝镁合金',
        zt:'O,H112'
      },
      {
        mode:'5A05',
        text:'耐腐蚀铝镁合金',
        zt:'O,H112'
      },
      {
        mode:'5A06',
        text:'耐腐蚀铝镁合金',
        zt:'O,H112'
      },
      {
        mode:'LF5',
        text:'耐腐蚀铝镁合金',
        zt:'H22,H32'
      },
      {
        mode:'LF6',
        text:'耐腐蚀铝镁合金',
        zt:'O,H112'
      },
      {
        mode:'3003',
        text:'防锈铝合金',
        zt:'H111,H112'
      },
      {
        mode:'3004',
        text:'防锈铝合金',
        zt:'H14,H24'
      },
      {
        mode:'3103',
        text:'防锈铝合金',
        zt:'H24,H16,'
      },
      {
        mode:'3A21',
        text:'防锈铝合金',
        zt:'H112,H14'
      },{
        mode:'2011',
        text:'军工硬铝',
        zt:'T6511,T8'
      },{
        mode:'2014',
        text:'军工硬铝',
        zt:'T6,T6510'
      },{
        mode:'2017',
        text:'军工硬铝',
        zt:'T351,T4'
      },{
        mode:'2024',
        text:'军工硬铝',
        zt:'H111,H112'
      },{
        mode:'2219',
        text:'军工硬铝',
        zt:'T6,T8'
      },{
        mode:'2618',
        text:'军工硬铝',
        zt:'T6511,T8'
      },{
        mode:'2A12',
        text:'军工硬铝',
        zt:'H24,H14'
      },{
        mode:'2A14',
        text:'军工硬铝',
        zt:'T1,T6'
      },{
        mode:'2A50',
        text:'军工硬铝',
        zt:'T1,T6'
      },{
        mode:'2A70',
        text:'军工硬铝',
        zt:'T1,T6'
      },
    ],
    [
      {
        mode:'LD5',
        text:'军工硬铝',
        zt:'LD7O,H111'
      },{
        mode:'LD7',
        text:'军工硬铝',
        zt:'H14,H24'
      },{
        mode:'LD10',
        text:'军工硬铝',
        zt:'H24,H16'
      },{
        mode:'LY12',
        text:'军工硬铝',
        zt:'H112,H24'
      },{
        mode:'1050',
        text:'工业纯铝',
        zt:'H111,H112'
      },{
        mode:'1060',
        text:'工业纯铝',
        zt:'H112,H14'
      }
    ]
  ]
  const juanList =[
    [
      {
        mode:'7003',
        text:'航空超硬铝',
        zt:'T652,T7351'
      },
      {
        mode:'7020',
        text:'航空超硬铝',
        zt:'T6,T651'
      },
      {
        mode:'7075',
        text:'航空超硬铝',
        zt:'T6511,T652'
      },
      {
        mode:'LC4',
        text:'航空超硬铝',
        zt:'T6511,T62'
      },
      {
        mode:'LC9',
        text:'航空超硬铝',
        zt:'T6511,H112'
      },
      {
        mode:'6061',
        text:'工业硬铝',
        zt:'T6,T651'
      },
      {
        mode:'6063',
        text:'工业硬铝',
        zt:'T651,T6511'
      },
      {
        mode:'6101',
        text:'工业硬铝',
        zt:'T6'
      },
      {
        mode:'6A02',
        text:'工业硬铝',
        zt:'T4,T6'
      },
      {
        mode:'6005A',
        text:'工业硬铝',
        zt:'T4,T6'
      },
      {
        mode:'LD2',
        text:'工业硬铝',
        zt:'T652,H112'
      },
      {
        mode:'5049',
        text:'耐腐蚀铝镁合金',
        zt:'H112,H22'
      },
      {
        mode:'5052',
        text:'耐腐蚀铝镁合金',
        zt:'H111,H112'
      },
      {
        mode:'5083',
        text:'耐腐蚀铝镁合金',
        zt:'H32,H26'
      },
      {
        mode:'5754',
        text:'耐腐蚀铝镁合金',
        zt:'H112,H22'
      },
      {
        mode:'5A02',
        text:'耐腐蚀铝镁合金',
        zt:'H112,H24'
      },
      {
        mode:'5A03',
        text:'耐腐蚀铝镁合金',
        zt:'O,H112'
      },
      {
        mode:'LF5',
        text:'耐腐蚀铝镁合金',
        zt:'H22,H32'
      },
      {
        mode:'LF6',
        text:'耐腐蚀铝镁合金',
        zt:'O,H112'
      },
      {
        mode:'3003',
        text:'防锈铝合金',
        zt:'H111,H112'
      },
    ],
    [
      
      {
        mode:'3004',
        text:'防锈铝合金',
        zt:'H14,H24'
      },
      {
        mode:'3103',
        text:'防锈铝合金',
        zt:'H24,H16'
      },
      {
        mode:'3A21',
        text:'防锈铝合金',
        zt:'H112,H14'
      },{
        mode:'2011',
        text:'军工硬铝',
        zt:'T6511,T8'
      },{
        mode:'2024',
        text:'军工硬铝',
        zt:'H111,H112'
      },{
        mode:'2219',
        text:'军工硬铝',
        zt:'T6,T8'
      },{
        mode:'2618',
        text:'军工硬铝',
        zt:'T6511,T8'
      },{
        mode:'2A12',
        text:'军工硬铝',
        zt:'H24,H14'
      },{
        mode:'2A14',
        text:'军工硬铝',
        zt:'T1,T6'
      },{
        mode:'2A50',
        text:'军工硬铝',
        zt:'T1,T6'
      },{
        mode:'2A70',
        text:'军工硬铝',
        zt:'T1,T6'
      },
      {
        mode:'LD5',
        text:'军工硬铝',
        zt:'LD7O,H111'
      },{
        mode:'LD7',
        text:'军工硬铝',
        zt:'H14,H24'
      },{
        mode:'LD10',
        text:'军工硬铝',
        zt:'H24,H16'
      },{
        mode:'LY12',
        text:'军工硬铝',
        zt:'H112,H24'
      },{
        mode:'1050',
        text:'工业纯铝',
        zt:'H111,H112'
      },{
        mode:'1060',
        text:'工业纯铝',
        zt:'H112,H14'
      }
    ]
  ]
  const [index,setIndex] = useState(0)
  const labelData = [
    {index:0,lebel:'铝板',data:dataList},
    {index:1,lebel:'铝棒',data:dataList},
    {index:2,lebel:'铝卷',data:juanList},
    {index:3,lebel:'铝管',data:dataList},
    {index:4,lebel:'铝型材',data:dataList},
    {index:5,lebel:'铝锻件',data:dataList},
  ]
  const [cate,setCate] = useState('铝板')
  function selectCate(label,i){
    setCate(label)
    setIndex(i)
    setListIndex(0)
  }
  const [hoverIndex,setHoverIndex] = useState(null)
  function handleMouseEnter(i){
    // setIsHovering(true)
    setHoverIndex(i)
  }
  function handleMouseLeave(){
    // setIsHovering(false)
    setHoverIndex(null)
  }
  const data = [
    {
      text1:'全系列铝板',
      text2:'1/2/3/5/6/7全系列1-400厚可定制尺寸',
      text3:'铝板系列涵盖亮面铝板、贴膜铝板、预拉伸铝板、超宽铝板、特厚铝板、超平铝板、精铸铝板、锻造铝板、花纹铝板...',
      href:'/product/lvban'
    },
    {
      text1:'高精度铝棒',
      text2:'表面平整度高 常规直径大小均备现货',
      text3:'铝棒系列涵盖纯铝棒、合金铝棒、大直径铝棒、挤压铝棒、光亮铝棒、精拉铝棒、超硬铝棒、铸造铝棒、研磨铝棒...',
      href:'/product/lvbang'
    },
    {
      text1:'多种类铝卷',
      text2:'纹理定制|规格多样 常规宽度厚度均备现货',
      text3:'铝卷系列涵盖超宽铝卷、保温铝卷、防锈铝卷、花纹铝卷、合金铝带、冲压铝带、拉伸铝带、铝卷开平、铝卷分条...',
      href:'/product/lvjuan'
    },
    {
      text1:'多规格铝管',
      text2:'光洁度好|切削性佳|性能优良常规壁厚内径大小均备现货',
      text3:'铝管系列涵盖挤压铝管、无缝铝管、冷拔铝管、薄壁铝管、厚壁铝管、锻造铝管、大口径铝管、矩形方管...',
      href:'/product/lvguan'
    },
    {
      text1:'规格齐全铝型材',
      text2:'优质材料，规格齐全，款式多样，来图来样定制，常规规格现货常备',
      text3:'铝型材系列涵盖铝排、铝方棒、六角铝棒角铝、工业铝型材、支持来图来样、开模定制铝型材、可参观铝型材工厂...',
      href:'/product/lvxingcai'
    },
    {
      text1:'精密铸造铝锻件',
      text2:'材质齐全，尺寸精准，来图来样开模定制，常规规格现货常备',
      text3:'铝锻件系列涵盖锻铝板、锻铝棒、锻铝饼、锻铝环、铝法兰、异型锻件、自由锻件、模锻件、大型铝锻件...',
      href:'/product/lvduanjian'
    }
  ]
  const [listIndex,setListIndex] = useState(0)
  function currBtn(i){
    if(i==0){
      setListIndex(0)
    }else{
      setListIndex(i-1)
    }
  }
  function preBtn(i){
    if(i==2){
      setListIndex(2)
    }else{
      setListIndex(i+1)
    }
  }
  return <>
    <div className={["relative w-full h-[520px] text-center",styles.productTop].join(' ')} style={{backgroundImage:`url('${store.common.url}product/${cate}-g.webp')`}}>
      <h4 className="text-[80px] pt-[160px] tracking-[10px] font-bold">产品中心</h4>
      <p className="text-[35px] mt-[10px] tracking-[10px]">专注于铝合金销售定制加工一体化供应商</p>
      <div className={["flex w-[1200px] m-auto justify-between mt-[20px]",styles.cateList].join(' ')}>
        {labelData.map((item,i)=>{
          return <div key={i} onClick={()=>selectCate(item.lebel,item.index)}
            className={["flex items-center bg-[#fff] text-[#000] px-[12px] cursor-pointer",styles.hoverCate].join(' ')}
            style={{backgroundColor:index==i?'#CD241D':''}}
            onMouseEnter={()=>handleMouseEnter(i)}
            onMouseLeave={()=>handleMouseLeave(i)}  
            >
            <img src={store.common.url +'product/icon-'+ ((hoverIndex==i|| index ==i) ? 'w-' :'b-') +i +'.png'}/>
            <span style={{color:index==i?'#fff':''}} className="text-[20px] ml-[15px]">{item.lebel}产品</span>
          </div>
        })}
      </div>
    </div>
    <div className="main pb-[40px]">
      <p className="text-[#666] text-[24px] border-b my-[20px]">产品中心</p>
      <div className={["flex border border-[#eee] mt-[40px]",styles.productNewTop].join(' ')}>
        <img src={store.common.url + 'product/' + cate +'-n.webp'}/>
        <div className="p-[80px]">
          <h4 className="text-[36px] text-[#333] font-[700] tracking-[10px]">{data[index].text1}</h4>
          <p className="text-[18px] text-[#999] tracking-[2px]">{data[index].text2}</p>
          <p className="text-lg text-[#999] mb-[20px]">——</p>
          <p className="text-[18px] text-[#666] mb-[80px]">{data[index].text3}</p>
          <Link href={data[index].href} className="block w-[128px] h-[40px] bg-[#CD241D] text-[#fff] text-center leading-[40px]">了解更多</Link>
        </div>
      </div>
    </div>
    <div className="bg-[#F7F7F7] py-[40px]">
      <div className={["main grid grid-cols-4 gap-[20px]",styles.productGridBox].join(' ')}>
        {labelData[index].data[listIndex].map((item,i)=>{
          return <div key={i} className={["p-[20px] bg-[#fff]",styles.productItemBox].join(' ')}
            onClick={()=>Router.push({pathname:'/product/'+item.mode})}>
            <img className={styles.productLogo} src={store.common.url + 'product/mini-logo.png'}/>
            <img src={'https://www.yangdong.co:8443/'+cate+'/'+item.mode+'/1.png'}/>
            <h6 className="text-[24px] text-[#000] font-[700]">{item.mode}{item.text}</h6>
            <p className="border-b pb-[4px] flex justify-between">
              {item.zt.split(',').map((span,s)=>{
                return <span key={s} className="text-[#666]"><b>· </b>{item.mode}-{span}{cate}</span>
              })}
            </p>
          </div>
        })}
      </div>
      {index != 2 ? 
        <div className={styles.productBtn}>
          <span
            style={{cursor:listIndex==0?'not-allowed':'pointer',userSelect:listIndex==0?'none':''}}
            onClick={()=>setListIndex(0)}
          >首页</span>
          <span
            style={{cursor:listIndex==0?'not-allowed':'pointer',userSelect:listIndex==0?'none':''}}
            onClick={()=>currBtn(listIndex)}
          >上一页</span>
          <span className={listIndex+1<2?styles.activeSpan:''} onClick={()=>currBtn(listIndex)}>{listIndex==0 ?listIndex+1:listIndex}</span>
          <span className={listIndex+2>2?styles.activeSpan:''} onClick={()=>preBtn(listIndex)}>{listIndex==0 ?listIndex+2:listIndex+1}</span>
          <span
            style={{cursor:listIndex==2?'not-allowed':'pointer',userSelect:listIndex==2?'none':''}}
            onClick={()=>preBtn(listIndex)}
          >下一页</span>
          <span
            style={{cursor:listIndex==2?'not-allowed':'pointer',userSelect:listIndex==2?'none':''}}
            onClick={()=>setListIndex(2)}
          >末页</span>
        </div>
      :
        <div className={styles.productBtn}>
        <span
          style={{cursor:listIndex==0?'not-allowed':'pointer',userSelect:listIndex==0?'none':''}}
          onClick={()=>setListIndex(0)}
        >首页</span>
        <span
          style={{cursor:listIndex==0?'not-allowed':'pointer',userSelect:listIndex==0?'none':''}}
          onClick={()=>setListIndex(0)}
        >上一页</span>
        <span className={listIndex+1==1?styles.activeSpan:''} onClick={()=>setListIndex(0)}>1</span>
        <span className={listIndex+1==2?styles.activeSpan:''} onClick={()=>setListIndex(1)}>2</span>
        <span
          style={{cursor:listIndex==1?'not-allowed':'pointer',userSelect:listIndex==1?'none':''}}
          onClick={()=>setListIndex(1)}
        >下一页</span>
        <span
          style={{cursor:listIndex==1?'not-allowed':'pointer',userSelect:listIndex==1?'none':''}}
          onClick={()=>setListIndex(1)}
        >末页</span>
      </div>
      }
    </div>
  </>
}

// 用于解决动态路由刷新丢失bug
// Product.getInitialProps = async () => {
//   return {};
// }
export default observer(Product)

"use client" 
import Banner from "@/components/banner"
import styles from "@/styles/process.module.scss"
import useStore from "@/hook/useStore"
import { useState } from "react"
function Title({ch,en}){
  return (
    <div className={styles.processTitle}>
    <span>{en}</span>
    <h4>{ch}</h4>
    </div>
  )
}

export default function Process(){
  const store = useStore()
  const data1 = [
    {img:store.common.url +'process/1-1.png',bgc:'#2A303C',text1:'现货供应',text2:'SPOT SUPPLY'},
    {img:store.common.url +'process/1-2.png',bgc:'#494F5B',text1:'种类丰富',text2:'RICH VARIETY'},
    {img:store.common.url +'process/1-3.png',bgc:'#2A303C',text1:'设备齐全',text2:'FULLY EQUIPPED'},
    {img:store.common.url +'process/1-4.png',bgc:'#494F5B',text1:'快速发货',text2:'FAST DELIVERY'},
    {img:store.common.url +'process/1-5.png',bgc:'#2A303C',text1:'切割加工',text2:'CUTTING PROCESS'}
  ]
  const data2 = [
    {img:store.common.url +'process/2-1.png',text1:'原材优',text2:'支持各种类型的铝合金，采用符合国标标准的原材料，不掺杂废铝，',text3:'确保铝型材韧性足'},
    {img:store.common.url +'process/2-2.png',text1:'厚度足',text2:'采用标准模具成型，厚度充足，保证载重量，',text3:'延长使用寿命'},
    {img:store.common.url +'process/2-3.png',text1:'精度高',text2:'采用高精度自动化设备，直线度误差低至±0.5mm，',text3:'成型精度高'},
    {img:store.common.url +'process/2-4.png',text1:'硬度高',text2:'材料进行失效处理后，硬度可高达13度，',text3:'高承重设备不易变形，抗压抗拉性能好'},
    {img:store.common.url +'process/2-5.png',text1:'膜厚足',text2:'氧化膜厚度符合标准，型材表面',text3:'20年性能稳定'}
  ]
  const data3 = [
    {img:store.common.url +'process/3-1.png',text1:'可开具',text2:'材质质保证明'},
    {img:store.common.url +'process/3-2.png',text1:'24小时报价',text2:'响应和DFM反馈'},
    {img:store.common.url +'process/3-3.png',text1:'品质为本 杜绝假冒',text2:'支持验货'}
  ]
  const data4 = [
    {iconS:store.common.url +'process/4-1-1.png',icon:store.common.url +'process/4-1-0.png',text:'医疗设备'},
    {iconS:store.common.url +'process/4-2-1.png',icon:store.common.url +'process/4-2-0.png',text:'电子电器'},
    {iconS:store.common.url +'process/4-3-1.png',icon:store.common.url +'process/4-3-0.png',text:'自动化设备'},
    {iconS:store.common.url +'process/4-4-1.png',icon:store.common.url +'process/4-4-0.png',text:'汽车行业'},
    {iconS:store.common.url +'process/4-5-1.png',icon:store.common.url +'process/4-5-0.png',text:'石油机械'},
  ]
  const [index4,setIndex4] = useState(0)
  function selectData4(index){
    setIndex4(index)
  }
  const data4C = [
    {
      img1:store.common.url +'process/case1-1.png',
      img2:store.common.url +'process/case1-2.png',
      img3:store.common.url +'process/case1-3.png',
      text1:'医疗设备零部件加工案例 ',
      text2:'案例描述：扬东产品所用原材料来自品牌供应商，从原材入库到出货都经过层层质检，良品率高达99.8%；与扬东合作十分放心！'
    },
    {
      img1:store.common.url +'process/case2-1.png',
      img2:store.common.url +'process/case2-2.png',
      img3:store.common.url +'process/case2-3.png',
      text1:'电子电器零部件加工案例 ',
      text2:'案例描述：扬东产品所用原材料来自品牌供应商，从原材入库到出货都经过层层质检，良品率高达99.8%；与扬东合作十分放心！'
    },
    {
      img1:store.common.url +'process/case3-1.png',
      img2:store.common.url +'process/case3-2.png',
      img3:store.common.url +'process/case3-3.png',
      text1:'自动化设备零部件加工案例 ',
      text2:'案例描述：扬东产品所用原材料来自品牌供应商，从原材入库到出货都经过层层质检，良品率高达99.8%；与扬东合作十分放心！'
    },
    {
      img1:store.common.url +'process/case4-1.png',
      img2:store.common.url +'process/case4-2.png',
      img3:store.common.url +'process/case4-3.png',
      text1:'汽车行业零部件加工案例 ',
      text2:'案例描述：扬东产品所用原材料来自品牌供应商，从原材入库到出货都经过层层质检，良品率高达99.8%；与扬东合作十分放心！'
    },
    {
      img1:store.common.url +'process/case5-1.png',
      img2:store.common.url +'process/case5-2.png',
      img3:store.common.url +'process/case5-3.png',
      text1:'石油机械零部件加工案例 ',
      text2:'案例描述：扬东产品所用原材料来自品牌供应商，从原材入库到出货都经过层层质检，良品率高达99.8%；与扬东合作十分放心！'
    }
  ]
  return (
    <>
      <Banner suf='process'/>
      <div className='upwards' id='process1'></div>
      <div className={styles.process1}>
        <div className={[styles.process1Box,'main'].join(' ')}>
          <div className={styles.process1Top}>
            <div className={styles.process1TopL}>
              <h4>我们的服务  按需定制</h4>
              <p>成熟的生产技术 多年的加工经验</p>
              </div>
              <div className={styles.process1TopR}>
                <img src={store.common.url +'process/1-0.png'}/>
              </div>
          </div>
          <div className={styles.process1Cen}>
            {data1.map((item,i)=>{
              return <div key={i} style={{backgroundColor:item.bgc}}>
                <img src={item.img}/>
                <sapn>{item.text1}</sapn>
                <p>{item.text2}</p>
              </div>
            })}
          </div>
          <div className={styles.process1BH}>
            <h4>一站式铝材精密加工服务</h4>
            <p>为您提供专业cnc加工解决方案</p>
          </div>
          <div className={styles.process1B}>
            {data2.map((item,i)=>{
              return <div key={i} className={styles.process1BItem}>
                <img src={item.img}/>
                <div className={styles.process1BItemB}>
                  <span>{item.text1}</span>
                  <p>{item.text2}<b>{item.text3}</b></p>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className='upwards' id='process2'></div>
      <div className={styles.process2}>
        <div className={[styles.process2C,'main'].join(' ')}>
          <div className={styles.process2CL}>
            <h4>我们的服务承诺</h4>
            <p>您信赖的品牌</p>
            <div className={styles.process2CList}>
              {data3.map((item,i)=>{
                return <div key={i} className={styles.process2CListI}>
                  <div><img src={item.img}/></div>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              })}
            </div>
            <h4>让制造更敏捷</h4>
            <p>来图来样加工，快速核价，给您不一样的零件定制体验</p>
            <a target="_blank" href="https://html.ecqun.com/kf/sdk/openwin.html?corpid=11627559&cstype=rand&mode=0&cskey=kkd1a23CLKZMWrHPzz&scheme=3&source=100">立即获取报价</a>
            <p>* 网络出现以低价牌号冒充高价牌号，以非标厂标冒充国标的乱象。<br></br>勿贪一时之利，影响产品质量。</p>
          </div>
          <div className={styles.process2CR}>
            <div className={styles.process2CR1}>
              <div>
                <span>出色的氧化效果</span>
                <b>01</b>
                <p>通过独有的晶粒细化技术和反向挤压工艺，保持棒材晶粒组织低倍晶粒度优于一级，得到非常细腻的观感，轻松胜任各种较高要求的氧化。</p>
              </div>
              <div style={{marginTop:'40px'}}>
                <span>更小的加工余量</span>
                <b>03</b>
                <p>反向挤压工艺还克服了传统正向挤压机不可避免的铝材表面粗晶环过深问题。由于粗晶环极浅，0.5mm的单边加工余量即可去除铝材表面的不良，可显著减少加工量，节约材料和工时。</p>
              </div>
            </div>
            <div className={styles.process2CR2}>
              <h4 style={{margin:'40px 0 40px 20px'}}>扬东铝材优势</h4>
              <div>
                <span>更少的加工变形</span>
                <b>02</b>
                <p>采用拉伸永久变形去除应力的矫直工艺可去除大部分铝材在挤压和热处理过程中产生的残余应力，有效减少加工后的变形，提高零件尺寸精度。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='upwards' id='process3'></div>
      <div className={styles.process3}>
        <Title ch='铝材精密加工案例 用品质赢得众多客户信赖' en='PRECISION MACHINING CASE'/>
        <div className={[styles.process3Top,'main'].join(' ')}>
          {data4.map((item,i)=>{
            return <div key={i} className={index4 == i ? styles.activeBox :' '} onMouseEnter={()=>selectData4(i)}>
              <img src={index4 == i ? item.iconS: item.icon}/>
              {item.text}
            </div>
          })}
        </div>
        <div className={[styles.process3C,'main'].join(' ')}>
          <img src={data4C[index4].img1}/>
          <div className={styles.process3CR}>
            <div className={styles.process3CRT}>
              <h5>{data4C[index4].text1}</h5>
              <p>{data4C[index4].text2}</p>
            </div>
            <div className={styles.process3CRB}>
              <img src={data4C[index4].img2}/>
              <img src={data4C[index4].img3}/>
            </div>
          </div>
        </div>
      </div>
      <div className='upwards' id='process4'></div>
      <div className={styles.process4}>
        <Title ch='强大加工实力 产品品质保障' en='FACTOR STRENGTH'/>
        <div className={[styles.process4C,'main'].join(' ')}>
          <div className={`${styles.process4Cgrid} ${styles.process4Cgrid1}`}>
            <div><img src={store.common.url + 'process/5-1.png'}/><span>挤压铝型材</span></div>
            <div><img src={store.common.url + 'process/5-2.png'}/><span>激光切割</span></div>
            <div><img src={store.common.url + 'process/5-3.png'}/><span>三丰三次元检测</span></div>
          </div>
          <div className={`${styles.process4Cgrid} ${styles.process4Cgrid2}`}>
            <div><img src={store.common.url + 'process/5-4.png'}/><span>铝材开模定制</span></div>
            <div className={styles.diyBox}><p>专业设备</p><span>PROFESSIONAL EQUIPMENT</span></div>
            <div><img src={store.common.url + 'process/5-5.png'}/><span>铝材氧化</span></div>
          </div>
          <div className={`${styles.process4Cgrid} ${styles.process4Cgrid1}`}>
            <div><img src={store.common.url + 'process/5-6.png'}/><span>铝材调直</span></div>
            <div><img src={store.common.url + 'process/5-7.png'}/><span>激光打标</span></div>
            <div><img src={store.common.url + 'process/5-8.png'}/><span>光洁度检测</span></div>
          </div>
          
        </div>
      </div>
    </>
  )
}
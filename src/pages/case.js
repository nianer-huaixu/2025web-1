import Banner from "@/components/banner"
import { useState } from "react"
import useStore from "@/hook/useStore"
import styles from '@/styles/case.module.scss'
export default function Case(){
  const store = useStore()
  const [index,setIndex] = useState(0)
  function seleceIndex(index){
    setIndex(index);
  }
  const data1 = [
    {text:'工程机械'},
    {text:'电子电器'},
    {text:'医疗零件'},
    {text:'建筑工程'},
    {text:'新能源'}
  ]
  const imgList = [
    {text:'工程机械铝材',
      imgS:[
        {img:store.common.url + 'case/0/1.png',text2:'铝型材挤压'},
        {img:store.common.url + 'case/0/2.png',text2:'铝合金开模'},
        {img:store.common.url + 'case/0/3.png',text2:'铝型材深加工'},
        {img:store.common.url + 'case/0/4.png',text2:'大型铝型材挤压'},
        {img:store.common.url + 'case/0/5.png',text2:'铝材加工'},
        {img:store.common.url + 'case/0/6.png',text2:'铝合金型材'},
        {img:store.common.url + 'case/0/7.png',text2:'铝电极头'},
        {img:store.common.url + 'case/0/8.png',text2:'散热器'},
        {img:store.common.url + 'case/0/9.png',text2:'精密铝件加工'},
        {img:store.common.url + 'case/0/10.png',text2:'电机外壳'},
        {img:store.common.url + 'case/0/11.png',text2:'铝合金开模'},
        {img:store.common.url + 'case/0/12.png',text2:'铝型材精密零件加工'}
      ]
    },
    {text:'电子电器铝材',
      imgS:[
        {img:store.common.url + 'case/1/2.png',text2:'铝合金开模'},
        {img:store.common.url + 'case/1/5.png',text2:'铝材加工'},
        {img:store.common.url + 'case/1/3.png',text2:'铝型材深加工'},
        {img:store.common.url + 'case/1/7.png',text2:'铝电极头'},
        {img:store.common.url + 'case/1/12.png',text2:'铝型材精密零件加工'},
        {img:store.common.url + 'case/1/9.png',text2:'精密铝件加工'},
        {img:store.common.url + 'case/1/8.png',text2:'散热器'},
        {img:store.common.url + 'case/1/1.png',text2:'铝型材挤压'},
        {img:store.common.url + 'case/1/6.png',text2:'铝合金型材'},
        {img:store.common.url + 'case/1/10.png',text2:'电机外壳'},
        {img:store.common.url + 'case/1/11.png',text2:'铝合金开模'},
        {img:store.common.url + 'case/1/4.png',text2:'大型铝型材挤压'}
      ]
    },
    {text:'医疗零件铝材',
      imgS:[
        {img:store.common.url + 'case/2/1.png',text2:'铝型材挤压'},
        {img:store.common.url + 'case/2/4.png',text2:'大型铝型材挤压'},
        {img:store.common.url + 'case/2/6.png',text2:'铝合金型材'},
        {img:store.common.url + 'case/2/3.png',text2:'铝型材深加工'},
        {img:store.common.url + 'case/2/8.png',text2:'散热器'},
        {img:store.common.url + 'case/2/9.png',text2:'精密铝件加工'},
        {img:store.common.url + 'case/2/7.png',text2:'铝电极头'},
        {img:store.common.url + 'case/2/12.png',text2:'铝型材精密零件加工'},
        {img:store.common.url + 'case/2/5.png',text2:'铝材加工'},
        {img:store.common.url + 'case/2/10.png',text2:'电机外壳'},
        {img:store.common.url + 'case/2/11.png',text2:'铝合金开模'},
        {img:store.common.url + 'case/2/2.png',text2:'铝合金开模'}
      ]
    },
    {text:'建筑工程铝材',
      imgS:[
        {img:store.common.url + 'case/3/2.png',text2:'铝合金开模'},
        {img:store.common.url + 'case/3/8.png',text2:'散热器'},
        {img:store.common.url + 'case/3/6.png',text2:'铝合金型材'},
        {img:store.common.url + 'case/3/7.png',text2:'铝电极头'},
        {img:store.common.url + 'case/3/4.png',text2:'大型铝型材挤压'},
        {img:store.common.url + 'case/3/5.png',text2:'铝材加工'},
        {img:store.common.url + 'case/3/10.png',text2:'电机外壳'},
        {img:store.common.url + 'case/3/1.png',text2:'铝型材挤压'},
        {img:store.common.url + 'case/3/3.png',text2:'铝型材深加工'},
        {img:store.common.url + 'case/3/9.png',text2:'精密铝件加工'},
        {img:store.common.url + 'case/3/11.png',text2:'铝合金开模'},
        {img:store.common.url + 'case/3/12.png',text2:'铝型材精密零件加工'}
      ]
    },
    {text:'新能源铝材',
      imgS:[
        {img:store.common.url + 'case/4/5.png',text2:'铝材加工'},
        {img:store.common.url + 'case/4/8.png',text2:'散热器'},
        {img:store.common.url + 'case/4/6.png',text2:'铝合金型材'},
        {img:store.common.url + 'case/4/7.png',text2:'铝电极头'},
        {img:store.common.url + 'case/4/11.png',text2:'铝合金开模'},
        {img:store.common.url + 'case/4/1.png',text2:'铝型材挤压'},
        {img:store.common.url + 'case/4/2.png',text2:'铝合金开模'},
        {img:store.common.url + 'case/4/3.png',text2:'铝型材深加工'},
        {img:store.common.url + 'case/4/4.png',text2:'大型铝型材挤压'},
        {img:store.common.url + 'case/4/9.png',text2:'精密铝件加工'},
        {img:store.common.url + 'case/4/10.png',text2:'电机外壳'},
        {img:store.common.url + 'case/4/12.png',text2:'铝型材精密零件加工'}
      ]
    }
  ]
  return (
    <>
      <Banner suf='case'/>
      <div className={styles.caseTop}>
        <div className="main">
          {data1.map((item,i)=>{
            return <span key={i} className={i==index ? styles.activeSpan : ' '} onClick={()=>seleceIndex(i)}>{item.text}</span>
          })}
        </div>
      </div>
      <div className={[styles.caseC,"main"].join(' ')}>
        <h5>{imgList[index].text}</h5>
        <div className={styles.caseBox}>
          {imgList[index].imgS.map((item,i)=>{
            return <div key={i}>
              <img src={item.img}/>
              <p>{item.text2}</p>
            </div>
          })}
        </div>
      </div>
    </>
  )
}
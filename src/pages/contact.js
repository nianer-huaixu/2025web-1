import Banner from "@/components/banner"
import MapComponent from "@/components/MapContainer"
import styles from '@/styles/contact.module.scss'
import useStore from "@/hook/useStore"
export default function Contact(){
  const store = useStore()
  const data1 = [
    {icon:store.common.url+'contact/icon1.png',text1:'销售总机',text2:'0512-62388268',text3:'TEL'},
    {icon:store.common.url+'contact/icon2.png',text1:'技术咨询',text2:'0512-62388068',text3:'TEL'},
    {icon:store.common.url+'contact/icon3.png',text1:'急单热线',text2:'0512-62388298',text3:'TEL'},
    {icon:store.common.url+'contact/icon4.png',text1:'企业邮箱',text2:'szydtl7075@163.com',text3:'MAILBOX'},
    {icon:store.common.url+'contact/icon5.png',text1:'销售传真',text2:'0512-62388198',text3:'FAX'}
  ]
  const data2 =[
    {text1:'林经理',text:'Marketing Director',text2:'市场总监',text3:'158 5000 6720',img:store.common.url + 'contact/erweima1.png'},
    {text1:'朱女士',text:'Sales Executive',text2:'销售主管',text3:'189 6365 0984',img:store.common.url + 'contact/erweima2.png'},
    {text1:'黄女士',text:'Sales Specialist',text2:'销售专员',text3:'137 7608 0469',img:store.common.url + 'contact/erweima3.png'},
    {text1:'尹小艳',text:'Sales Specialist',text2:'销售专员',text3:'138 6257 6851',img:store.common.url + 'contact/erweima4.png'},
    {text1:'黄玲',text:'Sales Specialist',text2:'销售专员',text3:'180 2024 2001',img:store.common.url + 'contact/erweima5.png'},
    {text1:'徐小玲',text:'Sales Specialist',text2:'销售专员',text3:'180 2024 2063',img:store.common.url + 'contact/erweima6.png'}
  ]
  return (
    <>
      <Banner suf='contact'/>
      <section className={styles.contact1}>
        <div className="main">
          <h4>联系方式</h4>
          <div className={styles.contact1C}>
            <div className={styles.contact1L}>
              {data1.map((item,i)=>{
                return <div key={i}>
                  <img src={item.icon}/>
                  <span>{item.text1}</span>
                  <b>{item.text2}</b>
                  <i>{item.text3}</i>
                </div>
              })}
            </div>
            <div className={styles.contact1R}>
              <pre>订单咨询</pre>
              <p style={{marginBottom:'40px'}}>0512-62388058</p>
              <pre>技术顾问</pre>
              <p style={{marginBottom:'40px'}}>188 5299 6299（黄先生）微信同号</p>
              <pre>营业时间：8:00-17:30（周一至周六）</pre>
              <div className={styles.imgWrap}>
                <img src={store.common.url +'contact/erweima.png'}/>
                <i>关注我们</i>
              </div>
              <div className={styles.addressWrap}>
                <img src={store.common.url +'contact/icon6.png'}/>
                <p><span>地址</span><br></br>江苏省苏州工业园区唯亭镇双灯路2号</p>
              </div>
            </div>
          </div>
        </div> 
      </section>
      <section className={styles.contact2}>
        <div className="main">
          <h4>业务联系方式<span>专业服务团队，提供一流的产品与服务，有任何问题，随时与我们取得联系，我们真诚为您解答</span></h4>
          <div className={styles.contactBox}>
            {data2.map((item,i)=>{
              return <div key={i}>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
                <p>{item.text}</p>
                <p>{item.text3}</p>
                <img src={item.img}/>
              </div>
            })}
          </div>
        </div>
      </section>
      <section className={styles.contact3}><MapComponent/></section>
    </>
  )
}
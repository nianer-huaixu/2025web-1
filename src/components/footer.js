import Link from "next/link"
import useStore from "@/hook/useStore"
export default function Footer(){
  const store = useStore()
  const imgURL = 'https://www.yangdong.co:8443/yangdong-new/footer/'
  const data =[
    {title:'走进扬东',link:'/about',list:[
      {text:'企业简介',link:'/about#about1'},
      {text:'发展历程',link:'/about#about2'},
      {text:'企业文化',link:'/about#about3'},
      {text:'荣誉资质',link:'/about#about4'},
      {text:'公司实力',link:'/about#about5'}
    ]},
    {title:'产品中心',link:'/product',list:[
      {text:'铝板',link:'/product'},
      {text:'铝棒',link:'/product'},
      {text:'铝卷',link:'/product'},
      {text:'铝管',link:'/product'},
      {text:'铝型材',link:'/product'},
      {text:'铝锻件',link:'/product'},
    ]},
    {title:'应用领域',link:'/apply',list:[
      {text:'航空航天',link:'/apply#apply01'},
      {text:'高铁轨交',link:'/apply#apply02'},
      {text:'汽车制造',link:'/apply#apply03'},
      {text:'船舶运输',link:'/apply#apply04'},
      {text:'消费电子',link:'/apply#apply05'},
      {text:'医疗设备',link:'/apply#apply06'},
      {text:'化工容器',link:'/apply#apply07'},
      {text:'工业模具',link:'/apply#apply08'},
      {text:'机械加工',link:'/apply#apply09'},
      {text:'建筑建材',link:'/apply#apply10'}
    ]},
    {title:'加工中心',link:'/process',list:[
      {text:'加工服务',link:'/process#process1'},
      {text:'加工优势',link:'/process#process2'},
      {text:'加工案例',link:'/process#process3'},
      {text:'加工实力',link:'/process#process4'},
    ]},
    {title:'新闻资讯',link:'/news',list:[
      {text:'公司动态',link:'/news'},
      {text:'行业新闻',link:'/news'},
      {text:'铝材知识',link:'/news'},
      {text:'加工视频',link:'/news'}
    ]}
  ]
  function changeState(title,i){
    if(title === '新闻资讯'){
      store.common.changeNewIndex(i)
    }
    if(title === '产品中心'){
      store.common.changeCate(i)
    }
  }
  const Item = data.map((group,I)=>{
    return <ul key={I} className='footer-normal-ul'>
      <h5><Link href={group.link}>{group.title}</Link></h5>
      {group.list.map((item,i)=>{
        return <li key={i} onClick={()=>changeState(group.title,i)}>
          <Link href={item.link}>{item.text}</Link>
        </li>
      })}
    </ul>
  })
  return <footer>
    <div className="footer-wrap main">
      {Item}
      <ul className='contact'>
        <h5><Link href={'/contactus'}>联系我们</Link></h5>
        <div className='erweima-box'>
          <div>
            <img src={imgURL + 'erweima01.webp'}/>
            <p style={{marginTop:'10px'}}>联系我们</p>
          </div>
        </div>
        <li><img src={imgURL + 'phone.svg'}/>电话: <b style={{fontSize:'40px'}}>0512-62388268</b></li>
        <li><img src={imgURL + 'location.svg'}/>地址: 江苏省苏州市工业园区唯亭镇双灯路2号</li>
        <li><img src={imgURL + 'email.svg'}/>邮箱: 2521813109@qq.com</li>
      </ul>
    </div>
    <p className="copyright">江苏扬东铝业集团有限公司 版权所有
      <img src={imgURL + 'gonganbu_logo.webp'}/>
      <a href='https://beian.mps.gov.cn/#/query/webSearch' target='_blank'>苏公网安备32059002005586号</a> 
      &nbsp;&nbsp;&nbsp;
      <a href='https://beian.miit.gov.cn' target='_blank'>苏ICP备12039314号-7</a></p>
  </footer>
}
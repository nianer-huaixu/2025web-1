"use client"
import { useEffect,useRef, useState } from "react"
import useStore from "@/hook/useStore"
import CountUp from "react-countup"
import Banner from "@/components/banner"
import styles from '@/styles/about.module.scss'


function About1(){
  const store = useStore()
  return <section className={styles.about1wrap}>
    <div className={[styles.about1wrapC,'main'].join(' ')}>
      <div className={styles.about1wrapL}>
        <h4 className={styles.titleCom}>关于扬东</h4>
        <b>致力成为一个高效、专业、稳定的集团化企业！</b>
        <p>江苏扬东铝业集团有限公司(简称"扬东铝业集团”)成立于2012年,公司现已成为华东地区集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业,主要从事高精工业铝材的加工和销售。扬东铝业位于江苏省苏州市境内,公司占地面积20000平米,物流交通极为发达,走向全国,面向国际,具有资源、质量、价格的绝对优势。</p>
        <p>二十几年的风风雨雨,江苏扬东创造了骄人的业绩,令人瞩目也令人自豪。在新世纪的历史进程中,扬东始终坚持“团结、拼搏、务实、开拓”的精神,以“质量求生存,开拓求发展”的经营理念,我们倡导“以客户的目标为追求,以客户的需求为基础”站在客户的角度思考,定尺交货,为客户降低成本。不断进取,不断完善,拥有21年专业销售经验与优秀团队,是遍布亚洲的知名供应商和国内最实力、规格最齐全的现货平台,从而使我们的产品更加精益求精,产品铺盖亚洲各地及国内大小型市场。</p>
        <div className={styles.about1wrapList}>
          <div>
          <pre><CountUp start={0} end={2012} duration={3} separator=''/></pre>
            <p>成立于（年）</p>
          </div>
          <div>
          <pre><CountUp start={0} end={20000} duration={3} separator=''/></pre>
            <p>占地面积（㎡）</p>
          </div>
          <div>
            <pre><CountUp start={0} end={50} duration={3} separator=''/><i>+</i></pre>
            <p>专业设计团队（个）</p>
          </div>
          <div>
          <pre><CountUp start={0} end={5000} duration={3} separator=''/><i>+</i></pre>
          <p>成功案例（个）</p>
          </div>
        </div>
      </div>
      <img width={733} height={733} src={store.common.url + 'about/img1.png'}/>
    </div>
  </section>
}

function About2(){
  const store = useStore()
  const data =[
    {
      year:2012,
      intro:'2012年5月:江苏扬东铝业集团有限公司(简称"扬东铝业集团”)成立',
      p1:'江苏扬东铝业集团有限公司(简称"扬东铝业集团”) 成立于2012年，公司现已成为华东地区集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业，主要从事高精I业铝材的加工和销售。扬东铝业位于江苏省苏州市境内，公司占地面积20000平米，物流交通极为发达，走向全国，面向国际，具有资源、质量、价格的绝对优势。',
      p2:'企业实力：',
      p3:[
        '一、铝板厚度(0.02mm至750mm)，最大宽度(3000mm)，最大长度(35000mm)',
        '二、高精铝板(平整度+0.2mm),最厚公差(+0.02mm至0.2mm)',
        '三、铝卷厚度(0.1mm至8mm)，最大宽度(2400mm)，分条加工最窄(15mm)，分条精度(0.2mm)',
        '四、铝锻件：大型自由锻件、模锻件、碾环、特殊锻造(锻件年产量超过500万件)',
        '五、铝板直径(3mm至800mm)，公差(+0.01mm至0.2mm)，长度(24000mm)，公差(+0.2mm至2mm)'
      ]
    },
    {
      year:2014,
      intro:'2014年4月：与全球知名铝厂正在合作',
      p1:'江苏扬东铝业集团有限公司是西南铝业(集团)有限责任公司和东北轻合金有限责任公司在华东地区的总代理，享有"优秀供应商”称号，立足华东，之后也与美铝Alcoa、美国凯撒Kaiser、加拿大铝Alcan、日本神户KOBELCO、 德国爱励Aleris、 韩铝KTC、希腊Elval保持国内外良好、稳定的长久合作关系，是追求铝品牌的领先者!',
      p2:'主要供应领域有:航空航天、国防装备、军工兵器、石油化工、造船、核能、列车、集装箱、环保、精密加工、汽车零部件、机械、电子产品、模具、医疗设备、建筑、装饰、爆炸复台、电缆、仪器、日用品、包装等等。',
      p3:[]
    },
    {
      year:2015,
      intro:'2015年3月：建立综合性现货铝材网上超市',
      p1:'主营产品：航空铝板、汽车用板、军工铝、高速列车用板、船用铝板、机柜板、高档化妆品盖料、模具加工件铝板、管道保温专用板、高精超平铝板(整板平整度+0.2mm)、牛皮纸防潮铝板、超硬铝板、预拉伸铝板、进口铝板、氧化铝板、镜面铝板、压花铝板、拉丝铝板、整平铝板、花纹铝板、高精铝卷、高精铝卷、超窄铝，挤压棒、精拉棒、磨光棒、有缝管、无缝管、铝锻件、断面异型材等。“现货批发、切割零售”2015年建立中国领先专业的综合性现货铝材网上超市。',
      p2:'企业实力：',
      p3:[
        '一、铝板厚度(0.02mm至750mm)，最大宽度(3000mm)，最大长度(35000mm)',
        '二、高精铝板(平整度+0.2mm),最厚公差(+0.02mm至0.2mm)',
        '三、铝卷厚度(0.1mm至8mm)，最大宽度(2400mm)，分条加工最窄(15mm)，分条精度(0.2mm)',
        '四、铝锻件：大型自由锻件、模锻件、碾环、特殊锻造(锻件年产量超过500万件)',
        '五、铝板直径(3mm至800mm)，公差(+0.01mm至0.2mm)，长度(24000mm)，公差(+0.2mm至2mm)'
      ]
    },
    {
      year:2016,
      intro:'2016年6月：实现铝材品种齐全与加工一体化',
      p1:'享营全国的现代综合性全铝服务企业，拥有“裁剪、切割、表面处理、成型和机加工”5大加工平台。',
      p2:'常备铝台金材料[7075、7050、7A04(LC4)、 7A09 (LC9)、2A12 (LY12 )、2024、6061、 6063、 6082、 5A06 (LF6)、5A05 (LF5 )、5083、5754、 5052、 3A21 (LF21 )、3003、 1060、 1050、1070、2017、2A14( LY14 )、2A11 ( LY11 )、2124、2219、2017、 2A50 (LD5)、6A02 (LD2)、5A03 (LF3 )、5A02 (LF2)、6060、 MIC-6、 ]库存6000余吨，批发零售，量大现做(订货周期3-15天) !',
      p3:[]
    },
    {
      year:2017,
      intro:'2017年：成为国内领先集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业',
      p1:'二十几年的风风雨雨，江苏扬东创造了骄人的业绩，令人瞩目也令人自豪。在新世纪的历史进程中，扬东始终坚持“团结、拼搏、务实、开拓”的精神，以“质量求生存，开拓求发展”的经营理念，我们倡导“以客户的目标为追求，以客户的需求为基础”站在客户的角度思考， 定尺交货，为客户降低成本。',
      p2:'不断进取，不断完善，拥有21年专业销售经验与优秀团队，是遍布亚洲的知名供应商和国内最实力、规格最齐全的现货平台，从而使我们的产品更加精益求精，产品铺盖亚洲各地及国内大小型市场。',
      p3:[]
    },
    {
      year:2018,
      intro:'2018年：成立集团公司，公司通过了ISO9001:2015质量体系、3A信用体系认证',
      p1:' ',
      p2:' ',
      p3:[
        '获得 · ISO9001:2015质量管理体系认证证书',
        '获得 · 企业信用评价AAA级信用企业',
        '获得 · 企业资信AAA等级证书',
        '获得 · 诚信经营AAA级示范单位',
        '获得 · 质量服务AAA级诚信单位',
        '获得 · 重合同守信用AAA级企业',
        '获得 · 重服务守信用AAA级单位',
        '获得 · 重质量守信用AAA级单位',
      ]
    },
    {
      year:2019,
      intro:'2019年9月：公司通过国际安全标准测试，获得欧盟CE认证',
      p1:'扬东铝业集团时刻以顾客关注为焦点，以“真诚合作” 为经营准则,产品按国际、国家标准和行业标准组织生产;公司已取得ISO9001:2015质量体系认证、企业信用等级证书、质量服务诚信单位、重合同守信用企业、诚信经营示范单位、企业资信等级证书、重质量守信用单位、重服务守信用企业,部分产品取得了SGS的环保检测报告，符合欧盟ROHS标准',
      p2:' ',
      p3:[]
    },
    {
      year:2020,
      intro:'2020年：荣获2020年中国房地产开发企业500强首选供应商·铝型材类',
      p1:'“精工品质，真诚合作”，扬东集团谒诚为广大中外客户提供优质的高精铝材，为顾客提供满意的产品，是我司不懈追求，以求共同发展，共创佳绩。',
      p2:'随着公司的壮大，集团继续弘扬”精诚求进” 的企业精神，恪守质量第一、用户至上的理念，不断地改进、完善自己。在发展道路上，寻求真诚合作，共同发展，扬东集团将与海内外各界同仁共创美好未来!',
      p3:[]
    },
    {
      year:2021,
      intro:'2021年12月：获得“江苏省级企业技术中心”称号',
      p1:'我们将以客户为中心,持续满足客户需求,绝不失信于客户;',
      p2:'我们致力于精工铝材产业链的打造,为客户提供更加丰富、更具价值的方案和综合服务;',
      p3:['我们崇尚求精文化,不断开拓创新,追求和提供极致化的成本、极致化的效率、极致化的服务。']
    },
    {
      year:2022,
      intro:'2022年：一直在路上，坚持在高端铝合金原材料路上前进。',
      p1:'我们聚焦于高精I业铝材行业;立志于持续改善精I品质,来持续提升客户的精工体验。',
      p2:'我们聚焦于铝材领域的创新,坚持自我批判和学习,不断完善提高,通过持续创新来为客户提供更优质的服务。',
      p3:['我们秉持精品、严谨、认真、实事求是的行事风格,脚踏实地,追求实实在在的成效。']
    },
    {
      year:2023,
      intro:'2023年：积极拥抱ESG 绿电使用从我做起！',
      p1:'我们崇尚求精文化,不断开拓创新,追求和提供极致化的成本、极致化的效率、极致化的服务。',
      p2:'以客户为中心,绝不失信于任何人,以我的说到做到感染他人,赢得尊重。',
      p3:['管理是为经营服务的,我们要追求极致化的创新成果,为客户提供极致化的成本、效率、服务。']
    },
    {
      year:2025,
      intro:'2025年一切敬请期待......',
      p1:'我们秉持精品、严谨、认真、实事求是的行事风格,脚踏实地,追求实实在在的成效。',
      p2:'以客户为中心,绝不失信于任何人,以我的说到做到感染他人,赢得尊重。',
      p3:[]
    }
    
  ]
  const [index,setIndex] = useState(0)
  function add(){
    setIndex(index+1)
  }
  function sub(){
    setIndex(index-1)
  }
  return <section className={styles.about2Wrap}>
    <div className={[styles.about2C,'main'].join(' ')}>
      <h4 className={styles.titleCom}>发展历程</h4>
      <div className={styles.about2CTop} style={{marginLeft: `${-(1400/3)*index}px`}}>
        {data.map((item,i)=>{
          return <div className={styles.about2CTopItem} key={i}>
            <p style={{color:index == i ? '#FD2621' :'#E1E0E0'}}>{item.year}</p>
            <span>{item.intro}</span>
          </div>
        })}
      </div>
      <div className={styles.historyText}>
        <p>{data[index].p1}</p>
          <p>{data[index].p2}</p>
          {data[index].p3.length!=0 && <div>
            {Array.from(data[index].p3).map((text,t)=>{
              return <p key={t}>{text}</p>
            })}
            </div>
          }
      </div>
      <div className={styles.btnGroup}>
        <button className="" onClick={()=>sub()} disabled={index == 0?'disabled' :''}>
          <img src={store.common.url + 'about/w-l.png'}/>
        </button>
        <button onClick={()=>add()}disabled={index == data.length-1?'disabled' :''}>
          <img  src={store.common.url + 'about/r-r.png'}/>
        </button>
      </div>
    </div>
  </section>
}

function About3(){
  const store = useStore()
  const videoRef = useRef(null);
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  const data = [
    {text1:'客户至上    求实创新',text2:'以客户为中,客户的满意是我们最大的动力,致力于成为新时代精密加工必选的优质铝材服务商，实现企业对内与对外的全球化应用与服务。'},
    {text1:'开拓创新    悉心智造',text2:'精准判断市场态势，发挥“互联网+铝材”优势，积极开拓海外市场，大力发展跨境电商，提高产业链附加价值，带动产业链升级、完善和发展，努力打造全产业链一体化商业模式。'},
    {text1:'诚信为本    互利共享',text2:'始终坚持“团结、拼搏、务实、开拓”的精神，以“质量求生存，开拓求发展”的经营理念，我们倡导“以客户的目标为追求，以客户的需求为基础”站在客户的角度思考， 定尺交货，为客户降低成本。'},
    {text1:'追求卓越    使命必达',text2:'根据用户的不同需求，专门研发设计最符合用户的材料需求，一直以来以科学管理为先导，以客户服务工作为中心，不断实施全方位的新战略'}
  ]
  return (
    <>
      <div className={[styles.about3wrap,'main'].join(' ')}>
        <h4 className={styles.titleCom}>企业文化</h4>
        <div className={styles.about3C}>
          <div className={styles.about3L}>
            {data.map((item,i)=>{
              return <div key={i}>
                <span>{item.text1}</span>
                <p>{item.text2}</p>
              </div>
            })}
          </div>
          <div className={styles.about3R}>
            <video type="video/mp4" style={{height:'505px'}} autoPlay muted playsInline loop ref={videoRef} src={store.common.url + '扬东.mp4'}/>
            {/* <div className={styles.videoPlay}></div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default function About(){
  const store = useStore()
  const data6 =[
    {text1:'企业愿景',text2:'我们致力于精工铝材产业链的打造，为客户提供更加丰富、更具价值的方案和综合服务；  我们聚焦于高精工业铝材行业，立志于持续改善精工品质，来持续提升客户的精工体验。'},
    {text1:'以人为本',text2:'企业以人为本，员工以厂为荣，以人才和技术为基础，创造最佳产品服务。以客户为中心，持续满足客户需求，绝不失信于客户，我们致力于精工铝材产业链的打造，为客户提供更加丰富、更具价值的方案和综合服务。'},
    {text1:'核心价值观',text2:'我们秉持精品、严谨、认真、实事求是的行事风格，脚踏实地，追求实实在在的成效。以客户为中心，绝不失信于任何人，以我的说到做到感染他人，赢得尊重。'},
    {text1:'可持续发展',text2:'公司坚持绿色智造路线，走可持续发展道路，践行“绿色智造”经营理念，通过提高材料、能源利用率、推广清洁能源、设备环保设施改造，加强安全管理，落实主体责任制，主动承担企业应有的社会责任。'},
    {text1:'道德与治理',text2:'我们坚持做良心企业，严格遵守诚信与道德法则，严格落实用人制度，遵守劳动法，完善所有员工福利，落实纳税政策，禁止企业一切不良现象，打造企业良好的口碑。'}
  ]
  return (
    <>
    <Banner suf='about'/>
    <div className='upwards' id='about1'></div>
    <About1/>
    <div className='upwards' id='about2'></div>
    <About2/>
    <div className='upwards' id='about3'></div>
    <About3/>
    <div className='upwards' id='about4'></div>
    <section className={styles.about4wrap}>
      <div className="main">
        <h4 className={styles.titleCom}>荣誉证书</h4>
      </div>
    </section>
    <div className='upwards' id='about5'></div>
    <section className={styles.about5wrap}>
      <div className={[styles.about5C,'main'].join(' ')}>
        <h4 className={styles.titleCom}>公司实力</h4>
        <div className={styles.about5ImgWrap}>
          <div className={styles.about5ImgL}>
            <img src={store.common.url + 'about/img5-1.png'}/>
            <p>我们的宗旨是做全国齐全的的铝材现货分销商。<br></br>
            为了降低各个领域新客户的开发成本和四处找货的问题，<br></br>
            节省采购铝材多重环节，<br></br>
            大大提高铝材品种配备、少量生产、<br></br>
            各种加工、快速交货的一站式服务。</p>
          </div>
          <div className={styles.about5ImgR}>
            <div className={styles.about5ImgRgrid1}>
              <div className={styles.imgWrap}><img src={store.common.url + 'about/img5-2.png'}/></div>
              <div className={styles.imgWrap}><img src={store.common.url + 'about/img5-3.png'}/></div>
            </div>
            <div className={styles.about5ImgRgrid2}>
              <div className={styles.imgWrap}><img src={store.common.url + 'about/img5-4.png'}/></div>
              <div className={styles.imgWrap}><img src={store.common.url + 'about/img5-5.png'}/></div>
              <div className={styles.imgWrap}><img src={store.common.url + 'about/img5-6.png'}/></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className='upwards' id='about6'></div>
    <section className={styles.about6}>
      <h4 className={styles.titleCom}>核心价值观</h4>
      <div className={styles.about6C}>
        {data6.map((item,i)=>{
          return <div key={i} className={styles.about6CItem}>
            <img src={store.common.url + 'about/img6-'+ (i+1)+'.png'}/>
            <div>
              <span>{item.text1}</span>
              <p>{item.text2}</p>
            </div>
          </div>
        })}
      </div>
    </section>
    </>
  )
}
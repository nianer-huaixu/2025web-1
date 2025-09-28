'use client'
import React from "react"
import { useState,useEffect } from "react"
import Slider from "react-slick"
import CountUp from "react-countup"
import { AnimatePresence } from "motion/react"
import VideoPlayerTest from "@/components/testViedo"
import * as motion from "motion/react-client"
import styles from '@/styles/index.module.scss'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import useStore from "@/hook/useStore"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const URL= 'https://www.yangdong.co:8443/yangdong-new/'
// product start
function ProductShow(){
  const indexArr = [
    {label:'铝板',index:0,icon:URL + 'index/p-icon1.webp'},
    {label:'铝棒',index:1,icon:URL + 'index/p-icon2.webp'},
    {label:'铝卷',index:2,icon:URL + 'index/p-icon4.webp'},
    {label:'铝管',index:3,icon:URL + 'index/p-icon3.webp'},
    {label:'铝型材',index:4,icon:URL + 'index/p-icon5.webp'},
    {label:'铝锻件',index:5,icon:URL + 'index/p-icon6.webp'}
  ]
  const [index,setIndex] = useState(0)
  function selectIndex(i){
    setIndex(i)
  }
  const data= [
    {
      label:'铝板系列',href:'product/lvban',text:'铝板系列涵盖亮面铝板、贴膜铝板、预拉伸铝板、超宽铝板、特厚铝板、超平铝板、精铸铝板、锻造铝板、花纹铝板...',
      series:[
        {serie:'7系',label:'铝板',child:['7003','7020','7050','7075','7A04','7A09','LC4','LC9']},
        {serie:'6系',label:'铝板',child:['6060','6061','6063','6082','6101','6A02','6005A','LD2']},
        {serie:'5系',label:'铝板',child:['5049','5052','5083','5754','5A02','5A03','5A05','5A06','LF5','LF6']},
        {serie:'3系',label:'铝板',child:['3003','3004','3103','3A21']},
        {serie:'2系',label:'铝板',child:['2011','2014','2017','2024','2219','2618','2A12','2A14','2A50','2A70','LD5','LD7','LD10','LY12']},
        {serie:'1系',label:'铝板',child:['1050','1060','1070','1100']}
      ]
    },
    {label:'铝棒系列',href:'product/lvbang',text:'铝棒系列涵盖纯铝棒、合金铝棒、大直径铝棒、挤压铝棒、光亮铝棒、精拉铝棒、超硬铝棒、铸造铝棒、研磨铝棒...',
      series:[
        {serie:'7系',label:'铝棒',child:['7003','7020','7050','7075','7A04','7A09','LC4','LC9']},
        {serie:'6系',label:'铝棒',child:['6060','6061','6063','6082','6101','6A02','6005A','LD2']},
        {serie:'5系',label:'铝棒',child:['5049','5052','5083','5754','5A02','5A03','5A05','5A06','LF5','LF6']},
        {serie:'3系',label:'铝棒',child:['3003','3004','3103','3A21']},
        {serie:'2系',label:'铝棒',child:['2011','2014','2017','2024','2219','2618','2A12','2A14','2A50','2A70','LD5','LD7','LD10','LY12']},
        {serie:'1系',label:'铝棒',child:['1050','1060','1070','1100']}
      ]
    },
    {label:'铝卷系列',href:'product/lvjuan',text:'铝卷系列涵盖纯铝卷、铝带、铝箔、合金铝卷、防锈铝卷、保温铝卷、冲压铝卷、花纹铝卷、超宽铝卷、超宽铝卷...',
      series:[
        {serie:'7系',label:'铝卷',child:['7003','7020','7075','LC4','LC9']},
        {serie:'6系',label:'铝卷',child:['6061','6063','6101','6A02','6005A','LD2']},
        {serie:'6系',label:'铝卷',child:['5049','5052','5083','5754','5A02','5A03','LF5','LF6']},
        {serie:'3系',label:'铝卷',child:['3003','3004','3103','3A21']},
        {serie:'2系',label:'铝卷',child:['2011','2024','2219','2618','2A12','2A14','2A50','2A70','LD5','LD7','LD10','LY12']},
        {serie:'1系',label:'铝卷',child:['1050','1060','1070','1100']}
      ]
    },
    {label:'铝管系列',href:'product/lvguan',text:'铝管系列涵盖挤压铝管、无缝铝管、锻造铝管、拉拔铝管、薄壁铝管、厚壁铝管、大口径铝管...',
      series:[
        {serie:'7系',label:'铝管',child:['7003','7020','7050','7075','7A04','7A09','LC4','LC9']},
        {serie:'6系',label:'铝管',child:['6060','6061','6063','6082','6101','6A02','6005A','LD2']},
        {serie:'5系',label:'铝管',child:['5049','5052','5083','5754','5A02','5A03','5A05','5A06','LF5','LF6']},
        {serie:'3系',label:'铝管',child:['3003','3004','3103','3A21']},
        {serie:'2系',label:'铝管',child:['2011','2014','2017','2024','2219','2618','2A12','2A14','2A50','2A70','LD5','LD7','LD10','LY12']},
        {serie:'1系',label:'铝管',child:['1050','1060','1070','1100']}
      ]
    },
    {label:'铝型材系列',href:'product/lvxingcai',text:'铝型材系列涵盖铝方棒、铝扁棒、铝排、铝方管、矩形管、六角铝棒、等边角铝、不等边角铝、槽铝...',
      series:[
        {serie:'7系',label:'铝型材',child:['7003','7020','7050','7075','7A04','7A09','LC4','LC9']},
        {serie:'6系',label:'铝型材',child:['6060','6061','6063','6082','6101','6A02','6005A','LD2']},
        {serie:'5系',label:'铝型材',child:['5049','5052','5083','5754','5A02','5A03','5A05','5A06','LF5','LF6']},
        {serie:'3系',label:'铝型材',child:['3003','3004','3103','3A21']},
        {serie:'2系',label:'铝型材',child:['2011','2014','2017','2024','2219','2618','2A12','2A14','2A50','2A70','LD5','LD7','LD10','LY12']},
        {serie:'1系',label:'铝型材',child:['1050','1060','1070','1100']}
      ]
    },
    {label:'铝锻件系列',href:'product/lvduanjian',text:'铝锻件系列涵盖锻板、锻棒、锻管、锻环、锻饼、锻筒、锻锥形...',
      series:[
        {serie:'7系',label:'铝锻件',child:['7003','7020','7050','7075','7A04','7A09','LC4','LC9']},
        {serie:'6系',label:'铝锻件',child:['6060','6061','6063','6082','6101','6A02','6005A','LD2']},
        {serie:'5系',label:'铝锻件',child:['5049','5052','5083','5754','5A02','5A03','5A05','5A06','LF5','LF6']},
        {serie:'3系',label:'铝锻件',child:['3003','3004','3103','3A21']},
        {serie:'2系',label:'铝锻件',child:['2011','2014','2017','2024','2219','2618','2A12','2A14','2A50','2A70','LD5','LD7','LD10','LY12']},
        {serie:'1系',label:'铝锻件',child:['1050','1060','1070','1100']}
      ]
    }
  ]
  return <div className={styles.productC} style={{backgroundImage:`url(${URL}index/p-bg-${(index+1)}.webp`}}>
    <div className={styles.productCH}>
      <h4>
        <span>江苏扬东铝业</span>
        <img src={URL + 'index/p-icon.webp'}/>
        <span>实力工厂</span>
      </h4>
      <p className={styles.text1}>我们不只是一家<span>铝材工厂</span>，更是你坚如磐石的<span>供应商</span></p>
      <p className={styles.text2}>以不懈的努力为您的成功助力!</p>
    </div>
    <div className={styles.productCS}>
      <div className={[styles.productCSM,'main'].join(' ')}>
        {indexArr.map((item,i)=>{
          return <div key={i} onMouseEnter={()=>selectIndex(i)} className={styles.productCSMI}>
            <div className={styles.productIconW}
              style={{
                height: index == i ? '': '20px',
                width: index == i ? '': '20px',
                marginTop: index == i ? '-27px': '-12px',
              }}
            >
              {index == i && <img src={item.icon}/>}
            </div>
            <span>{item.label}</span>
          </div>
        })}
      </div>
    </div>
    <div className={[styles.productCM,'main'].join(' ')}>
      <img src={URL + 'index/p-img-'+ (index+1)+'-1.webp'}/>
      <div className={styles.productCMT}>
        <h5><Link href={data[index].href}>{data[index].label}</Link></h5>
        <p>{data[index].text}</p>
        <div className={styles.productCMTUL}>
          {data[index].series.map((item,i)=>{
            return <ul key={i}>
              <p>{item.serie}<span>{item.label}</span></p>
              {item.child.map((li,l)=>{
                // return <li key={l}><Link href={{pathname:'/product/detail/',query:{detail:li+item.label}}}>{li + item.label}</Link></li>
                return <li key={l}><Link href={{pathname:'/product/'+li}}>{li}<span>{item.label}</span></Link></li>
              })}
            </ul>
          })}
        </div>
      </div>
    </div>
  </div>
}
// product end

// case start
function Case(){
  const tabs = [
    {label:'航空航天',index:0},
    {label:'轨道交通',index:1},
    {label:'汽车智造',index:2},
    {label:'船舶运输',index:3},
    {label:'消费电子',index:4},
    {label:'医疗设备',index:5},
    {label:'化工容器',index:6},
    {label:'工业模具',index:7},
    {label:'机器制造',index:8},
    {label:'建筑工程',index:9}
  ]
  const [index,setIndex] = useState(0)
  function selectIndex(i){
    setIndex(i)
  }
  const data = [
    {href:'applicationfields/#application01',img:URL + 'index/case0.webp',text1:'航空航天用铝合金',text2:'具有航空领域用高端铝铁材料的提供能力，其中一些标准产品等新型发动机涡轮盘、压气盘、叶片用铝成功应用于轰炸机、强毒机等核心部件制作。'},
    {href:'applicationfields/#application02',img:URL + 'index/case1.webp',text1:'轨道交通用铝合金',text2:'供应的铁路用铝主要有铁路弹簧铝、扣件用铝、道岔用铝、钩尾框用铝、铁路轴承铝、欧标合金铝，美标合金铝等产品，全部通过国家铁道部认可并具备了批量供货能力，大量用于指导铁路货车、高速客车、动车组列车的关键部件，成为其铁路优秀供应商。'},
    {href:'applicationfields/#application03',img:URL + 'index/case2.webp',text1:'汽车智造用铝合金',text2:'更高效，更高的强重比，可满足复杂形状的要求。在当今燃料及环境问题日益严峻的时期，铝合金扮演着一个助推汽车轻量化及提升燃油能效的重要角色，从而帮助缓解能源及环境问题。当此时机，铝合金凭借其优越的比强度、优良的成型性和高效的循环利用率，逐步成为汽车制造商的宠儿，“铝代钢”已大势所趋。'},
    {href:'applicationfields/#application04',img:URL + 'index/case3.webp',text1:'船舶运输用铝合金',text2:'扬东铝业集团供应的海洋系泊链铝用于船舶和石油工业，强度高，韧性好，具备耐海水腐蚀、抗疲劳、耐磨损等特性。其中四级系泊链是目前海洋用的最高级别系链，需求量较大，填补了国内空白，广泛用于勘探平台、浮时采油平台、海上储油转运站和辅助船队等海洋工程及专用船舶领域。'},
    {href:'applicationfields/#application05',img:URL + 'index/case4.webp',text1:'消费电子用铝合金',text2:'扬东铝业集团助力电子电器制造企业在世界范围内占据有利的竞争位置，实现让产品更轻、更薄、更耐用的愿望。能按照客户需求提供各类挤压型材，适用于大功率变电装置、稳压电源、通讯电源、净化电源、广播电视发射装置、逆变电源等各种大型电源产品，也用于自动控制仪表等电力电子产品领域。'},
    {href:'applicationfields/#application06',img:URL + 'index/case5.webp',text1:'医疗设备用铝合金',text2:'扬东铝业集团铝合金在医疗行业应用广泛，早期简单的器械类包括拐杖、轮椅、担架、助力器、油膏缸、消毒盒、病床等等。'},
    {href:'applicationfields/#application07',img:URL + 'index/case6.webp',text1:'化工容器用铝合金',text2:'扬东铝业集团5000系铝合金材料具有良好的抗腐蚀性和可焊接性能，用铝合金制造的体，内部不需要任何防护涂层就可以运输各种液体或者液化气，并且因为没有腐蚀，从而保证油品更清洁，罐体强制报废后回收价值也更高同时，因为铝合金具有良好的导电性能，很少集聚静电在罐体上，所以不会产生火花而导致爆炸。'},
    {href:'applicationfields/#application08',img:URL + 'index/case7.webp',text1:'工业模具用铝合金',text2:'扬东铝业集团是国内工业模具用铝供应及服务极高的市场声誉，工模具被誉为“现代工业之母”在现代工业被广泛应用。随着市场的发展及铝合金技术的提高，目前欧美市场逐渐呈现铝模替代钢模的现象。制造成本低。铝模具在制造、装置、注塑车间装置调整时间、运输等比钢模具更具优越性成本更低，重量轻。'},
    {href:'applicationfields/#application09',img:URL + 'index/case8.webp',text1:'机器制造用铝合金',text2:'扬东铝业集团是国内机械加工铝供应及服务极高的市场声誉，铝与钢的密度比为1:3，铝模取代钢模在质量方面可节约1/2。采用钢-铝复合模。铝合金模的成本约比钢模低15%以上。铝模制造时间比钢模的短得多，因此占用资金的时间少，优势明显。'},
    {href:'applicationfields/#application10',img:URL + 'index/case9.webp',text1:'建筑工程用铝合金',text2:'扬东铝业集团是国内建筑建材供应及服务极高的市场声誉，随着铝合金隐框幕墙的发展，铝板幕墙也异军突起，配合铝合金玻璃幕墙在幕墙工程中进行使用墙作为一项高技术产品在建筑业发展突飞猛进。'}
  ]
  return (
    <div className={[styles.caseWrapM,'main'].join(' ')}>
      <nav>
        <ul>
          {tabs.map((item,i)=>{
            return <li key={i} onMouseEnter={()=>selectIndex(i)}
              className={i==index?styles.liActive:''}>
              {item.label}
            </li>
          })}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }} className={styles.caseMain}
          >
            <div>
              <h5>{data[index].text1}</h5>
              <p>{data[index].text2}</p>
              <button><Link href={data[index].href}>了解详情</Link></button>
            </div>
            <img src={data[index].img}/>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const store = useStore()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnHover:false,
  };
  const [windowSize, setWindowSize] = useState({
    innerWidth: 0,
    innerHeight: 0
  });
  function getWindowSize(){
    const {innerWidth} = window
    return {innerWidth}
  }

  // const [windowSize,setWindowSize]  = useState(getWindowSize())
  useEffect(() => {
    // 确保在客户端执行
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    };

    // 立即设置初始尺寸
    handleResize();

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组确保只运行一次
  const cardVariants = {
    offscreen: {
        y: 230,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            // bounce: 1,
            // duration: 1,
        },
    },
  }
  const introData =[
    {num:15,text:'行业经验',b:'年'},
    {num:1,text:'现货速发',b:'天'},
    {num:6000,text:'库存量',b:'吨'},
    {num:10000,text:'服务客户',b:'家'},
    {num:20000,text:'占地面积',b:'m²'}
  ]
  const reasonData = [
    {index:0,label:'品牌实力',text1:'专注开放  创新合作',text2:'在新的发展时期，公司以“质量求生存，开拓求发展”的经营理念引领下，坚持走“差异化、精品化、高端化”的发展之路,不断优化品种结构，提升品质内涵,提升产品市场竞争力，致力于成为全球高精工业铝材行业领导者！'},
    {index:1,label:'库存查询',text1:'超大库存  质量保障',text2:'从下单到出库发货，都经过三道质检，保障成品合格率在100%以上，我们拥有大量库存，可以供亲们提供足够的货源，让亲们不在担心断货、缺货的危机、让亲们放心的加工生产。'},
    {index:2,label:'精湛技术',text1:'现货供应  发货及时',text2:'我们承诺客户下单后，现货产品当天发货，加工，切割，产品根据产品特性3-5天发货，定制特种产品，根据实际情况7-30天出厂并安排发货，解决客户急需要求。'},
    {index:3,label:'售后服务',text1:'品质服务  全程追踪',text2:'我们做到每个订单，都及时跟踪。保障客户能及时安全收货；并不断听取客户的意见与建议，反思我们自身存在的问题，让客户用的舒心放心。'}
  ]
  const [reasonIndex,setIndex] = useState(0)
  function changeReason(i){
    setIndex(i)
  }
  const newLabel =[
    {text:'公司动态'},
    {text:'行业新闻'},
    {text:'铝材知识'},
    {text:'加工视频'}
  ]
  const [newIndex,setNewIndex] = useState(0)
  function selectNew(i){
    if(i!==3){
      setNewIndex(i)
    }else{
      router.push({
        pathname:'/news'
      })
      store.common.changeNewIndex(3)
    }
  }
  function selectNewDetail(i){
    router.push({
      pathname:'/news/'+newIndex+'_'+i
    })
  }
  const newData =[
    {
      list:[
        {index:0,img:'news/company1.webp',lebel:'“精工品质，真诚合作”扬东集团客户好评不断诚信可靠',date:'null'},
        {index:4,lebel:'扬东集团被中国兵器工业集团纳入优选供应商名录',date:'2023-07-15'},
        {index:3,lebel:'【喜讯】扬东集团荣获3A级企业信用等级证书',date:'2023-07-20'},
        {index:1,img:'news/company2.webp',lebel:'江苏扬东铝业集团公司开展员工拓展活动',date:'2023-10-20'},
        {index:4,img:'news/company5.webp',lebel:'扬东集团被中国兵器工业集团纳入优选供应商名录',date:'2023-07-15'}
      ]
    },
    {
      list:[
        {index:0,img:'news/company1.webp',lebel:'西南铝为天舟三号提供多个铝合金关键材料',date:'null'},
        {index:1,lebel:'【国企改革三年行动】广西南南铝加工向行业排头兵迈进',date:'2023-09-20'},
        {index:2,lebel:'纳米焊丝解决了7075铝合金焊接难题',date:'2023-08-08'},
        {index:4,img:'news/industry5.webp',lebel:'铝材市场前景分析',date:'2023-06-24'},
        {index:8,img:'news/industry9.webp',lebel:'工业铝型材为什么能逐渐代替钢铁型材',date:'2023-02-19'}
      ]
    },
    {
      list:[
        {index:0,img:'news/knowledge1.webp',lebel:'铝合金和镁合金的区别',date:'null'},
        {index:1,lebel:'花纹铝板该如何做保养',date:'2019-07-23'},
        {index:2,lebel:'铝板厂家讲解什么是5052合金铝板的点解着色',date:'2020-10-28'},
        {index:3,img:'news/knowledge3.webp',lebel:'铝板的拉丝与喷砂处理',date:'2019-09-11'},
        {index:4,img:'news/knowledge5.webp',lebel:'精密机械零件加工对材质有哪些注意事项',date:'2020-07-06'}
      ]
    }
  ]
  // https://www.yangdong.co:8443/yangdong_web/
  const evaData = ['1V1响应接待','极速发货','贴心售后','实力工厂']
  return (
    <div className={styles.indexWrap}>
      <div className="slider-container banner-container">
        {windowSize.innerWidth >= 980 ? 
        <VideoPlayerTest/>
        :
        <Slider {...settings}>
          <img src='https://www.yangdong.co:8443/yangdong_web/banner/mobile/banner2.webp' alt='banner'/>
          <img src='https://www.yangdong.co:8443/yangdong_web/banner/mobile/banner6.webp' alt='banner'/>
          <img src='https://www.yangdong.co:8443/yangdong_web/banner/mobile/banner1.webp' alt='banner'/>
          <img src='https://www.yangdong.co:8443/yangdong_web/banner/mobile/banner3.webp' alt='banner'/>
          <img src='https://www.yangdong.co:8443/yangdong_web/banner/mobile/banner4.webp' alt='banner'/>
        </Slider>
        }
      </div>
        {/* <video width="100%" preload="none" autoPlay muted playsInline loop>
          <source src="https://www.yangdong.co:8443/video/%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91.mp4" type="video/mp4" />
        </video> */}
        <section className={styles.aboutM}>
          <motion.div className={[styles.aboutMC,'main'].join(' ')}
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
          >
            <p><i>ABOUT</i>扬东铝业</p>
            <motion.b>
            致力于成为华东地区集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业，主要从事高精铝材的加工和销售。
            </motion.b>
            <motion.p>
              <Link href="/about">查看更多</Link>
            </motion.p>
          </motion.div>
          <div className={styles.aboutIntro}>
            <div className={[styles.aboutIntroC,'main'].join(' ')}>
              {introData.map((item,i)=>{
                return <div key={i}>
                  <pre><CountUp start={0} end={item.num} duration={3} separator=''/><i>{item.b}</i></pre>
                  <p>{item.text}</p>
                </div>
              })}
            </div>
          </div>
        </section>
        <section className={styles.productWrap}>
          <ProductShow/>
        </section>
        <section className={styles.caseWrap}>
          <h4 className="main">完整的铝材行业专属应用解决方案</h4>
          <p className="main">扬东铝业深耕铝材20年，在各行业均有案例，为客户量身定制解决方案</p>
          <Case/>
        </section>
        <section className={styles.reasonWrap}>
          <h4>选择扬东铝业四大理由</h4>
          <p style={{margin:'10px 0'}}>20+年行业生产经验 实力雄厚 工艺精湛 高效产能 贴心售后 品牌优势</p>
          <div className={[styles.reasonS,'main'].join(' ')}>
            {reasonData.map((item,i)=>{
              return <div key={i} className={styles.reasonSI} style={{borderBottom:i==reasonIndex?'3px solid #e30212':''}} onMouseEnter={()=>changeReason(i)}>
                <div className={styles.reasonImgW}><img src={URL + 'index/reason-icon-'+ i +'.webp'}/></div>
                <span>{item.label}</span>
              </div>
            })}
          </div>
          <div className={styles.reasonM}  style={{backgroundImage:`url(https://www.yangdong.co:8443/yangdong-new/index/reason-bg-${reasonIndex}.webp)`}}>
            <div className={[styles.reasonMC,'main'].join(' ')}> 
              <div className={styles.reasonMCB}>
                <h5>{reasonData[reasonIndex].text1}</h5>
                <p>{reasonData[reasonIndex].text2}</p>
                <a></a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.newWrap}>
          <div className={[styles.newWrapM,'main'].join(' ')}>
            <div className={styles.newWrapMH}>
              <div className={styles.newWrapMHL}>
                <h4>新闻咨询</h4>
                <p>了解扬东铝业最新资讯，定位行业最新动态！</p>
              </div>
              <div className={styles.newWrapMHR}>
                {newLabel.map((item,i)=>{
                  return <div key={i} style={{backgroundColor:i==newIndex?'#CD241D':'',borderColor:i==newIndex?'#CD241D':'#fff'}} onClick={()=>selectNew(i)}>
                    <img src={URL + 'index/new-icon-'+ i +'.webp'}/>
                    {item.text}
                  </div>
                })}
              </div>
            </div>
            <div className={styles.newWrapMC}>
                <div className={styles.newWrapMCL}>
                  <div className={styles.newWrapMCLT} onClick={()=>{selectNewDetail(newData[newIndex].list[0].index)}}>
                    <div>
                      <img src={URL + newData[newIndex].list[0].img}/>
                    </div>
                    <p>{newData[newIndex].list[0].lebel}</p>
                  </div>
                  <div className={styles.newWrapMCLB}>
                    <div onClick={()=>{selectNewDetail(newData[newIndex].list[1].index)}}>
                      <p style={{height:'72px'}}>{newData[newIndex].list[1].lebel}</p>
                      <p><i>{newData[newIndex].list[1].date}</i><i>查看更多</i></p>
                    </div>
                    <div onClick={()=>{selectNewDetail(newData[newIndex].list[2].index)}}>
                      <p style={{height:'72px'}}>{newData[newIndex].list[2].lebel}</p>
                      <p><i>{newData[newIndex].list[2].date}</i><i>查看更多</i></p>
                    </div>
                  </div>
                </div>
                <div className={styles.newWrapMCR}>
                  <div onClick={()=>{selectNewDetail(newData[newIndex].list[3].index)}}>
                    <div style={{width:'100%',height:'200px',overflow:'hidden'}} className={styles.newImgWrap}>
                      <img src={URL + newData[newIndex].list[3].img}/>
                    </div>
                    <p className={styles.newPHeight}>{newData[newIndex].list[3].lebel}</p>
                    <p><i>{newData[newIndex].list[3].date}</i></p>
                  </div>
                  <div onClick={()=>{selectNewDetail(newData[newIndex].list[4].index)}}>
                    <div style={{width:'100%',height:'200px',overflow:'hidden'}} className={styles.newImgWrap}>
                      <img src={URL + newData[newIndex].list[4].img}/>
                    </div>
                    <p className={styles.newPHeight}>{newData[newIndex].list[4].lebel}</p>
                    <p><i>{newData[newIndex].list[4].date}</i></p>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className={styles.partnerWrap}>
          <div className={[styles.partnerM,'main'].join(' ')}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((item,i)=>{
              return <img key={i} src={URL + 'index/p-'+item+'.webp'}/>
            })}
          </div>
        </section>
        <section className={styles.evaWrap}>
          <div className={[styles.evaM,'main'].join(' ')}>
            <div className={styles.evaMT}>
              <div className={styles.evaMTL}>
                <img src={URL + 'index/eva-l.webp'}/>
                <div>
                  <p>他们说 ——</p>
                  <p>THEY SAID</p>
                  <p>海量口碑真实反馈来袭</p>
                </div>
              </div>
              <div className={styles.evaMTR}>
                {evaData.map((item,i)=>{
                  return <div key={i}>
                    <img src={URL +'index/eva-r-'+ (i+1) +".webp"}/>
                    <p>{item}</p>
                  </div>
                })}
              </div>
            </div>
            <div className={styles.evaImgW}>
              {[1,2,3,4,5,6,7,8,9,10].map((item)=>{
                return <img key={item} src={URL + 'index/eva-'+item+'.webp'}/>
              })}
            </div>
          </div>
        </section>
        <section className={styles.indexBW}>
          <div className="main">
            <p>离解决您的铝材方案只有一个【联系我们】的距离</p>
            <a href={`tel:18852996299}`}></a>
          </div>
        </section>
    </div>
  )
}

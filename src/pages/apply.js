'use client'
import { useEffect,useRef  } from 'react'
import Banner from "@/components/banner"
import styles from '@/styles/apply.module.scss'
import useStore from '@/hook/useStore'
import HoverAnimation from '@/components/hoverEffect'
import Link from 'next/link'
export default function Application(){
  const store = useStore()
  const linkData =[
    {link:'apply01',text:'航天航空'},
    {link:'apply02',text:'轨道交通'},
    {link:'apply03',text:'汽车制造'},
    {link:'apply04',text:'船舶运输'},
    {link:'apply05',text:'消费电子'},
    {link:'apply06',text:'医疗设备'},
    {link:'apply07',text:'化工容器'},
    {link:'apply08',text:'工业模具'},
    {link:'apply09',text:'机械制造'},
    {link:'apply10',text:'建筑建材'}
  ]
  const data =[
    {
      alt:'航天航空铝合金应用',
      title:'航天航空铝合金产品应用',
      e_title:'Application ofaerospace aluminum alloy products',
      content1:'扬东铝业集团具有航空领域用高端铝铁材料的提供能力,品种繁多,其中一些军工标准产品等新型发动机涡轮盘、压气盘、叶片用铝成功应用于“飞豹”、“歼十”、轰炸机、强击机等核心部件制作。同时扬东铝业为火箭发动机重要部件提供军用铝材料,为发展我国航天事业做出贡献。铝合金具有密度低、比强度高、耐蚀性好和成型性优良等-系列优点,这些优良性能使铝合金成为航空航天的重要材料。主要用于机身蒙皮、机翼及安定面蒙皮、机身隔框、油箱、连接件等结构。',
      content2:'通过铝合金复合材料的应用,航空航天飞行器上的外壳材料能够降低5%-7%的密度,材料刚度提高7%，降低10%的重量,以此提高燃料效率,同时因为铝合金材料的耐腐蚀性和良好的抗疲劳性及抗损伤容限性,延长检查间隔的时间,使得航天器的维护成本降低。较低的资本成本，铝合金的相比钢材具有一定的价格优势。',
      model:[
        {lebel:'2024',text:'铝板'},
        {lebel:'7075',text:'铝棒'},
        {lebel:'7A04',text:'铝管'},
        {lebel:'7075',text:'铝卷'},
        {lebel:'7A09',text:'铝型材'}
      ],
      trait:'高强、高韧、高抗损伤容限',
      href:'apply01',
      img:'imgs/1.png'
    },
    {
      alt:'轨道交通铝合金应用',
      title:'轨道交通铝合金产品应用',
      e_title:'Application of aluminum alloy products in rail transit',
      content1:'扬东铝业集团铝制列车重量轻、耐腐蚀、运行性能好。铝板在轨道车上主要用作车体外板、车顶板、地板、车内装饰板等部位，同时一些小规格的铝管也用于车身内部的通风和传输。针对轨道交通生产的铝合金中厚板，具有强度高、挤压性好、焊接性好、耐腐蚀性好等优点，尤其适合作为铝制列车车体、底架、框架使用，在保证车身强度的同时减轻了车体的重量，能有效节约能源及降低运营维护费用。',
      content2:'供应的铁路用铝主要有铁路弹簧铝、扣件用铝、道岔用铝、钩尾框用铝、铁路轴承铝、欧标合金铝，美标合金铝等产品，全部通过国家铁道部认可并具备了批量供货能力，大量用于指导铁路货车、高速客车、动车组列车的关键部件，成为其铁路优秀供应商。',
      model:[
        {lebel:'5052',text:'铝板'},
        {lebel:'5754',text:'铝棒'},
        {lebel:'5A06',text:'铝管'},
        {lebel:'5083',text:'铝管'},
        {lebel:'6061',text:'铝板'},
        {lebel:'6082',text:'铝型材'}
      ],
      trait:'高强、耐应力腐蚀性能及焊接性能优异',
      href:'apply02',
      img:'imgs/2.png'
    },
    {
      alt:'汽车铝合金应用',
      title:'汽车铝合金产品应用',
      e_title:'Application ofaerospace aluminum alloy products',
      content1:'扬东铝业集团铝合金在汽车上的应用可带来诸多好处，比如:更高效，更高的强重比，可满足复杂形状的要求。在当今燃料及环境问题日益严峻的时期，铝合金扮演着一个助推汽车轻量化及提升燃油能效的重要角色，从而帮助缓解能源及环境问题。节能环保已成为当今世界的主旋律，而高昂的能源费用和材料的循环利用已成为汽车制造商正面临的主要难题。当此时机，铝合金凭借其优越的比强度、优良的成型性和高效的循环利用率，逐步成为汽车制造商的宠儿，“铝代钢”已大势所趋。',
      content2:'目前随着铝合金工业技术的发展，部分牌号铝合金的强度和硬度已经达到或超越钢的指标，而其重量比钢大大地降低了。随着我国EA(新能源汽车)的高速发展，铝合金作为汽车轻量化方向的主力，全铝车身也成为重要卖点。',
      model:[
        {lebel:'5052',text:'铝板'},
        {lebel:'5754',text:'铝棒'},
        {lebel:'5A06',text:'铝管'},
        {lebel:'5083',text:'铝管'},
        {lebel:'6061',text:'铝板'},
        {lebel:'6082',text:'铝型材'}
      ],
      trait:'成型性能好、烤漆硬化、氧化处理效果显著',
      href:'apply03',
      img:'imgs/3.png'
    },
    {
      alt:'船舶用铝合金应用',
      title:'船舶用铝合金产品应用',
      e_title:'Application of marine aluminum alloy products',
      content1:'扬东铝业集团供应的海洋系泊链铝用于船舶和石油工业，强度高，韧性好，具备耐海水腐蚀、抗疲劳、耐磨损等特性。其中四级系泊链是目前海洋用的最高级别系链，需求量较大，成功通过国际著名船级社品质认证，填补了国内空白，实物质量达到国际水平，已经形成批量化供应铝产品能力，广泛用于勘探平台、浮时采油平台、海上储油转运站和辅助船队等海洋工程及专用船舶领域。',
      content2:'铝合金板材在船舶及海洋工程中主要用在船体结构及隔舱等上层建筑上，同时通常用小直径铝合金管材做管道，大直径管材和棒材则用作船体架构、杆构件、梁等，为了使船体轻量化，有时会在船亮结构上使用一些薄壁型材。扬东铝业的产品具有良好的强度、加工性能和耐蚀性，完全能够适应海洋应用需要。通过与国内外专家的合作，掌握了先进的船用铝合金板和各类挤压型材的生产技术，为船舶及海洋工程提供前瞻性的支持。',
      model:[
        {lebel:'5052',text:'铝板'},
        {lebel:'5754',text:'铝棒'},
        {lebel:'5A06',text:'铝管'},
        {lebel:'5083',text:'铝管'},
        {lebel:'6082',text:'铝型材'}
      ],
      trait:'耐腐蚀及焊接性能好',
      href:'apply04',
      img:'imgs/4.png'
    },
    {
      alt:'消费电子铝合金应用',
      title:'消费电子铝合金产品应用',
      e_title:'Application of consumer electronics aluminum alloy products',
      content1:'扬东铝业集团助力电子电器制造企业在世界范围内占据有利的竞争位置，实现让产品更轻、更薄、更耐用的愿望。铝合金拥有良好的可加工性和导电性，是绝佳的散热材料。能按照客户需求提供各类挤压型材，适用于大功率变电装置、稳压电源、通讯电源、净化电源、广播电视发射装置、逆变电源等各种大型电源产品，也用于自动控制仪表等电力电子产品领域。',
      content2:'使用铝制散热器元件，能够满足电子产品设计指标的要求，也是提高功率器件使用寿命。铝合金板材也用于制造各种电子面板、电器柜体箱体。此外，在家具电器、无人机、AI机器人、电脑、移动电子设备等方面，均可根据不同需求，提供高性能的铝合金。',
      model:[
        {lebel:'2024',text:'铝板'},
        {lebel:'2A12',text:'铝棒'},
        {lebel:'5052',text:'铝管'},
        {lebel:'5754',text:'铝棒'},
        {lebel:'6061',text:'铝卷'},
        {lebel:'7075',text:'铝型材'}
      ],
      trait:'强度高、机加工性能优良，散热性能良好',
      href:'apply05',
      img:'imgs/5.png'
    },
    {
      alt:'医疗设备用铝合金应用',
      title:'医疗设备用铝合金产品应用',
      e_title:'Application of medical equipment alloy products',
      content1:'扬东铝业集团铝合金在医疗行业应用广泛，早期简单的器械类包括拐杖、轮椅、担架、助力器、油膏缸、消毒盒、病床等等。',
      content2:'得益于医疗技术的飞速发展，大型的医疗设备越来越多，铝合金由于其良好的塑性和加工性能，以及轻量化，耐腐蚀等优点，因此在各种大型医疗设备上越来越多使用，比如超声波设备，CT设备，激光治疗设备等。',
      model:[
        {lebel:'5052',text:'铝板'},
        {lebel:'5754',text:'铝棒'},
        {lebel:'5A06',text:'铝棒'},
        {lebel:'5083',text:'铝管'},
        {lebel:'6061',text:'铝卷'},
        {lebel:'6082',text:'铝型材'}
      ],
      trait:'耐腐蚀及焊接性能好、疲劳强度高',
      href:'apply06',
      img:'imgs/6.png'
    },
    {
      alt:'化工容器铝合金应用',
      title:'化工容器铝合金产品应用',
      e_title:'Application of chemical container aluminum alloy products',
      content1:'扬东铝业集团5000系铝合金材料具有良好的抗腐蚀性和可焊接性能，用铝合金制造的体，内部不需要任何防护涂层就可以运输各种液体或者液化气，并且因为没有腐蚀，从而保证油品更清洁，罐体强制报废后回收价值也更高同时，因为铝合金具有良好的导电性能，很少集聚静电在罐体上，所以不会产生火花而导致爆炸，而且铝合金能很好的吸收罐体在碰撞时所产生的照间能力，不会造成罐体开裂而产生泄漏。也因为罐体的重量大大减轻，车身的重心相应降低，从而降低罐车侧翻的可能性。这也是BP,SHELL等国际石油巨头强制使用铝合金体运输石油的原因。适用于油罐车和其他化工运输车罐体所需的5083、5182等铝合金板材产品，具有大规格、中强度、高质量表面、高成形性的特点，并具有良好的抗腐蚀性能和焊接性能，以及可回收性。不但安全可靠也利于环保，特别是5083-H321铝合金在低温下，韧性和强度会提高，很适合用在运输船液化天然气(LNG)贮罐。',
      content2:null,
      model:[
        {lebel:'5052',text:'铝板'},
        {lebel:'5083',text:'铝管'},
        {lebel:'5754',text:'铝棒'},
        {lebel:'5A06',text:'铝棒'},
      ],
      trait:'强度高、机加工性能优良，抗腐蚀性强、可回收，力学性能、抗剥落腐蚀及晶间蚀性能优',
      href:'apply07',
      img:'imgs/7.png'
    },
    {
      alt:'工业模具用铝合金应用',
      title:'工业模具用铝合金产品应用',
      e_title:'Application of industrial mold alloy products',
      content1:'扬东铝业集团是国内机械加工铝供应及服务极高的市场声誉，工模具被誉为“现代工业之母”在现代工业被广泛应用。随着市场的发展及铝合金技术的提高，目前欧美市场逐渐呈现铝模替代钢模的现象。制造成本低。铝模具在制造、装置、注塑车间装置调整时间、运输等比钢模具更具优越性成本更低。重量轻。由于其密度只有一般模具钢的36%，故运动惯性比较低，在生产过程中加，减速度均比较容易，能减低机器及模具的损耗。制造时间短，机械加工较易，其切削速度比一般模具钢快6倍以上，故大量减低模具加工时间，令模具可更快进行生产。且尺寸稳定性高。热传导率卓越。其热传导率比一般模具钢高，故可节省模具在生产时的冷切时间50%，从而提高模具的生产效率。',
      content2:null,
      model:[
        {lebel:'2A12',text:'铝板'},
        {lebel:'2024',text:'铝管'},
        {lebel:'6061',text:'铝棒'},
        {lebel:'7075',text:'铝棒'},
      ],
      trait:'强度高、切削性好，机加工性能优良',
      href:'apply08',
      img:'imgs/8.png'
    },
    {
      alt:'机械加工铝合金应用',
      title:'机械加工铝合金产品应用',
      e_title:'Application of machining aluminum alloy products',
      content1:'扬东铝业集团是国内机械加工铝供应及服务极高的市场声誉，铝与钢的密度比为1:3，铝模取代钢模在质量方面可节约1/2。采用钢-铝复合模。铝合金模的成本约比钢模低15%以上。铝模制造时间比钢模的短得多，因此占用资金的时间少，优势明显。',
      content2:'铝模的切削加工成本可比钢模的低35%，对铝模完全可用如下的工艺加工:补焊(修补与矫正焊接)、表面硬化处理(阳极氧化、化学镀与镀镍等)钢的铣削时间比铝模长5~10倍、钻孔时间长5倍、电火花加工时间长4倍、抛光时间长3-4倍，切削工具寿命比切削钢模的长4倍。用铝钢复合模能够大大缩短加工时间，节约加工成本。',
      model:[
        {lebel:'2A12',text:'铝板'},
        {lebel:'2024',text:'铝管'},
        {lebel:'5052',text:'铝棒'},
        {lebel:'5754',text:'铝棒'},
        {lebel:'5083',text:'铝型材'},
        {lebel:'6061',text:'铝管'},
        {lebel:'7075',text:'铝板'},
      ],
      trait:'强度高、机加工性能优良',
      href:'apply09',
      img:'imgs/9.png'
    },
    {
      alt:'建筑建材用铝合金应用',
      title:'建筑建材用铝合金产品应用',
      e_title:'Application ofindustrial mold alloy products',
      content1:'扬东铝业集团是国内建筑建材供应及服务极高的市场声誉，随着铝合金隐框幕墙的发展，铝板幕墙也异军突起，配合铝合金玻璃幕墙在幕墙工程中进行使用墙作为一项高技术产品在建筑业发展突飞猛进。',
      content2:'除了众所周知的抗腐蚀、高强度、低重量,铝合金光彩美观，耐侵蚀性好，对光和热的反射率高，吸声机能好，通过化学及电化学的方法可获得各种不同的颜色,这使得建筑行业成为铝合金的几大主要市场之一,广泛用于产业与民用建筑的屋面、墙面、门窗、骨架、内外装饰板、天花板、吊顶、栏杆扶手、室内家具、商店货柜以及施工用的模板等。',
      model:[
        {lebel:'1050',text:'铝板'},
        {lebel:'1060',text:'铝管'},
        {lebel:'3003',text:'铝棒'},
        {lebel:'5052',text:'铝卷'},
        {lebel:'5083',text:'铝板'},
        {lebel:'5754',text:'铝棒'},
        {lebel:'6061',text:'铝锻件'}
      ],
      trait:'精度高,产品尺寸公差可符合中国国标、美标、日标、欧标等标准SGS认证等',
      href:'apply10',
      img:'imgs/10.png'
    }
  ]
  return(
    <>
      <Banner suf='application'/>
      <section className={styles.apply0}>
        <div className="main">
          <p className={styles.anchorBox}>{linkData.map((item,i)=>{
            return <Link key={i} href={'/apply/#'+ item.link}>{item.text}</Link>
          })}</p>
        </div>
      </section>
      <section className={styles.applyWrap}>
        {data.map((item,i)=>{
          return <div key={i} className={[styles.applyCase,'main'].join(' ')}>
            <div className='upwards' id={item.href}></div>
            <div className={styles.applyCaseL}>
              <h4>{item.title}</h4>
              <p>{item.e_title}</p>
              <p>{item.content1}</p>
              <p>{item.content2}</p>
              <p>{item.trait}</p>
              <p style={{fontSize:'24px',marginBottom:'20px'}}>典型合金如：</p>
              <div className={styles.linkgroup}>
                {item.model.map((btn,b)=>{
                  return <Link key={b} href={{pathname:'/product/detail',query:{model:btn.lebel,type:btn.text}}}>{btn.lebel}</Link>
                })}
              </div>
            </div>
            <div>
              <HoverAnimation
              image1={item.img}
              image2={item.img}
              displacementImage={item.img}/>
            </div>
          </div>
        })}
      </section>
    </>
  )
}
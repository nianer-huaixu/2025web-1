import Banner from "@/components/banner"
import Cate1 from "@/components/Cate1"
import Table1 from "@/components/Table1"
import Cate2 from "@/components/Cate2"
import Cate3 from "@/components/Cate3"
import Cate4 from "@/components/Cate4"
import Cate5 from "@/components/Cate5"
import useStore from "@/hook/useStore"
import styles from '@/styles/cate.module.scss'

export default function Bang(){
  const store = useStore()
  const data1 = [
    {
      text:'工业铝棒',
      text1:['直径3MM-560MM','铝合金实心铝圆棒','抗氧耐腐 高密电电解层'],
      img:'product/棒/1-1.webp'
    },
    {
      text:'精拉铝棒',
      text1:['公差0至-0.03mm','直线度好、真圆度高','走心机专用铝棒'],
      img:'product/棒/1-2.webp'
    },
    {
      text:'挤压铝棒',
      text1:['无毛刺，抗腐蚀性，耐氧化不易生锈','良好机械性能'],
      img:'product/棒/1-3.webp'
    },
    {
      text:'合金铝棒',
      text1:['经久耐用 用途广泛 支持非标定制'],
      img:'product/棒/1-4.webp'
    },
    {
      text:'超硬铝棒',
      text1:['高强度可热处理合金','抗腐蚀性能、抗氧化性好','易于加工，耐磨性好','可使用性好'],
      img:'product/棒/1-5.webp'
    },
    {
      text:'锻造铝棒',
      text1:['强度高、不易变形','大厂原材、不易腐蚀'],
      img:'product/棒/1-6.webp'
    },
    {
      text:'大直径铝棒',
      text1:['大直径  实心铝圆棒 耐腐蚀氧化铝合金 长度切割'],
      img:'product/棒/1-7.webp'
    },
    {
      text:'超国标铝棒',
      text1:['长期保持原色','不受腐蚀、氧化或生锈','卓越的抗刮性'],
      img:'product/棒/1-8.webp'
    }
  ]
  const data2 = [
    ['7075','6061','5083','3A21','2017','1050'],
    ['7050','6063','5052','3003','2024','1060'],
    ['7A04','6082','5754','2A12'],
    ['7A09','5A06','5A05']
  ]
  const table1 = {
    text1:'产品长度',
    text2:'2.5-6.0m',
    text3:'铝棒切割、轧制、挤压、拉伸和锻造、CNC加工、车床、铣床、锯床等',
  }
  const table2 = [
    4,5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,
    13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
    28,29,30,32,35,38,40,45,50,55,60,65,70,75,80,
    85,90,95,100,105,110,115,120,125,130,135,140,145,150,155,,
    160,165,170,175,180,185,190,200,205,210,220,230,240,250,260,
    270,280,290,300,310,320,3300,340,350,360,370,380,390,400,410,
    420,430,440,450,460,470,480,490,500,550,600
  ]
  const cate4Text = '各行业铝材加工，铝棒加工，大型CNC铝板加工，新能源铝材加工，全自动印花台板，金属整平加工，电热铝棒加工，铝棒切割加工。'
  return <>
    <Banner suf='bang'/>
    <Cate1 data={data1}/>
    <section className="bg-[#00020F]">
      <h4 className={styles.title}>多种材质 支持定制</h4>
      <div className={["main",styles.textureMain].join(' ')}>
        {data2.map((list,l)=>{
          return <ul key={l} className="grid grid-cols-6">
            {list.map((item,i)=>{
              return <li key={i} className={item=='2A12'?"col-start-5":""}><span>{item}</span></li>
            })}
          </ul>
        })}
        <p>* 仅展示部分型号以供参考，具体事宜请与销售人员确认</p>
      </div>
    </section>
    <section className="bg-[#17161B]">
      <h4 className={styles.title2}>产品规格&nbsp;&nbsp;&nbsp;&nbsp;<span>一站式采购</span></h4>
      <Table1 data={table1}/>
      <div className="main text-center border text-[24px] py-[4px] tracking-[2px] border-b-0">常备（铝棒）库存</div>
      <div className="main flex border text-center">
        <div className="w-full">
          <div className="text-[24px]">直径mm</div>
          <div className="grid grid-rows-15 grid-flow-col border border-b-0 border-l-0">
            {table2.map((item,i)=>{
              return <span key={i} className="border-r border-b text-[18px]">φ{item}</span>
            })}
          </div>
        </div>
        <div className="w-[170px] bg-[#404040]">
          <span className="text-[24px] block w-full border-l border-b">常备长度</span>
          <div className="grid grid-cols-1">
            {['2500','3000','3500','4000','6000','...'].map((item,i)=>{
              return <span key={i} className="border-b text-[18px]">{item}</span>
            })}
          </div>
        </div>
      </div>
      <Cate2/>
    </section>
    <Cate3 title='铝材铝棒' sup='棒'/>
    <Cate4 cate4Text={cate4Text} sup='棒'/>
    <Cate5 sup='棒'/>
    
  </>
}
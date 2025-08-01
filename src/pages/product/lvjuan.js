import Banner from "@/components/banner"
import Cate1 from "@/components/Cate1"
import Mark from "@/components/mark"
import Table1 from "@/components/Table1"
import Cate2 from "@/components/Cate2"
import Cate3 from "@/components/Cate3"
import Cate4 from "@/components/Cate4"
import Cate5 from "@/components/Cate5"
import useStore from "@/hook/useStore"
import styles from '@/styles/cate.module.scss'

export default function Juan(){
  const store = useStore()
  const data1 = [
    {
      text:'超宽铝卷',
      text1:['宽1或1.2米','切口平整表面光滑','严选材质质量保障'],
      img:'product/卷/1-1.webp'
    },
    {
      text:'保温铝卷',
      text1:['材质不易变形不易腐蚀','不易氧化 使用时间长','性能稳定'],
      img:'product/卷/1-2.webp'
    },
    {
      text:'防锈铝卷',
      text1:['低熔点,耐蚀性好','具有耐热、耐磨的特性'],
      img:'product/卷/1-3.webp'
    },
    {
      text:'花纹铝卷',
      text1:['规格宽度齐全，厚度均匀，误差小','采用全新铝卷原材料，承载能力强'],
      img:'product/卷/1-4.webp'
    },
    {
      text:'合金铝带',
      text1:['宽度可支持定制，切面平整光滑','在恶劣环境中使用性能不会减弱','稳定性好'],
      img:'product/卷/1-5.webp'
    },
    {
      text:'冲压铝带',
      text1:['有良好的导电性、耐腐蚀性和轻量化','成型性高'],
      img:'product/卷/1-6.webp'
    },
    {
      text:'拉伸铝带',
      text1:['易承受各种压力加工和引伸、弯曲'],
      img:'product/卷/1-7.webp'
    },
    {
      text:'铝卷开平',
      text1:['中等强度、良好的可成型性','可焊接性及抗腐蚀性能','定尺裁剪'],
      img:'product/卷/1-8.webp'
    }
  ]
  const data2 = [
    ['7075','6061','5083','3A21','2017','1050'],
    ['7050','6063','5052','3003','2024','1060'],
    ['7A04','6082','5754','2A12'],
    ['7A09','5A06','5A05']
  ]
  const table1 = {
    text1:'产品宽度',
    text2:'1.0-2.5m',
    text3:'铝卷切割、轧制、挤压、拉伸和锻造、CNC加工、车床、铣床、锯床等',
  }
  const table2 = [
    0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,
    1,1.2,1.5,1.6,1.8,2,2.3,2.5,
    2.8,3,3.2,3.5,4,5,6
  ]
  const cate4Text = '各行业铝材加工，铝卷加工，大型CNC铝板加工，新能源铝材加工，全自动印花台板，金属整平加工，电热铝卷加工，铝卷切割加工。'
  return <>
    <Banner suf='juan'/>
    <Cate1 data={data1}/>
    <Mark/>
    {/* <section className="bg-[#00020F]">
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
    </section> */}
    <section className="bg-[#17161B]">
      <h4 className={styles.title2}>产品规格&nbsp;&nbsp;&nbsp;&nbsp;<span>一站式采购</span></h4>
      <Table1 data={table1}/>
      <div className="main text-center border text-[24px] py-[4px] tracking-[2px] border-b-0">常备（铝卷）库存</div>
      <div className="main flex border text-center">
        <div className="w-full">
          <div className="text-[24px]">厚度mm</div>
          <div className="grid grid-rows-8 grid-flow-col border border-b-0 border-l-0">
            {table2.map((item,i)=>{
              return <span key={i} className="border-r border-b text-[18px]">{item}</span>
            })}
          </div>
        </div>
        <div className="w-[270px] bg-[#404040]">
          <span className="text-[24px] block w-full border-l border-b">铝卷宽度</span>
          <div className="grid grid-cols-1">
            {['1000','1220','1250','1500','2000','2500'].map((item,i)=>{
              return <span key={i} className="border-b text-[18px]">{item}</span>
            })}
          </div>
        </div>
      </div>
      <Cate2/>
    </section>
    <Cate3 title='铝材铝卷' sup='卷'/>
    <Cate4 cate4Text={cate4Text} sup='卷'/>
    <Cate5 sup='卷'/>
    
  </>
}
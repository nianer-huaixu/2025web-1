import Banner from "@/components/banner"
import Cate1 from "@/components/Cate1"
import Table1 from "@/components/Table1"
import Cate2 from "@/components/Cate2"
import Cate3 from "@/components/Cate3"
import Cate4 from "@/components/Cate4"
import Cate5 from "@/components/Cate5"
import useStore from "@/hook/useStore"
import styles from '@/styles/cate.module.scss'

export default function Xingcai(){
  const store = useStore()
  const data1 = [
    {
      text:'铝排',
      text1:['表面/内壁','光滑平整不结水垢','轻巧导热性能好','防腐耐用'],
      img:'product/型材/1-1.webp'
    },
    {
      text:'铝方棒',
      text1:['精准切割  国标品质  规格齐全','细腻光洁 平整无毛刺'],
      img:'product/型材/1-2.webp'
    },
    {
      text:'六角铝棒',
      text1:['规格齐全 直径 6mm-70mm','专业操作 切口整齐 光滑不伤手','长度可任意裁截'],
      img:'product/型材/1-3.webp'
    },
    {
      text:'角铝',
      text1:['多种规格 随意挑选  支持定制','不等边角铝  等边角铝','加厚L型直角'],
      img:'product/型材/1-4.webp'
    },
    {
      text:'异型材',
      text1:['切割精度:土0.5MM','攻丝   45°切割  钻孔','专业定制'],
      img:'product/型材/1-5.webp'
    },
    {
      text:'圆管',
      text1:['4mm 400mm','满足您的各种需求'],
      img:'product/型材/1-6.webp'
    },
    {
      text:'方管',
      text1:['强度高  材质好  做工细','加厚升级 超强承重  坚固耐用 防锈耐腐'],
      img:'product/型材/1-7.webp'
    },
    {
      text:'支持来图来样',
      text1:['货源充足  质量稳定  选材优良','交期准时   极速发货'],
      img:'product/型材/1-8.webp'
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
    0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,
    1,1.2,1.5,1.6,1.8,2,2.3,2.5,
    2.8,3,3.2,3.5,4,5,6
  ]
  const cate4Text = '各行业铝材加工，铝棒加工，大型CNC铝板加工，新能源铝材 加工，全自动印花台板，金属整平加工，电热铝棒加工，铝棒 切割加工。'
  return <>
    <Banner suf='xingcai'/>
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
    <Cate3 title='铝材铝型材' sup='型材'/>
    <Cate4 cate4Text={cate4Text} sup='型材'/>
    <Cate5 sup='型材'/>
  </>
}
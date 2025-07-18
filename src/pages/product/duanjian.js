import Banner from "@/components/banner"
import Cate1 from "@/components/Cate1"
import Table1 from "@/components/Table1"
import Cate2 from "@/components/Cate2"
import Cate3 from "@/components/Cate3"
import Cate4 from "@/components/Cate4"
import Cate5 from "@/components/Cate5"
import useStore from "@/hook/useStore"
import styles from '@/styles/cate.module.scss'

export default function Duanjian(){
  const store = useStore()
  const data1 = [
    {
      text:'自由锻',
      text1:['结构稳定   性能稳定','尺寸标准   严选材质','性能稳定   尺寸标准'],
      img:'product/锻件/1-1.webp'
    },
    {
      text:'模锻件',
      text1:['精准切割   国标品质   规格齐全','细腻光洁 平整无毛刺'],
      img:'product/锻件/1-2.webp'
    },
    {
      text:'压铸铝件',
      text1:['精密铸造    工艺成熟   精度高 出货快','专业承接压铸定制加工'],
      img:'product/锻件/1-3.webp'
    },
    {
      text:'空心锻件',
      text1:['用心选材  性能稳定','安装便捷高韧性','不易磨损'],
      img:'product/锻件/1-7.webp'
    },
    {
      text:'环形锻件',
      text1:['定做非标异形锻件来图加工','无孔环形法兰'],
      img:'product/锻件/1-4.webp'
    },
    {
      text:'法兰锻件',
      text1:['工艺娴熟','技术力量雄厚','设备完善'],
      img:'product/锻件/1-5.webp'
    },
    {
      text:'轴类锻件',
      text1:['定制锻造件   交期准   售后好   打样快'],
      img:'product/锻件/1-6.webp'
    },
    {
      text:'支持来图来样',
      text1:['货源充足  质量稳定  选材优良','交期准时   极速发货'],
      img:'product/锻件/1-8.webp'
    }
  ]
  const data2 = [
    ['7075','6061','5083','3A21','2017','1050'],
    ['7050','6063','5052','3003','2024','1060'],
    ['7A04','6082','5754','2A12'],
    ['7A09','5A06','5A05']
  ]
  const table1 = {
    text1:'产品定制',
    text2:'来图来样开模定制',
    text3:'铝棒切割、轧制、挤压、拉伸和锻造、CNC加工、车床、铣床、锯床等',
  }
  const table2 = [
    0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,
    1,1.2,1.5,1.6,1.8,2,2.3,2.5,
    2.8,3,3.2,3.5,4,5,6
  ]
  const cate4Text = '各行业铝材加工，铝棒加工，大型CNC铝板加工，新能源铝材 加工，全自动印花台板，金属整平加工，电热铝棒加工，铝棒 切割加工。'
  return <>
    <Banner suf='duanjian'/>
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
      {/* <div className="main text-center border text-[24px] py-[4px] tracking-[2px] border-b-0">常备（铝卷）库存</div>
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
      </div> */}
      <Cate2/>
    </section>
    <Cate3 title='铝材铝锻件' sup='锻件'/>
    <Cate4 cate4Text={cate4Text} sup='锻件'/>
    <Cate5 sup='锻件'/>
  </>
}
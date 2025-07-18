import Banner from "@/components/banner"
import Cate1 from "@/components/Cate1"
import Table1 from "@/components/Table1"
import Cate2 from "@/components/Cate2"
import Cate3 from "@/components/Cate3"
import Cate4 from "@/components/Cate4"
import Cate5 from "@/components/Cate5"
import useStore from "@/hook/useStore"
import styles from '@/styles/cate.module.scss'
export default function Ban(){
  const store = useStore()
  const data1 = [
    {
      text:'亮面铝板',
      text1:['表面光滑平整无毛刺'],
      img:'product/板/1-1.webp'
    },
    {
      text:'超平铝板',
      text1:['5A板','公差-0.05~+0.05mm','平面度0.1mm/m，替代铣面'],
      img:'product/板/1-2.webp'
    },
    {
      text:'贴膜铝板',
      text1:['贴膜保护 表面平整','阳极氧化'],
      img:'product/板/1-3.webp'
    },
    {
      text:'锻造铝板',
      text1:['强度好 耐腐蚀 切削性能好'],
      img:'product/板/1-4.webp'
    },
    {
      text:'预拉伸铝板',
      text1:['折弯加工','激光水切','车床加工'],
      img:'product/板/1-5.webp'
    },
    {
      text:'超宽铝板',
      text1:['易于热压和冷压加工','不易弯曲变形膨胀'],
      img:'product/板/1-6.webp'
    },
    {
      text:'花纹铝板',
      text1:['铝卷/橘皮铝卷/彩涂铝卷/板/瓦铝板等'],
      img:'product/板/1-7.webp'
    },
    {
      text:'特厚铝板',
      text1:['长期保持原色','不受腐蚀、氧化或生锈','卓越的抗刮性'],
      img:'product/板/1-8.webp'
    }
  ]
  const data2 = [
    ['7075','7050','7A04','7A09','7020','7003'],
    ['6061','6063','6082','6A02','6101','6060'],
    ['5052','5083','5754','5A05','5A06','5A02'],
    ['5A03','5056','5049'],
    ['3003','3A21','3004','3103'],
    ['2011','2017','2024','2014','2A11','2A14'],
    ['2A50','2A70'],
    ['1050','1060','1070','1100'],
    ['LY12','LY11','LY10','LD5','LD7','LF21'],
    ['LF2','LF3','LF5','LF6','LD2','LC4'],
    ['LC9']
  ]
  const table1 = {
    text1:'产品厚度',
    text2:'0.2-500mm',
    text3:'剪板零切、激光切割、CNC加工、车床、铣床、锯床等',
  }
  const table2 =[
    '0.2','0.3','0.4','0.5','0.6','0.8',
    '1.0','1.2','1.5','2.0','2.5','3.0',
    '4.0','5.0','6.0','8.0','10','12',
    '15','20','25','30','35','40',
    '45','50','55','60','65','70',
    '75','80','85','90','95','100',
    '105','110','115','120','125','130',
    '135','140','145','150','155','160',
    '165','170','175','180','185','190',
    '195','200','210','220','230','240',
    '250','260','270','280','290','300',
    '310','320','330','340','350','360',
    '370','380','390','400','410','420',
    '430','440','450','460','470','480',
    '490','500'
  ]
  const cate2data = {
    img:store.common.url +'product/icon-3-b.png',
    text1:'覆膜',
    list:[
      '1.采用聚氯乙烯高光膜制成，易清洗。',
      '2.独特的PET层，坚固耐用，耐久性强。'
    ]
  }
  const cate4Text = '各行业铝材加工，铝板加工，大型CNC铝板加工，新能源铝材加工，全自动印花台板，金属整平加工，电热铝板加工，铝面板切割加工。'
  return <>
    <Banner suf='board'/>
    <Cate1 data={data1}/>
    <section className="bg-[#00020F]">
      <h4 className={styles.title}>多种材质 支持定制</h4>
      <div className={["main",styles.textureMain].join(' ')}>
        {data2.map((list,l)=>{
          return <ul key={l} className="grid grid-cols-6">
            {list.map((item,i)=>{
              return <li key={i}><span>{item}</span></li>
            })}
          </ul>
        })}
        <p>* 仅展示部分型号以供参考，具体事宜请与销售人员确认</p>
      </div>
    </section>
    <section className="bg-[#17161B]">
      <h4 className={styles.title2}>产品规格&nbsp;&nbsp;&nbsp;&nbsp;<span>一站式采购</span></h4>
      <Table1 data={table1}/>
      <div className="main text-center border text-[24px] py-[4px] tracking-[2px]">铝板厚度一览表( 长宽可任意零切 )</div>
      <div className="main grid grid-cols-6">
        {table2.map((item,i)=>{
          return <span key={i} className="border text-[24px] text-[#fff] pl-[70px]">{item}mm</span>
        })}
        <span className="col-span-4 border text-[24px] pl-[70px]">如需其他规格请咨询销售客服专员！</span>
      </div>
      <Cate2 content={cate2data}/>
    </section>
    <Cate3 title='铝材铝板' sup='板'/>
    <Cate4 cate4Text={cate4Text} sup='板'/>
    <Cate5 sup='板'/>
  </>
}
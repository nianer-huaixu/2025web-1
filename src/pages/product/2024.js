import Banner from "@/components/banner"
import MarkCom from "@/components/markCom"
import useStore from "@/hook/useStore"
import styles from "@/styles/mark.module.scss"
export default function Mark2024(){
  const store = useStore()

  const suf = '2024'
  const data = {
    ghzt:'O,H111,H112,H24,H14,H16,H18',
    scbz:'"GB国标,GJB国军标,GBN军标,EN欧标,ASTM美标,AMS航空标准',
    juan:[
      '厚度:0.5-3.0mm',
      '宽度:≤1500mm',
    ],
    ban:[
      '厚度:0.3-500mm',
      '宽度:≤2500mm',
      '长度:≤10000mm'
    ],
    bang:[
      '直径:3-600mm',
      '长度:≤6000mm'
    ],
    guan:[
      '厚度:1-100mm',
      '外径:8-550mm',
      '长度:≤6000mm'
    ],
    xc:[
      '规格多样 模具齐全','支持定制 任意形状'
    ],
    dj:[
      '来图来样 按需切割','多种材质 交期准时'
    ],
    jsxn:['2024-T4','425','275','14','120'],
    wlxn:['2024-T4','23.9','502-638','30','0.057','2.8'],
    hxcf:[suf,'-','0.50','0.50','3.8-4.9','0.3-0.9','1.2-1.8','0.10','0.25','0.15','——','——','0.05','0.15','余量'],
    dxyt:[
      '2024强度高，有一定的耐热性，可以焊接。',
      '2024为铝－铜－镁系中的典型硬铝合金，其成份比较合理，综合性能较好。很多国家都生产这个合金，是硬铝中用量最大的。该合金的特点是：强度高，有一定的耐热性，可用作150°C以下的工作零件。温度高于125°C，2024合金的强度比7075合金的还高。热状态、退火和新淬火状态下成形性能都比较好，热处理强化效果显著，但热处理工艺要求严格。抗蚀性较差，但用纯铝包覆可以得到有效保护;焊接时易产生裂纹，但采用特殊工艺可以焊接，也可以铆接。广泛用于飞机结构、铆钉、卡车轮毂、螺旋桨元件及其他种种结构件。',
      '2024用途主要用于制作各种高负荷的零件和构件（但不包括冲压件锻件）如飞机上的骨架零件，蒙皮，隔框，翼肋，翼梁，铆钉等150℃以下工作零件。'
    ]
  }
  return <>
    <Banner suf={suf}/>
    <MarkCom suf={suf}/>
    <section className="bg-[#000] py-[40px]">
      <div className="main">
        <h4 className={styles.title3}>{suf} 铝合金配置参数</h4>
        <div className="grid grid-cols-5 gap-[20px]">
          <div className={["col-span-2",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-1.png')no-repeat 30px 14px`}}>
            <span>供货状态</span>
            <p className="grid grid-cols-4 gap-x-[80px]">
              {data.ghzt.split(',').map((item,i)=>{
                return <span key={i}>{item}</span>
              })}
            </p>
          </div>
          <div className={["col-span-2",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-2.png')no-repeat 30px 14px`}}>
            <span>生产标准</span>
            <p className="grid grid-cols-4">
              {data.scbz.split(',').map((item,i)=>{
                return <span key={i}>{item}</span>
              })}
            </p>
          </div>
          <div className={["",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-3.png')no-repeat 30px 14px`}}>
            <span>产品规格(铝卷)</span>
            <p className="grid grid-rows-2">
              {data.juan.map((item,i)=>{
                return <span key={i}>{item}</span>
              })}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-[20px] my-[20px]">
          <div className={["",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-4.png')no-repeat 30px 14px`}}>
            <span>产品规格(铝板)</span>
            <p className="grid grid-rows-2">
              {data.ban.map((item,i)=>{
                return <span key={i}>{item}</span>
              })}
            </p>
          </div>
          <div className={["",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-5.png')no-repeat 30px 14px`}}>
            <span>产品规格(铝棒)</span>
            <p className="grid grid-rows-2">
              {data.bang.map((item,i)=>{
                return <span key={i}>{item}</span>
              })}
            </p>
          </div>
          <div className={["",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-6.png')no-repeat 30px 14px`}}>
            <span>产品规格(铝管)</span>
            <p className="grid grid-rows-2">
              {data.guan.map((item,i)=>{
                return <span key={i}>{item}</span>
              })}
            </p>
          </div>
          <div className={["",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-7.png')no-repeat 30px 14px`}}>
            <span>产品规格(铝型材)</span>
            <p className="grid grid-rows-2">
              {data.xc.map((item,i)=>{
                return <span key={i}>{item}</span>
              })}
            </p>
          </div>
          <div className={["",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-8.png')no-repeat 30px 14px`}}>
            <span>产品规格(铝锻件)</span>
            <p className="grid grid-rows-2">
              {data.dj.map((item,i)=>{
                return <span key={i}>{item}</span>
              })}
            </p>
          </div>
        </div>
        <div className={["mb-[20px]",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-9.png')no-repeat 30px 14px`}}>
          <span>机械性能</span>
          <p className="grid grid-cols-5 text-center my-[5px]">
            <span className="text-left">铝合金牌号及状态(参考值)</span>
            <span>抗拉强度 Rm/Mpa</span>
            <span>屈服强度 Rp0.2/Mpa</span>
            <span>延伸率/%</span>
            <span>硬度/ HBWa</span>
          </p>
          <p className="grid grid-cols-5 text-center">
            {data.jsxn.map((item,i)=>{
              return <span key={i} style={{textAlign:i==0?'left':''}}>{item}</span>
            })}
          </p>
        </div>
        <div className={["mb-[20px]",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-10.png')no-repeat 30px 14px`}}>
          <span>物理性能</span>
          <p className="grid grid-cols-6 text-center my-[5px]">
            <span className="text-left">铝合金牌号及状态(参考值)</span>
            <span className="w-[241px]">热膨胀系数 (20-100°C)μm/m·k</span>
            <span>熔点范围  (°C)</span>
            <span>电导率  20°C(68°F)(%IACS)</span>
            <span>电阻率 20°C(68*F) Ωmm2/m</span>
            <span>密度  (20°C)(g/cm3)</span>
          </p>
          <p className="grid grid-cols-6 text-center">
            {data.wlxn.map((item,i)=>{
              return <span key={i} style={{textAlign:i==0?'left':''}}>{item}</span>
            })}
          </p>
        </div>
        <div className={["mb-[20px]",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-11.png')no-repeat 30px 14px`}}>
          <span>化学成分</span>
          <p className="grid grid-cols-15 text-center my-[5px]">
            <span className="text-left">新牌号</span>
            <span>旧牌号</span>
            <span>硅Si</span>
            <span>铁Fe</span>
            <span>铜Cu</span>
            <span>锰Mn</span>
            <span>镁Gg</span>
            <span>铬Cr</span>
            <span>锌Zn</span>
            <span>钛Ti</span>
            <span>锆Zr</span>
            <span>镍Ni</span>
            <span>每个</span>
            <span>总量</span>
            <span>铝Al</span>
          </p>
          <p className="grid grid-cols-15 text-center">
            {data.hxcf.map((item,i)=>{
              return <span key={i} style={{textAlign:i==0?'left':''}}>{item}</span>
            })}
          </p>
        </div>
        <div className={["",styles.paramBox].join(' ')} style={{background:`url('${store.common.url}product/牌号/icon-g-12.png')no-repeat 30px 14px`}}>
          <span>典型用途</span>
          {data.dxyt.map((item,i)=>{
            return <span className="block text-[#666] my-[10px]" key={i}>{item}</span>
          })}
        </div>
        <p className="text-lg text-right mt-[40px] pb-[20px] border-b-1 border-[#CD241D]">* 以上规格仅供参考，具体规格标准请与销售人员确认</p>
      </div>
    </section>
  </>
}
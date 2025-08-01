import Banner from "@/components/banner"
import MarkCom from "@/components/markCom"
import useStore from "@/hook/useStore"
import styles from "@/styles/mark.module.scss"
export default function Mark6060(){
  const store = useStore()

  const suf = '6060'
  const data = {
    ghzt:'O,H112',
    scbz:'GB国标,GJB国军标,GBN军标',
    ban:[
      '厚度:1-400mm',
      '宽度:≤2500mm',
      '长度:≤10000mm'
    ],
    bang:[
      '直径:5-500mm',
      '长度:≤6000mm'
    ],
    juan:[
      '厚度:',
      '宽度:',
    ],
    guan:[
      '厚度:1-100mm',
      '外径:5-680mm',
      '长度:≤6000mm'
    ],
    xc:[
      '规格多样 模具齐全','支持定制 任意形状'
    ],
    dj:[
      '来图来样 按需切割','多种材质 交期准时'
    ],
    jsxn:[suf+'-T66','215','160','12','75'],
    wlxn:[suf+'-T66','23.2','563-645','37','0.047','2.71'],
    hxcf:[suf,'-','0.3-0.6','0.1-0.3','0.10','0.10','0.35-0.6','0.05','0.15','0.10','——','——','0.05','0.15','余量'],
    dxyt:[
      '6060铝合金‌是一种以镁和硅为主要强化相的变形铝合金，属于Al-Mg-Si系合金，具有中等强度、良好的耐腐蚀性和焊接性能，易挤压成型，氧化着色性能佳‌‌。',
      '6060铝合金在应用范围和强度特性方面均表现出优异的性能。这使得6060铝合金在多个领域得到广泛应用，并成为现代工业中不可或缺的重要材料。',
      '6060铝合金广泛应用于多个领域‌。由于其优良的抗蚀性，它广泛用于海事用途如船舶，以及汽车、飞机焊接件、地铁轻轨、需严格防火的压力容器（如液体罐车、冷藏车、冷藏集装箱）、制冷装置、电视塔、钻探设备、交通运输设备等‌。此外，6060铝合金还用于建筑型材、灌溉管材、供车辆、台架、家具、升降机、栅栏等用的管棒、型材‌。',
      '1. 建筑领域：6060铝合金在建筑行业中主要用于制作门窗、幕墙、装饰材料等。其轻便、耐腐蚀、美观大方的特性使得铝合金成为现代建筑的首选材料。',
      '2. 交通领域：在交通运输行业中，6060铝合金广泛应用于汽车、火车、船舶等交通工具的制造。铝合金的轻量化特性有助于降低能耗，提高运输效率。',
      '3. 电子领域：6060铝合金在电子产品领域也有广泛应用，如笔记本电脑外壳、手机边框等。其导电性能和加工性能优良，可满足电子产品对材料的高要求。'
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
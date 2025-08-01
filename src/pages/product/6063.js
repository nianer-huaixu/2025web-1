import Banner from "@/components/banner"
import MarkCom from "@/components/markCom"
import useStore from "@/hook/useStore"
import styles from "@/styles/mark.module.scss"
export default function Mark6063(){
  const store = useStore()

  const suf = '6063'
  const data = {
    ghzt:'T5,T6,T651,T6511,T652,H112,T4,O',
    scbz:'GB国标,EN欧标,ASTM美标',
    ban:[
      '厚度:0.5-500mm',
      '宽度:≤2500mm',
      '长度:≤10000mm'
    ],
    bang:[
      '直径:3-600mm',
      '长度:≤6000mm'
    ],
    juan:[
      '厚度:0.5-3mm',
      '宽度:≤1500mm',
    ],
    guan:[
      '厚度:1-100mm',
      '外径:5-850mm',
      '长度:≤6000mm'
    ],
    xc:[
      '规格多样 模具齐全','支持定制 任意形状'
    ],
    dj:[
      '来图来样 按需切割','多种材质 交期准时'
    ],
    jsxn:[suf+'-T6','240','190','8','80'],
    wlxn:[suf+'-T6','23.4','615-655','53','0.033','2.8'],
    hxcf:[suf,'LD31','0.2-0.6','0.35','0.10','0.15','0.6-0.9','0.05','0.15','0.10','——','——','0.05','0.15','余量'],
    dxyt:[
      '6063具有加工性能极佳、优良的可焊接性，阳极氧化效果优良。',
      '6063铝合金材料。主要合金元素为镁与硅，具有加工性能极佳、优良的可焊接性、挤出性及电镀性、良好的抗腐蚀性、韧性，易于抛光、上色膜，阳极氧化效果优良，是典型的挤压合金。6063铝合金型材以其良好的塑性、适中的热处理强度、良好的焊接性能以及阳极氧化处理后，表面华丽的色泽等诸多优点而被广泛应用于建筑型材、灌溉管材、供车辆、台架、家具、升降机、栅栏等用的管、棒、型材。',
      '6063属低合金化的Al-Mg-Si系高塑性合金。具有诸多可贵特点：1.热处理强化，冲击韧性高，对缺口不敏感。2.焊接性能和耐蚀性优良，无应力腐蚀开裂倾向，在热处理可强化型铝合金中，Al-Mg-Si系合金是唯一没有发现应力腐蚀开裂现象的合金。3.加工后表面十分光洁，且容易阳极氧化和着色。其缺点是淬火后，若在室温停放一段时间，在时效上会对强度带来不利影响（停放效应）。',
      '6063铝合金广泛用于建筑铝门窗、幕墙的框架，为了保证门窗、幕墙具有高的抗风压性能、装配性能、耐蚀性能和装饰性能，对铝合金型材综合性能的要求远远高于工业型材标准，栏栅，家具，建筑挤压件，卡车及挂车平台，门窗，灌溉用标准圆形管。'
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
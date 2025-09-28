import useStore from '@/hook/useStore'
import styles from '@/styles/mark.module.scss'
export default function GridCom({suf,data}){
  const store = useStore()

  return <section className="bg-[#000] py-[40px]">
  <div className="main">
    <h4 className={styles.title3}>{suf} 铝合金配置参数</h4>
    <div className={["grid grid-cols-5 gap-[20px] mb-[20px]",styles.markGridGroup].join(' ')}>
      <div className={["col-span-2",styles.paramBox].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-1.png')`}}>
        <span>供货状态</span>
        <p className="grid grid-cols-4 gap-x-[80px]">
          {data.ghzt.split(',').map((item,i)=>{
            return <span key={i}>{item}</span>
          })}
        </p>
      </div>
      <div className={["col-span-2",styles.paramBox].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-2.png')`}}>
        <span>生产标准</span>
        <p className="grid grid-cols-4">
          {data.scbz.split(',').map((item,i)=>{
            return <span key={i}>{item}</span>
          })}
        </p>
      </div>
      <div className={["",styles.paramBox].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-3.png')`}}>
        <span>产品规格(铝卷)</span>
        <p className="grid grid-rows-2">
          {data.juan.map((item,i)=>{
            return <span key={i}>{item}</span>
          })}
        </p>
      </div>
      <div className={["",styles.paramBox].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-4.png')`}}>
        <span>产品规格(铝板)</span>
        <p className="grid grid-rows-2">
          {data.ban.map((item,i)=>{
            return <span key={i}>{item}</span>
          })}
        </p>
      </div>
      <div className={["",styles.paramBox].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-5.png')`}}>
        <span>产品规格(铝棒)</span>
        <p className="grid grid-rows-2">
          {data.bang.map((item,i)=>{
            return <span key={i}>{item}</span>
          })}
        </p>
      </div>
      <div className={["",styles.paramBox].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-6.png')`}}>
        <span>产品规格(铝管)</span>
        <p className="grid grid-rows-2">
          {data.guan.map((item,i)=>{
            return <span key={i}>{item}</span>
          })}
        </p>
      </div>
      <div className={["",styles.paramBox].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-7.png')`}}>
        <span>产品规格(铝型材)</span>
        <p className="grid grid-rows-2">
          {data.xc.map((item,i)=>{
            return <span key={i}>{item}</span>
          })}
        </p>
      </div>
      <div className={["",styles.paramBox].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-8.png')`}}>
        <span>产品规格(铝锻件)</span>
        <p className="grid grid-rows-2">
          {data.dj.map((item,i)=>{
            return <span key={i}>{item}</span> 
          })}
        </p>
      </div>
    </div>
    <div className={["mb-[20px]",styles.paramBox,styles.markGridLong3].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-9.png')`}}>
      <span>机械性能</span>
      <p className="grid grid-cols-5 text-center my-[5px]">
        <span className="text-left">铝合金牌号及状态(参考值)<br></br><span>{data.jsxn[0]}</span></span>
        <span>抗拉强度 Rm/Mpa<br></br><span>{data.jsxn[1]}</span></span>
        <span>屈服强度 Rp0.2/Mpa<br></br><span>{data.jsxn[2]}</span></span>
        <span>延伸率/%<br></br><span>{data.jsxn[3]}</span></span>
        <span>硬度/HBWa<br></br><span>{data.jsxn[4]}</span></span>
      </p>
    </div>
    <div className={["mb-[20px]",styles.paramBox,styles.markGridLong3,styles.markGridLong1].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-10.png')`}}>
      <span>物理性能</span>
      <p className="grid grid-cols-6 text-center my-[5px]">
        <span className="text-left">铝合金牌号及状态(参考值)<br></br><span>{data.wlxn[0]}</span></span>
        <span className="w-[241px]">热膨胀系数 (20-100°C)μm/m·k<br></br><span>{data.wlxn[1]}</span></span>
        <span>熔点范围  (°C)<br></br><span>{data.wlxn[2]}</span></span>
        <span>电导率  20°C(68°F)(%IACS)<br></br><span>{data.wlxn[3]}</span></span>
        <span>电阻率 20°C(68*F)Ωmm2/m<br></br><span>{data.wlxn[4]}</span></span>
        <span>密度  (20°C)(g/cm3)<br></br><span>{data.wlxn[5]}</span></span>
      </p>
    </div>
    <div className={["mb-[20px]",styles.paramBox,styles.markGridLong8].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-11.png')`}}>
      <span>化学成分</span>
      <p className="grid grid-cols-15 text-center my-[5px]">
        <span className="text-left">新牌号<br></br><span>{data.hxcf[0]}</span></span>
        <span>旧牌号<br></br><span>{data.hxcf[1]}</span></span>
        <span>硅Si<br></br><span>{data.hxcf[2]}</span></span>
        <span>铁Fe<br></br><span>{data.hxcf[3]}</span></span>
        <span>铜Cu<br></br><span>{data.hxcf[4]}</span></span>
        <span>锰Mn<br></br><span>{data.hxcf[5]}</span></span>
        <span>镁Gg<br></br><span>{data.hxcf[6]}</span></span>
        <span>铬Cr<br></br><span>{data.hxcf[7]}</span></span>
        <span>锌Zn<br></br><span>{data.hxcf[8]}</span></span>
        <span>钛Ti<br></br><span>{data.hxcf[9]}</span></span>
        <span>锆Zr<br></br><span>{data.hxcf[10]}</span></span>
        <span>镍Ni<br></br><span>{data.hxcf[11]}</span></span>
        <span>每个<br></br><span>{data.hxcf[12]}</span></span>
        <span>总量<br></br><span>{data.hxcf[13]}</span></span>
        <span>铝Al<br></br><span>{data.hxcf[14]}</span></span>
      </p>
    </div>
    <div className={["",styles.paramBox].join(' ')} style={{backgroundImage:`url('${store.common.url}product/牌号/icon-g-12.png')`}}>
      <span>典型用途</span>
      {data.dxyt.map((item,i)=>{
        return <span className="block text-[#666] my-[10px]" key={i}>{item}</span>
      })}
    </div>
    <p className="text-lg text-right mt-[40px] pb-[20px] border-b-1 border-[#CD241D]">* 以上规格仅供参考，具体规格标准请与销售人员确认</p>
  </div>
</section>
}
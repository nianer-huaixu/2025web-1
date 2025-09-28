import Banner from "@/components/banner"
import MarkCom from "@/components/markCom"
import GridCom from "@/components/GridCom"
export default function Mark6101(){

  const suf = '6101'
  const data = {
    ghzt:'T6',
    scbz:'GB国标,EN欧标,ASTM美标',
    ban:[
      '厚度:0.5-600mm',
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
    jsxn:[suf+'-T6','215','60','8','实测'],
    wlxn:[suf+'-T6','23.5','621-654','57','30.2','2.69'],
    hxcf:[suf,'-','0.3-0.7','0.50','0.10','0.30','0.35-0.8','0.30','0.10','——','——','——','0.03','0.10','余量'],
    dxyt:[
      '6101铝合金的硬度较高，韧性较好，拉伸和冲击性能也较好。',
      '6101铝合金属于Al-Mg-Si系可热处理强化合金，具有优异成形性、焊接性和耐腐蚀性，广泛应用于汽车车身板、船舶构件、建筑型材及电子外壳等领域。',
      '6101铝合金的主要用途包括以下几个方面‌：',
      '交通运输‌：主要用于汽车覆盖件外板（如车身板、油箱、油管），替代传统钢板实现轻量化。',
      '工业应用‌：适用于船舶构件、建筑型材、仪表、制冷装置等。'
    ]
  }
  return <>
    <Banner suf={suf}/>
    <MarkCom suf={suf}/>
    <GridCom suf={suf} data={data}/>

  </>
}
import Banner from "@/components/banner"
import MarkCom from "@/components/markCom"
import GridCom from "@/components/GridCom"
export default function Mark2011(){

  const suf = '2011'
  const data = {
    ghzt:'O,T6,T6511,T8',
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
    jsxn:['2011-T3','379','296','15','95'],
    wlxn:['2011-T3','23.1','541-638','39','0.044','2.82'],
    hxcf:[suf,'-','0.4','0.7','5.0-6.0','——','——','——','0.3','——','——','——','0.05','0.15','余量'],
    dxyt:[
      '2011典型用途：制螺钉机产品用的线材、棒材(包括圆棒)；应用于要求良好机加工性能和强度的场合。'
    ]
  }
  return <>
    <Banner suf={suf}/>
    <MarkCom suf={suf}/>
    <GridCom suf={suf} data={data}/>

  </>
}
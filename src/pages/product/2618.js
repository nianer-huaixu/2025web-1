import Banner from "@/components/banner"
import MarkCom from "@/components/markCom"
import GridCom from "@/components/GridCom"
export default function Mark2618(){

  const suf = '2618'
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
    jsxn:['2618-T851','420','375','5','实测'],
    wlxn:['2618-T61','22.3','549-638','37','0.047','2.76'],
    hxcf:[suf,'-','0.1-0.25','0.9-1.3','1.9-2.7','——','1.3-1.8','——','0.10','0.04-0.1','——','0.9-1.2','0.05','0.15','余量'],
    dxyt:[
      '2618是一种高强度铝合金，因含铜量较高，故强度较高，热强性较好。',
      '2618铝合金，美国变形铝及铝合金。2618铝合金耐蚀性、钎焊性、气焊性能较差，机械加工性好。',
      '2618铝合金典型用途：模压和人工锻造,用于高温操作下的活塞和运行的飞机发动机的部件，轮胎铸模等等',
      '2618铝合金适合于制造飞机发动机部件。'
    ]
  }
  return <>
    <Banner suf={suf}/>
    <MarkCom suf={suf}/>
    <GridCom suf={suf} data={data}/>

  </>
}
import Banner from "@/components/banner"
import MarkCom from "@/components/markCom"
import GridCom from "@/components/GridCom"
export default function Mark3A21(){

  const suf = '3A21'
  const data = {
    ghzt:'O,H112,H14,H24,H18',
    scbz:'GB国标,GJB国军标,GBN军标,EN欧标,ASTM美标,AMS航空标准',
    ban:[
      '厚度:0.2-200mm',
      '宽度:≤2500mm',
      '长度:≤10000mm'
    ],
    bang:[
      '直径:5-500mm',
      '长度:≤6000mm'
    ],
    juan:[
      '厚度:0.2-3mm',
      '宽度:≤2000mm',
    ],
    guan:[
      '厚度:1-100mm',
      '外径:1-100mm',
      '长度:≤6000mm'
    ],
    xc:[
      '规格多样 模具齐全','支持定制 任意形状'
    ],
    dj:[
      '来图来样 按需切割','多种材质 交期准时'
    ],
    jsxn:['3A21-H112','120','——','16','——'],
    wlxn:['3A21-H112','23.2','643-654','实测','实测','2.75'],
    hxcf:[suf,'LF21','0.60','0.70','0.20','1.0-1.6','0.05','——','0.10','0.15','——','——','0.05','0.15','余量'],
    dxyt:[
      '3A21防锈铝, 耐蚀性好, 焊接性良好。',
      '3A21铝板为Al-Mn系合金，3A21铝板是应用最广的一种防锈铝,强度不高(仅稍高于工业纯铝),不能热处理强化,故常采用冷加工方法来提高其力学性能;在退火状态下有高的塑性,在半冷作硬化时塑性尚好，冷作硬化时塑性低，耐蚀性好，焊接性良好,可切削性能不良。',
      '3A21用途主要用于要求高的可塑性和良好的焊接性，如航空航天、军工装备、工装夹具、汽车、交通运输、制作推进剂贮箱,焊接结构舱体的蒙皮、端框、支架等焊接件,以及在腐蚀性介质中工作的导管等。'
    ]
  }
  return <>
    <Banner suf={suf}/>
    <MarkCom suf={suf}/>
    <GridCom suf={suf} data={data}/>

  </>
}
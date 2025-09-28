import Banner from "@/components/banner"
import MarkCom from "@/components/markCom"
import GridCom from "@/components/GridCom"
export default function Mark5754(){

  const suf = '5754'
  const data = {
    ghzt:'O,H111,H112,H22,H32',
    scbz:'GB国标,GJB国军标,GBN军标,EN欧标,ASTM美标',
    ban:[
      '厚度:0.5-200mm',
      '宽度:≤2500mm',
      '长度:≤10000mm'
    ],
    bang:[
      '直径:5-500mm',
      '长度:≤6000mm'
    ],
    juan:[
      '厚度:0.5-3mm',
      '宽度:≤2000mm',
    ],
    guan:[
      '厚度:1-100mm',
      '外径:5-2500mm',
      '长度:≤6000mm'
    ],
    xc:[
      '规格多样 模具齐全','支持定制 任意形状'
    ],
    dj:[
      '来图来样 按需切割','多种材质 交期准时'
    ],
    jsxn:[suf+'-O','190-240','80','12','38'],
    wlxn:[suf+'-O','23.7','602-646','34','0.051','2.73'],
    hxcf:[suf,'-','0.40','0.40','0.10','0.50','2.6-3.6','0.30','0.20','0.15','——','——','0.05','0.15','余量'],
    dxyt:[
      '5754具有中等强度、良好的耐蚀性、焊接性及易于加工成形。',
      '5754属于AL-MG防锈铝，具有中等强度、良好的耐蚀性、焊接性及易于加工成形等特点，是Al－Mg系合金中的典型合金。在国外，不同热处理状态的5754是汽车制造业（轿车车门、模具、密封件）、制罐工业所用的主要材料。',
      '5754广泛应用于汽车零部件、焊接结构、贮槽、压力容器、列车、船舶结构与海上设施、运输槽罐以及用于要求有优良加工性能、优良耐蚀性、高疲劳强度、高可焊性和中等静态强度的场合。'
    ]
  }
  return <>
    <Banner suf={suf}/>
    <MarkCom suf={suf}/>
    <GridCom suf={suf} data={data}/>

  </>
}
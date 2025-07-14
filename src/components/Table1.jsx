import styles from '@/styles/cate.module.scss'
export default function Table1({data}){
  return <table className={["main border",styles.table1].join(' ')}>
    <tbody>
    <tr>
      <td>产品规格</td>
      <td>详见下表</td>
      <td>{data.text1}</td>
      <td>{data.text2}</td>
    </tr>
    <tr>
      <td>加工方式</td>
      <td colSpan={3} style={{textAlign:'left',paddingLeft:'100px'}}>{data.text3}</td>
    </tr>
    <tr>
      <td>产品用途</td>
      <td colSpan={3} style={{textAlign:'left',paddingLeft:'100px'}}>{data.text4}</td>
    </tr>
    </tbody>
    
  </table>
}
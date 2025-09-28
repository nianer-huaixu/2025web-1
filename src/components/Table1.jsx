import styles from '@/styles/cate.module.scss'
export default function Table1({data}){
  return <table className={["main border",styles.table1].join(' ')}>
    <tbody>
    <tr>
      <td className='text-center'>产品规格</td>
      <td className='text-center'>详见下表</td>
      <td className='text-center'>{data.text1}</td>
      <td className='text-center'>{data.text2}</td>
    </tr>
    <tr>
      <td className='text-center'>加工方式</td>
      <td className={styles.tdLeft} colSpan={3}>{data.text3}</td>
    </tr>
    <tr>
      <td className='text-center'>产品用途</td>
      <td className={styles.tdLeft} colSpan={3}>广泛应用于自动化机械零切、精密加工、模具制造、家居使用、电子及精密仪器等。</td>
    </tr>
    </tbody>
  </table>
}
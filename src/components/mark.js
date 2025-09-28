import styles from '@/styles/cate.module.scss'
import Link from 'next/link'
export default function Mark(){
  const data = [
    ['7003','7020','7050','7075','7A04','7A09'],
    ['6060','6061','6063','6082','6101','6A02'],
    ['6005A'],
    ['5049','5052','5083','5754','5A02','5A03'],
    ['5A05','5A06'],
    ['3003','3004','3103','3A21'],
    ['2011','2014','2017','2024','2219','2618',],
    ['2A12','2A14','2A50','2A70'],
    ['1050','1060'],
    ['LC4','LC9','LD2','LD5','LD7','LD10'],
    ['LF5','LF6','LY12']
  ]
  return <section className="bg-[#00020F]">
  <h4 className={styles.title}>多种材质 支持定制</h4>
  <div className={["main",styles.textureMain].join(' ')}>
    {data.map((list,l)=>{
      return <ul key={l} className="grid grid-cols-6">
        {list.map((item,i)=>{
          return <li key={i}><Link href={'/product/'+ item}><span>{item}</span></Link></li>
        })}
      </ul>
    })}
    <p>* 仅展示部分型号以供参考，具体事宜请与销售人员确认</p>
  </div>
</section>
}
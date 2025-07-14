import useStore from "@/hook/useStore"
import styles from'@/styles/cate.module.scss'
export default function Cate1({data}){
  console.log(data);
  
  const store = useStore()
  return <div style={{background:`url('${store.common.url}product/com1-bg.webp')no-repeat`}}>
    <div className="main pb-[100]">
      <h4 className={styles.title}>精工之作 品质保障</h4>
      <div className="grid grid-cols-4 gap-[20]">
        {data.map((item,i)=>{
          return <div className={['h-[296]',styles.cate1Item].join(' ')} key={i} style={{background:`url('${store.common.url+item.img}')no-repeat`}}>
            <p>{item.text}</p>
            {item.text1.map((li,l)=>{
              return <span key={l}>{li}</span>
            })}
          </div>
        })}
      </div>
    </div>
  </div>
}
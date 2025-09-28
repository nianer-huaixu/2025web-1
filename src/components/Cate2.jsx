import useStore from "@/hook/useStore"
import styles from "@/styles/cate.module.scss"
export default function Cate2(props){
  const {content} = props
  const store = useStore()
  const data = [
    {
      img:store.common.url+'product/icon-1.png',
      text1:'阳极氧化',
      list:['增强质感，可定制颜色，提高金属耐腐蚀性硬度和耐磨性。']
    },
    {
      img:store.common.url+'product/icon-2.png',
      text1:'喷砂',
      list:[
        '1. 表面哑光效果，解决金属反光的问题。',
        '2. 清理和粗化基体表面。',
        '3. 增加涂层结合力。'
      ]
    },
    content==null?{
      img:store.common.url+'product/icon-3.png',
      text1:'电泳涂装',
      list:[
        '1. 形成复合防护层，增强装饰性和耐蚀性。',
        '2. 表面光滑细腻，兼具耐蚀性与美观性。',
      ]
    }
    :content,
    {
      img:store.common.url+'product/icon-4.png',
      text1:'喷涂',
      list:[
        '· 高效节能   · 污染少  · 涂膜性能好',
        '· 色彩多样',
      ]
    },
    {
      img:store.common.url+'product/icon-5.png',
      text1:'高光切削',
      list:['高光切削要求加工精度高，切削参数需严格控制，以确保切削后的表面平整光滑，无毛刺和划痕。']
    },
    {
      img:store.common.url+'product/icon-6.png',
      text1:'钝化处理',
      list:['常见的钝化处理方法包括铬酸盐钝化、硝酸盐钝化、磷酸盐钝化等。']
    }
  ]
  return <section className={styles.cate2}>
    <div className={styles.cate2Top}>
      <p className="text-center mt-[40px] text-[24px]">MULTIPLE SURFACE TREATMENTS</p>
      <p className="text-center text-[#CD241D] mb-[30px]"><b className="text-[48px]">多种表面处理</b></p>
      <p className="text-center text-[30px] mb-[30px]">阳极氧化、喷涂、喷砂、电泳等工艺，满足定制需求</p>
    </div>
    <div className={["main grid grid-cols-2 gap-y-[60px] pb-[80px]",styles.cate2Bottom].join(' ')}>
      {data.map((item,i)=>{
        return <div key={i} className={["flex",styles.cate2BottomBox].join(' ')}>
          <div className={["bg-[#fff] rounded-[8px] relative mr-[20px]",styles.iconWrap1].join(' ')}>
            <img src={item?.img} className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"/>
          </div>
          <div className={styles.textWrap}>
            <span className="text-[36px] font-[700]">{item?.text1}</span>
            {item?.list.map((li,l)=>{
              return <p key={l} className="w-[440px] text-[20px]">{li}</p>
            })}
          </div>
        </div>
      })}
    </div>
  </section>
}
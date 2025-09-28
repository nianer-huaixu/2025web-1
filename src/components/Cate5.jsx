
import useStore from "@/hook/useStore"
import styles from '@/styles/cate.module.scss'

export default function({sup}){
  const store = useStore()
  const data = [
    {
      text1:'严选材料',
      text2:'对使用材料都制定了严格的标准采购的关键原料来自于知名公司原材料材质可靠，'
    },
    {
      text1:'外观切割平整',
      text2:'模切工艺高，产品无毛边，无划伤，折痕和表面缺陷，满足客户产品工艺需求'
    },
    {
      text1:'尺寸切割定制',
      text2:'多种类型原材料，多种规格可选，可根据客户要求定制，各种形状，厚度、尺寸均可定制，免费打样，出货快速。'
    },
    {
      text1:'优质加工性能',
      text2:'低档位打软质基面不易击碎，高档位穿透力强适用于高硬度基面，抗腐蚀性好，加工性好，可朔性高、导热性好，抗压力强。'
    }
  ]
  return <section className="bg-[#0C131A] pb-[80px]">
    <h4 className={styles.title2}><span>自有仓库·</span>实力解决您的需求</h4>
    <div className="main grid grid-cols-4">
      {[1,2,3,4,5,6,7,8].map(((item)=>{
        return <div key={item} className={styles.imgWrap}><img src={store.common.url + 'product/' +sup +'/' + item + '.webp'}/></div>
      }))}
    </div>
    <div className="main bg-[#CD241D] rounded-b-[80px] grid grid-cols-4">
      {data.map((item,i)=>{
        return <div key={i} className={["p-[20px]",styles.cate5].join(' ')}
          style={{
            backgroundImage:`url('${store.common.url}product/0${i+1}.png')`,
            borderRight:i!=3?'1px solid #222' : ''
          }}
        >
          <p className="pt-[10px]"><b className="text-[36px]">{item.text1}</b></p>
          <p className="mt-[30px] text-[24px] text-justify pb-[20px]">{item.text2}</p>
        </div>
      })}
    </div>
  </section>
}
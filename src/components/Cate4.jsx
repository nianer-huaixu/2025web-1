import styles from '@/styles/cate.module.scss'
import useStore from "@/hook/useStore"


export default function({cate4Text,sup}){
  const store = useStore()
  const data = [
    {
      text1:'万能',
      text2:'拉力试验机'
    },
    {
      text1:'物理性能',
      text2:'整套检测设备'
    },
    {
      text1:'德国进口',
      text2:'光谱分析仪'
    },
    {
      text1:'德国进口',
      text2:'金相分析仪'
    },
    {
      text1:'布氏洛氏维氏',
      text2:'硬度检测仪'
    },
  ]
  return <section className={styles.cate4} style={{background:'linear-gradient(170deg, #353840 0%, #000000 100%)'}}>
    <div className="main">
      <div className={styles.cate4Top}>
        <h4 className={styles.title2}><span>实力雄厚大型工厂</span>·选择我们的优势</h4>
        <p className='text-center text-[24px] mt-[-20px]'>专注行业生产销售已有十余年，款式多样齐全，货源稳定，用心做好每一件产品</p>
      </div>
      <div className={['flex justify-between mt-[40px] mb-[25px]',styles.cate4Center].join(' ')}>
        <div className={['w-[60%] mr-[15px]',styles.cate4textBox].join(' ')}>
          <p className='text-[24px] text-justify mb-[40px]'>公司现有各种大型的数控锯床、日立光谱分析仪、国际标准硬度计、显微镜、等质检设备、把好质量关的大门。为客户更加舒心，放心使用。</p>
          <span className={styles.textSpan}>加工服务</span>
          <p className='text-[24px] text-justify mt-[40px]'>{cate4Text}</p>
        </div>
        <div className={styles.imgWrap}><img src={store.common.url + 'product/' + sup + '/right.webp'}/></div>
      </div>
      <div className={['grid grid-cols-5 gap-[25px]',styles.cate4gridGap].join(' ')}>
        {[1,2,3,4,5,6,7,8,9,10].map((item,i)=>{
          return <div className={styles.imgWrap} key={i}>
            <img src={store.common.url +'product/'+ sup + '/p-' +item +'.webp'}/>
          </div>
        })}
      </div>
      <p className={styles.qualityTitle}><b>品质管理</b>原厂质保·专业技术服务</p>
      <div className={['flex justify-between pb-[40px] gap-[25px]',styles.cate4gridGap].join(' ')}>
        {data.map((item,i)=>{
          return <div key={i} className={['relative',styles.qualityBox].join(' ')}>
            <img src={store.common.url +'product/q-' + (i+1) +'.webp'}/>
            <div className={['absolute w-full h-full left-[0] top-[0]',styles.coverBox].join(' ')}>
              <div>
              <p className='text-[36px]'>{item.text1}</p>
              <span>{item.text2}</span>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  </section>
}
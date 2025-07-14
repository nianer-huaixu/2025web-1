import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useStore from "@/hook/useStore"
import styles from '@/styles/cate.module.scss'

export default function({title,sup}){
  const store = useStore()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    customPaging: i => (
      <div
        style={{
          marginTop:'14px',
          width: "14px",
          height:"14px",
          borderRadius: "50%",
          background:"#fff",
        }}
      >
      </div>
    )
  };
  const data = [
    {
      img:store.common.url +'',
      text1:'甄选材料',
      text2:'PRECISION HIGH'
    },
    {
      img:store.common.url +'',
      text1:'精益求精',
      text2:'END UPGRADE'
    },
    {
      img:store.common.url +'',
      text1:'用心服务',
      text2:'PRECISIN HIGH'
    },
    {
      img:store.common.url +'',
      text1:'质量保证',
      text2:'SALECTED HIGH'
    },
    {
      img:store.common.url +'',
      text1:'性能稳定',
      text2:'PRECISIOW HIGH'
    },
    {
      img:store.common.url +'',
      text1:'售后保障',
      text2:'FNO UPGRADE'
    }
  ]
  return <section style={{background:`url('${store.common.url}product/case-bg.webp')no-repeat`}}>
    <h4 className={styles.title2}>{title}案例&nbsp;&nbsp;&nbsp;&nbsp;<span>来图来样定制</span></h4>
    <div className="slider-container main pb-[48px]">
      <Slider {...settings}>
        {[1,2,3].map((item,i)=>{
          return <div key={i}>
            <div className="flex mb-[27px]">
              <div className="mr-[20px]">
                <img  className="mb-[27px]" src={store.common.url + 'product/' + sup +'/case/'+ item +'-1.webp'}/>
                <img src={store.common.url + 'product/' + sup +'/case/'+ item +'-2.webp'}/>
              </div>
              <img src={store.common.url + 'product/' + sup +'/case/'+ item +'-3.webp'}/>
            </div>
            <div className="grid grid-cols-4 gap-[20px]">
              <img src={store.common.url + 'product/' + sup +'/case/'+ item +'-4.webp'}/>
              <img src={store.common.url + 'product/' + sup +'/case/'+ item +'-5.webp'}/>
              <img src={store.common.url + 'product/' + sup +'/case/'+ item +'-6.webp'}/>
              <img src={store.common.url + 'product/' + sup +'/case/'+ item +'-7.webp'}/>
            </div>
          </div>
        })}
      </Slider>
    </div>
    <div className="w-[100%] bg-[#CD241D]">
      <div className="main flex justify-between py-[40px]">
        {data.map((item,i)=>{
          return <div key={i} className="text-center">
            <img/>
            <p className="text-[25px] tracking-[4]">{item.text1}</p>
            <p className="text-[14px]">{item.text2}</p>
          </div>
        })}
      </div>
    </div>
  </section>
}
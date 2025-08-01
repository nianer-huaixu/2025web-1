import { useState } from "react"
import useStore from "@/hook/useStore"
import styles from "@/styles/mark.module.scss"
export default function MarkCom({suf}){
  const store = useStore()
  const data = [
    {
      anchor:'lvban',
      cate:'板',
      text1:'优选材质',
      text2:'我们提供大量耐腐蚀合金板材。我们根据您的要求提供完整的模板尺寸以及定制板形状。凭借我们的板材加工能力，包括水射流切割，高清等离子切割和斜切和剪切，您可以根据您的图纸要求标准形状，包括正方形，短形，圆形，环形和条形或完全定制的形状。',
      list:[suf+'铝板','亮面铝板','贴膜铝板','超宽铝板','特厚铝板','超平铝板','精铸铝板','锻造铝板','花纹铝板'],
      img:'b',
    },
    {
      anchor:'lvbang',
      cate:'棒',
      text1:'精工制造',
      text2:'我们提供多种耐腐蚀合金棒材。您可以购买标准长度的棒材或者我们有专业的加工设备提供定制服务。如果您需要进一步加工，我们提供加工服务，包括:车削，磨削，抛光，铣削，钻孔，攻丝，纹加工和镗孔。',
      list:[suf+'铝棒','工业铝棒','挤压铝棒','精拉铝棒','国标铝棒','超硬铝棒','防锈铝棒','大直径铝棒','锻造铝棒','铸铝棒'],
      img:'bang',
    },
    {
      anchor:'lvguan',
      cate:'管',
      text1:'任意零切',
      text2:'我们根据您的需求提供全长和切割长度的耐腐蚀合金无缝和接管。我们根据您的要求提供定制的非标准管道，包括大小OD和重壁或薄壁进一步的加工选择包括钻孔，镗孔，铣削和螺纹加工。',
      list:[suf+'铝管','合金铝管','挤压铝管','无缝铝管','冷拔铝管','厚壁铝管','薄壁铝管','异型铝管','大口径铝管'],
      img:'guan',
    },
    {
      anchor:'lvjuan',
      cate:'卷',
      text1:'按需定制',
      text2:'有关耐腐蚀合金线圈的咨询，请联系我们。我们根据您的要求提供板卷。',
      list:[suf+'铝卷','铝卷开平','铝卷分切','纯铝卷','合金铝卷','纯铝带','合金铝带','防锈铝卷','保温铝卷','花纹铝卷','超宽铝卷'],
      img:'juan',
    },
    {
      anchor:'lvxingcai',
      cate:'型材',
      text1:'规格齐全',
      text2:'我们可以设计出图让你更好的了解产品，可以根据你需求进行测试，从型材到配件站式解决方案，我们提供专业的售前售后咨询，所有铝型材加工，除切割外，比如：钻孔、铣孔、铣槽、攻丝、有角度的切割都是有偿加工，具体费用双方议定。',
      list:[suf+'铝型材','铝排','方棒','扁棒','六角棒','角铝','槽铝','工业铝型材','异型材','支持来图来样开模定制铝型材'],
      img:'x',
    },
    {
      anchor:'lvduanjian',
      cate:'锻件',
      text1:'精密铸造',
      text2:'我们严格选取达标的原材料，确保产品的质量，我们不生产劣质品！加工精度可达±0.01MM，加工的产品应用到仪器仪表机械设备，航空医疗，家具，汽车等等多项领域，与国内外众多知名企业保持战略合作关系。',
      list:[suf+'铝锻件','锻铝板','锻铝棒','锻铝饼','锻铝环','铝法兰','异型锻件','自由锻件','模锻件','大型铝锻件'],
      img:'d',
    }
  ]
  const data1 =['光谱检测','重量过磅','包装加工','随货质保','物流运输','客户验收']
  const data2 = [
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
  const data3 = [
    {
      text:'航空航天行业',
      text1:'适用于油罐车和其他化工运输车罐体所需的5083、5052等铝合金板材产品，具有大规格、高质量表面、高成形性的特点，具有良好的抗腐蚀性能和焊接性能，以及可回收性。'
    },{
      text:'轨道交通行业',
      text1:'适用于油罐车和其他化工运输车罐体所需的5083、5052等铝合金板材产品，具有大规格、高质量表面、高成形性的特点，具有良好的抗腐蚀性能和焊接性能，以及可回收性。'
    },{
      text:'船舶制造行业',
      text1:'适用于油罐车和其他化工运输车罐体所需的5083、5052等铝合金板材产品，具有大规格、高质量表面、高成形性的特点，具有良好的抗腐蚀性能和焊接性能，以及可回收性。'
    },{
      text:'汽车智造行业',
      text1:'适用于油罐车和其他化工运输车罐体所需的5083、5052等铝合金板材产品，具有大规格、高质量表面、高成形性的特点，具有良好的抗腐蚀性能和焊接性能，以及可回收性。'
    },{
      text:'化学能源行业',
      text1:'适用于油罐车和其他化工运输车罐体所需的5083、5052等铝合金板材产品，具有大规格、高质量表面、高成形性的特点，具有良好的抗腐蚀性能和焊接性能，以及可回收性。'
    },{
      text:'医疗设备行业',
      text1:'适用于油罐车和其他化工运输车罐体所需的5083、5052等铝合金板材产品，具有大规格、高质量表面、高成形性的特点，具有良好的抗腐蚀性能和焊接性能，以及可回收性。'
    },{
      text:'消费电子行业',
      text1:'适用于油罐车和其他化工运输车罐体所需的5083、5052等铝合金板材产品，具有大规格、高质量表面、高成形性的特点，具有良好的抗腐蚀性能和焊接性能，以及可回收性。'
    },{
      text:'工业模具行业',
      text1:'适用于油罐车和其他化工运输车罐体所需的5083、5052等铝合金板材产品，具有大规格、高质量表面、高成形性的特点，具有良好的抗腐蚀性能和焊接性能，以及可回收性。'
    }
  ]
  const data4 =[
    {
      text1:'根据客户需求',
      text2:'研发创新新品',
      text3:'研发',
      text4:'团队',
      text5:'丰富的生产经验'
    },{
      text1:'产品通过多项安规认',
      text2:'证品质放心质量稳点',
      text3:'品质',
      text4:'放心',
      text5:'厂家生产'
    },{
      text1:'做工精细，满足不同客户',
      text2:'对产品的外形及功能需求',
      text3:'产品',
      text4:'优势',
      text5:'欢迎咨询'
    },{
      text1:'大规模系统化生产，工厂',
      text2:'能够提供充足稳定的货源',
      text3:'货源',
      text4:'稳定',
      text5:'生产能力强 '
    }
  ]
  const [index,setIndex] = useState(0)
  function selectLI(i){
    setIndex(i)
  }
  return <>
    <section className="pb-[60px]" style={{background:`url('${store.common.url}product/牌号/bg-1.webp')no-repeat`}}>
      <div className="main">
        <h4 className={styles.graTitle}>万吨库存 规格齐全<span>我们提供半成品和加工零件，包括板材、管材、棒材、卷材、铝型材和锻件的期货及现货。</span></h4>
        <div className="grid grid-cols-3 gap-[60px]">
          {[1,2,3,4,5,6].map((i)=>{
            return <img key={i} src={store.common.url + 'product/牌号/p-'+ i + '.webp'}/>
          })}
        </div>
      </div>
    </section>
    {data.map((item,i)=>{
      return <section>
        <div className='upwards' id={item.anchor}></div>
        <div style={{background: 'linear-gradient(0deg, #000000 38%, #575B64 100%)',height:'1000px',overflow:'hidden'}}>
          <div className="main flex justify-between pt-[40px]"
            style={{
              flexDirection:i%2!=0?'row-reverse' : '',
              textAlign:i%2!=0?'right' : '',
            }}
          >
            <div>
              <h4 className={styles.cateTitle}><span>{item.cate}</span>{item.text1}</h4>
              <p className="text-[24px] w-[1030px] mt-[20px] leading-[40px]">{item.text2}</p>
              <p className="mt-[20px]">{item.list.map((li,l)=>{
                return <span key={l} className="bg-[#E30212] text-[18px] p-[4px]"
                  style={{
                    marginLeft:i%2!=0?'10px' : '',
                    marginRight:i%2==0?'10px' : '',
                  }}
                >{li}</span>
              })}</p>
              <img className="mt-[40px] mx-auto"
                style={{
                  marginLeft:item.img=='x'?'80px' :'',
                  padding:item.img=='juan'? '80px 0 0 280px ':''
                }}
                src={store.common.url + 'product/牌号/' + item.img + '.webp'}/>
            </div>
            <div className="pt-[100px]">
              {[1,2,3].map((i)=>{
                return <img className="mb-[40px]" key={i} src={store.common.url + 'product/牌号/' + item.img + '-' + i + '.webp'}/>
              })}
            </div>
          </div>
        </div>
      </section>
    })}
    <section style={{background:`url('${store.common.url}product/牌号/bg-2.webp')no-repeat`}}>
      <div className="main" style={{background:`url('${store.common.url}product/牌号/pai.webp')no-repeat top right`}}>
        <h4 className={styles.title2}><span>出库流程</span>定制产品·一站式采购</h4>
        <div className="grid grid-cols-3 gap-[20px] w-fit">
          {data1.map((item,i)=>{
            return <div key={i} className="border flex rounded-[8px] items-center h-[130px] w-[300px] px-[30px] justify-between">
              <img src={store.common.url + 'product/牌号/icon-' + (i+1) + '.webp'}/>
              <span className="text-[30px]">{item}</span>
            </div>
          })}
        </div>
        <h4 className={styles.title2}><span>品质管理</span>原厂质保·专业技术服务</h4>
        <div className='flex justify-between'>
          {data2.map((item,i)=>{
            return <div key={i} className={['relative',styles.qualityBox].join(' ')}>
              <img src={store.common.url +'product/牌号/q-' + (i+1) +'.webp'}/>
              <div className='absolute w-full h-full left-[0] top-[0] bg-[rgba(0,0,0,0.5)]'>
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
    <section style={{background:`url('${store.common.url}product/牌号/a-bg.webp')no-repeat`}}>
      <div className="main pb-[60px]">
        <h4 className={styles.title2}><span>应用领域·工程案例</span>产品广泛应用于汽车、机械制造、船舶、模具等工厂</h4>
        <div className="main flex justify-between">
          <div className="relative">
            <img src={store.common.url +'product/牌号/a-'+ (index+1) +'.webp'}/>
            <div className="bg-[rgba(205,36,29,0.8)] absolute bottom-[0px] w-full py-[20px] px-[40px]">
              <p className="text-[24px]">{data3[index].text1}</p>
            </div>
          </div>
          <ul className={styles.appUl}>
            {data3.map((item,i)=>{
              return <li onClick={()=>selectLI(i)} key={i} className={i==index?styles.activeLi:''}>{item.text}</li>
            })}
          </ul>
        </div>
      </div>
      <div className="w-full bg-[#CD241D] flex justify-center py-[40px]">
        {data4.map((item,i)=>{
          return <div key={i} className="text-center px-[40px] border-l" style={{borderLeft:i==0?'none':''}}>
            <p className="text-[16px]">{item.text1}</p>
            <p className="text-[16px]">{item.text2}</p>
            <p className="my-[20px] tracking-[2]">
              <b content={item.text3} className={["text-[32px]",styles.reflecB].join(' ')}>{item.text3}</b>
              <span content={item.text4} className={["text-[20px]",styles.reflecB].join(' ')}>{item.text4}</span></p>
            <p className="border px-[20px]">{item.text5}</p>
          </div>
        })}
      </div>
    </section>
  </>
}
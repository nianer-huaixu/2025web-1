import useStore from '@/hook/useStore'
import styles from '@/styles/detail.module.scss'
export  default function ProductCom(){
  const store = useStore()
  const data1 = [
    {text:'我们采用先进的预拉伸工艺，消除内应力，加工过程不变形'},
    {text:'表面抛光拉丝处理，亮面有光泽，可无需铣面直接使用'},
    {text:'材料均质化处理，阳极氧化后漂亮无色差'},
    {text:'回火工艺精湛，延展性好，使用中高粘性PE膜无气泡，冲压不易脱落'},
    {text:'采用先进淬火及时效处理，保证铝材性能的强度硬度，加工效率高，精度高，光洁度好'},
    {text:'我们的原料全部采用先进超声波探伤检测，保证了产品无气孔无裂纹等缺陷'},
    {text:'我们铝材表面会形成一层抗氧化膜，可以长年抗腐蚀和抗氧化'},
    {text:'我们铝材出厂前都要通过专业人员三道质检，有合作十年以上的物流，运输快捷，保证货物的品质和安全'},
    {text:'我们随货附带原厂质保书，又有专业进口光谱仪、硬度计等设备，可免费提供来样分析和检测'},
    {text:'来图来样我们可以免费图纸设计及拿样'}
  ]
  const data2 = [
    {text:'加工过程中生产变形'},
    {text:'表面灰暗无光泽'},
    {text:'阳极氧化后有黑线、花斑、明显色差等 '},
    {text:'冲压加工铝板开裂和脱膜现象'},
    {text:'机加工粘刀，车铣加工精度差'},
    {text:'加工后有砂眼、气孔、裂纹缺陷'},
    {text:'易氧化腐蚀，产生白斑等，长期使用有风险'},
    {text:'表面有划痕划伤等，运输造成二次伤害等'},
    {text:'无质保，无售后，无法溯源'},
    {text:'没有图纸无法接单'}
  ]
  const data3 = [
    {img:store.common.url +'product/img1.webp',text1:'航空航天用铝',text2:'扬东铝业集团具有航空领域用高端铝铁材料的提供能力,品种繁多,其中一些军工标准产品等新型发动机涡轮盘、压气盘、强击机等核心部件制作。'},
    {img:store.common.url +'product/img2.webp',text1:'轨道交通用铝',text2:'扬东铝业集团铝制列车重量轻、耐腐蚀、运行性能好。铝板在轨道车上主要用作车体外板、车顶板、地板、车内装饰板等部位。'},
    {img:store.common.url +'product/img3.webp',text1:'汽车制造用铝',text2:'在当今燃料及环境问题日益严峻的时期，铝合金扮演着一个助推汽车轻量化及提升燃油能效的重要角色，从而帮助缓解能源及环境问题。'},
    {img:store.common.url +'product/img4.webp',text1:'精密加工用铝',text2:'采用钢-铝复合模，铝合金模的成本约比钢模低15%以上。铝模制造时间比钢模的短得多，因此占用资金的时间少，优势明显。'},
    {img:store.common.url +'product/img5.webp',text1:'船舶机械用铝',text2:'扬东铝业集团供应的海洋系泊链铝用于船舶和石油工业，强度高，韧性好，具备耐海水腐蚀、抗疲劳、耐磨损等特性。'}
  ]
  const data4 = [
    {
      text1:'厂家直销',
      text2:'保证产品质量，专注品质',
      text3:'Focus on quality, ensure product quality',
      text4:'20年行业经验，打造高标准生产服务商',
      text5:'⊙  技术积累15年，拥有稳定的 CNC 精密五金加工技术团队和5000㎡现代化生产基地，精度可达±0.005mm。',
      text6:'⊙  从下单到出库发货，都经过三道质检，我们拥有大量库存，可以提供客户足够货源， 让客户不在担心断货、缺货的危机。',
    },
    {
      text1:'设备齐全',
      text2:'行业经验丰富，先进设备',
      text3:'Industry experience, advanced equipment',
      text4:'行业覆盖面广泛+服务一站搞定',
      text5:'⊙  提供铝板广泛应用于机械加工、模具加工、电子原件、汽车配件、高铁工程;幕墙装潢、保温制冷、工艺装饰、灯具照明、船舶、航天等众多领域;',
      text6:'⊙  目前主要销售在华东、华北、华南、西南、西北，并且出口到东南亚、欧洲、非洲、美洲等地区; ',
    },
    {
      text1:'物流配送',
      text2:'支持个性定制 ，物流配送',
      text3:'Personality customization logistics distribution',
      text4:'多元化定制加工省时省力',
      text5:'⊙  公司支持个性定制，我们承诺客户下单后，现货产品承诺当天发货。谒诚为广大中外客户提供产品，为顾客提供满意的产品。',
      text6:'⊙  扬东铝业与多家物流企业合作，支持全国范围内配送，同时对对物流信息实现在线跟踪，保证及时交付。',
    },
    {
      text1:'贴心服务',
      text2:'售前售后积极响应客户需求',
      text3:'Respond to customer needs before and after sales',
      text4:'完善售后保证·贴心服务',
      text5:'⊙  按需定制，老客户采购后留样，缩短后期选型采购时间；安排专人定点跟单，48小时内发货，尊享65天不变质；24小时在线响应，3天内解决技术难题；',
      text6:'⊙  包装运输过程中采用珍珠棉、牛皮纸、气泡膜、木板等三层包装，运输过程中无损坏。',
    }
  ]
  return (
    <>
    <div className='upwards' id='advantage'></div>
    <section className={styles.advantage}>
      <div className={[styles.advantageC,'main'].join(' ')}>
        <h4>产品优势<span>品质与服务 赢得更多信赖</span><i>苛求品质/严格把关质量</i></h4>
        <div className={styles.advantageCM}>
          <div className={styles.advantageCML}>
            <h5>扬东“铝材”</h5>
            {data1.map((item,i)=>{
              return <p key={i} style={{marginLeft:`${i*15+30}px`}}>
                <span>✓</span>
                {item.text}
              </p>
            })}
          </div>
          <div className={styles.advantageCMR}>
            <h5>普通“铝材”</h5>
            {data2.map((item,i)=>{
              return <p key={i} style={{marginLeft:`${i*22}px`}}>
                <span>×</span>
                {item.text}
              </p>
            })}
          </div>
        </div>
      </div>
    </section>
    <div className='upwards' id='apply'></div>
    <section className={styles.apply}>
      <h4 className={styles.titleCom}><span>应用领域覆盖广泛·</span>支持按需定制</h4>
      <p>全方位一体化铝材解决方案</p>
      <div className={[styles.applyC,'main'].join(' ')}>
        {data3.map((item,i)=>{
          return <div key={i} className={styles.itemBox}>
            <img src={item.img} />
            <div className={styles.itemBox1}>{item.text1}</div>
            <div className={styles.itemBox2}>
              <span>{item.text1}</span>
              <p>{item.text2}</p>
            </div>
          </div>
        })}
      </div>
    </section>
    <div className='upwards' id='strength'></div>
    <section className={styles.strength}>
      <h4 className={styles.titleCom}><span>实力成就品牌·</span>扬东铝业</h4>
      <p>华东地区集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业</p>
      <div className={[styles.strengthC,'main'].join(' ')}>
        {data4.map((item,i)=>{
          return <div key={i} className={styles.strengthCItem}>
            <img src={store.common.url + 'product/ad-img'+ (i+1) +'.webp'}/>
            <div className={styles.strengthCItemBox} style={{backgroundImage:`url(${store.common.url}product/ad-bg${i+1}.webp)`}}>
              <div className={styles.strengthCItemBoxT}>
                <span>{item.text1}</span>
                <div>
                  <p>{item.text2}</p>
                  <p>{item.text3}</p>
                </div>
              </div>
              <div className={styles.strengthCItemBoxB}>
                <span>{item.text4}</span>
                <p>{item.text5}</p>
                <p>{item.text6}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </section>
    </>
  )
}
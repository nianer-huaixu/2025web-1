import { useEffect } from "react"
import { useRouter } from 'next/router'
import Header from "@/components/header"
import Footer from "@/components/footer"
import "@/styles/globals.scss"
export default function App({ Component, pageProps }) {
  const router = useRouter()
  // 路由发生改变将触发修改
  let curPath = router.asPath
  // 挂载之后事件监听
  useEffect(() => {
    if(typeof document !== 'undefined'){
      // AIFF()
      BaiduStatistics()
      EC(window, document)
    }
    // 禁用右键菜单-防止保存触发
    const handleContextMenu = (e) => {
      e.preventDefault();
    }
    // 添加事件监听
    document.addEventListener('contextmenu', handleContextMenu)
    // 组件卸载时移除监听
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  },[curPath])
  // al
  // EC
  function EC(W, D){
    W.ec_corpid = '11627559';
    W.ec_cskey = 'kkd1a23CLKZMWrHPzz'; 
    W.ec_scheme = '3';
    var s = D.createElement('script');
    s.charset = 'utf-8';
    s.src = '//1.staticec.com/kf/sdk/js/ec_cs.js';
    s.setAttribute('defer', 'defer');
    D.getElementsByTagName('head')[0].appendChild(s);
  }
	// 百度统计
  var _hmt = _hmt || [];
  function BaiduStatistics(){
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?bc8ee0d38b789a33a2b7f4f92603603e";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  }
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </>
}

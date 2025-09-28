'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 图标组件
const ChevronDown = ({ isOpen }) => (
  <span 
    className="chevron-icon"
    style={{ 
      transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
      transition: 'transform 0.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px'
    }}
  >
    ▼
  </span>
);

const MenuIcon = () => <span>≡</span>;
const CloseIcon = () => <span>×</span>;

export default function Sidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [expandedMenuItems, setExpandedMenuItems] = useState(new Set());
  const pathname = usePathname();

  // 三层嵌套菜单数据
  const menuData = [
    {
      id:0,
      label:'首页',
      href:'/',
    },{
      id:1,
      label:'产品中心',
      href:'/product',
      children:[
        {
          id:10,
          label:'7系铝合金',
          children:[
            {
              id:100,
              lebel:'7003铝合金',
              href:'/product/7003'
            },{
              id:101,
              lebel:'7020铝合金',
              href:'/product/7020'
            },{
              id:102,
              lebel:'7050铝合金',
              href:'/product/7050'
            },{
              id:103,
              lebel:'7075铝合金',
              href:'/product/7075'
            },{
              id:104,
              lebel:'7A04铝合金',
              href:'/product/7A04'
            },{
              id:105,
              lebel:'7A09铝合金',
              href:'/product/7A09'
            },{
              id:106,
              lebel:'LC4铝合金',
              href:'/product/LC4'
            },{
              id:107,
              lebel:'LC9铝合金',
              href:'/product/LC9'
            }
          ]
        },
        {
          id:11,
          label:'6系铝合金',
          children:[
            {
              id:110,
              lebel:'6060铝合金',
              href:'/product/6060'
            },{
              id:111,
              lebel:'6061铝合金',
              href:'/product/6061'
            },{
              id:112,
              lebel:'6063铝合金',
              href:'/product/6063'
            },{
              id:113,
              lebel:'6082铝合金',
              href:'/product/6082'
            },{
              id:114,
              lebel:'6101铝合金',
              href:'/product/6101'
            },{
              id:115,
              lebel:'6A02铝合金',
              href:'/product/6A02'
            },{
              id:116,
              lebel:'6005A铝合金',
              href:'/product/6005A'
            },{
              id:117,
              lebel:'LD2铝合金',
              href:'/product/LD2'
            }
          ]
        },
        {
          id:12,
          label:'5系铝合金',
          children:[
            {
              id:120,
              lebel:'5049铝合金',
              href:'/product/5049'
            },{
              id:121,
              lebel:'5052铝合金',
              href:'/product/5052'
            },{
              id:122,
              lebel:'5083铝合金',
              href:'/product/5083'
            },{
              id:123,
              lebel:'5754铝合金',
              href:'/product/5754'
            },{
              id:124,
              lebel:'5A02铝合金',
              href:'/product/5A02'
            },{
              id:125,
              lebel:'5A03铝合金',
              href:'/product/5A03'
            },{
              id:126,
              lebel:'5A05铝合金',
              href:'/product/5A05'
            },{
              id:127,
              lebel:'5A06铝合金',
              href:'/product/5A06'
            },{
              id:128,
              lebel:'LF5铝合金',
              href:'/product/LF5'
            },{
              id:129,
              lebel:'LF6铝合金',
              href:'/product/LF6'
            }
          ]
        },
        {
          id:13,
          label:'3系铝合金',
          children:[
            {
              id:130,
              lebel:'3003铝合金',
              href:'/product/3003'
            },{
              id:131,
              lebel:'3004铝合金',
              href:'/product/3004'
            },{
              id:132,
              lebel:'3103铝合金',
              href:'/product/3103'
            },{
              id:133,
              lebel:'3A21铝合金',
              href:'/product/3A21'
            }
          ]
        },
        {
          id:14,
          label:'2系铝合金',
          children:[
            {
              id:140,
              lebel:'2011铝合金',
              href:'/product/2011'
            },{
              id:141,
              lebel:'2014铝合金',
              href:'/product/2014'
            },{
              id:142,
              lebel:'2017铝合金',
              href:'/product/2017'
            },{
              id:143,
              lebel:'2024铝合金',
              href:'/product/2024'
            },{
              id:144,
              lebel:'2219铝合金',
              href:'/product/2219'
            },{
              id:145,
              lebel:'2618铝合金',
              href:'/product/2618'
            },{
              id:146,
              lebel:'2A12铝合金',
              href:'/product/2A12'
            },{
              id:147,
              lebel:'2A14铝合金',
              href:'/product/2A14'
            },{
              id:148,
              lebel:'2A50铝合金',
              href:'/product/2A50'
            },{
              id:149,
              lebel:'2A70铝合金',
              href:'/product/2A70'
            },{
              id:1410,
              lebel:'LD5铝合金',
              href:'/product/LD5'
            },{
              id:1411,
              lebel:'LD7铝合金',
              href:'/product/LD7'
            },{
              id:1412,
              lebel:'LD10铝合金',
              href:'/product/LD10'
            },{
              id:1413,
              lebel:'LY12铝合金',
              href:'/product/LY12'
            }
          ]
        },
        {
          id:15,
          label:'1系铝合金',
          children:[
            {
              id:150,
              lebel:'1050铝合金',
              href:'/product/1050'
            },{
              id:151,
              lebel:'1060铝合金',
              href:'/product/1060'
            },{
              id:152,
              lebel:'1070铝合金',
              href:'/product/1070'
            },{
              id:153,
              lebel:'1100铝合金',
              href:'/product/1100'
            }
          ]
        },
      ]
    },{
      id:2,
      label:'加工中心',
      href:'/process',
      children:[
        {
          id:20,
          label:'加工服务',
          href:'/process#process1'
        },{
          id:21,
          label:'加工优势',
          href:'/process#process2'
        },{
          id:22,
          label:'加工案例',
          href:'/process#process3'
        },{
          id:23,
          label:'加工实力',
          href:'/process#process4'
        }
      ]
    },{
      id:3,
      label:'应用领域',
      href:'/applicationfields',
      children:[
        {
          id:30,
          label:'航空航天',
          href:'/applicationfields#application01'
        },{
          id:31,
          label:'轨道交通',
          href:'/applicationfields#application02'
        },{
          id:32,
          label:'汽车制造',
          href:'/applicationfields#application03'
        },{
          id:33,
          label:'船舶运输',
          href:'/applicationfields#application04'
        },{
          id:34,
          label:'消费电子',
          href:'/applicationfields#application05'
        },{
          id:35,
          label:'医疗设备',
          href:'/applicationfields#application06'
        },{
          id:36,
          label:'化工容器',
          href:'/applicationfields#application07'
        },{
          id:37,
          label:'工业模具',
          href:'/applicationfields#application08'
        },{
          id:38,
          label:'机械制造',
          href:'/applicationfields#application09'
        },{
          id:39,
          label:'建筑建材',
          href:'/applicationfields#application10'
        },
      ]
    },{
      id:4,
      label:'行业方案',
      href:'/case'
    },{
      id:5,
      label:'走进扬东',
      href:'/about'
    },{
      id:6,
      label:'新闻资讯',
      href:'/news'
    },{
      id:7,
      label:'联系我们',
      href:'/contact'
    }
  ]

  // 切换侧边栏折叠状态
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    // 侧边栏折叠时关闭所有展开的菜单项
    if (!sidebarCollapsed) {
      setExpandedMenuItems(new Set());
    }
  };

  // 切换菜单项展开状态
  const toggleMenuItem = (itemId, event) => {
    event.stopPropagation();
    const newExpanded = new Set(expandedMenuItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedMenuItems(newExpanded);
  };

  // 检查菜单项是否展开
  const isMenuItemExpanded = (itemId) => expandedMenuItems.has(itemId);

  // 检查是否是当前活动路由
  const isActiveItem = (item) => {
    if (item.href) {
      return pathname === item.href;
    }
    // 对于有子菜单的项，检查是否有子项是活动的
    if (item.children) {
      return item.children.some(child => 
        child.href ? pathname === child.href : 
        child.children ? child.children.some(grandChild => pathname === grandChild.href) : false
      );
    }
    return false;
  };

  // 递归渲染菜单项
  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isExpanded = isMenuItemExpanded(item.id);
      const isActive = isActiveItem(item);

      return (
        <div key={item.id} className="menu-item-container">
          {/* 菜单项 */}
          <div
            className={`menu-item level-${level} ${isActive ? 'active' : ''} ${hasChildren ? 'has-children' : ''}`}
            onClick={hasChildren ? (e) => toggleMenuItem(item.id, e) : undefined}
          >
            {/* 展开/折叠图标 */}
            {hasChildren && (
              <span className="chevron">
                <ChevronDown isOpen={isExpanded} />
              </span>
            )}
            
            {/* 占位符（用于对齐） */}
            {!hasChildren && level > 0 && <span className="chevron-placeholder" />}
            
            {/* 菜单标签（折叠时隐藏） */}
            {!sidebarCollapsed && (
              <span className="menu-label">{item.label}</span>
            )}

            {/* 链接（仅最深层） */}
            {!hasChildren && !sidebarCollapsed && item.href && (
              <Link 
                href={item.href} 
                className="menu-link"
                onClick={(e) => e.stopPropagation()}
              >{item.lebel}</Link>
            )}
          </div>

          {/* 子菜单（展开且未折叠时显示） */}
          {hasChildren && isExpanded && !sidebarCollapsed && (
            <div className={`submenu level-${level + 1}`}>
              {renderMenuItems(item.children, level + 1)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={`sidebar`}>
      {/* 侧边栏头部 */}
      <div className="sidebar-header">
      <Link href='/'><img src='https://www.yangdong.co:8443/yangdong-new/header/logo-white.webp' alt='logo'/></Link>
        <button 
          className="sidebar-toggle-btn"
          onClick={toggleSidebar}
          aria-label={sidebarCollapsed ? '展开菜单' : '折叠菜单'}
        >
          {sidebarCollapsed ? <MenuIcon /> : <CloseIcon />}
        </button>
      </div>

      {/* 菜单导航 */}
      <nav className={`sidebar-nav ${sidebarCollapsed ? 'collapsed' : 'expanded'}`}>
        {renderMenuItems(menuData)}
      </nav>

      {/* 侧边栏底部 */}
      {/* {!sidebarCollapsed && (
        <div className="sidebar-footer">
          <div className="sidebar-footer-content">
            <p className="sidebar-footer-text">© 2025 扬东铝业集团</p>
          </div>
        </div>
      )} */}
    </div>
  );
}
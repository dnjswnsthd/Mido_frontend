"use client";
import Link from "next/link";
import style from "./navigationBar.module.scss";
import MdiIcon, { MdiIconProps } from "./MdiIcon";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";

interface pathInfo {
  link: string;
  icon: MdiIconProps['path'];
  size?: number;
  color?: string;
  activeIcon: MdiIconProps['path'];
}

const pathInfoList:pathInfo[] = [
  {link: 'home', icon: 'mdiHomeOutline', size: 24, color: '#fff', activeIcon: 'mdiHome'},
  {link: 'map', icon: 'mdiMapSearchOutline', size: 24, color: '#fff',  activeIcon: 'mdiMapSearch'},
  {link: 'add', icon: 'mdiPlus', size: 24, color: '#fff',  activeIcon: 'mdiPlus'},
  {link: 'group', icon: 'mdiAccountGroupOutline', size: 24, color: '#fff',  activeIcon: 'mdiAccountGroup'},
  {link: 'user', icon: 'mdiAccountOutline', size: 24, color: '#fff',  activeIcon: 'mdiAccount'},
]

const NavigationBar = () => {
  const pathnames = useSelectedLayoutSegments();
  
  return (
    <nav className={style.navigation_bar}>
      {
        pathInfoList.map(pathInfo=>{
          return (
            <Link href={`/${pathInfo.link}`} key={pathInfo.link} className={`${style.navigation_item} ${pathnames[0]===pathInfo.link && style.active_item}`}>
              <MdiIcon path={pathnames[0]===pathInfo.link ? pathInfo.activeIcon : pathInfo.icon} size={pathInfo.size} color={pathInfo.color}/>
            </Link>
          )
        })
      }
    </nav>
  )
}

export default NavigationBar;
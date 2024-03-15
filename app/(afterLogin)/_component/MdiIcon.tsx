import * as mdiIcons from '@mdi/js';

export interface MdiIconProps {
  path: keyof typeof mdiIcons;
  size?: number;
  color?: string;
}

const MdiIcon = ({path, size=24, color='currentColor'}: MdiIconProps) => {
  const iconPaths = mdiIcons[path];
  if(!iconPaths){
    return null;
  }

  return (
    <svg width={size} height={size} viewBox={`0 0 24 24`} fill={color}>
      <path d={iconPaths}/>
    </svg>
  )
}

export default MdiIcon;
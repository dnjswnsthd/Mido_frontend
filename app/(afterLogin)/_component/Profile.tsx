import Image from "next/image";
import MdiIcon from "./MdiIcon";
import style from "./profile.module.scss";
import profileImg from "/public/image/phantom.jpg";
interface ProfileProps {
  url?:string;
  className?: string;
  size?: number;
}
const Profile = ({url, className, size}: ProfileProps) => {

  return (
    url ? (
      <div className={`${style.profile_image} ${className}`}>
        <Image src={profileImg} alt="profile" priority/>
      </div>
    ) : (
      <div className={`${style.profile_image} ${className}`}>
        <MdiIcon path="mdiAccount" color={'#00ffa3'} size={size ? size : 20}/>
      </div>
    )
  )
}

export default Profile;
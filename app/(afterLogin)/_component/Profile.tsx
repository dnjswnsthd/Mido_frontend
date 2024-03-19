import Image from "next/image";
import MdiIcon from "./MdiIcon";
import style from "./profile.module.scss";
import profileImg from "/public/phantom.jpg";
interface ProfileProps {
  url?:string;
}
const Profile = ({url}: ProfileProps) => {

  return (
    url ? (
      <div className={style.profile_image}>
        <Image src={profileImg} alt="profile"/>
      </div>
    ) : (
      <div className={style.profile_image}>
        <MdiIcon path="mdiAccount" color={'#00ffa3'}/>
      </div>
    )
  )
}

export default Profile;
import style from "./groupAddPage.module.scss";
import MemberAddForm from "./_component/MemberAddForm";
const GroupAddPage = () => {
  return (
    <div className={style.add_group_page}>
      <MemberAddForm />
    </div>
  );
};

export default GroupAddPage;

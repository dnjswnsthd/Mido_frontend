import MisigdoList from "../_component/MisigdoList";
import style from "./home.module.scss";

export interface Pioneer {
  pioneer_id: string; // 참가자 id
  pioneer_nickname: string; // 참가자 닉네임
  pioneer_image_url: string; // 참가자 프로필 사진
}
export interface Boss {
  boss_id: string;
  boss_nickname: string;
  boss_image_url: string;
}
export interface RoundEvaluation {
  round_id?: number; // round id
  round_num?: number; // round 번호
  round_evaluation_id?: number; // round 평가 id
  total_score?: number; // 총 점수
  food_score: number; // 음식 점수
  service_score: number; // 서비스 점수
  price_score: number; // 가격 점수
  atmosphere_score: number; // 분위기 점수
  review?: string; // 리뷰
}
export type ReviewImage = string; // image url

export interface Round {
  round_id: number; // round id
  round_num: number; // round 번호
  restaurant_name: string; // 레스토랑 이름
  restaurant_addr: string; // 레스토랑 주소
  main_menu_name: string; // 메인 메뉴
  side_menu_name: string; // 사이드 메뉴
  drink_name: string; // 주류
  dessert_name: string; // 디저트
  review_image: ReviewImage[]; // 이미지 리스트
  evaluation: RoundEvaluation; // 평가 정보
  average_evaluation: RoundEvaluation; // 평균점수 정보 => 흠
}
export interface ResultDummy {
  group_name: string; // 그룹 이름
  metting_date: string; // date YYYY-MM-DD
  pioneer_list: Pioneer[]; // 참여자 목록
  boss: Boss;
  round: Round[]; // round 정보
}
export type DummyList = ResultDummy[];

const Home = () => {
  const dummy:ResultDummy = require('/public/data.json');
  const dummyList: DummyList = Array.from({ length: 3 }, () => dummy);
  return (
    <div className={style.home_page_container}>
      <h1 className={style.home_page_title}></h1>
      <MisigdoList list={dummyList} />
    </div>
  );
};

export default Home;

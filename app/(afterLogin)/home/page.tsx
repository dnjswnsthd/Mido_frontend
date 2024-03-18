import MisigdoItem from "../_component/MisigdoItem";
import MisigdoList from "../_component/MisigdoList";
import style from "./home.module.scss";

export interface Pioneer {
  pioneer_id: string; // 참가자 id
  pioneer_nickname: string; // 참가자 닉네임
  pioneer_image_url: string; // 참가자 프로필 사진
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
  pioneer_list: Pioneer[]; // 참여자 목록
  boss_id: string; // 그룹장 id
  boss_nickname: string; // 그룹장 이름
  round: Round[]; // round 정보
}
export type DummyList = ResultDummy[];
const dummy = {
  group_name: "구디 대한족발 팟",
  pioneer_list: [
    { pioneer_id: "user00", pioneer_nickname: "SONG", pioneer_image_url: "" },
    { pioneer_id: "user01", pioneer_nickname: "JuneHyung", pioneer_image_url: "" },
    { pioneer_id: "user02", pioneer_nickname: "Soon", pioneer_image_url: "" },
  ],
  boss_id: "user01",
  boss_nickname: "JuneHyung",
  round: [
    {
      round_id: 0,
      round_num: 0,
      restaurant_name: "대한족발",
      restaurant_addr: "서울특별시 구로구 구로동 디지털로32나길17-8",
      main_menu_name: "족발, 족발",
      side_menu_name: "좌족발, 우족발",
      drink_name: "테라, 참이슬",
      dessert_name: "족발",
      review_image: [
        "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      ],
      evaluation: { round_id: 0, round_num: 0, round_evaluation_id: 0, total_score: 3.0, food_score: 3.0, service_score: 3.5, price_score: 2.0, atmosphere_score: 5.0, review: "JMT" },
      average_evaluation: { food_score: 4.0, service_score: 4.0, price_score: 3.0, atmosphere_score: 4.0, review: "JMT" },
    },
    {
      round_id: 0,
      round_num: 0,
      restaurant_name: "대한족발",
      restaurant_addr: "서울특별시 구로구 구로동 디지털로32나길17-8",
      main_menu_name: "족발, 족발",
      side_menu_name: "좌족발, 우족발",
      drink_name: "테라, 참이슬",
      dessert_name: "족발",
      review_image: [
        "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      ],
      evaluation: { round_id: 0, round_num: 0, round_evaluation_id: 0, total_score: 3.5, food_score: 4.0, service_score: 3.5, price_score: 3.0, atmosphere_score: 5.0, review: "JMT" },
      average_evaluation: { food_score: 4.0, service_score: 3.5, price_score: 3.0, atmosphere_score: 5.0, review: "JMT" },
    },
    {
      round_id: 0,
      round_num: 0,
      restaurant_name: "대한족발",
      restaurant_addr: "서울특별시 구로구 구로동 디지털로32나길17-8",
      main_menu_name: "족발, 족발",
      side_menu_name: "좌족발, 우족발",
      drink_name: "테라, 참이슬",
      dessert_name: "족발",
      review_image: [
        "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      ],
      evaluation: { round_id: 0, round_num: 0, round_evaluation_id: 0, total_score: 3.5, food_score: 4.0, service_score: 3.5, price_score: 3.0, atmosphere_score: 5.0, review: "JMT" },
      average_evaluation: { food_score: 4.0, service_score: 3.5, price_score: 3.0, atmosphere_score: 5.0, review: "JMT" },
    },
  ],
};
const dummyList = Array.from({ length: 3 }, () => dummy);
const Home = () => {
  return (
    <div className={style.home_page_container}>
      <h1 className={style.home_page_title}></h1>
      <MisigdoList list={dummyList} />
    </div>
  );
};

export default Home;

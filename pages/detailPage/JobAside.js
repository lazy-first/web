import RoundButton from "./buttons/RoundButton";

export default function JobAside({reward}) {
  return (
    <>
      <div className="job-aside">
        <div className="fixed-box">
          <div className="reward-container">
            <div>채용보상금</div>
            <ul>
              <li>
                <div>추천인</div>
                <p>{reward}</p>
              </li>
              <li>
                <div>지원자</div>
                <p>{reward}</p>
              </li>
            </ul>
          </div>
          <RoundButton
            text={"북마크하기"}
            backgroundColor={"white"}
            fontColor={"#36f"}
          />
          <RoundButton
            text={"지원하기"}
            backgroundColor={"#36f"}
            fontColor={"white"}
          />
        </div>
      </div>
    </>
  );
}

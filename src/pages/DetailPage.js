import JobWorkPlace from "../pages/detailPage/JobWorkPlace";
import JobAssociated from "../pages/detailPage/JobAssociated";
import JobDescription from "./detailPage/JobDescription";
import JobImageSlide from "./detailPage/JobImageSlide";

import "./DetailPage.css";
import JobHeader from "./detailPage/JobHeader";
import JobInfoBottom from "./detailPage/JobInfoBottom";
import JobAside from "./detailPage/JobAside";

import MainHeader from "../components/common/header/header";
import { useParams } from "react-router-dom";

import dummy from "../components/wdlist/db/jobList.json"
import { useEffect, useState } from "react";

export default function DetailPage() {

  const id = useParams().index; // useParams 라우팅에서 보냈던 인덱스를 가져오게 하는 기능
    
  const [data, setData] = useState({ // state 초기화
    "response": true,
    "position": "",
    "name": "",
    "location": "",
    "reward": "",
    "url": ""
  })
  useEffect(() => {
    setData(dummy[id]); // useEffect 와 setData의 관점에서
  }, []) // [] 최초의 파일 컴포넌트로 들어왔을때 한번만 실행
  console.log(data);
  return (
    <>
      <div className="detail-page">
        <div className="contents">
          <div className="job-information">
            <JobImageSlide />
            <JobHeader position={data.position} name={data.name} response={data.response} location={data.location} reward={data.reward}/>
            <JobDescription />
            <JobWorkPlace />
            <JobInfoBottom />
          </div>
          <JobAside reward={data.reward}/>
        </div>
        <hr />
        <JobAssociated />
      </div>
    </>
  );
}

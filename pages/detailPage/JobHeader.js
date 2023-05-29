import TagButton from "./buttons/TagButton";

export default function JobHeader({position, name, response, location}) {
  return (
    <>
      <div className="job-header">
        <h3 className="header-title">{position}</h3>
        <div className="header-sub-group">
          <div
            style={{
              color: "#333",
              textOverflow: "ellipsis",
              lineHeight: "1.4",
            }}
          >
            <span>{name} &nbsp;</span>
          </div>
          <div
            style={{
              border: "1px solid #00aead",
              color: "#00aead",
              display: "inline-block",
              fontSize: "12px",
              borderRadius: "2px",
              backgroundColor: "#fff",
              paddingInline: "4px",
            }}
          >
            <span>{response ? "응답률 매우 높음" : "응답률 매우 낮음"}</span>
          </div>
          <div style={{ marginLeft: "10px", color: "#999", fontSize: "12px" }}>
            <span> | {location}</span>
          </div>
        </div>
        <div className="tag-group">
          <TagButton text={"#연봉업계평균이상"} />
          <TagButton text={"#인원급성장"} />
          <TagButton text={"#육아휴직"} />
          <TagButton text={"#IT, 컨텐츠"} />
          <TagButton text={"#51~300명"} />
          <TagButton text={"#IT, 컨텐츠"} />
          <TagButton text={"#IT, 컨텐츠"} />
          <TagButton text={"#IT, 컨텐츠"} />
        </div>
      </div>
    </>
  );
}

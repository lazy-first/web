export default function TagButton({ text }) {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#f3f5f8",
          borderRadius: "25px",
          width: "fit-content",
          padding: "7px 14px",
          margin: "4px",
          fontSize: "12px",
        }}
      >
        <span>{text}</span>
      </div>
    </>
  );
}

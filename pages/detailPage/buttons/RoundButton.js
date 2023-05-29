export default function RoundButton({ text, backgroundColor, fontColor }) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "50px",
          borderRadius: "25px",
          backgroundColor: `${backgroundColor}`,
          border: "1px solid #36f",
          fontSize: "16px",
          fontWeight: "600",
          letterSpacing: "normal",
          color: `${fontColor}`,
          textAlign: "center",
        }}
      >
        <span>{text}</span>
      </div>
    </>
  );
}

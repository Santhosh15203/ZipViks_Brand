export default function StarDisplay({ rating }) {
  const maxStars = 5;
  const filledPercentage = (rating / maxStars) * 100;

  return (
    <div style={{ position: "relative", display: "inline-block", fontSize: "24px", lineHeight: "1" }}>
      <span style={{ color: "#ccc" }}>★★★★★</span>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `${filledPercentage}%`,
        overflow: "hidden",
        color: "#ffc107",
        whiteSpace: "nowrap"
      }}>
        ★★★★★
      </div>
    </div>
  );
}

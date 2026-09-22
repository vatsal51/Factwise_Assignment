const SummaryCard = ({ title, value, color }) => (
  <div className="card" style={{ borderTop: `4px solid ${color}` }}>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

export default SummaryCard;

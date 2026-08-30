const metrics = [
  ["93.04%", "Academic GPA"],
  ["#2", "Graduating Cohort Rank"],
  ["10+", "Applied AI Projects"],
  ["AI-900", "Microsoft Certified"],
];

export default function Metrics() {
  return (
    <section className="container metrics" aria-label="Quick facts">
      {metrics.map(([value, label]) => (
        <div className="metric" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

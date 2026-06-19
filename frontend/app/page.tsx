const metrics = [
  { label: "Total Tenders", value: "0" },
  { label: "Active Reports", value: "0" },
  { label: "Risk Alerts", value: "0" },
];

export default function DashboardPage() {
  return (
    <main style={{ padding: "48px", fontFamily: "system-ui, sans-serif" }}>
      <p style={{ color: "#6366f1", fontWeight: 700, letterSpacing: "0.12em" }}>
        TENDER INTELLIGENCE MVP
      </p>
      <h1>AI-assisted tender analysis dashboard</h1>
      <p>
        Upload tender PDFs, extract requirements with Gemini, store semantic chunks in
        Qdrant, and review bid recommendations from one workspace.
      </p>
      <section style={{ display: "flex", gap: "16px", marginTop: "32px", flexWrap: "wrap" }}>
        {metrics.map((metric) => (
          <article
            key={metric.label}
            style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px", minWidth: "180px" }}
          >
            <strong style={{ display: "block", fontSize: "2rem" }}>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>
    </main>
  );
}

import { ImageResponse } from "next/og";

export const alt = "Ghayda N. Ja'afreh — AI Engineer & Data Scientist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0A1020", color: "#F8FAFC", padding: "76px 84px", fontFamily: "Arial, sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 82% 38%, rgba(56,189,248,.18), transparent 28%), radial-gradient(circle at 70% 70%, rgba(129,140,248,.13), transparent 30%)" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 820, zIndex: 1 }}>
          <div style={{ color: "#38BDF8", fontSize: 22, letterSpacing: 4, fontWeight: 700, marginBottom: 24 }}>AI ENGINEERING · DATA SCIENCE · APPLIED AI</div>
          <div style={{ fontSize: 70, lineHeight: 1.02, fontWeight: 700, letterSpacing: -2 }}>Ghayda N. Ja&apos;afreh</div>
          <div style={{ fontSize: 31, marginTop: 24, color: "#CBD5E1" }}>AI Engineer · Data Scientist · Python Developer</div>
          <div style={{ fontSize: 24, lineHeight: 1.45, marginTop: 28, color: "#94A3B8" }}>Practical, explainable AI systems across healthcare, computer vision, robotics, backend engineering, and research.</div>
        </div>
        <div style={{ position: "absolute", right: 90, bottom: 72, width: 118, height: 118, borderRadius: 34, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, fontWeight: 700, color: "#0A1020", background: "linear-gradient(135deg,#38BDF8,#818CF8)" }}>GJ</div>
      </div>
    ),
    size
  );
}

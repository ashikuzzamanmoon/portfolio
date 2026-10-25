import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ashikuzzaman Moon - Full-Stack Web Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#141410",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              backgroundColor: "#16a34a",
            }}
          />
          <span style={{ fontSize: "28px", color: "#16a34a", fontWeight: "bold", letterSpacing: "2px", textTransform: "uppercase" }}>
            moon-bd.com
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#ffffff",
              margin: 0,
            }}
          >
            Ashikuzzaman Moon
          </h1>
          <p
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#55e6a5",
              margin: 0,
            }}
          >
            Full-Stack Web Developer
          </p>
          <p
            style={{
              fontSize: "24px",
              color: "#a3a3a3",
              maxWidth: "900px",
              margin: 0,
            }}
          >
            Engineering scalable web applications with Next.js, React, Node.js, and TypeScript.
          </p>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {["Next.js", "React.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"].map((tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: "#1f1f1a",
                border: "1px solid #33332b",
                borderRadius: "30px",
                padding: "10px 24px",
                fontSize: "20px",
                color: "#e5e5e5",
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

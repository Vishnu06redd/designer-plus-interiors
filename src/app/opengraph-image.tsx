import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#15130f",
          position: "relative",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 100 100" fill="none">
          <path d="M50 4 L90 26 L50 48 L10 26 Z" fill="#e14a2c" />
          <path d="M90 26 L90 74 L50 96 L50 48 Z" fill="#f2811e" />
          <path d="M10 26 L10 74 L50 96 L50 48 Z" fill="#6b1029" />
          <path d="M50 34 L66 43 L50 52 L34 43 Z" fill="#f3b53d" />
          <path d="M34 43 L50 52 L50 70 L34 61 Z" fill="#f2811e" />
          <path d="M66 43 L50 52 L50 70 L66 61 Z" fill="#d92818" />
        </svg>
        <div
          style={{
            marginTop: 36,
            fontSize: 56,
            color: "#faf7f2",
            fontWeight: 600,
            letterSpacing: -1,
          }}
        >
          Designer Plus Interiors
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 24,
            color: "#f2811e",
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Spaces That Inspire
        </div>
      </div>
    ),
    { ...size }
  );
}

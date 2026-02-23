import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(90deg, #0A0D12 0%, #0A0D12 50%, #1D3300 50%, #1D3300 100%)",
          borderRadius: 14,
          border: "2px solid #252B37",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -8,
            top: -10,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(145,255,2,0.3)",
            filter: "blur(5px)",
          }}
        />
        <div
          style={{
            color: "#F5F5F5",
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: -1,
            lineHeight: 1,
            fontFamily: "sans-serif",
            transform: "translateX(-2px)",
          }}
        >
          E
        </div>
        <div
          style={{
            color: "#91FF02",
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: -1,
            lineHeight: 1,
            fontFamily: "sans-serif",
          }}
        >
          A
        </div>
      </div>
    ),
    size,
  );
}

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function hundler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title");

  if (!title) {
    return new ImageResponse(<>Visit with &quot;?title=ぴ&quot;</>, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px",
        }}
      >
        <div
          style={{
            backgroundColor: "#E3E4DB",
            width: "100%",
            height: "100%",
            borderRadius: "32px",
            display: "flex",
            justifyContent: "space-between",
            padding: '32px'
          }}
        >
          <div
            style={{
              color: "#4b4b4b",
              width: '1072px',
              fontSize: "72px",
              wordBreak: "break-all",
              fontWeight: "bolder",
            }}
          >
            {title}
          </div>
          <img style={{
            width: '120px',
            height: '120px',
            position: 'absolute',
            bottom: '16px',
            right: '16px'
          }} src="https://obake.land/assets/icons/512.png"></img>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}


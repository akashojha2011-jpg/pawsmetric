import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#082C1B',
          borderRadius: '8px',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Heel Pad */}
          <path
            d="M16 15C12.5 15 9.5 18 9.5 21C9.5 24 12.5 26 16 26C19.5 26 22.5 24 22.5 21C22.5 18 19.5 15 16 15Z"
            fill="#8BF03B"
          />
          {/* 4 Toe Pads */}
          <circle cx="8" cy="12" r="3" fill="#8BF03B" />
          <circle cx="13" cy="7.5" r="3" fill="#8BF03B" />
          <circle cx="19" cy="7.5" r="3" fill="#8BF03B" />
          <circle cx="24" cy="12" r="3" fill="#8BF03B" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

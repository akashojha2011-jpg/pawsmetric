import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: '40px',
        }}
      >
        <svg
          width="135"
          height="135"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 8.5C8.2 7.5 6.2 9.5 6.2 13C6.2 16.2 8.2 17.5 9.8 17"
            stroke="#8BF03B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5 8.5C23.8 7.5 25.8 9.5 25.8 13C25.8 16.2 23.8 17.5 22.2 17"
            stroke="#8BF03B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.2 11C12.2 9.5 19.8 9.5 21.8 11C23.2 15.5 22 23.5 16 23.5C10 23.5 8.8 15.5 10.2 11Z"
            stroke="#8BF03B"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="13" cy="15.2" r="1.6" fill="#8BF03B" />
          <circle cx="19" cy="15.2" r="1.6" fill="#8BF03B" />
          <path
            d="M14.5 18.5C14.5 18.5 15.2 20 16 20C16.8 20 17.5 18.5 17.5 18.5Z"
            fill="#8BF03B"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

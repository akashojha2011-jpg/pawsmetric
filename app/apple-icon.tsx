import fs from 'fs';
import path from 'path';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default async function AppleIcon() {
  const iconBuffer = fs.readFileSync(
    path.join(process.cwd(), 'public/images/pawsmetric_logo.png')
  );
  return new Response(iconBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

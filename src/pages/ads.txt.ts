import type { APIRoute } from 'astro';
import { ADS_ENABLED, ADSENSE_PUB_ID } from '../lib/ads';

// IAB ads.txt — declares Google as an authorised seller of this site's
// inventory. Served as a route rather than a file in public/ so it stays tied
// to ADSENSE_CLIENT: with ads off the file is empty rather than advertising a
// publisher ID we do not use. f08c47fec0942fa0 is Google's fixed TAG ID.
export const GET: APIRoute = () => {
  const body = ADS_ENABLED
    ? `google.com, ${ADSENSE_PUB_ID}, DIRECT, f08c47fec0942fa0\n`
    : '';
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

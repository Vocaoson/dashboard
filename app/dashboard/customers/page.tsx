import { GoogleAnalytics, sendGAEvent } from '@next/third-parties/google';
import React from 'react';

const Page = () => {
  return (
    <div>

      <div>Customer page</div>
      <GoogleAnalytics gaId="G-XQ1ZMK8FFV" />
    </div>
  )
}

export default Page
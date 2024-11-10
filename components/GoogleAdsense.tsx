import Script from "next/script";

type Props = {
  pId: string;
};

const GoogleAdsense: React.FC<Props> = ({ pId }) => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }
  return (
    <Script
      id="Adsense-id"
      data-ad-client={`ca-pub-${pId}`}
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`}
      strategy="afterInteractive"
    />
  );
};

export default GoogleAdsense;
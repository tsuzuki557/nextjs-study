import React from "react";

type MetaProps = {
  siteTtl: string;
  siteDesc?: string;
};

const Meta: React.FC<MetaProps> = ({
  siteTtl = "サイトタイトル",
  siteDesc = "サイトの説明を書く",
}) => {
  return (
    <>
      <title>{siteTtl}</title>
      <meta name="description" content={siteDesc} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Meta;

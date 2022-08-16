import React from "react";

type Props = {
  siteTtl: string;
  siteDesc?: string;
};

const Meta: React.FC<Props> = ({
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

export { Meta };

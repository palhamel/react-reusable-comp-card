import React from "react";
import { Card } from "lib/Card";

import styled from "styled-components/macro";

const ThinnerCard = styled(Card)`
  width: 400px;
`;

export const App = () => {
  return (
    <div>
      <ThinnerCard
        coverImage="https://placebear.com//500/300"
        thumbnailUrl="http://placebeard.it/100/100"
        title="Card title here"
        secondaryText="Secondary Text here"
      />

      <ThinnerCard
        coverImage="https://placebear.com//500/300"
        thumbnailUrl="http://placebeard.it/100/100"
        title="Card title here"
        secondaryText="Secondary Text here"
      >
        Child content here
      </ThinnerCard>
      <Card title="Card title here" secondaryText="Secondary Text here" />

      <Card
        coverImage="https://placebear.com//500/300"
        thumbnailUrl="http://placebeard.it/100/100"
        title="Card title here"
        secondaryText="Secondary Text here"
      />
      <Card>
        <h1>hej hej</h1>
      </Card>
    </div>
  );
};

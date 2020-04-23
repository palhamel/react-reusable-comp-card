import React from "react";

import styled from "styled-components/macro";

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  /* padding: 20px; */
  border-radius: 6px;
  background: white;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 24px;
`;

const SecondaryText = styled.p`
  margin: 0px;
  color: grey;
`;

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`;

const Content = styled.div`
  padding: 20px;
`;

const ChildrenContent = styled.div`
  background: lightsalmon;
  padding: 10px;
  border-radius: 6px;
`

export const Card = ({ title, secondaryText, thumbnailUrl, coverImage, className, children }) => (
  <Container className={className}>
    {coverImage && <CoverImage src={coverImage} />}
    <Content>
      <TitleBar>
        {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
      </TitleBar>
      {children && <ChildrenContent>{children}</ChildrenContent>}
    </Content>
  </Container>
);

// {thumbnailUrl && .. - teknik för att ladda comp enbart om props är närvarande. Man slipper tomma objekt.

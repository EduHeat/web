import React from "react";
import { Text, Col } from "@nextui-org/react";

const Content = () => {
  return (
    <>
      <Text
        h1
        css={{
          textGradient: "to right, $green400 -20%, $green800 100%",
        }}
        weight="bold"
      >
        The Matrix
      </Text>
      <Col css={{ textAlign: "center" }}>
        <Text
          h3
          css={{
            textGradient: "to right, $blue400 -20%, $pink500 100%",
          }}
        >
          You take the{" "}
          <Text
            span
            css={{
              textGradient: "to left, $blue400 -20%, $pink500 100%",
            }}
          >
            blue pill
          </Text>
          , the story ends; you wake up in your bed and believe whatever you
          want to believe.
        </Text>
        <Text
          h3
          css={{
            textGradient: "to left, $yellow200 20%, $purple500 100%",
          }}
        >
          OR
        </Text>
        <Text
          color="error"
          h3
          css={{
            textGradient: "to left, $red500 -20%, $red300 100%",
          }}
        >
          You take the{" "}
          <Text
            span
            css={{
              textGradient: "to right, $red500 -20%, $red300 100%",
            }}
          >
            red pill
          </Text>
          , you stay in Wonderland and I show you how deep the rabbit hole goes.
        </Text>
      </Col>
    </>
  );
};

export default Content;

import { Container, Row, Text, Col, Button, useTheme } from "@nextui-org/react";
import Head from "next/head";
import React from "react";
import Content from "../components/Content/Content";
import Card from "../components/UI/Card";

const Login = () => {
  const { theme } = useTheme();
  return (
    <Container responsive>
      <Head>
        <title>Login | The Matrix</title>
      </Head>
      <Row justify="center" align="center" css={{ height: "100vh" }}>
        <Card
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxW: "700px",
          }}
        >
          <Content />
          <Button.Group size="xl" css={{ marginTop: "$10" }}>
            <Button
              css={{
                background: "#b92b27",
              }}
            >
              Red
            </Button>
            <Button
              css={{
                background: "#1565c0",
              }}
            >
              Blue
            </Button>
          </Button.Group>
        </Card>
      </Row>
    </Container>
  );
};

export default Login;

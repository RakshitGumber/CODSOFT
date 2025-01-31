import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

interface EmailProps {
  userFirstname: string;
  verificationUrl: string;
}

export const VerificationEmail = ({
  userFirstname,
  verificationUrl,
}: EmailProps) => (
  <Html>
    <Head />
    <Preview>Enjoy the benefits of Congo the new shopping platform</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Welcome to Congo, the new ecommerce platform that helps you find you
          the best pair for that occasion you always want to shine in using AI.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={verificationUrl}>
            Get started
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Congo team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          © 2022 Congo. All rights reserved. | Made by @GumberRakshit
        </Text>
      </Container>
    </Body>
  </Html>
);

export default VerificationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

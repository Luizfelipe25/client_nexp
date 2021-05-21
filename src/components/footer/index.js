import React from "react";
import { Container, Wrapper, Row, Column, Link, Title } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWraper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
Footer.Row = function FooterWraper({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
Footer.Column = function FooterWraper({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};
Footer.Link = function FooterWraper({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Footer.Title = function FooterWraper({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

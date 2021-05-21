import React from "react";
import Footer from "../footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>
              <a id="contato">Contato</a>
            </Footer.Title>
            <Footer.Link>
              <a href="https://www.unitau.br/">Unitau</a>
            </Footer.Link>
            <Footer.Link>
              <a href="https://www.linkedin.com/in/luiz-felipe-farias1">
                Linkedin
              </a>
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Serviços</Footer.Title>
            <Footer.Link>
              <a href="/services">Seus Gastos</a>
            </Footer.Link>
            <Footer.Link href="#"> Seja Premium</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">Instagram</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}

/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import "./PageHeader.scss";

// reactstrap components
import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header-custom">
      <Container className="">
        <div className="content-center">
          <h1 className="title">
            <span className="intune">INTUNE</span> with the professionals
          </h1>
          <h3 className="potential">Reach your full potential</h3>
          <p className="types">
            Music Industry, Theater, Sports, TV, Radio, Investors,
            Influencers...
          </p>
        </div>
      </Container>
    </div>
  );
}

import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import "../../style/index.css"
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                HelloMe <b>money</b>
              </h1>
              
            </Link>
            

            <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
      {/* footer site */}
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <StyleP className="whiteColor font17">HelloMe Money is a trading name of HelloMe Limited, a company registered in England and Wales under registration no: 1254157 with a registered office at 25 Cabot Square, Canary Wharf, London E14 4QA.
Cashpot Limited UK is a financial technology and remittance company registered in the United Kingdom under registration number 7302407 as an Authorised Payment Institution with the registered office at Unit 51, Skylines Business Village, London. E14 9TS. The Company is regulated by the Financial Conduct Authority (FCA) and Her Majesty’s Revenue & Customs (HMRC).
 </StyleP>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Features</h6>
            <ul class="footer-links">
              <li><a href="#">Multi-Currency Accounts</a></li>
              <li><a href="#">International Accounts</a></li>
              
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <div className="copyright-container">
              <p class="copyright-text">Copyright &copy; {getCurrentYear()} All Rights Reserved by 
         <a href="#"> HelloMe Money</a>.
            </p>
            </div>
          </div>

          
        </div>
      </div>
</footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: row;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 0 20px;
  }
`;
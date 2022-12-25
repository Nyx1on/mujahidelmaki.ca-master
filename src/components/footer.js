import React from "react"
import styled from "styled-components"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { Link } from "gatsby"

const FooterContainer = styled.h1`
  position: flex;
`
export const FooterWrap = styled.div`
  padding: 35px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
`

export const FooterLogoLink = styled(Link)``
export const FooterLogo = styled.img`
  width: 90px;
`

export const WebsiteRights = styled.h5`
  color: #fff;
  font-size: 1rem;

  text-align: center;

  /* @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  } */
  flex-shrink: 2;
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
`

// export const SocialWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   max-width: 1100px;
//   border: 8px solid green;
// `;

// export const SocialIcons = styled.div`
//   border: 3px solid red;
// `;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1rem;
  margin-left: 0.5em;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLogoLink></FooterLogoLink>
        <WebsiteRights>
          © {new Date().getFullYear()}, Built with Love By Mujahid Elmaki{" "}
        </WebsiteRights>

        <SocialContainer>
          <SocialIconLink>
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink>
            <FaTwitter />
          </SocialIconLink>
        </SocialContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer

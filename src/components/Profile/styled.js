import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import LogoPapodeDev from "../LogoPapo"

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    width: 100%;
    flex-direction: row;
  `}
`

export const Logo = styled(LogoPapodeDev)`
  height: 80px;
  ${media.lessThan("large")`
      height:50px;
  `}
`

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  ${media.lessThan("large")`
    display: flex;
    text-align: left;  
    width: 257%;   
  `}

  &:hover {
    color: var(--highlight);
  }
`
export const ProfileTitle = styled.h1`
  font-size: 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 80px;
  font-weight: bold;
  color: var(--postColor);
  margin: 0.5rem auto 2rem;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    height:50px;
    margin: 0 0 0 10px; 
    margin: auto 0.8rem auto 0;
  `}
`

export const ProfileAuthor = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px; 
    margin: auto 0 auto 0.5rem;
  `}
`
export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  margin: 0.5rem auto 1.6rem;

  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-top: 0.2rem; 
    margin: 0;
  `}
`
export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`

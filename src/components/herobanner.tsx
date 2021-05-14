import heroBanner from "../images/hero-banner-desktop.jpg"
import styled from "styled-components"

const BannerContainer = styled.div`
  width: 100%;
  height: 650px;
  background: transparent url(${heroBanner}) 0% 0%
    no-repeat padding-box;
  opacity: 1;
`

export default function HeroBanner() {
  return (
    <>
      <BannerContainer>
        
      </BannerContainer>
    </>
  )
}

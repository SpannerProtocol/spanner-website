import Layout from "components/Layout"
import React from "react"
import { Header1, Header2, Text } from "../components/Text"
import { ContentSection, ContentWrapper } from "../components/Wrapper"

function GuidesPage() {
  return (
    <Layout>
      <ContentWrapper>
        <ContentSection>
          <Header1>Guides and Tutorials</Header1>
          <Text>
            Guides are created by both the Spanner team and community. If you
            would like to contribute to our guide compilation, please contact us
            at
            <a href="mailto:ask@spanner.network"> ask@spanner.network.</a>
          </Text>
        </ContentSection>
        <ContentSection>
          <Header2>Dapp Guides</Header2>
          <a
            target="_blank"
            href="https://docs.google.com/presentation/d/1mHs8qF-PEk2zTXT2PG5Q-bjLTGUOHrMFMVapNXeXFYo/edit?usp=sharing"
          >
            Using Bridge with imToken
          </a>
        </ContentSection>
        <ContentSection>
          <Header2>General Guides</Header2>
          <a
            target="_blank"
            href="https://www.evernote.com/shard/s657/client/snv?noteGuid=a6c23d4c-8490-9c51-1ed4-70d97e468b9d&noteKey=dc8a6610e632ebbf8f20f7e2b9ec8871&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs657%2Fsh%2Fa6c23d4c-8490-9c51-1ed4-70d97e468b9d%2Fdc8a6610e632ebbf8f20f7e2b9ec8871&title=Spanner%2B101%2B%25E5%2585%25A5%25E9%2597%25A8%25E6%258C%2587%25E5%258D%2597"
          >
            Spanner 101 - Community guide (ZH)
          </a>
        </ContentSection>
      </ContentWrapper>
    </Layout>
  )
}

export default GuidesPage

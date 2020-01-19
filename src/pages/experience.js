import React, { useState, useEffect } from "react"
import styled from "styled-components"
import HeroImage from "../components/heroImage"
import { StyledH1 } from "../components/common/headers"
import SearchBox from "../components/common/searchBox"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { searchWineries } from "../utilities/fuzzySearch"
import useDebounce from "../hooks/use-debounce"
import useScroll from "../hooks/use-scroll"
import FeaturedWinery from "../components/winery/featuredWinery"
import WineryCard from "../components/winery/wineryCard"

const WinerySearchResultContainer = styled.div`
  > * {
    margin-top: 5%;
  }
`

const Experience = ({ data }) => {
  const heroImage = data.heroImage.childImageSharp
  const allWineries = data.allWineries.nodes.map(x => {
    return { ...x.data, id: x.id }
  })
  const featuredWinery = {
    ...data.featuredWinery.data,
    id: data.featuredWinery.id,
  }

  const [currentSearchValue, setCurrentSearchValue] = useState("")
  const [filteredWineries, setFilteredWineries] = useState(null)
  const debouncedSearchTerm = useDebounce(currentSearchValue, 500)
  const { elementRef, scroll } = useScroll(10)

  useEffect(() => {
    if (debouncedSearchTerm) {
      const wines = searchWineries(allWineries, debouncedSearchTerm)
      setFilteredWineries(wines)
    } else {
      setFilteredWineries(allWineries)
    }
  }, [debouncedSearchTerm])

  return (
    <Layout>
      <SEO title="Explore" />
      <HeroImage fluid={heroImage.fixed} height="400px">
        <StyledH1 centered secondaryColor fontSize="400%">
          Ready for an adventure?
        </StyledH1>
      </HeroImage>
      <FeaturedWinery
        name={featuredWinery.Name}
        description={featuredWinery.Description}
        image={featuredWinery.Image.localFiles[0].childImageSharp.fluid}
      />
      <SearchBox
        hint="e.g. Ilocki podrumi"
        onSearch={setCurrentSearchValue}
        onFocus={scroll}
      />
      {!!filteredWineries ? (
        <WinerySearchResultContainer ref={elementRef}>
          {filteredWineries.map(x => (
            <WineryCard
              key={x.id}
              name={x.Name}
              description={x.Description}
              image={x.Image.localFiles[0].childImageSharp.fixed}
            />
          ))}
        </WinerySearchResultContainer>
      ) : null}
    </Layout>
  )
}

export const query = graphql`
  {
    heroImage: file(relativePath: { in: "experience-heroImage.jpg" }) {
      childImageSharp {
        fixed(quality: 100, width: 1920, height: 620) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allWineries: allAirtable(filter: { table: { eq: "Wineries" } }) {
      nodes {
        id: recordId
        data {
          Name
          Description: MediumDescription
          Image {
            localFiles {
              childImageSharp {
                fixed(height: 250, width: 250, quality: 100, fit: COVER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    featuredWinery: airtable(
      table: { eq: "Wineries" }
      data: { IsFeatured: { eq: true } }
    ) {
      id: recordId
      data {
        Description: MediumDescription
        Name
        Image {
          localFiles {
            childImageSharp {
              fluid(quality: 100, fit: COVER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Experience

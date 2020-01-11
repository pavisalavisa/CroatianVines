import React, { useState, useEffect } from "react"
import styled from "styled-components"
import HeroImage from "../components/heroImage"
import LabeledText from "../components/common/labeledText"
import SearchBox from "../components/common/searchBox"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WineCard from "../components/wineCard"
import Divider from "../components/common/divider"
import { searchWines } from "../utilities/fuzzySearch"
import useDebounce from "../hooks/use-debounce"
import useScroll from "../hooks/use-scroll"

//TODO: Cleanup code
//TODO: Add navigation from vines to single vine page
const FeaturedVinesContainer = styled.div`
  margin:50px 5% 0px 5%;  
`
const FilteredVinesContainer = styled.div`
  margin:50px 10% 50px 10%;  
`

const WineCardsGrid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  grid-gap:80px;
  justify-items:center;
  ${props => props.hideOverflowRows ?
    `
    @media only screen and (max-width: 1700px) {
      > div:last-child {
        display:none;
      }
    }
    @media only screen and (max-width: 1100px) {
      > div:nth-last-child(2) {
        display:none;
      }
    }
    ` : null}
`

const Experience = ({ data }) => {
  const heroImage = data.heroImage.childImageSharp
  const featuredWines = data.featuredWines.nodes.map(x => x.data)
  const allWines = data.allWines.nodes.map(x => x.data)

  const [currentSearchValue, setCurrentSearchValue] = useState('')
  const [filteredWines, setFilteredWines] = useState(null)
  const debouncedSearchTerm = useDebounce(currentSearchValue, 500)
  const { elementRef, scroll } = useScroll()

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        const wines = searchWines(allWines, debouncedSearchTerm)
        setFilteredWines(wines)
      }
      else {
        setFilteredWines(allWines)
      }
    }, [debouncedSearchTerm]
  )

  return (
    <Layout>
      <SEO title="Explore" />
      <HeroImage fluid={heroImage.fixed} height="400px">
        <LabeledText text={"Explore our wine selection"} width="100%" />
      </HeroImage>
      <FeaturedVinesContainer>
        <h2>Featured vines:</h2>
        <p>Lose yourself in the finest of Croatian wines. Four distinct climates present in Croatia make the pallet of wines vivid and picturesque. Check out what our editors loved the most in the past month:</p>
        <WineCardsGrid hideOverflowRows>
          {!!featuredWines ? featuredWines.map(x => <WineCard name={x.Name} description={x.Description} image={x.Image[0].thumbnails.large.url} />) : null}
        </WineCardsGrid>
      </FeaturedVinesContainer>
      <Divider />
      <SearchBox hint="Search for vines (e.g. Istria)" onSearch={setCurrentSearchValue} onFocus={scroll} />
      <LabeledText textRef={elementRef} text="Search results" margin="50px 5%" />
      <FilteredVinesContainer>
        {!!filteredWines ?
          <WineCardsGrid>
            {filteredWines.map(x => <WineCard
              name={x.Name}
              description={x.Description}
              image={x.Image[0].thumbnails.large.url} />)}
          </WineCardsGrid> : null}
      </FilteredVinesContainer>
    </Layout>
  )
}

export const query = graphql`
{
  heroImage: file(relativePath: {in: "explore-heroImage.jpg"}) {
    childImageSharp {
      fixed(quality: 100, height: 1333, width: 2000) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  images: allImageSharp(filter: {fixed: {src: {regex: "/explore-[a-zA-Z0-9]*Image.(png|jpg|gif)/"}}}) {
    nodes {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  icons: allImageSharp(filter: {fixed: {src: {regex: "/explore-[a-zA-Z0-9]*Icon.(png|jpg|gif)/"}}}) {
    nodes {
      fixed(width: 110, height: 110) {
        ...GatsbyImageSharpFixed
        originalName
      }
    }
  }
  winery: file(relativePath: {regex: "/winery/"}) {
    childImageSharp {
      fixed(width: 350, height: 220) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  allWines: allAirtable(filter: {table: {eq: "Wines"}}) {
    nodes {
      data {
        Name
        Description
        Image {
          localFiles {
            childImageSharp {
              fixed(height: 275, quality: 100){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
  featuredWines: allAirtable(filter: {data: {IsFeatured: {eq: true}}, table: {eq: "Wines"}}) {
    nodes {
      data {
        Name
        Description
        Image {
          localFiles {
            childImageSharp {
              fixed(height: 275, quality: 100){
                ...GatsbyImageSharpFixed
              }
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
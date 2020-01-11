import React, { useState, useEffect } from "react"
import styled from "styled-components"
import HeroImage from "../components/heroImage"
import LabeledText from "../components/common/labeledText"
import SearchBox from "../components/common/searchBox"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WineCard from "../components/wineCard"
import { searchWines } from "../utilities/fuzzySearch"
import useDebounce from "../hooks/use-debounce"
import useScroll from "../hooks/use-scroll"

//TODO: Cleanup code
//TODO: Add navigation from vines to single vine page

const WineCardsGrid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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

const Collection = ({ data }) => {
  const heroImage = data.heroImage.childImageSharp
  const allWines = data.allWines.nodes;

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
        <LabeledText text={"Explore our wine collection"} width="100%" />
      </HeroImage>
      <SearchBox hint="Search for vines (e.g. Istria)" onSearch={setCurrentSearchValue} onFocus={scroll} />
      {!!filteredWines ?
          <WineCardsGrid ref={elementRef} >
            {filteredWines.map(x => <WineCard
              key={x.id}
              name={x.data.Name}
              description={x.data.Description}
              image={x.data.Image.localFiles[0].childImageSharp.fixed} />)}
          </WineCardsGrid> : null}
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
      id: recordId
      data {
        Name
        Description
        Image {
          localFiles {
            childImageSharp {
              fixed(height: 125, width: 125, quality: 100, fit: CONTAIN, background: "white"){
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

export default Collection

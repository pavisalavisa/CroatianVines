import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import HeroImage from "../components/heroImage"
import LabeledText from "../components/common/labeledText"
import SearchBox from "../components/common/searchBox"
import Layout from "../components/layout"
import SEO from "../components/seo"
import WineCard from "../components/wine/wineCard"
import { searchWines } from "../utilities/fuzzySearch"
import useDebounce from "../hooks/use-debounce"
import useScroll from "../hooks/use-scroll"


const WineCardsGrid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  grid-gap:5vw;
  justify-items:center;
`

const Collection = ({ data }) => {
  const heroImage = data.heroImage.childImageSharp
  const allWines = data.allWines.nodes.map(x => { return { ...x.data, id: x.id } });

  const [currentSearchValue, setCurrentSearchValue] = useState('')
  const [filteredWines, setFilteredWines] = useState(null)
  const debouncedSearchTerm = useDebounce(currentSearchValue, 500)
  const { elementRef, scroll } = useScroll(20)

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
            name={x.Name}
            description={x.ShortDescription}
            image={x.Image.localFiles[0].childImageSharp.fixed}
            link={x.id} />)}
        </WineCardsGrid> : null}
    </Layout>
  )
}

export const query = graphql`
{
  heroImage: file(relativePath: {in: "collection-heroImage.jpg"}) {
    childImageSharp {
      fixed(quality: 100, height: 1333, width: 2000) {
        ...GatsbyImageSharpFixed
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
        ShortDescription
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

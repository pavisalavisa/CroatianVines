import React, { useState, useEffect } from "react"
import styled from "styled-components"
import HeroImage from "../components/heroImage"
import LabeledText from "../components/common/labeledText"
import SearchBox from "../components/common/searchBox"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VineService from "../services/vineService"
import VineCard from "../components/vineCard"

const FeaturedVinesContainer = styled.div``
const FilteredVinesContainer = styled.div``

const Explore = ({ data }) => {
  const heroImage = data.heroImage.childImageSharp
  const [currentSearchValue, setCurrentSearchValue] = useState('')
  const [filteredVines, setFilteredVines] = useState([])
  const [featuredVines, setFeaturedVines] = useState([])

  useEffect(() => {
    (async () => {
      const vines = await VineService.getFeaturedVines()
      setFeaturedVines(vines)
    })();
  }, [])

  const onSearch = async (searchValue) => {
    setCurrentSearchValue(searchValue)
    const vines = await VineService.getVines(currentSearchValue)
    setFilteredVines(vines)
  }

  return (
    <Layout>
      <SEO title="Explore" />
      <HeroImage
        fluid={heroImage.fixed}
        height="400px"
      >
        <LabeledText text={"Explore our wine selection"} width="100%" />
      </HeroImage>
      <SearchBox hint="Search for vines" buttonLabel="Find a wine" onSearch={onSearch} />
      <FeaturedVinesContainer>
        {!!featuredVines ? featuredVines.map(x => <VineCard {...x} />) : null}
      </FeaturedVinesContainer>
      <FilteredVinesContainer>
        {!!filteredVines ? filteredVines.map(x => <VineCard {...x} />) : null}
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
    
    images: allImageSharp(
      filter: {
        fixed: { src: { regex: "/explore-[a-zA-Z0-9]*Image.(png|jpg|gif)/" } }
      }
    ) {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    icons: allImageSharp(
      filter: {
        fixed: { src: { regex: "/explore-[a-zA-Z0-9]*Icon.(png|jpg|gif)/" } }
      }
    ) {
      nodes {
        fixed(width: 110, height: 110) {
          ...GatsbyImageSharpFixed
          originalName
        }
      }
    }

    winery: file(relativePath: {regex: "/winery/"}) {
      childImageSharp {
        fixed (width:350 height:220) {
          ...GatsbyImageSharpFixed
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

export default Explore

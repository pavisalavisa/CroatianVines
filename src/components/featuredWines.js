

// export default () => {

//     const data = useStaticQuery(graphql`
//     {
//         featuredWines: allAirtable(filter: {data: {IsFeatured: {eq: true}}, table: {eq: "Wines"}}) {
//             nodes {
//               data {
//                 Namea
//                 Description
//                 Image {
//                   localFiles {
//                     childImageSharp {
//                       fixed(height: 125, quality: 100){
//                         ...GatsbyImageSharpFixed
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//     }
//     `)

//     return (<FeaturedWinesContainer>
//         <h2>Featured vines:</h2>
//         <p>Lose yourself in the finest of Croatian wines. Four distinct climates present in Croatia make the pallet of wines vivid and picturesque. Check out what our editors loved the most in the past month:</p>
//         <WineCardsGrid hideOverflowRows>
//             {!!featuredWines ? featuredWines.map(x => <WineCard name={x.Name} description={x.Description} image={x.Image[0].thumbnails.large.url} />) : null}
//         </WineCardsGrid>
//     </FeaturedWinesContainer>)
// }
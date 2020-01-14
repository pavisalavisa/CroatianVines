exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query{
        allWines: allAirtable(filter: {table: {eq: "Wines"}}) {
            nodes {
              id: recordId
            }
        }

        allWineries: allAirtable(filter: {table: {eq: "Wineries"}}){
            nodes {
                id: recordId
            }
        }
    }      
    `)

    data.allWines.nodes.forEach(node => {
        const wineId = node.id

        actions.createPage({
            path: `wine/${wineId}`,
            component: require.resolve(`./src/templates/wine.js`),
            context: { wineId },
        })
    })

    data.allWineries.nodes.forEach(node => {
        const wineryId = node.id

        actions.createPage({
            path: `winery/${wineryId}`,
            component: require.resolve(`./src/templates/winery.js`),
            context: { wineryId },
        })
    })
}
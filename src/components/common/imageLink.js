import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"


const ImageLink = ({ imagePath, to }) => (
    <Link to={to}>
        <Img fixed={imagePath} />
    </Link>
)


export default ImageLink
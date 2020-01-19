import React from "react"
import Ratings from "react-ratings-declarative"
import { FlexRow } from "../common/container"

export default (props) => (<FlexRow justifyContent="center">
    <Ratings {...props}
        widgetRatedColors="#5B0B0B"
        widgetHoverColors="#5B0B0B">
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
    </Ratings>
</FlexRow>)
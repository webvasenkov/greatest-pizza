import React from 'react'
import {FeatureContainer, FeatureH1, FeatureP, FeatureButton} from "./FeatureElements"

function Feature() {
    return (
        <FeatureContainer>
            <FeatureH1>Pizza of the day</FeatureH1>
            <FeatureP>Truffle alfredo sauce topped with 24 carat gold dust.</FeatureP>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
import styled from "styled-components"
import FeaturedBg from "../../images/featured3.jpg"

export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.1)), url(${FeaturedBg});
    background-size: cover;
    background-position: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-height: 500px;
    color: #fff;
    text-align: center;
    padding: 0 1rem;
`
export const FeatureH1 = styled.h1`
    font-size: clamp(3rem, 5vw, 3rem);
`
export const FeatureP = styled.p`
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
`
export const FeatureButton = styled.button`
    font-size: 1.4rem;
    padding: .6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: .3s ease-in-out;
    cursor: pointer;

    &:hover {
        color: #fff;
        background: #e31837;
    }
`
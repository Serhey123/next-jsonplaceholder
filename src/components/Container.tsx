import { ReactNode } from "react"
import styled from "styled-components"

const StyledContainer= styled.div`
    width: 1200px;
    margin: 0 auto;
    
`

type LayoutProps = {children?: ReactNode}

export default function Container({ children }: LayoutProps ){
    return <StyledContainer>{ children }</StyledContainer>
}
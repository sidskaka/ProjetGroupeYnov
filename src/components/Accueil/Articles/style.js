import styled from "styled-components";
//import pixelscreen from "../../utils/pixelscreen";

export const Img = styled.img`
    max-width: 100%;
    height: auto;

    display: block;
    -webkit-transition: all .35s ease-in-out;
    -moz-transition: all .35s ease-in-out;
    transition: all .35s ease-in-out;

    &:hover {
      -o-transform: scale(1.2, 1.2);
      -moz-transform: scale(1.2, 1.2);
      -webkit-transform: scale(1.2, 1.2);
      -ms-transform: scale(1.2, 1.2);
      transform: scale(1.2, 1.2);
    }

    @media only screen and (min-width : 480px) {
        max-height: 100%;
        display: inline-block;
    }
`
export const Ul = styled.ul`
    display: block;
    float: left;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    
    @media only screen and (min-width : 320px) {
        

    }
    @media only screen and (min-width : 480px) {
        margin: 1%;
    }
`
export const Li = styled.li`
    display: inline-block;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    position: relative;

    @media only screen and (min-width : 320px) {   

    }
    @media only screen and (min-width : 480px) {
        width: 49%;
        margin: 1%;
    }
    @media only screen and (min-width: 678px) {
        width: 32.5%;
    }
    @media only screen and (min-width : 992px) {
        width: 24.25%;
    }
    @media only screen and (min-width : 1200px) {
        width: 19.5%;
    }
`
export const Div1 = styled.div`
    position: relative;
    overflow: hidden;

    &:hover {
        bottom: 0;
    }
    @media only screen and (min-width : 320px) {
        
    }
    @media only screen and (min-width : 480px) {
        height: 300px;
        float: left;
        width: 100%;
        text-align: center;
    }
    @media only screen and (max-width : 480px) {
        

    }
    @media only screen and (max-width : 320px) {
        

    }
`
export const A1 = styled.a`
    text-decoration: none;
    display: block;
`
export const Div21 = styled.div`
    float: left;
    width: 100%;
    text-transform: uppercase;
`
export const A = styled.a`
    color: #000;
`
export const Span1 = styled.span`
    color: #ea2e49;
    text-decoration: line-through;

    @media only screen and (min-width : 320px) {
        
    }
`
export const Span3 = styled.span`
    float: right;
    width: 100px;
    height: 20px;
    overflow: hidden;
    background: url(https://bit.ly/1B4PjyM) top left no-repeat;
    background-position: 0 76%;

    @media only screen and (min-width : 320px) {
        
    }
    @media only screen and (min-width : 480px) {
        width: 100%;
        background-position: center 76%;
        margin-bottom: 5px;
    }
    @media only screen and (max-width : 480px) {
        
    }
    @media only screen and (max-width : 320px) {
        
    }
`
export const Div23 = styled.div`
    @media only screen and (min-width : 480px) {
        float: left;
        text-align: center;
        width: 100%;
    }
`
export const H5 = styled.h5`
    @media only screen and (min-width : 320px) {
        
    }
    @media only screen and (min-width : 480px) {
        font-size: 1.1em;
        font-weight: 500;
        line-height: 1;
        padding: 10px 0 0;
        text-align: center;
    }
    @media only screen and (max-width : 480px) {     

    }
    @media only screen and (max-width : 320px) {
       
    }
`
export const P = styled.p`
    @media (min-width : 320px) {
        

    }
`

export const Div2 = styled.div`
    @media only screen and (min-width : 320px) {
        

    }
    @media only screen and (max-width : 480px) {
        

    }
    @media only screen and (max-width : 320px) {
        

    }
    //
    
`
export const Div22 = styled.div`
    @media (min-width : 320px) {
        

    }
    @media only screen and (min-width : 480px) {
        text-align: center;
    }
    @media only screen and (max-width : 480px) {
        

    }
    @media only screen and (max-width : 320px) {
        

    }
`
export const Span2 = styled.span`
    @media only screen and (min-width : 320px) {
        

    }
`










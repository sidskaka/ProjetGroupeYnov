import styled from "styled-components";
import pixelscreen from "../../utils/pixelscreen";

const Div11 = styled.div`
    bottom: 0;

    position: absolute;
    bottom: -40%;
    left: 0;
    width: 100%;
    text-align: center;
    -webkit-transition: all .35s ease;
    -moz-transition: all .35s ease;
    transition: all .35s ease;

    color: #DF0404;
    background: rgba(255, 255, 255, 0.5);

    color: rgb(18, 150, 18);
    background: rgba(255, 255, 255, 0.5);

    color: #4DC8D3;;
    background: rgba(255, 255, 255, 0.5);
`
const Img = styled.img`
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
`
const Div1 = styled.div`
    position: relative;
    overflow: hidden;
    &:hover {
        bottom: 0;
    }
`
const Li = styled.li`
    display: inline-block;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    position: relative;
`
const Ul = styled.ul`
    display: block;
    float: left;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
`
const A1 = styled.a`
    text-decoration: none;
    display: block;
`
const A = styled.a`
    text-decoration: none;
`
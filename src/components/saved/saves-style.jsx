import styled from 'styled-components';
export const SavedContainer=styled.div`
    margin-top:43px;
    @media(min-width:600px){
        margin-top:86px;
    }
`;
export const Subtitle=styled.h2`
    font-weight:700;
    font-size:16px;
    line-height:24px;
    color:#676767;
    margin-bottom:14px;
`;
export const SavedGrid=styled.div`
    display:grid;
    grid-template-columns:repeat(1,1fr);
    row-gap:21px;
    column-gap:16px;
    @media(min-width:600px){
        grid-template-columns:repeat(2,1fr);
    }
`;
export const Element=styled.div`
    background-color: #E3E3E3;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    padding:8px 18px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #676767;
    div{
        flex:1;
        display:flex;
        flex-direction:row;
    }
    button{
        &:hover{
            background-color:transparent;
            cursor:pointer;
        }
    }
    button>p{
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #676767;
    }
`;
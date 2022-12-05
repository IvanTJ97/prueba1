import styled from 'styled-components';
export const GeneralContainer=styled.div`
    width:90%;
    margin:auto;
    @media(min-width:1060px){
        width:50%;
    }
`;
export const ConverterContainer=styled.div`
    border-radius:21px;
    background-color:#2E0039;
    color:#FFFFFF;
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
    display:grid;
    grid-template-columns:repeat(3,1fr);
    row-gap:24px;
    padding:11px 10px 27px 21px;
    @media(min-width:1060px){
        grid-template-columns:repeat(4,1fr);
    }
`;
export const TitleDiv=styled.div`
    grid-column:1/4;
    h2{
        font-weight:600;
        font-size:24px;
        line-height:36px;
    }
    @media(min-width:1060px){
        grid-column:1/5;
    }
`;
export const SelectorDiv=styled.div`
    grid-column:1/3;
    display:flex;
    select{
        background-color:#2E0039;
        color: #FFF;
        border-bottom:2px solid #FFF;
        font-size:14px;
        font-weight:400;
        flex:1;
        width:220px;
    }
    @media(min-width:1060px){
        grid-column:1/2;
    }
`;
export const BotonDiv=styled.div`
    button{
        background-color:transparent;
        padding-left:8px;
        &:hover{
            cursor:pointer;
        }
    }
`;
export const InputNumberDiv=styled.div`
    grid-column:1/3;
    display:flex;
    input{
        background-color:transparent;
        color:#FFF;
        text-align:right;
        border-bottom:2px solid #FFF;
        flex:1;
        width:220px;
    }
    @media(min-width:1060px){
        grid-column:3/4;
    }
`;
export const AlignDiv=styled.div`
    display:flex;
    align-items:center;
    p{
        font-weight:400;
        font-size:14px;
        line-height:21px; 
        padding-left:8px;
    }
`;
export const BotonCorazon=styled.div`
    display:flex;
    align-items:center;
    button{
        &:hover{
            cursor:pointer;
        }
    }
    @media(min-width:1060px){
        grid-column:1/3;
    }
`;
export const OutDiv=styled.div`
    display:flex;
    justify-content:end;
    output{
        font-weight:700;
        font-size:24px;
        line-height:36px;
        text-align:right;    
    }
`;
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.1rem;
    background:transparent;
    border:0.05rem solid var(--lightGrey);
    border-color:${props => (props.cart ? "var(--mainGrey)": "var(--lightGrey)")};
    border-radius:20px;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    color:${props => (props.cart? "var(--mainGrey)" : "var(--lightGrey)")};
    cursor:pointer;
    transition: all 0.5s ease-in-out;
    &:hover{
        background:${props => (props.cart? "var(--mainGrey)" : "var(--lightGrey)")};
        color:${props => (props.cart? "var(--mainLogo)" : "var(--mainGrey)")};
    }
    &:focus{
        outline:none;
    }
`

export const ButtonContainers = styled.button`
    text-transform:capitalize;
    font-size:1.1rem;
    background:transparent;
    border:0.05rem solid var(--mainGrey);
    border-radius:20px;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    color:var(--mainGrey);
    cursor:pointer;
    transition: all 0.5s ease-in-out;
    &:hover{
        background:var(--mainGrey);
        color:var(--lightGrey);
    }
    &:focus{
        outline:none;
    }
`

// export const ButtonContainerss = styled.button`
//     text-transform:capitalize;
//     font-size:1.1rem;
//     background:transparent;
//     border:0.05rem solid var(--mainGrey);
//     border-radius:20px;
//     padding: 0.2rem 0.5rem;
//     margin: 0.2rem 0.5rem 0.2rem 0;
//     color:var(--mainGrey);
//     cursor:pointer;
//     transition: all 0.5s ease-in-out;
//     &:hover{
//         background:var(--mainGrey);
//         color:var(--mainLogo);
//     }
//     &:focus{
//         outline:none;
//     }
// `
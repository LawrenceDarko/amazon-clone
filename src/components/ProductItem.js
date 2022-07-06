import React, {useState} from 'react';
import styled from 'styled-components';

const ProductItem = ({GameAccessories}) => {

    // const { ItemOneName, ItemOneImg, ItemTwoName, ItemTwoImg } = GameAccessories;
    // console.log(GameAccessories);
    // const [ItemOne, setItemOne] = useState(GameAccessories);

    // console.log(GameAccessoriesImg);
  return (
        <ProductItemContainer>
            <ItemTitle>
                <h1>Gaming accessories</h1>
            </ItemTitle>
            <ItemContent>
                <ItemContentRowOne>
                    <ItemOne>
                        <img src={GameAccessories?.ItemOneImg} alt=""/>
                        <p>{GameAccessories?.ItemOneName}</p>
                    </ItemOne>
                    <ItemTwo>
                        <img src={GameAccessories?.ItemTwoImg} alt=""/>
                        <p>{GameAccessories?.ItemTwoName}</p>
                    </ItemTwo>
                </ItemContentRowOne>
                <ItemContentRowTwo>
                    <ItemThree>
                        <img src={GameAccessories?.ItemThreeImg} alt=""/>
                        <p>{GameAccessories?.ItemThreeName}</p>
                    </ItemThree>
                    <ItemFour>
                        <img src={GameAccessories?.ItemFourImg} alt=""/>
                        <p>{GameAccessories?.ItemFourName}</p>
                    </ItemFour>
                </ItemContentRowTwo>
            </ItemContent>
            <SeeMore>
                <p>See more</p>
            </SeeMore>
        </ProductItemContainer>
  )
}

export default ProductItem

const ProductItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    height: 100%;
    width: 280px;
    margin-right: 20px;
    /* border: 1px solid red; */
    background-color: #fff;
`
const ItemTitle = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    height: 50px;
    align-items: center;
    top: 0;
    
    > h1 {
        font-size: 20px;
        font-weight: 600;
        margin-left: 20px;

    }
`
const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px solid blue; */
    height: 100%;

`
const SeeMore = styled.div`
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    height: 50px;
    align-items: center;
    bottom: 0;
    
    > p {
        font-size: 12px;
        font-weight: 400;
        margin-left: 20px;
        color: #20C2EC;

    }
`
const ItemOne = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* border: 1px solid red; */
    height: 100%;
    width: 50%;

    > img {
        height: 85px;
        width: 100%;
        padding-top:25px;
    }

    > p {
        font-size: 12px;
        font-weight: 400;
        margin-left: 20px;
        margin-top: 20px;
        color: #333;
    }

`
const ItemTwo = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    width: 50%;

    > img {
        height: 85px;
        width: 100%;
        padding-top:25px;
    }

    > p {
        font-size: 12px;
        font-weight: 400;
        margin-left: 20px;
        margin-top: 20px;
        color: #333;
    }
`
const ItemContentRowOne = styled.div`
    display: flex;
    flex-direction: row;
    height: 50%;
    /* padding: 10px; */
`
const ItemThree = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    width: 50%;


    > img {
        height: 85px;
        width: 100%;
        /* object-fit: cover; */
        padding-top:25px;
    }

    > p {
        font-size: 12px;
        font-weight: 400;
        margin-left: 20px;
        margin-top: 20px;
        color: #333;
    }
`
const ItemFour = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    width: 50%;

    > img {
        height: 85px;
        width: 100%;
        padding-top:25px;
    }

    > p {
        font-size: 12px;
        font-weight: 400;
        margin-left: 20px;
        margin-top: 20px;
        color: #333;
    }
`
const ItemContentRowTwo = styled.div`
    display: flex;
    flex-direction: row;
    height: 50%;
    /* padding: 10px; */
`
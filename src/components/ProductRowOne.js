import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const ProductRowOne = () => {

  const GameAccessories = {ItemOneName: 'Headset', ItemOneImg: '/Images/pro1.jpg', 
                           ItemTwoName: 'Keyboard', ItemTwoImg: '/Images/pro2.jpg',
                           ItemThreeName: 'Computer mice', ItemThreeImg: '/Images/pro3.jpg',
                           ItemFourName: 'Chairs', ItemFourImg: '/Images/pro4.jpg'};

  const ShopByCategory ={
                          ItemOneName: 'Computers & Accessories', ItemOneImg: '/Images/sc1.jpg',
                          ItemTwoName: 'Video Games', ItemTwoImg: '/Images/sc2.jpg',
                          ItemThreeName: 'Baby', ItemThreeImg: '/Images/sc3.jpg',
                          ItemFourName: 'Toys & Games', ItemFourImg: '/Images/sc4.jpg'};

 


  return (
    <ProductRowOneContainer>
        <ProductItem GameAccessories={GameAccessories}/>
        <ProductItem GameAccessories={ShopByCategory}/>
        <ProductItem />
        <ProductItem />
    </ProductRowOneContainer>
  )
}

export default ProductRowOne

const ProductRowOneContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 400px;
    position: absolute;
    margin-top: -290px;
    /* border: 1px solid green; */
    z-index: 1;
    margin-left: 20px;
    margin-right: 20px;

`

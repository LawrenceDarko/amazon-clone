import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import PageCarousel from '../components/PageCarousel';
import ProductRowOne from '../components/ProductRowOne';

const Products = () => {
  return (
      <>
        <Navbar />
        <PageCarousel />
        <PageContainer>
          <ProductRowOne />
          {/* <ProductRowOne /> */}
        </PageContainer>
        {/* <div>Products Page</div> */}
      </>
  )
}

export default Products

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    width: auto;
    height: auto;
    /* border: 1px solid red; */
    background-color: #EAEDED;
    position: relative;
`
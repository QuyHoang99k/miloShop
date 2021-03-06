import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import Gird from '../components/Grid'
import ProductCard from '../components/ProductCard'

import policy from '../assets/fake-data/policy'
import productData from '../assets/fake-data/products'
import productTopData from '../assets/fake-data/productTop'
import banner from '../assets/images/banner.png'


const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* slider */}
      <HeroSlider data={heroSliderData}
        control={true}
        // auto={true}
        timeOut={5000}
      />

      {/* end slider */}
      {/* policy section */}
      <Section>
        <SectionBody>
          <Gird
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              policy.map((item, index) => <Link key={index} to="/policy">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>)
            }
          </Gird>
        </SectionBody>
      </Section>
      {/* end policy section */}
      {/* best selling section */}
      <Section>
        <SectionTitle>
          Top sản phẩm bán chạy trong tuần
        </SectionTitle>
        <SectionBody>
          <Gird
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              productTopData.getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
          </Gird>
        </SectionBody>
      </Section>
      {/* end best selling section */}
      {/* new arrival section */}
      <Section>
        <SectionTitle>
          sản phẩm mới
        </SectionTitle>
        <SectionBody>
          <Gird
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              productData.getProducts(8).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
          </Gird>
        </SectionBody>
      </Section>
      {/*end new arrival section */}
      {/* banner */}
      <Section>
            <SectionBody>
              <Link to="/catalog">
                <img src={banner} alt=""/>
              </Link>
            </SectionBody>
      </Section>
      {/*end banner */}
      {/* popular product section  */}
      <Section>
        <SectionTitle>
          sản phẩm mới
        </SectionTitle>
        <SectionBody>
          <Gird
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              productData.getProducts(12).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              ))
            }
          </Gird>
        </SectionBody>
      </Section>
      {/*end popular product section  */}
    </Helmet>
  )
}

export default Home

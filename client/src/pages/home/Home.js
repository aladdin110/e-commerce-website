import React, { useEffect, useState } from 'react'
import Swiper from '../../components/swiper/swiper'
import CategoriessCard from './categoriessCard'
import TabProduct from '../../components/Product/TabProduct';
import PropTypes from "prop-types";
import { getProducts } from '../../Api';
import { useSelector } from 'react-redux';

export default function Home() {
    useEffect(() => {
      getProducts();
    },[])


  return (
    <div>
      <Swiper/>
      <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" />
      <TabProduct spaceBottomClass="pb-60" category="fashion" />
    </div>
  )
}
const FeatureIconSingle = ({ singleFeature }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="support-wrap mb-30">
        <div className="support-icon">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + singleFeature.image}
            alt=""
          />
        </div>
        <div className="support-content">
          <h5>{singleFeature.title}</h5>
          <p>{singleFeature.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconSingle.propTypes = {
  singleFeature: PropTypes.object
};
const FeatureIcon = ({ spaceTopClass, spaceBottomClass }) => {
  const featureIconData=[
    {
      "id": 1,
      "image": "./assets/img/icon-img/support-1.png",
      "title": "Free Shipping",
      "subtitle": "Free shipping on all order"
    },
    {
      "id": 2,
      "image": "./assets/img/icon-img/support-2.png",
      "title": "Support 24/7",
      "subtitle": "Free shipping on all order"
    },
    {
      "id": 3,
      "image": "./assets/img/icon-img/support-3.png",
      "title": "Money Return",
      "subtitle": "Free shipping on all order"
    },
    {
      "id": 4,
      "image": "./assets/img/icon-img/support-4.png",
      "title": "Order Discount",
      "subtitle": "Free shipping on all order"
    }
  ]
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {featureIconData.map(singleFeature => {
            return (
              <FeatureIconSingle
                singleFeature={singleFeature}
                key={singleFeature.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
FeatureIcon.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};
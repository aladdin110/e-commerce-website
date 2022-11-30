import React from 'react';
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import {categories} from "../../data/category/categories";
import "../../assets/styles/style.scss"
import ProductGrid from '../../components/Product/ProductGrid';

export default function Shop() {

  return (
    <div className='shop'>
        <h2 className="text-center"> Categories</h2>
        <Tab.Container defaultActiveKey="">
          <Nav
            variant="pills"
            className="product-tab-list pt-30 pb-55 text-center"
          >
            {categories.map((element, index) => {
              return (
                <>
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={element.value}>
                      <h4>{element.label}</h4>
                    </Nav.Link>
                  </Nav.Item>
                </>
              )
            })}
          </Nav>
          {categories.map((element, index) => {
            return (
              <>
                <Tab.Content key={index}>
                  <Tab.Pane eventKey={element.value}>
                    <div className="row">
                        <ProductGrid
                          category={element.value}
                          type="new"
                          limit={8}
                          spaceBottomClass="mb-25"
                        />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </>
            )
          })}
        </Tab.Container>
    </div>
  )
}

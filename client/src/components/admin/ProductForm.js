import {categories} from "../../data/category/categories";
import {tags} from "../../data/category/tags";
import Select from 'react-select';
import { lazy, useEffect, useState } from "react";
import { createProduct } from "../../Api";

const ProductForm = () => {
    //categories and tags options states
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    //handle categories selection
    const handleCategoriesChange = (values) => {
        var temp = []
        for (var i = 0; i< values.length; i++) {
            temp.push(values[i].value)
            //setSelectedCategories(selectedCategories => selectedCategories.push(values[i].value));
        }
        setSelectedCategories(temp)
        
    }
   
    //handle tags selection
    const handleTagsChange = (values) => {
        var temp = [];
        for (var i = 0; i< values.length; i++) {
            temp.push(values[i].value)
            //setSelectedTags(selectedTags => selectedTags.push(values[i].value));
        } 
        setSelectedTags(temp)
    }

    //store product form data
    var formData = new FormData();
    const handleProductSubmit = (e) => {
        e.preventDefault();
        //add selected categories data
        formData.append('categories', selectedCategories) 
         //add selected tags data
        formData.append('tags', selectedTags) 
        //add selected categories data
       /*  for (var i = 0; i< selectedCategories.length; i++) {
            formData.append('categories[]',selectedCategories[i].value)       
        } */
        //add selected tags data
       /*  for (var i = 0; i< selectedTags.length; i++) {
            formData.append('tags[]',selectedTags[i].value)  
        } */
        for (var i = 0; i < e.target.length; i++) {
            if (e.target[i].tagName != "BUTTON" && e.target[i].getAttribute("name") != "categories" 
            && e.target[i].getAttribute("name") != "tags" && !e.target[i].classList.contains("select__input")) 
            {
                if (e.target[i].getAttribute("type") == "file") {
                    for (var j = 0; j< e.target[i].files.length; j++) {
                        formData.append('images',e.target[i].files[j].name)
                    }
                }
                else {
                    formData.append(e.target[i].getAttribute("name"), e.target[i].value)
                }
            }
        }
        formData.set('images',formData.getAll('images'));
        console.log(formData);
        createProduct(formData);
    }

    //when add variation button is clicked, variation input fields group should be rendered
    const handleAddVariation = () => {
        console.log('add variation to be done');
    }
    

    return (
        <div className="product-form-container">
            <h3>Product Creation</h3>
            <div className="product-register-form mt-4">
                <form enctype="multipart/form-data" onSubmit={handleProductSubmit}>
                <input
                    type="text"
                    name="sku"
                    placeholder="Reference"
                    required
                />
                <input
                    type="text"
                    name="label"
                    placeholder="Label"
                    required
                />
                <div className="d-flex flex-column align-items-start select-box" >
                    <label htmlFor="categories">Select categories</label>
                    <Select
                        isMulti
                        name="categories"
                        id="categories"
                        options={categories}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleCategoriesChange}
                        required
                    />
                </div>
                <input
                    type="text"
                    name="shortDescription"
                    placeholder="Short Description"
                    required
                />
                <textarea
                    name="fullDescription"
                    placeholder="Full Description"
                    rows={2}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    required
                    
                />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    required
                />
                <div className="d-flex flex-column align-items-start select-box" >
                    <label htmlFor="tags">Select tags</label>
                    <Select
                        isMulti
                        name="tags"
                        id="tags"
                        options={tags}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleTagsChange}
                    />
                </div>
                <div className="d-flex flex-column align-items-start files-box">
                    <label htmlFor="images">Upload product images</label>
                    <input type="file" name="images[]" id="images" 
                        accept="image/png, image/gif, image/jpeg" multiple></input>
                </div>
                <button type="button" role="button" id ="add-variation" onClick={handleAddVariation}>Add product variation</button>
                <hr></hr>
                <div className="button-box">
                    <button type="submit" className="submit">
                    <span>Submit</span>
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm;
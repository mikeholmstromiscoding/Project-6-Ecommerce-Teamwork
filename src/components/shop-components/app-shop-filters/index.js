import React, {useState} from 'react'

import { Slider } from '@material-ui/core'

import './index.css'

import ColorCat from '../app-color-cat'

//Images
import Bexim from '../../../assets/img/brands/Bexim.png'
import Lighton from '../../../assets/img/brands/Lighton.png'
import Dismis from '../../../assets/img/brands/Dismis.png'
import Rosimo from '../../../assets/img/brands/Rosimo.png'
import Dallas from '../../../assets/img/brands/Dallas.png'
import ProductIcon from '../../../assets/img/product-img/product-icon.png'


export default function Filter({handleFilter}) {

  const [filter, setFilter] = useState({
    category: ["women", "men"],
    color: [],
    size: ["m"],
    brand: ["bexim"],
    onSale: true,
    inStock: true,
    priceRange: [10, 200]
  })

  const handleSelectFilterItem = (item, arr, key) => {
    let exists = arr.includes(item.toLowerCase())

    if(!exists) {
      setFilter({
        ...filter,
        [key]: [...arr, item.toLowerCase()]
      })
    } else {
      setFilter({
        ...filter,
        [key]: arr.filter(c => c !== item.toLowerCase())
      })
    }
  }

  const handlePriceChange = (event, newValue) => {
    setFilter({...filter, priceRange: newValue })
  }


  const handleActiveClass = (item, arr) => {
    return arr.includes(item.toLowerCase())
  }
 
  return (
      <div className="mr-5">
      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Product Categories</p>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('Men', filter.category) ? 'active' : '')} onClick={() => handleSelectFilterItem('Men', filter.category, "category")}>
          <p className="sorting-option-name">Men's</p>
          <span className="sorting-option-qnt">18</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('Women', filter.category) ? 'active' : '')}  onClick={() => handleSelectFilterItem('Women', filter.category, "category")}>
          <p className="sorting-option-name">Women's</p>
          <span className="sorting-option-qnt">23</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('Kid', filter.category) ? 'active' : '')}  onClick={() => handleSelectFilterItem('Kid', filter.category, "category")}>
          <p className="sorting-option-name">Kids</p>
          <span className="sorting-option-qnt">32</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('Hats', filter.category) ? 'active' : '')}  onClick={() => handleSelectFilterItem('Hats', filter.category, "category")}>
          <p className="sorting-option-name">Hats</p>
          <span className="sorting-option-qnt">12</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('Sunglasses', filter.category) ? 'active' : '')}  onClick={() => handleSelectFilterItem('Sunglasses', filter.category, "category")}>
          <p className="sorting-option-name">Sunglasses</p>
          <span className="sorting-option-qnt">15</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('Shoes', filter.category) ? 'active' : '')}  onClick={() => handleSelectFilterItem('Shoes', filter.category, "category")}>
          <p className="sorting-option-name">Shoes</p>
          <span className="sorting-option-qnt">12</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('Watches', filter.category) ? 'active' : '')}  onClick={() => handleSelectFilterItem('Watches', filter.category, "category")}>
          <p className="sorting-option-name">Watches</p>
          <span className="sorting-option-qnt">20</span>
        </div>
      </div>
      
      <div className="sorting-categories">
        <p className="text-theme-color weight-medium mb-3">Filter by Price</p>
        <div className="form-group">
        <Slider
          value={filter.priceRange}
          onChange={handlePriceChange}
          min={0}
          max={200}
          step={5}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          // getAriaValueText={valuetext}
        />
        </div>
        <span className="d-flex justify-content-between">
          <p>Price: ${filter.priceRange[0]} - ${filter.priceRange[1]}</p>
          <button className="btn price-filter-btn" onClick={() => handleFilter(filter)}>Filter</button>
        </span>
      </div>

      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Filter by Color</p>
        <ColorCat color={'black'} handleColor={handleSelectFilterItem} handleActiveClass={handleActiveClass} colorArr={filter.color}/>
        <ColorCat color={'gray'} handleColor={handleSelectFilterItem} handleActiveClass={handleActiveClass} colorArr={filter.color}/>
        <ColorCat color={'red'} handleColor={handleSelectFilterItem} handleActiveClass={handleActiveClass} colorArr={filter.color}/>
        <ColorCat color={'green'} handleColor={handleSelectFilterItem} handleActiveClass={handleActiveClass} colorArr={filter.color}/>
        <ColorCat color={'orange'} handleColor={handleSelectFilterItem} handleActiveClass={handleActiveClass} colorArr={filter.color}/>
        <ColorCat color={'brown'} handleColor={handleSelectFilterItem} handleActiveClass={handleActiveClass} colorArr={filter.color}/>
      </div>

      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Filter by Size</p>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('XS', filter.size) ? 'active' : '')} onClick={() => handleSelectFilterItem('XS', filter.size, "size")}>
          <p className="sorting-option-name">XS</p>
          <span className="sorting-option-qnt">18</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('S', filter.size) ? 'active' : '')} onClick={() => handleSelectFilterItem('S', filter.size, "size")}>
          <p className="sorting-option-name">S</p>
          <span className="sorting-option-qnt">23</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('M', filter.size) ? 'active' : '')} onClick={() => handleSelectFilterItem('M', filter.size, "size")}>
          <p className="sorting-option-name">M</p>
          <span className="sorting-option-qnt">32</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('L', filter.size) ? 'active' : '')} onClick={() => handleSelectFilterItem('L', filter.size, "size")}>
          <p className="sorting-option-name">L</p>
          <span className="sorting-option-qnt">12</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('XL', filter.size) ? 'active' : '')} onClick={() => handleSelectFilterItem('XL', filter.size, "size")}>
          <p className="sorting-option-name">XL</p>
          <span className="sorting-option-qnt">15</span>
        </div>
        <div className={"sorting-option-category d-flex justify-content-between " + (handleActiveClass('XLL', filter.size) ? 'active' : '')} onClick={() => handleSelectFilterItem('XLL', filter.size, "size")}>
          <p className="sorting-option-name">XXL</p>
          <span className="sorting-option-qnt">12</span>
        </div>
      </div>

      
      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Filter by Brand</p>
        <div className="d-flex justify-content-between mt-3">
          <span className={"brand-filter-span " + (handleActiveClass('Bexim', filter.brand) ? 'active-brand' : '')} onClick={() => handleSelectFilterItem('Bexim', filter.brand, "brand")}><img src={Bexim} alt="" /></span>
          <span className={"brand-filter-span " + (handleActiveClass('Lighton', filter.brand) ? 'active-brand' : '')} onClick={() => handleSelectFilterItem('Lighton', filter.brand, "brand")}><img src={Lighton} alt=""/></span>
        </div>
        <div className="d-flex justify-content-between">
          <span className={"brand-filter-span " + (handleActiveClass('Dismis', filter.brand) ? 'active-brand' : '')} onClick={() => handleSelectFilterItem('Dismis', filter.brand, "brand")}><img src={Dismis} alt="" /></span>
          <span className={"brand-filter-span " + (handleActiveClass('Rosimo', filter.brand) ? 'active-brand' : '')} onClick={() => handleSelectFilterItem('Rosimo', filter.brand, "brand")}><img src={Rosimo} alt="" /></span>
        </div>
        <div className="d-flex justify-content-between">
          <span className={"brand-filter-span " + (handleActiveClass('Dallas', filter.brand) ? 'active-brand' : '')} onClick={() => handleSelectFilterItem('Dallas', filter.brand, "brand")}><img src={Dallas} alt="" /></span>
          {/* <span className={"brand-filter-span " + (handleActiveClass('Bexim', filter.brand) ? 'active-brand' : '')} onClick={() => handleSelectFilterItem('Bexim', filter.brand, "brand")}><img src={Bexim} alt="" /></span> */}
        </div>
      </div>

      <div className="sorting-categories">
        <p className="text-theme-color weight-medium mb-2">Product Status</p>
        <div className="custom-control custom-checkbox mb-2">  
          <input type="checkbox" className="custom-control-input" id="sale" checked={filter.onSale} onChange={() => setFilter({...filter, onSale: !filter.onSale})}/>  
          <label className="custom-control-label pl-1"  htmlFor="sale" >On Sale</label>  
        </div>
        <div className="custom-control custom-checkbox">  
          <input type="checkbox" className="custom-control-input" id="stock" checked={filter.inStock} onChange={() => setFilter({...filter, inStock: !filter.inStock})}/>  
          <label className="custom-control-label pl-1"  htmlFor="stock" >In Stock</label>  
        </div>
      </div>
      
      <div className="sorting-categories">
        <p className="text-theme-color weight-medium">Top Rated Products</p>
        <div className="d-flex align-items-center mt-2">
          <img className="product-icon-small" src={ProductIcon} alt="small product" />
          <div className="d-flex flex-column justify-content-between ml-2">
            <p>Circle pattern girls...</p>
            <div className="text-theme-color">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p className="weight-medium">$190</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <img className="product-icon-small" src={ProductIcon} alt="small product"/>
          <div className="d-flex flex-column justify-content-between ml-2">
            <p>Circle pattern girls...</p>
            <div className="text-theme-color">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p className="weight-medium">$190</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <img className="product-icon-small" src={ProductIcon} alt="small product"/>
          <div className="d-flex flex-column justify-content-between ml-2">
            <p>Circle pattern girls...</p>
            <div className="text-theme-color">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p className="weight-medium">$190</p>
          </div>
        </div>
      </div>
    </div>
  )
}

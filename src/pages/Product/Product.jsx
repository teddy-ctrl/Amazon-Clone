import React from "react";
import classes from "./product.module.css";
import { MdStar, MdStarBorder, MdStarHalf } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import productsData from "./products.json"; // Import the JSON data

// Helper for rendering stars
const renderStars = (rating) => {
  const stars = [];
  const RATING_MAX = 5;
  // Ensure rating is a valid number between 0 and RATING_MAX
  const safeRating = (typeof rating === 'number' && !isNaN(rating)) 
                     ? Math.max(0, Math.min(rating, RATING_MAX)) 
                     : 0;

  const fullStars = Math.floor(safeRating);
  const halfStar = safeRating % 1 >= 0.5;
  const emptyStars = RATING_MAX - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<MdStar key={`full-${i}`} className={classes.starIcon} />);
  }
  if (halfStar) {
    stars.push(<MdStarHalf key="half" className={classes.starIcon} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<MdStarBorder key={`empty-${i}`} className={classes.starIcon} />);
  }
  return stars;
};

const ProductCard = ({ product }) => {
  return (
    <div className={classes.productCard}>
      <div className={classes.productImageContainer}>
        {product.isAmazonChoice && <span className={classes.amazonChoiceBadge}>Amazon's Choice</span>}
        {product.isBestSeller && <span className={`${classes.bestSellerBadge} ${product.isAmazonChoice ? classes.bestSellerWithChoice : ''}`}>Best Seller</span>}
        <img 
          src={product.image || "https://via.placeholder.com/150/CCCCCC/FFFFFF?Text=No+Image"} 
          alt={product.title || "Product Image"} 
          className={classes.productImage} 
        />
      </div>
      <div className={classes.productInfo}>
        <h3 className={classes.productTitle}>{product.title || "Untitled Product"}</h3>
        <div className={classes.productRating}>
          {renderStars(product.rating)}
          <span className={classes.reviewCount}>
            ({typeof product.reviews === 'number' ? product.reviews.toLocaleString() : 0})
          </span>
        </div>
        <div className={classes.productPrice}>
          <span className={classes.currentPrice}>
            {typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : "Price unavailable"}
          </span>
          {typeof product.oldPrice === 'number' && (
            <span className={classes.oldPrice}>
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <p className={classes.productShipping}>{product.shipping || "Shipping info unavailable"}</p>
        <p className={classes.productDelivery}>{product.delivery || "Delivery info unavailable"}</p>
      </div>
    </div>
  );
};


const Product = () => {
  // Use the imported data. In a real app, this might come from an API call.
  const dummyProducts = productsData;

  return (
    <div className={classes.productPage}>
      {/* Top bar for results count and sorting */}
      <div className={classes.resultsBar}>
        <div className={classes.resultsCount}>
          1-{Math.min(16, dummyProducts.length)} of over 20,000 results for "<strong>electronics</strong>"
        </div>
        <div className={classes.sortByDropdown}>
          <label htmlFor="sort-by">Sort by: </label>
          <select id="sort-by" name="sort-by" className={classes.sortSelect}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Avg. Customer Review</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>
      </div>

      <div className={classes.productPageLayout}>
        {/* Left Sidebar for Filters */}
        <div className={classes.productLeftMenu}>
          <div className={classes.filterSection}>
            <h3 className={classes.filterTitle}>Department</h3>
            <ul className={classes.filterList}>
              <li><a href="#">Electronics</a></li>
              <li><IoIosArrowForward className={classes.arrowIcon}/><a href="#">Computers & Accessories</a></li>
              <li className={classes.subItem}><a href="#">Laptops</a></li>
              <li className={classes.subItem}><a href="#">Monitors</a></li>
              <li><a href="#">Cell Phones & Accessories</a></li>
              <li><a href="#">Books</a></li>
              <li><a href="#">Clothing, Shoes & Jewelry</a></li>
            </ul>
          </div>

          <div className={classes.filterSection}>
            <h3 className={classes.filterTitle}>Avg. Customer Review</h3>
            <ul className={classes.filterList}>
              <li className={classes.starFilterItem}>
                {renderStars(4)} <MdStarBorder className={classes.starIcon} /> & Up
              </li>
              <li className={classes.starFilterItem}>
                {renderStars(3)} <MdStarBorder className={classes.starIcon} /><MdStarBorder className={classes.starIcon} /> & Up
              </li>
              <li className={classes.starFilterItem}>
                {renderStars(2)} <MdStarBorder className={classes.starIcon} /><MdStarBorder className={classes.starIcon} /><MdStarBorder className={classes.starIcon} /> & Up
              </li>
              <li className={classes.starFilterItem}>
                {renderStars(1)} <MdStarBorder className={classes.starIcon} /><MdStarBorder className={classes.starIcon} /><MdStarBorder className={classes.starIcon} /><MdStarBorder className={classes.starIcon} /> & Up
              </li>
            </ul>
          </div>
          
          <div className={classes.filterSection}>
            <h3 className={classes.filterTitle}>Deals</h3>
            <ul className={classes.filterList}>
              <li><a href="#">All Discounts</a></li>
              <li><a href="#">Today's Deals</a></li>
            </ul>
          </div>

          <div className={classes.filterSection}>
            <h3 className={classes.filterTitle}>Price</h3>
            <ul className={classes.filterList}>
              <li><a href="#">Under $25</a></li>
              <li><a href="#">$25 to $50</a></li>
              <li><a href="#">$50 to $100</a></li>
              <li><a href="#">$100 to $200</a></li>
              <li><a href="#">$200 & Above</a></li>
            </ul>
            <div className={classes.priceInputGroup}>
              <input type="text" placeholder="$ Min" className={classes.priceInput} />
              <span>-</span>
              <input type="text" placeholder="$ Max" className={classes.priceInput} />
              <button className={classes.priceGoButton}>Go</button>
            </div>
          </div>

          <div className={classes.filterSection}>
            <h3 className={classes.filterTitle}>Condition</h3>
            <ul className={classes.filterList}>
              <li><label><input type="checkbox" name="condition" value="new" /> New</label></li>
              <li><label><input type="checkbox" name="condition" value="used" /> Used</label></li>
            </ul>
          </div>

          <div className={classes.filterSection}>
            <h3 className={classes.filterTitle}>Brand</h3>
            <ul className={classes.filterList}>
              <li><label><input type="checkbox" name="brand" value="apple" /> Apple</label></li>
              <li><label><input type="checkbox" name="brand" value="samsung" /> Samsung</label></li>
              <li><label><input type="checkbox" name="brand" value="sony" /> Sony</label></li>
              <li><label><input type="checkbox" name="brand" value="lg" /> LG</label></li>
            </ul>
          </div>
        </div>

        {/* Right Content Area for Products */}
        <div className={classes.productRightContent}>
          <div className={classes.sponsoredMessage}>
            <span>Sponsored <span title="About Sponsored Products">i</span></span>
          </div>
          <div className={classes.productGrid}>
            {dummyProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* Pagination would go here */}
          <div className={classes.pagination}>
            <a href="#" className={classes.pageLink}>« Previous</a>
            <a href="#" className={`${classes.pageLink} ${classes.active}`}>1</a>
            <a href="#" className={classes.pageLink}>2</a>
            <a href="#" className={classes.pageLink}>3</a>
            <span className={classes.pageEllipsis}>...</span>
            <a href="#" className={classes.pageLink}>10</a>
            <a href="#" className={classes.pageLink}>Next »</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
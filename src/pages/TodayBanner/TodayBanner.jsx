import React from 'react'
import classes from './TodayBanner.module.css'

const TodayBanner = () => {
  return (
    <div className={classes.todaywrapper}>
      <div className={classes.todayBanner}>
        <div className={classes.todayCard}>
          <div className={classes.todayTitle}>
            Today`s Deals`
          </div>
          <div className={classes.todayItems}>

            <div className={classes.todayScroll}>

              <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />
              </div>

              <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />
              </div>

              <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />
              </div>

              <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />
              </div>

              <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />
              </div>

              <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />
              </div>

              <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />
              </div>

              <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />
              </div>

              <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />
              </div>



               {/* <div className={classes.todayDetailItems}>
                <img className={classes.todayItemsImg} src="https://m.media-amazon.com/images/I/81P3zGtY2GL._AC_SY200_.jpg" alt="" />

                <div className={classes.todayTtemsDetail}>
                  <div className={classes.todayTtemsUp}> 
                    <div className={classes.todayTtemsOff}>
                        Up to 20% off
                    </div>
                    <div className={classes.todayStar}>
                      Limited Time Deal
                    </div>
                  </div>
                  <div className={classes.todaydis}>
                    iQOO z9 5G | Starting @17999 includ..
                  </div>
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodayBanner


// const TodayBanner = () => {
//   const [dealImageUrls, setDealImageUrls] = useState([]);

//   useEffect(() => {
   
//     setDealImageUrls(initialImageUrls);

    
//   }, []);

//   return (
//     <div className={classes.todaywrapper}>
//       <div className={classes.todayBanner}>
//         <div className={classes.todayCard}>
//           <div className={classes.todayTitle}>
//             Today`s Deals` 
//           </div>
//           <div className={classes.todayItems}>
//             <div className={classes.todayScroll}>
             
//               {dealImageUrls.map((imageUrl, index) => (
//                 <div key={index} className={classes.todayDetailItems}> 
//                   <img className={classes.todayItemsImg} src={imageUrl} alt={`Deal item ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
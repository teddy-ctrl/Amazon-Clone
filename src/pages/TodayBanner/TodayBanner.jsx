import React, { useRef, useState, useEffect } from 'react';
import classes from './TodayBanner.module.css';
import TodayDeals from './TodayDeals.json';

const TodayBanner = () => {
    // useRef to get a reference to the scrollable DOM element
    const scrollRef = useRef(null);

    // useState to manage the visibility of the navigation buttons
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    // This function handles the logic for showing/hiding buttons based on scroll position
    const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Show "Previous" button if we are not at the beginning
        setShowPrev(scrollLeft > 0);

        // Show "Next" button if we are not at the end
        // A small buffer (e.g., 1px) is used to handle sub-pixel rendering issues
        setShowNext(scrollLeft < scrollWidth - clientWidth - 1);
    };

    // This function scrolls the container
    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            // Add an event listener to check the scroll position whenever it changes
            scrollElement.addEventListener('scroll', handleScroll);

            // Initial check in case the content doesn't fill the container
            handleScroll();

            // Cleanup function to remove the event listener when the component unmounts
            return () => {
                scrollElement.removeEventListener('scroll', handleScroll);
            };
        }
    }, [TodayDeals]); // Re-run if the deals data changes

    return (
        <div className={classes.todaywrapper}>
            <div className={classes.todayBanner}>
                <div className={classes.todayCard}>
                    <div className={classes.todayTitle}>
                        Today's Deals
                    </div>
                    {/* The main container for the scroller and buttons */}
                    <div className={classes.todayItems}>
                        
                        {/* "Previous" Button */}
                        {showPrev && (
                            <button
                                className={`${classes.scrollButton} ${classes.prevButton}`}
                                onClick={() => scroll(-350)} // Scroll left
                                aria-label="Previous deals"
                            >
                                ❮
                            </button>
                        )}

                        {/* The actual scrollable list */}
                        <div className={classes.todayScroll} ref={scrollRef}>
                            {TodayDeals.today.map((item, index) => (
                                <div key={index} className={classes.todayDetailItems}>
                                    <img className={classes.todayItemsImg} src={item.imgs} alt={item.itemTitle} />
                                    {/* You can add more details here */}
                                    <div className={classes.todaydis}>{item.itemTitle}</div>
                                </div>
                            ))}
                        </div>

                        {/* "Next" Button */}
                        {showNext && (
                            <button
                                className={`${classes.scrollButton} ${classes.nextButton}`}
                                onClick={() => scroll(350)} // Scroll right
                                aria-label="Next deals"
                            >
                                ❯
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodayBanner;
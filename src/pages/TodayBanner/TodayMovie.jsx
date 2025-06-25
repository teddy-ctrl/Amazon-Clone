import React, { useRef, useState, useEffect } from 'react';
import classes from './TodayBanner.module.css'; // Assuming you want to reuse the same styles
// FIX 1: Renamed the imported JSON data to avoid a name collision.
import TodayMovieData from './todymovie.json';

const TodayMovie = () => {
    const scrollRef = useRef(null);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    const handleScroll = () => {
        // Ensure scrollRef.current exists before destructuring
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowPrev(scrollLeft > 0);
        setShowNext(scrollLeft < scrollWidth - clientWidth - 1);
    };

    const scroll = (scrollOffset) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
            // Run the check once on mount
            handleScroll();
            return () => {
                scrollElement.removeEventListener('scroll', handleScroll);
            };
        }
        // FIX 3: The dependency array should point to the imported data, not the component itself.
    }, [TodayMovieData]); 

    return (
        <div className={`${classes.todaywrapper} ${classes.movieSection}`}>
            <div className={classes.todayBanner}>
                <div className={classes.todayCard}>
                    <div className={classes.todayTitle}>
                        Most wished for in Movies & TV
                    </div>
                    <div className={classes.todayItems}>
                        {showPrev && (
                            <button
                                className={`${classes.scrollButton} ${classes.prevButton}`}
                                onClick={() => scroll(-350)}
                                aria-label="Previous deals"
                            >
                                ❮
                            </button>
                        )}
                        <div className={classes.todayScroll} ref={scrollRef}>
                            {/* FIX 2: Use the newly named variable `TodayMovieData` to access the JSON content. */}
                            {TodayMovieData.movie.map((item, index) => (
                                <div key={index} className={classes.todayDetailItems}>
                                    <img className={classes.todayItemsImg} src={item.imgs} alt={item.itemTitle} />
                                    <div className={classes.todaydis}>{item.itemTitle}</div>
                                </div>
                            ))}
                        </div>
                        {showNext && (
                            <button
                                className={`${classes.scrollButton} ${classes.nextButton}`}
                                onClick={() => scroll(350)}
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

export default TodayMovie;
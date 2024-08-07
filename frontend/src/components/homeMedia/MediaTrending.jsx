import React from 'react';
import { useQuery } from 'react-query';
import { Vortex } from "react-loader-spinner";

// from custom files 
import Media from '../mediaComponents/Media';
import fetchMultiMedia from '../../utils/fetchMultiMedia';

// trending media components  
function MediaTrending() {

    // fetch media 
    const {
        data: mediaData,
        isLoading,
        isError,
    } = useQuery([1, 'trending'], () => fetchMultiMedia(1, "trending"));


    // render loading or error 
    if (isLoading) return <Vortex height={40} width={40} />;
    if (isError) return <div>Error fetching data</div>;

    
    // css style 
    const containerStyle = "p-4 mt-2 flex flex-col gap-6";
    const headingStyle = "text-2xl md:text-4xl font-bold";
    const wrapperStyle = "flex sm:grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 overflow-x-scroll scrollbar-corner-transparent scrollbar scrollbar-thumb-darkRed scrollbar-track-transparent"


    return (
        <>
            <div className={containerStyle}>
                <h1 className={headingStyle}> Trending Movies & Tv Shows</h1>
                <div
                    className={wrapperStyle}
                    style={{ gridAutoColumns: "minmax(25vw, auto)" }}
                >
                    <Media mediaData={mediaData} />
                </div>
            </div>
        </>
    )
}

export default MediaTrending;
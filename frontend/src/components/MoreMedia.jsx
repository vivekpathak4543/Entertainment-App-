import React from "react";
import { useQuery } from 'react-query';
import { Vortex } from "react-loader-spinner";

import Media from "./mediaComponents/Media";
import fetchMultiMedia from "../utils/fetchMultiMedia";


function MoreMedia({ currentPage, mediaType }) {

    // fetching media 
    const {
        data: mediaData,
        isLoading,
        isError,
    } = useQuery([currentPage, mediaType], () => fetchMultiMedia(currentPage, mediaType));

    // render loading or error 
    if (isLoading) return < Vortex height={40} width={40} />;
    if (isError) return <div>Error fetching data</div>;

    // css style 
    const wrapperStyle = "grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"

    // Render Movie media 
    return (
        <div className={wrapperStyle}>
            <Media mediaData={mediaData} />
        </div>
    );
}

export default MoreMedia
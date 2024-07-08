import React from 'react'
import MediaRecommend from '../components/homeMedia/MediaRecommend';
import MediaTrending from '../components/homeMedia/MediaTrending';


const Home = () => {
  return (
    <div>
      <MediaTrending />
      <MediaRecommend />
    </div>
  )
}

export default Home


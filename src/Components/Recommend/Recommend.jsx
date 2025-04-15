import React, { useEffect, useState } from 'react'
import './Recommend.css'

import { API_KEY,valur_converter } from '../../data'

import { Link } from 'react-router-dom'

const Recommend = ({categoryId}) => {

    const[apidata,setApiData]=useState([]);

    const fetchData = async()=>{
        const relatedVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&maxResults=50&key=${API_KEY}
`
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='recommended'>
        {apidata.map((item,index)=>{
            return(<Link to = {`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <div key={index} className="vid-info">
                    <h4>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                   <p>{valur_converter(item.statistics.viewCount)}Views</p>
                </div>
            </Link>)
        })}
        
        
    </div>
  )
}

export default Recommend
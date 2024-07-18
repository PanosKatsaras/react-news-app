import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";
//News component
const News = ({category}) => {
    // State to store the fetched news articles
    const [articles,setArticles] = useState([]);
    // Fetches news articles based on the provided category on component mount and category change
    useEffect(()=>{
        const API_KEY = import.meta.env.VITE_NEWS_API_KEY
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));
    },[category]) // Dependency array ensures useEffect runs on category change

  return (
    // This section displays the latest news articles 
    // With the map function iterates over each news object in the articles array.
    //Spreads the news object's properties as props to the NewsItem component, making them accessible as individual props
    <div>
        <h2 className="text-center mt-2">Latest <span className="badge bg-danger mt-2">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default News
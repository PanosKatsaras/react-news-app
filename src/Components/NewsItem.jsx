import image from '../assets/news-logo.png'

// NewsItem component that takes four props: title, description, src and url 
// These props will contain information about a news article.
const NewsItem = ({title,description,src,url}) => {
  // Renders a single news item as a card with image, title, description, and a read more link.
  // Handles missing image and description.
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{maxWidth:"300px"}}>
      <img src={src?src:image} style={{height:"200px",width:"280px"}} className="card-img-top" alt="logo"/>
      <div className="card-body" style={{height:"70%"}}>
        <h5 className="card-title">{title.slice(0,70)}</h5>
        <p className="card-text">{description?description.slice(0,110):"We get the news from a variety of places these days, including newspapers, websites and social media."}</p>
        <a href={url} target="_blank" className="btn btn-danger">Read More</a>
      </div>
    </div>
  )
}

export default NewsItem

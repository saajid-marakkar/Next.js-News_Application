import styles from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';


export async function getServerSideProps(context)
{
    console.log(context)
    const pageNumber = context.query.id
    console.log(pageNumber)
    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
          props: {
            articles: [],
            pageNumber: 1,
          },
        };
    }
    else{
        const apiResponse = await fetch(
            `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
              },
            },
          ).then(res => res.json());
        console.log(apiResponse)
    
        
        const { articles } = apiResponse;
        return{
            props:{
                pageNumber: Number.parseInt(pageNumber),
                articles: articles
            }
        }
    }
}
   
function News(props) {
    const router = useRouter();

    return (
        <>
        <div className={styles.main}>
          {props.articles.map((article, index) => (
            <div key={index} className={styles.post}>
              <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
              <p>{article.description}</p>
              {!!article.urlToImage && <img src={article.urlToImage} />}
            </div>
          ))}
        </div>
        <div className={styles.paginator}>
          <button
            className={props.pageNumber === 1 ? styles.disabled : styles.active && "btn btn btn-outline-secondary"}
            onClick={() => {
              if (props.pageNumber > 1) 
              {
                router.push(`/feed/${props.pageNumber - 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Prev Page
          </button>

          <button className="btn btn-outline-secondary">#{props.pageNumber}</button>

          <button
            className={props.pageNumber === 5 ? styles.disabled : styles.active && "btn btn btn-outline-secondary"}
            onClick={() => {
              if (props.pageNumber < 5) 
              {
                router.push(`/feed/${props.pageNumber + 1}`).then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Next Page
          </button>
        </div>
        </>
        

    )
}

export default News

import style from "../assets/scss/home.module.scss"
import ArticleSection from '../components/ArticleSection'
import queryGraphql from '../components/queryGraphql'
import { HOME_PAGE_ARTICLE } from '../graphql/home-page-article'

export default function Home({ articleList }) {
  return (
    <div className="text-3xl font-bold underline">
      <div className={style.home}>
				<div className={style.home_left}>

        </div>
        <div className={style.home_middle}>
          {articleList?.map((articleData, index) => (
            <ArticleSection key={index} articleData={articleData} />
          ))}
        </div>
        <div className={style.home_right}>

        </div>
      </div>
      
    </div>
  )
}

export async function getServerSideProps({ res, query, resolvedUrl }) {
  const { data } = await queryGraphql(HOME_PAGE_ARTICLE)
    return {
      props: {
        articleList: data?.getHomePageArticle?.aResults
      }
    }
}

import { gql } from "@apollo/client";

export const HOME_PAGE_ARTICLE = gql`
  query GetHomePageArticle($input: getHomePageArticleInput) {
    getHomePageArticle(input: $input) {
      nTotal
      aResults {
        eType
        sName
        iSeriesId
        sSlug
        bScoreCard
        iCategoryId
        oScore {
          nLatestInningNumber
          sSubtitle
          dStartDate
          oVenue {
            sLocation
          }
          oTeamScoreA {
            oTeam {
              oImg {
                sUrl
                sText
              }
              sAbbr
              sTitle
            }
            sScores
            sScoresFull
          }
          oTeamScoreB {
            sScoresFull
            sScores
            oTeam {
              oImg {
                sUrl
              }
              sAbbr
              sTitle
            }
          }
          oSeo {
            sSlug
          }
          sStatusStr
          sStatusNote
          sLiveGameStatusStr
          oSeries {
            sTitle
            nTotalTeams
          }
          oSeriesSeo {
            aCustomSeo {
              sSlug
              eTabType
            }
          }
        }
        aArticle {
          sType
          _id
          sTitle
          sSubtitle
          sSrtTitle
          oSeo {
            sSlug
          }
          sDescription
          oImg {
            sUrl
            sText
            sCaption
            sAttribute
          }
          nDuration
          dPublishDate
          dPublishDisplayDate
          oCategory {
            sName
            _id
            oSeo {
              sSlug
            }
          }
          oTImg {
            sUrl
            sText
            sCaption
            sAttribute
          }
        }
      }
    }
  }
`
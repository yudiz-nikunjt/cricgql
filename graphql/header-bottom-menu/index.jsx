import { gql } from "@apollo/client";

export const HEADER_BOTTOM_MENU = gql`
  query Results {
    getMenuTree {
      aResults {
        sTitle
        sSlug
        _id
        oChildren {
          _id
          sSlug
          sTitle
        }
        eMenuType
        eUrlTarget
        sUrl
      }
    }
  }
`
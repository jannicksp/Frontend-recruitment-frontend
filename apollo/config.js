import cache from './cache'

export default function (ctx) {
  return {
    httpEndpoint: `https://frontend-recruitment-backend.herokuapp.com/graphql`,
    cache
  }
}

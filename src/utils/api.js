const webUrl = process.env.BASE_API
const URLS= {
        notificationHub: webUrl + '/notificationHub',
        authors:webUrl + '/metadata/twitter_authors',
        keywords:webUrl + '/metadata/recommend_keywords',
        basicInfo: webUrl + '/membership/basic',
        logIn:webUrl +'/login',
        logoOut:webUrl +'/logout'
      
}
export default URLS
/*
  This is a class to store all Perlego URLs organized and maintenable
*/
class PerlegoURL {
    // Main application paths
    get login() {
      return '/login';
    }
    get home() {
      return '/';
    }
    get signUp() {
      return '/sign-up';
    }
    get pricing() {
      return '/pricing';
    }
    get discover() {
      return '/discover';
    }
    get reading() {
      return '/reading';
    }
    get go() {
      return '/go';
    }
    get wantToRead() {
      return '/want-to-read';
    }
    get completed() {
      return '/completed';
    }
    get book() {
      return '/book';
    }
    get notebook() {
      return '/notebook';
    }
    get workspace() {
      return '/workspace';
    }
    get search() {
      return '/search';
    }
    get ereader() {
      return '/ereader';
    }
    get booksTab() {
      return '/search?tab=books';
    }
    get topicsTab() {
      return '/search?tab=topics&page=1';
    }
    get publishersTab() {
      return '/search?tab=publisher';
    }
    get browseHistory() {
      return '/browse/history';
    }
    get browseMathematics() {
      return '/browse/mathematics';
    }
    get browseMedicine() {
      return '/browse/medicine';
    }
    get browsePhilosophers() {
      return '/browse/philosophy/philosophers';
    }
    get browseBusiness() {
      return '/browse/business';
    }
    get settings() {
      return '/settings';
    }
    get profile() {
      return '/profile';
    }
    get cancellation() {
      return '/cancellation';
    }
    get paymentDetails() {
      return '/payment-details';
    }
    get confimation() {
      return '/confirmation';
    }
    get sitemap() {
      return '/sitemaps/books?page=0';
    }
    get sitemapSpanish() {
      return '/es/sitemaps/books?page=0';
    }
    get sitemapTopics() {
      return '/sitemaps/topics';
    }
    get sitemapSubTopics() {
      return '/sitemaps/subtopics';
    }
    get privacy() {
      return '/privacy-policy';
    }
    get tac() {
      return '/tac';
    }
    get mission() {
      return '/mission';
    }
    get cookies() {
      return '/cookies';
    }
    get faq() {
      return '/faq';
    }
    get notFound() {
      return '/not-found';
    }
    get comingSoon() {
      return '/coming-soon';
    }
    get contentUnavailable() {
      return '/content-unavailable';
    }
    get notAnExistingPage() {
      return '/not-an-existing-page';
    }
    get accessViaLMS() {
      return '/accessing-via-lms?redirect_url=';
    }
    get lmsBookRedirect() {
      return '/book/730859/extreme-cities-the-peril-and-promise-of-urban-life-in-the-age-of-climate-change-pdf&lmstoken=';
    }
    // Various qa test paths
    get qaLanguageTopic() {
      return '/browse/languages-linguistics';
    }
    get qaWorkspacePublic() {
      return '/workspace/61691';
    }
    get qaBookPageAncientWorld() {
      return '/book/1343296/history-and-international-relations-from-the-ancient-world-to-the-21st-century-pdf';
    }
    get qaSamplePublisherPage() {
      return '/publisher/462/wiley';
    }
  }
  
  export default new PerlegoURL();
  
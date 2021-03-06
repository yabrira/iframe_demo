let getPageContext = function () {
  let pageContext = {
    path: window.location.pathname,
    referrer: window.document.referrer,
    search: window.location.search,
    title: window.document.title,
    url: window.location.href,
  };
  return pageContext;
};

function getUrl() {
  let apiHost;
  switch (process.env.NODE_ENV) {
    case 'production':
      // apiHost = "'http://localhost:61176'";
      apiHost = "'https://devapi.lms.jlrexcellence.com'";
      break;
    case 'staging':
      apiHost = "'https://stagingapi.lms.jlrexcellence.com'";
      break;
    case 'uat':
      apiHost = "'http://localhost:3000'";
      break;
    case 'test':
      apiHost = "'https://testapi.lms.jlrexcellence.com'";
      break;
    default:
    case 'development':
      apiHost = "'https://devapi.lms.jlrexcellence.com'";
      break;
    case 'local':
      apiHost = "'http://localhost:61176'";
      break;
  }
  return apiHost;
}

module.exports = {
  getUrl,
};

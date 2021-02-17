export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
      headers: {
        common: {
          Accept: 'text/plain, */*'
        }
      }
    })
  
    // Set baseURL to something different
    api.setBaseURL('http://www.staging.wp.local/australia-guy')
  
    // Inject to context as $api
    inject('api', api)
  }
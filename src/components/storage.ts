const getAppInfo =  (id: number | string) => {
  try {
    let app_info = localStorage.getItem('app.app_id.' + id)

    if ( app_info == null ) 
      return null
    
    return JSON.parse(app_info) || null

  } catch (error) {
    return null
  }
}

export {
  getAppInfo
}
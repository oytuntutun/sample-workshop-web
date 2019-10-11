const getToken = async () => {
  try {
    const token = await localStorage.getItem('token')
    return token
  } catch(error) {
    return
  }
}

export default getToken

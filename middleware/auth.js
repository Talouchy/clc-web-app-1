const createError = require('http-errors')

export default function({ store, error }) {
  if (!store.state.authUser) {
    error({
      message: 'This page is Forbidden',
      statusCode: 403
    })
  }
}

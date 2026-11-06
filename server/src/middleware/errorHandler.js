export function notFoundHandler(req, res) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` })
}

export function errorHandler(error, req, res, next) {
  void req
  void next
  const status = error.statusCode || 500
  const message = status === 500 ? 'Internal server error' : error.message
  if (status === 500) console.error(error)
  res.status(status).json({ success: false, message })
}

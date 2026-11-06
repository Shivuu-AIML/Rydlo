import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  void req
  res.json({ success: true, message: 'Rydlo API is running' })
})

export default router

import express from 'express'
import auth from '../middleware/auth.js'

import { getPostsBySearch, getPost, getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'

const router = express.Router()

router.get('/search', getPostsBySearch) //anyone can view posts, no need for auth middleware
router.get('/', getPosts) //same as above
router.get('/:id', getPost)
router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id/likePost', auth, likePost)

export default router
'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/post', 'ImgController.post')
Route.get('/post', 'ImgController.index')
Route.get('/post/:id', 'ImgController.single')
Route.put('/post/:id', 'ImgController.update')
Route.delete('/post/:id', 'ImgController.delete')

Route.post('/image/:id/comment', 'CommentController.post')
Route.get('/image/:id/comment', 'CommentController.index')
Route.delete('/image/:img_id/comment/:comment_id', 'CommentController.delete')

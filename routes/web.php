<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/dashboard', 'HomeController@index')->name('home');

/** HomeController */ 

Route::get('/getUserList','HomeController@getAllUsersList');

/** Email Sending Routes */
Route::post('/sendMail','Mail\MailController@sendMail');




/** dashboard routes */

Route::get('/dashboard', 'HomeController@index');
Route::get('/dash/UsersManagement', 'dashboard\UserManagementController@index');
Route::post('/dash/users-list', 'dashboard\UserManagementController@getUsers');
Route::get('/dash/buy-products', 'dashboard\UserManagementController@getProductList');

/** products routes */
Route::get('/get-product-detail','ProductsController@getProductDetail');
Route::get('/get-product-list','ProductsController@getProductList');

/** razor pay routes */
Route::post('/pay', 'PaymentController@buyItem');
Route::get('/open-getway-page/{amount}/{order_id}', 'PaymentController@opengateway');

/** callback url for razorpay */
Route::post('/callback', 'PaymentController@callback');


/** web app routes */

Route::get('/home','myapp\HomeController@index')->name('home');
Route::get('/','myapp\HomeController@index')->name('home');
Route::get('/web/product-detail/{id}','myapp\HomeController@openProductDetail');
Route::post('/web/get-pro-data','myapp\HomeController@getProdetail');
Route::post('/web/addToCart','myapp\CartController@addToCart');
Route::get('/web/get-cart-count','myapp\CartController@getCartCount');
Route::get('/web/open-cart-page','myapp\CartController@carPage');
Route::get('/web/get-cart-detail','myapp\CartController@getCartDetail');
Route::post('/web/less-cart-item','myapp\CartController@lessItem');
Route::post('/web/add-cart-item','myapp\CartController@addItem');

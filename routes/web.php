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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/dashboard', 'HomeController@index')->name('home');

/** HomeController */ 

Route::get('/getUserList','HomeController@getAllUsersList');

/** Email Sending Routes */
Route::post('/sendMail','Mail\MailController@sendMail');




/** dashboard routes */

Route::get('/dashboard', 'HomeController@index')->name('home');
Route::get('/dash/UsersManagement', 'dashboard\UserManagementController@index');
Route::post('/dash/users-list', 'dashboard\UserManagementController@getUsers');
Route::get('/dash/buy-products', 'dashboard\UserManagementController@getProductList');

/** razor pay routes */
Route::post('/pay', 'PaymentController@buyItem');
Route::get('/open-getway-page/{amount}/{order_id}', 'PaymentController@opengateway');

/** callback url for razorpay */
Route::post('/callback', 'PaymentController@callback');


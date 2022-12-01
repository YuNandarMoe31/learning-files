<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
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

//Route::get('/', function () {
//    return view('welcome');
//});

//Route::get('product/create', 'ProductController@create')->name('product.create');
//Route::get('product/{product}', 'ProductController@show')->name('product.show');
//Route::get('category/product/{product}', 'ProductController@removeCategory')->name('category.product.delete');


Route::get('product/create', [ProductController::class, 'create'])->name('product.create');
Route::get('product/{product}', [ProductController::class, 'show'])->name('product.show');
Route::get('category/product/{product}', [ProductController::class, 'removeCategory'])->name('category.product.delete');
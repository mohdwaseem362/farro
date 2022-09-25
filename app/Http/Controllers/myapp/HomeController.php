<?php

namespace App\Http\Controllers\myapp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Products;

class HomeController extends Controller
{
    public function index(){
       return view('website.myapp');
    }

    public function openProductDetail($id){
        return view('website.product-detail-page',compact('id'));
    }

    public function getProdetail(Request $request){
       $p_data = Products::with(['comments'=>function($q){
        $q->with('user');
       }])->where('id',$request->id)->first()->toArray();
       
       $res = array(
        'status'=>200,
        'data' => $p_data
       );

       return json_encode($res,true);
    }
}

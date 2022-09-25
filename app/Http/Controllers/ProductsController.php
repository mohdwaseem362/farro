<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Products;
use App\Model\Comment;

class ProductsController extends Controller
{
    public function getProductDetail(Request $request){
        $p_detail = Products::with('comments')->get()->toArray();
        echo '<pre>';
        print_r($p_detail);exit;
    }

    public function getProductList(){
        $p_list = Products::latest()->paginate(10)->toArray();
        // ->limit(10)->get()->toArray();

        // echo '<pre>';
        // print_r($p_list);exit;

        $return = array(
            'status' => 200,
            'p_list' => $p_list
        );

        return json_encode($return,true);
    }
}

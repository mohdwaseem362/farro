<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UserManagementController extends Controller
{
    //
    public function index(){
   
        return view('dashboard.usersManagement');
    }

    public function getUsers(Request $request){
        if($request->data == false){
            $query =  User::select('id','name','email')->take(10)->get();
        }else{

            $matchThese = ['name' => $request->data, 'email' => $request->data];
            $query =  User::select('id','name','email')
            ->where('name','LIKE','%'.$request->data.'%')
            ->orwhere('email','LIKE','%'.$request->data.'%')
            ->take(10)->get();
        }
        
        $resp = array(
            'status' => 'ok',
            'data' => $query
        );

        return $resp;
    }

    public function getProductList(){
        return view('dashboard.products');
    }
}

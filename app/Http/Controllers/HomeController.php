<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function getAllUsersList(){
        $userList =  User::latest()->take(15)->get();
        // print_r($userList);exit;

        $resp = array(
            'status' => 'ok',
            'data' => $userList
        );

        return $resp;
    }
}

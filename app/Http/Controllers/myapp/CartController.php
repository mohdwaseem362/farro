<?php

namespace App\Http\Controllers\myapp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Cart;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    //
    public function addToCart(Request $request)
    {
        // print_r($request->all());exit;
        $userId = Auth::id();
        $cartCount = Cart::where('user_id', $userId)->where('products_id', $request->id)->count();
        // if any existing product
        if ($cartCount > 0) {
            $cart = Cart::where('user_id', $userId)->where('products_id', $request->id)->first();
            $cart->quantity =  $cart->quantity + 1;
            $cart->save();
        } else {
            $cart = new Cart();
            $cart->user_id = $userId;
            $cart->products_id = $request->id;
            $cart->price = $request->price;
            $cart->quantity = 1;
            $cart->save();
        }



        $response = array(
            'status' => true,
            'code' => 200,
            'msg' => 'your item added in cart successfully'
        );

        return json_encode($response);
    }

    public function getCartCount()
    {
        $count = Cart::where('user_id', Auth::id())->get()->count();
        $response = array(
            'status' => true,
            'code' => 200,
            'count' => $count
        );

        return json_encode($response);
    }

    public function carPage()
    {
        return view('website.cart');
    }

    public function getCartDetail()
    {
        $userId = Auth::id();
        $return =  $this->cartData($userId);
        $response = array(
            'status' => true,
            'code' => 200,
            'data' => $return['itemsDetail'],
            'summary' => $return['summary']
        );
        return json_encode($response);
    }

    public function cartData($userId)
    {
        $items = [];
        $summary = [];
        // summary var
        $productAmount = 0;
        $shippingAmount = 0;
        $taxRate = 18;
        $gstAmount = 0;
        $data = Cart::with(['product' => function ($q) {
        }])->where('user_id', Auth::id())->get()->toArray();

        foreach ($data as $key => $item) {
            $item['total_price'] = $item['price'] * $item['quantity'];
            $items[$key] = $item;
            $productAmount = $productAmount + $item['total_price'];
        }

        
        $gstAmount = $productAmount * $taxRate / 100;
        $summary['productAmount'] = $productAmount;
        $summary['gstAmount'] = round($gstAmount);
        $summary['shippingAmount'] = $shippingAmount;
        $summary['totalAmount'] = round($productAmount  + $shippingAmount + $gstAmount);

        $return = array(
            'itemsDetail' => $items,
            'summary' => $summary
        );

        return $return;
    }

    public function lessItem(Request $request)
    {
        $userId = Auth::id();
        $cart = Cart::where('user_id', $userId)->where('products_id', $request->product_id)->first();

        if ($cart->quantity <= 1) {
            $cart->delete();
        } elseif ($cart->quantity > 1) {
            $cart->quantity =  ($cart->quantity) - 1;
            $cart->save();
        }

        if ($cart) {
            $return =  $this->cartData($userId);
            $response = array(
                'status' => true,
                'code' => 200,
                'data' => $return['itemsDetail'],
                'summary' => $return['summary']
            );
            return json_encode($response);
        }
    }

    public function addItem(Request $request)
    {
        $userId = Auth::id();
        $cart = Cart::where('user_id', $userId)->where('products_id', $request->product_id)->first();
        $cart->quantity =  ($cart->quantity) + 1;
        $cart->save();

        if ($cart) {
            $return =  $this->cartData($userId);
            $response = array(
                'status' => true,
                'code' => 200,
                'data' => $return['itemsDetail'],
                'summary' => $return['summary']
            );
            return json_encode($response);
        }
    }
}

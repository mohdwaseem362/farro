<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Payment;
use Razorpay\Api\Api;

class PaymentController extends Controller
{

    //
    public function index()
    {
    }

    public function buyItem(Request $request)
    {
        // print_r($request->all());exit;

        $payment = new Payment();
        $payment->name = $request->name;
        $payment->amount = $request->price;

        // get orderId from rozarpay
        $api = new Api('rzp_test_VvOUTMOuzY8u43', 'mA4K8dgw4f33jCA6ftxZu32D');
        $order = $api->order->create(array('receipt' => '123', 'amount' => (int)$request->price * 100, 'currency' => 'INR', 'notes' => array()));
        $order_id = $order['id'];

        $payment->payment_id = $order_id;
        $payment->save();

        //
        // $request->session()->put('order_id', $order_id);
        // $request->session()->put('amount', $request->price);

        $response = array(
            'status' => true,
            'order_id' => $order_id,
            'amount' => (int)$request->price * 100,
            'msg' => 'order createed please proceed to pay ',
            'code' => 200
        );

        // return view('razorpay-payment-page',compact('response'));

        return $response;
    }

    public function opengateway($amount,$order_id){
        $response = array(
            
            'order_id' => $order_id,
            'amount' => $amount * 100,
        );
        return view('razorpay-payment-page',compact('response'));
    }

    public function callback(Request $request){
        file_put_contents('callback.log', print_r($request->all(),true));
        // razorpay_payment_id ,razorpay_payment_id
        $payment =Payment::where('payment_id',$request->razorpay_order_id)->first();
        $payment->razorpay_id = $request->razorpay_payment_id;
        $payment->payment_done = true;
        $payment->save();
        $data =array(
            'redirect_url' => 'http://myapp.com/dash/buy-products'
        );
       return view('success',compact('data'));
    }
}

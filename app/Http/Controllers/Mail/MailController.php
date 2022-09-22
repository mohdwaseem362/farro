<?php

namespace App\Http\Controllers\Mail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;


class MailController extends Controller
{


    public function sendMail(Request $request)
    {
        // print_r($request->all());exit;
        // Validation 

        $validator = $request->validate([
            'email' => 'required|email',
            'text' => 'required|max:255',
        ]);
        // Return the message
        if ($validator == 0) {
            return response()->json([
                'error' => true,
                'message' => $validator->errors()
            ]);
        }
        if ($validator) {
            $sendTo = $request->email;
            $mailContent = $request->text;
        }

        // Mail::to($sendTo)->send(new \App\Mail\sendMarkdownMail($mailContent));

        dispatch(new \App\Jobs\sendMail($sendTo,$mailContent))->delay(now()->addSeconds(15));
    }
}

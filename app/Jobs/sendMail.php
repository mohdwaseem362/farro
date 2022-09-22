<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class sendMail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $sendTo;
    public $mailContent;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($sendTo,$mailContent)
    {
        $this->sendTo = $sendTo;
        $this->mailContent = $mailContent;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $sendTo =$this->sendTo ;
        $mailContent = $this->mailContent;
        Mail::to($sendTo)->send(new \App\Mail\sendMarkdownMail($mailContent));
    }
}

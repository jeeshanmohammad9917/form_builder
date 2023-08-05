<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Blade;

class userReg extends Mailable
{
    use Queueable, SerializesModels;

    protected $emailData;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($emailData)
    {
        $this->emailData = $emailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->from('zeeshanmohammad934@gmail.com', 'Form Builder')
            ->subject('Form Builder - New-User-Info')
            ->view('new_user_info' , ['name' => $this->emailData['name'],'email' => $this->emailData['email']])
            ->with(
                $this->emailData['email']
            );
    }
}

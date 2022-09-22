@component('mail::message')
# Welcome Mohd Waseem

{{$mailContent}}

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent

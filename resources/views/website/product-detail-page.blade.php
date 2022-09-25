@extends('welcome')


@section('content')
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

<div class="container">
    <div class="card">
        <product-detail-page-component product-id={{$id}}></product-detail-page-component>
    </div>
</div>
@endsection
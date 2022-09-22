@extends('layouts.app')

@section('content')
<div class="contaner">
    <div class="row">
        <div class="col-md-2">
            <sidebar-menu-component header-menu=1></sidebar-menu-component>
        </div>

        <div class="col-md-8">
            <div class="row">
                <div class="col-md-12">
                <!-- product items list component -->
                <product-list-component></product-list-component>
                
                </div>
            </div>
        </div>

        <div class="col-md-2" style="background-color:blue">
            <div class="row">
                <div class="col-10">
                    <h2>notification </h2>
                </div>
                
            </div>

        </div>
    </div>

</div>

@endsection
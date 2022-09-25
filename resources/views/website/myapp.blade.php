@extends('welcome')

@section('content')
<!-- slider component  -->
<div class="container">
    <div class="row">
        <div col-md-12>
            <div class="row">
                <carousel-component></carousel-component>
            </div>
        </div>
    </div>
</div>
<!-- ////////// -->

<div class="container">
    <div class="row">
        <div col-md-12>
            <div class="row">
                <section style="background-color: #eee;">
                    <div class="container py-5">
                        <h4 class="text-center mb-5"><strong>Product listing</strong></h4>

                        <div class="row">
                            <div class="col-lg-4 col-md-12 mb-4">
                                <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp" class="w-100" />
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                                            <div class="d-flex justify-content-start align-items-start h-100">
                                                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$123</span></h5>
                                            </div>
                                        </div>
                                        <div class="hover-overlay">
                                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(2).webp" class="w-100" />
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                                            <div class="d-flex justify-content-start align-items-start h-100">
                                                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$239</span></h5>
                                            </div>
                                        </div>
                                        <div class="hover-overlay">
                                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(3).webp" class="w-100" />
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                                            <div class="d-flex justify-content-start align-items-start h-100">
                                                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$147</span></h5>
                                            </div>
                                        </div>
                                        <div class="hover-overlay">
                                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-12 mb-4">
                                <div class="bg-image hover-zoom ripple shadow-1-strong rounded ripple-surface">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp" class="w-100" />
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                                            <div class="d-flex justify-content-start align-items-start h-100">
                                                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$83</span></h5>
                                            </div>
                                        </div>
                                        <div class="hover-overlay">
                                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp" class="w-100" />
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                                            <div class="d-flex justify-content-start align-items-start h-100">
                                                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$106</span></h5>
                                            </div>
                                        </div>
                                        <div class="hover-overlay">
                                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 mb-4">
                                <div class="bg-image hover-zoom ripple shadow-1-strong rounded">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(6).webp" class="w-100" />
                                    <a href="#!">
                                        <div class="mask" style="background-color: rgba(0, 0, 0, 0.3);">
                                            <div class="d-flex justify-content-start align-items-start h-100">
                                                <h5><span class="badge bg-light pt-2 ms-3 mt-3 text-dark">$58</span></h5>
                                            </div>
                                        </div>
                                        <div class="hover-overlay">
                                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>



<div class="container">
    <div class="row">
        <div col-md-12>
            <div class="row">
                <section style="background-color: #eee;">
                    <div class="container py-5">
                        <div class="row">
                            <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                                <div class="card">
                                    <div class="d-flex justify-content-between p-3">
                                        <p class="lead mb-0">Today's Combo Offer</p>
                                        <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style="width: 35px; height: 35px;">
                                            <p class="text-white mb-0 small">x4</p>
                                        </div>
                                    </div>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp" class="card-img-top" alt="Laptop" />
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between">
                                            <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                                            <p class="small text-danger"><s>$1099</s></p>
                                        </div>

                                        <div class="d-flex justify-content-between mb-3">
                                            <h5 class="mb-0">HP Notebook</h5>
                                            <h5 class="text-dark mb-0">$999</h5>
                                        </div>

                                        <div class="d-flex justify-content-between mb-2">
                                            <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
                                            <div class="ms-auto text-warning">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                                <div class="card">
                                    <div class="d-flex justify-content-between p-3">
                                        <p class="lead mb-0">Today's Combo Offer</p>
                                        <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style="width: 35px; height: 35px;">
                                            <p class="text-white mb-0 small">x2</p>
                                        </div>
                                    </div>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp" class="card-img-top" alt="Laptop" />
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between">
                                            <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                                            <p class="small text-danger"><s>$1199</s></p>
                                        </div>

                                        <div class="d-flex justify-content-between mb-3">
                                            <h5 class="mb-0">HP Envy</h5>
                                            <h5 class="text-dark mb-0">$1099</h5>
                                        </div>

                                        <div class="d-flex justify-content-between mb-2">
                                            <p class="text-muted mb-0">Available: <span class="fw-bold">7</span></p>
                                            <div class="ms-auto text-warning">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-4 mb-md-0">
                                <div class="card">
                                    <div class="d-flex justify-content-between p-3">
                                        <p class="lead mb-0">Today's Combo Offer</p>
                                        <div class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong" style="width: 35px; height: 35px;">
                                            <p class="text-white mb-0 small">x3</p>
                                        </div>
                                    </div>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp" class="card-img-top" alt="Gaming Laptop" />
                                    <div class="card-body">
                                        <div class="d-flex justify-content-between">
                                            <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                                            <p class="small text-danger"><s>$1399</s></p>
                                        </div>

                                        <div class="d-flex justify-content-between mb-3">
                                            <h5 class="mb-0">Toshiba B77</h5>
                                            <h5 class="text-dark mb-0">$1299</h5>
                                        </div>

                                        <div class="d-flex justify-content-between mb-2">
                                            <p class="text-muted mb-0">Available: <span class="fw-bold">5</span></p>
                                            <div class="ms-auto text-warning">
                                                <i class="fa fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star-half-alt"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>

<!-- /// -->

<div class="container">
    <div class="row">
        <div col-md-12 home-page-content>
            <div class="row">
                <product-list-component></product-list-component>
            </div>
        </div>
    </div>

</div>



@endsection
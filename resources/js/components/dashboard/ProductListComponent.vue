<template>
    <div>
        <section style="background-color: #eee;">
            <div class="container py-5">
                <div class="row justify-content-center mb-3">
                    <div class="col-md-12 col-xl-10">
                        <div class="card shadow-0 border rounded-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                        <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img :src="data.image_url" class="w-100" />
                                            <a href="#!">
                                                <div class="hover-overlay">
                                                    <div class="mask"
                                                        style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-6">
                                        <h5>{{data.name}}</h5>
                                        <div class="d-flex flex-row">
                                            <div class="text-danger mb-1 me-2">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <span>{{data.artical_number}}</span>
                                        </div>
                                        <div class="mt-1 mb-0 text-muted small">
                                            <span>100% cotton</span>
                                            <span class="text-primary"> • </span>
                                            <span>Light weight</span>
                                            <span class="text-primary"> • </span>
                                            <span>Best finish<br /></span>
                                        </div>
                                        <div class="mb-2 text-muted small">
                                            <span>Unique design</span>
                                            <span class="text-primary"> • </span>
                                            <span>For men</span>
                                            <span class="text-primary"> • </span>
                                            <span>Casual<br /></span>
                                        </div>
                                        <p class="text-truncate mb-4 mb-md-0">
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable.
                                        </p>
                                    </div>
                                    <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                        <div class="d-flex flex-row align-items-center mb-1">
                                            <h4 class="mb-1 me-1">{{data.price}}</h4>
                                            <span class="text-danger"><s>{{data.mrp_price}}</s></span>
                                        </div>
                                        <h6 class="text-success">Free shipping</h6>
                                        <div class="d-flex flex-column mt-4">
                                            <button class="btn btn-primary btn-sm" type="button">Details</button>
                                            <button class="btn btn-outline-primary btn-sm mt-2" @click="pay()"
                                                type="button">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div>

        </div>
    </div>
</template>


<script>
import Axios from 'axios';

export default {
    data() {
        return {
            'name': 'Pruduct',
            'data': {
                'image_url': 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp',
                'name': 'Quant trident shirts',
                'artical_number': '36',
                'price': 5000,
                'mrp_price': 10000,
                'item_buy_link': "/buy/artical/36",
            },
        }
    },
    methods: {

        pay: function () {

            var thisObject = this;

            Axios.post('/pay', thisObject.data)
                .then(function (res) {
                    console.log(res.data);
                    if(res.data.code == 200){
                        console.log('hey don');
                        thisObject.getwayOpen(res.data.amount,res.data.order_id);
                    }
                    
                })
                .catch(function (error) {
                    alert(error);
                })
        },

        getwayOpen:function(amount,order_id){
            var amount = amount
            var order_id = order_id
             window.open("http://myapp.com/open-getway-page/"+ amount + "/"+order_id, "_blank");
        }

    },
}
</script>



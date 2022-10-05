<template>
    <div class="card-body">
        <h3 class="card-title">{{item.name}}</h3>
        <h6 class="card-subtitle">{{item.summary}}</h6>
        <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-6">
                <!-- image size 430*600 -->
                <div class="white-box text-center">
                    <img :src="item.image" class="img-fluid rounded">
                </div>
            </div>
            <div class="col-lg-7 col-md-7 col-sm-6">
                <h4 class="box-title mt-5">Item description</h4>
                <p>{{item.description}}</p>
                <h2 class="mt-5">
                    {{item.price}}<small class="text-success">({{offerPercentage()}}%off)</small>
                </h2>
                <button class="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" @click="addToCart(item)" title=""
                    data-original-title="Add to cart">
                    <i class="fa fa-shopping-cart"></i>
                </button>
                <button class="btn btn-primary btn-rounded" @click="pay(item)">Buy Now</button>
                <h3 class="box-title mt-5">Key Highlights</h3>
                <ul class="list-unstyled">
                    <li><i class="fa fa-check text-success"></i>Sturdy structure</li>
                    <li><i class="fa fa-check text-success"></i>Designed to foster easy portability</li>
                    <li><i class="fa fa-check text-success"></i>Perfect furniture to flaunt your wonderful collectibles
                    </li>
                </ul>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12">
                <h3 class="box-title mt-5">General Info</h3>
                <div class="table-responsive">
                    <table class="table table-striped table-product">
                        <tbody>
                            <tr>
                                <td width="390">Brand</td>
                                <td>Stellar</td>
                            </tr>
                            <tr>
                                <td>Delivery Condition</td>
                                <td>Knock Down</td>
                            </tr>
                            <tr>
                                <td>Seat Lock Included</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>Office Chair</td>
                            </tr>
                            <tr>
                                <td>Style</td>
                                <td>Contemporary&amp;Modern</td>
                            </tr>
                            <tr>
                                <td>Wheels Included</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Upholstery Included</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Upholstery Type</td>
                                <td>Cushion</td>
                            </tr>
                            <tr>
                                <td>Head Support</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Suitable For</td>
                                <td>Study&amp;Home Office</td>
                            </tr>
                            <tr>
                                <td>Adjustable Height</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Model Number</td>
                                <td>F01020701-00HT744A06</td>
                            </tr>
                            <tr>
                                <td>Armrest Included</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Care Instructions</td>
                                <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                            </tr>
                            <tr>
                                <td>Finish Type</td>
                                <td>Matte</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- add comment section -->
            <!-- comment section -->
            <section style="background-color: #d3d0d0;">
                <div class="container my-5 py-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-12 col-lg-10">
                            <div class="card text-dark">

                                <div class="card-body p-4">
                                    <h4 class="mb-0">Recent comments</h4>
                                    <p class="fw-light mb-4 pb-2">Latest Comments section by users</p>
                                    <div class="card-body p-4">
                                        <div class="d-flex flex-start w-100">
                                            <img class="rounded-circle shadow-1-strong me-3"
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                                                alt="avatar" width="65" height="65" />
                                            <div class="w-100">
                                                <h5 style="margin-left:10px">Add a comment</h5>
                                                <!-- <ul class="rating mb-3" data-mdb-toggle="rating">
                                                <li>
                                                    <i class="bi bi-star"></i>
                                                </li>
                                                <li>
                                                    <i class="far fa-star fa-sm text-danger" title="Poor"></i>
                                                </li>
                                                <li>
                                                    <i class="far fa-star fa-sm text-danger" title="OK"></i>
                                                </li>
                                                <li>
                                                    <i class="far fa-star fa-sm text-danger" title="Good"></i>
                                                </li>
                                                <li>
                                                    <i class="far fa-star fa-sm text-danger" title="Excellent"></i>
                                                </li>
                                            </ul> -->
                                                <div class="form-outline">
                                                    <textarea class="form-control" id="textAreaExample"
                                                        rows="4"></textarea>
                                                    <label class="form-label" for="textAreaExample">What is your
                                                        view?</label>
                                                </div>
                                                <div class="d-flex justify-content-between mt-3">
                                                    <!-- <button type="button" class="btn btn-success">Danger</button> -->
                                                    <button type="button" class="btn btn-danger">
                                                        Send <i class="fas fa-long-arrow-alt-right ms-1"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr class="my-4" />
                                    <div class="d-flex flex-start" style="width:100%" v-for="comment in item.comments">

                                        <img class="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                                            alt="avatar" width="60" height="60" />
                                        <div>
                                            <h6 class="fw-bold mb-1">{{comment.user.name}}</h6>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="mb-0">
                                                    {{ formattedDate(comment.user.created_at) }}
                                                    <!-- March 07, 2021 -->
                                                    <span class="badge bg-primary">Pending</span>
                                                </p>
                                                <a href="#!" class="link-muted"><i
                                                        class="fas fa-pencil-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                                            </div>
                                            <p class="mb-0">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia, looked up one of the more obscure
                                                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                                the cites.
                                                {{comment.Comment}}
                                            </p>
                                            <hr class="my-3" />
                                        </div>


                                    </div>

                                </div>



                                <!-- <div class="card-body p-4">
                                    <div class="d-flex flex-start">
                                        <img class="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                                            alt="avatar" width="60" height="60" />
                                        <div>
                                            <h6 class="fw-bold mb-1">Lara Stewart</h6>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="mb-0">
                                                    March 15, 2021
                                                    <span class="badge bg-success">Approved</span>
                                                </p>
                                                <a href="#!" class="link-muted"><i
                                                        class="fas fa-pencil-alt ms-2"></i></a>
                                                <a href="#!" class="text-success"><i
                                                        class="fas fa-redo-alt ms-2"></i></a>
                                                <a href="#!" class="link-danger"><i class="fas fa-heart ms-2"></i></a>
                                            </div>
                                            <p class="mb-0">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia, looked up one of the more obscure
                                                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                                the cites.
                                            </p>
                                        </div>
                                    </div>
                                </div> -->

                                <!-- <hr class="my-0" style="height: 1px;" />

                                <div class="card-body p-4">
                                    <div class="d-flex flex-start">
                                        <img class="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp"
                                            alt="avatar" width="60" height="60" />
                                        <div>
                                            <h6 class="fw-bold mb-1">Alexa Bennett</h6>
                                            <div class="d-flex align-items-center mb-3">
                                                <p class="mb-0">
                                                    March 24, 2021
                                                    <span class="badge bg-danger">Rejected</span>
                                                </p>
                                                <a href="#!" class="link-muted"><i
                                                        class="fas fa-pencil-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-redo-alt ms-2"></i></a>
                                                <a href="#!" class="link-muted"><i class="fas fa-heart ms-2"></i></a>
                                            </div>
                                            <p class="mb-0">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum, you need to be sure.
                                            </p>
                                        </div>
                                    </div>
                                </div> -->

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { get } from 'http';
import moment from 'moment';
import VueSimpleAlert from "vue-simple-alert";
import EventBus from "../../event-bus";

export default {
    data() {
        return {
            'name': 'product detail page',
            'item': {},
        }
    },
    computed: {
        //     formattedDate() {
        //     return moment(this.givenDate).format('YYYY');
        //   }
    },
    methods: {
        formattedDate($date) {
            return moment(this.givenDate).format('LL');
        },
        addToCart: function ($data) {
            var thisObject = this;
            console.log($data);
            axios.post('/web/addToCart', $data)
                .then(function (res) {
                    if (res.data.status == true) {
                        // this.$eventBus.$emit("getCartCount");
                        EventBus.$emit("getCartCount");
                        // this.$alert("Hello Vue Simple Alert.");
                    }


                })
                .catch(function (error) {
                    alert(error);
                })
        },
        pay: function ($data) {

            var thisObject = this;
            console.log($data);
            axios.post('/pay', $data)
                .then(function (res) {
                    console.log(res.data);
                    if (res.data.code == 200) {
                        console.log('hey don');
                        thisObject.getwayOpen(res.data.amount, res.data.order_id);
                    }

                })
                .catch(function (error) {
                    alert(error);
                })
        },
        getwayOpen: function (amount, order_id) {
            var amount = amount
            var order_id = order_id
            window.open("http://myapp.com/open-getway-page/" + amount + "/" + order_id, "_blank");
        },
        offerPercentage: function () {
            return this.item.price * 100 / (this.item.price * 2);
        },

        getData: function () {
            var thisObject = this
            var data = {
                'id': thisObject.productId
            }
            axios.post('/web/get-pro-data', data)
                .then(function (res) {
                    console.log(res.data);
                    thisObject.item = res.data.data
                })
                .catch(function (error) {
                    alert(error);
                })
        },

    },
    watch: {

    },
    mounted() {
        this.getData()
    },
    props: ['productId'],
}
</script>

<style scoped>
.card-subtitle {
    margin-bottom: 10px;
}

.img-fluid {
    width: 430px;
    height: 450px;
}

.link-muted {
    color: #aaa;
}

.link-muted:hover {
    color: #1266f1;
}

.form-outline {
    margin-left: 10px;
}
</style>
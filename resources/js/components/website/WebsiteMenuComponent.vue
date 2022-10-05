<template>
    <ul class="navbar-nav mr-auto">

        <li class="nav-item">
            <a class="nav-link" href="/web/open-cart-page"><i class="bi bi-cart">Cart</i>
                <span class="badge badge-dark">{{cartCount}}</span></a>
        </li>

    </ul>

</template>

<script>
import Axios from 'axios';
import { get } from 'http';
import EventBus from "../../event-bus";


export default {
    data() {
        return {
            'cartCount': 0,
        }
    },
    methods: {

        getCartCount: function () {
            var thisObject = this
            axios.get('/web/get-cart-count')
                .then(function (res) {
                    console.log(res.data);
                    thisObject.cartCount = res.data.count
                })
                .catch(function (error) {
                    alert(error);
                })
        },

        openCart:function(){
            var thisObject = this
            axios.get('/web/open-cart-page')
                .then(function (res) {
                })
                .catch(function (error) {
                    alert(error);
                })
        }

    },
    watch: {

    },
    mounted() {
        this.getCartCount()
        EventBus.$on("getCartCount", () => {
            this.getCartCount();
        });
    },
}
</script>

<style scoped>
.badge {
    border-radius: 50%;
}
</style>
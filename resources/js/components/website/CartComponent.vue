<template>
  <section class="h-100 gradient-custom">
    <div class="container py-5">
      <div class="row d-flex justify-content-center my-4">
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Cart - 2 items</h5>
            </div>
            <div class="card-body">
              <!-- Single item -->
              <div v-for="list in lists">
                <div class="row" >
                  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <!-- Image -->
                    <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                      <img :src="list.product.image" class="w-100" alt="Blue Jeans Jacket" style="height: 120px;" />
                      <a href="#!">
                        <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                      </a>
                    </div>
                    <!-- Image -->
                  </div>

                  <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <!-- Data -->
                    <p><strong>{{list.product.name}}</strong></p>
                    <p>Price: {{list.price}}</p>
                    <!-- <p>Size: M</p> -->
                    <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                      title="Remove item">
                      <i class="bi bi-trash"></i>
                    </button>
                    <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                      title="Move to the wish list">
                      <i class="bi bi-heart-fill"></i>
                    </button>
                    <!-- Data -->
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <!-- Quantity -->
                    <div class="d-flex mb-4" style="max-width: 300px">
                      <a class="btn btn-primary px-3 me-2" v-on:click="lessItem(list.products_id)" style="max-height: 36px;">
                        <i class="bi bi-dash"></i>
                      </a>

                      <div class="form-outline px-1">
                        <input id="form1" min="0" name="quantity" v-model="list.quantity" type="number" class="form-control" />
                        <label class="form-label" for="form1">Quantity</label>
                      </div>

                      <a class="btn btn-primary px-3 ms-2" v-on:click="addItem(list.products_id)"  style="max-height: 36px;">

                        <i class="bi bi-plus"></i>
                      </a>
                    </div>
                    <!-- Quantity -->

                    <!-- Price -->
                    <p class="text-start text-md-center">
                      <strong>??? {{list.total_price}}</strong>
                    </p>
                    <!-- Price -->
                  </div>
                </div>
                <hr class="my-4" />
              </div>

              <!-- Single item -->




            </div>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <p><strong>Expected shipping delivery</strong></p>
              <p class="mb-0">12.10.2020 - 14.10.2020</p>
            </div>
          </div>
          <div class="card mb-4 mb-lg-0">
            <div class="card-body">
              <p><strong>We accept</strong></p>
              <img class="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa" />
              <img class="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express" />
              <img class="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard" />
              <img class="me-2" width="45px"
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                alt="PayPal acceptance mark" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>???{{summary.productAmount}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Gst(18%)
                  <span>???{{summary.gstAmount}}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>???{{summary.shippingAmount}}</span>
                </li>
                
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span><strong>???{{summary.totalAmount}}</strong></span>
                </li>
              </ul>

              <button type="button" class="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      'lists': {},
      'summary' :{}
    }
  },
  methods: {

    getCartDetail: function () {
      var thisObject = this
      axios.get('/web/get-cart-detail')
        .then(function (res) {
          if (res.data.status === true) {
            thisObject.lists = res.data.data
            thisObject.summary = res.data.summary
          }
        })
        .catch(function (error) {
          alert(error);
        })
    },
    lessItem($pro_id){
      var thisObject = this
      axios.post('/web/less-cart-item',{'product_id': $pro_id})
        .then(function (res) {
          
            thisObject.lists = {}
            thisObject.lists = res.data.data
            thisObject.summary = res.data.summary
      
        })
        .catch(function (error) {
          alert(error);
        })
    },
    addItem($pro_id){
      var thisObject = this
      axios.post('/web/add-cart-item',{'product_id': $pro_id})
        .then(function (res) {
          
            thisObject.lists = {}
            thisObject.lists = res.data.data
            thisObject.summary = res.data.summary
      
        })
        .catch(function (error) {
          alert(error);
        })
    },
  },
  mounted: function () {
    this.getCartDetail()
  }
}
</script>

<style scoped>
.gradient-custom {
  /* fallback for old browsers */
  background: #6a11cb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
}
</style>
<template>
    <div class="container">
        <div class="row justify-content-left">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Users List

                    </div>

                    <div class="card-body">
                        <ul>
                            <li v-for="User in userData">{{ User.name}}</li>
                            <!-- <li>{{userData[0].name}}</li> -->
                        </ul>
                    </div>
                </div>

            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">Send Test Mail</div>

                    <div class="card-body">

                        <b-form>
                            <b-form-group id="input-group-1" label="Email address:" label-for="input-1"
                                description="We'll never share your email with anyone else.">
                                <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email"
                                    required></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="text:" label-for="input-3">
                                <b-form-textarea id="tinput-2" v-model="form.text" size="sm"
                                    placeholder="Type your mail content here...">
                                </b-form-textarea>
                            </b-form-group>

                            <a type="button" variant="primary" @click="onSubmit">Submit</a>
                            <b-button type="reset" variant="danger">Reset</b-button>
                        </b-form>

                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                text: '',
                food: null,
                checked: []
            },
            show: true,
            userData: {}
        }

    },
    computed: {

    },
    components: {
    },
    methods: {
        onSubmit(event) {

            var thisObject = this;
            var data = {
                'text': thisObject.form.text,
                'email': thisObject.form.email
            }
            axios.post('/sendMail', data)
                .then(function (res) {
                    alert(res.data);
                })
                .catch(function (error) {
                    alert(error);
                })
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.email = ''
            this.form.name = ''
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },

        userList: function () {
            var thisObject = this;
            axios.get('/getUserList')
                .then(function (res) {
                    console.log(res.data);
                    thisObject.userData = res.data.data;
                })
                .catch(function (error) {
                    alert(error);
                })
        }
    },
    mounted: function () {
        var thisObject = this;
        thisObject.userList();

    },
}
</script>
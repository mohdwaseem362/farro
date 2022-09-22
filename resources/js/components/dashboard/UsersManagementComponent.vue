<template>
    <div>
        <div class="form-group pull-right">
            <input type="text" v-model="isSearch" class="search form-control" @keyup="users_list_func()"
                placeholder="What you looking for?">
        </div>

        <table class="table table-sm ">
            <thead>
                <tr>
                    <th scope="col">UsersID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.email}}</td>
                    <td>
                        <button type="button" class="btn btn-primary" data-toggle="modal"
                            data-target=".bd-example-modal-lg">View<i class="far fa-eye"></i></button>
                        <button type="button" class="btn btn-success">Edit<i class="fas fa-edit"></i></button>
                        <button type="button" class="btn btn-danger">Block<i class="far fa-trash-alt"></i></button>
                    </td>
                </tr>
                <tr v-if="items== ''">
                    <td></td>
                    <td>No Data Found</td>
                    <td></td>
                </tr>
                <!-- Large modal -->
                <button type="button" class="btn btn-primary" data-toggle="modal"
                    data-target=".bd-example-modal-lg">Large modal</button>

                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
                    aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Recipient:</label>
                                        <input type="text" class="form-control" id="recipient-name">
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Message:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Send message</button>
                            </div>
                        </div>
                    </div>
                </div>


            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>


        <!-- modal  -->
        <!-- <div>
            <div class="col-md-6" align="right">
                <input type="button" class="btn btn-success btn-xs" @click="openModel" value="Add" />
            </div>
            <div v-if="myModel">
                <transition name="model">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" @click="myModel=false"><span
                                                aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title">{{ dynamicTitle }}</h4>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <label>Enter First Name</label>
                                            <input type="text" class="form-control" v-model="first_name" />
                                        </div>
                                        <div class="form-group">
                                            <label>Enter Last Name</label>
                                            <input type="text" class="form-control" v-model="last_name" />
                                        </div>
                                        <br />
                                        <div align="center">
                                            <input type="hidden" v-model="hiddenId" />
                                            <input type="button" class="btn btn-success btn-xs"
                                                v-model="actionButton" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div> -->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [],
            isSearch: '',
            hiddenId: '',
            first_name: 'Mohd',
            last_name: 'Waseem',
            myModel: false,
            actionButton: 'Insert',
            dynamicTitle: 'Add Data',
        }
    },
    methods: {

        openModel: function () {
            var thisObject = this;
            // thisObject.first_name = '';
            // thisObject.last_name = '';
            // thisObject.actionButton = "Insert";
            thisObject.dynamicTitle = "Add Data";
            thisObject.myModel = true;
        },
        users_list_func: function () {
            var thisObject = this;
            var searchValue;
            if (thisObject.isSearch !== '' || thisObject.isSearch !== null) {
                searchValue = false;
            }
            if (thisObject.isSearch !== '' || thisObject.isSearch !== null) {
                searchValue = thisObject.isSearch;
            }
            const searchstr = { data: searchValue };

            axios.post('/dash/users-list', searchstr)
                .then(function (res) {
                    console.log(res.data);
                    thisObject.items = res.data.data
                })
                .catch(function (error) {
                    alert(error);
                })
        },

    },
    mounted: function () {
        this.users_list_func();
    }
}
</script>


<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

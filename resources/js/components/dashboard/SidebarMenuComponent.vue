<template>
  
  <div>
    <div id="mySidenav" class="sidenav" v-if="hideNav == false">

      <a @click="closeNav()"><span style="font-size:30px;cursor:pointer;"> &#9776;</span></a>
      <a v-bind:href="abs.url" v-for="abs in navList">{{abs.name}}</a>
      <!-- <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a> -->
      <a href="#">{{headerMenu}}</a>

    </div>

    <div id="main" v-if="hideNav == true">
      <a @click="openNav()"><span style="font-size:30px;cursor:pointer;"> &#9776;</span></a>
  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      hideNav:false,
      navList:{
        '0':{'name':'client','url':'dfsdfsdfsfasdf'},
        '1':{'name':'client','url':'dfsdfsdfsfasdf'},
        '2':{'name':'client','url':'dfsdfsdfsfasdf'},
        '3':{'name':'client','url':'dfsdfsdfsfasdf'}
      },
    
      
    }
  },
  computed: {

  },
  components: {
  },
  methods: {
    
    openNav :function(){
      var thisObject = this;
      thisObject.hideNav = false;
    },
    closeNav: function () {
      var thisObject = this;
      thisObject.hideNav = true;
      
    },

    getAllNavMenuList :function(){
      var thisObject = this;
      console.log(thisObject.headerMenu);
     
    }

  },
  mounted: function () {
    var thisObject = this
    thisObject.getAllNavMenuList()
  },
  props: ['headerMenu']
  

}
</script>

<style scoped>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 80%;
  width: 150px;
  position: fixed;
  z-index: 1;
  top: 60px;
  left: 0;
  background-color: rgb(255 255 255);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  border: 1px;
  padding: 8px;
  box-shadow: 3px 3px rgb(241 241 241);
}

.sidenav a {
  padding: 6px 12px 10px 10px;
  text-decoration: none;
  font-size: 18px;
  color: #141212;
  display: block;
  transition: 0.3s;
  box-shadow: -1px 1px rgb(241 241 241);
}

.sidenav a:hover {
  color: #0a0909;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  height: 80%;
  width: 50px;
  position: fixed;
  z-index: 1;
  top: 60px;
  left: 0;
  background-color: rgb(255 255 255);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  border: 1px;
  padding: 8px;
  box-shadow: 3px 3px rgb(241 241 241);
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }
}
</style>



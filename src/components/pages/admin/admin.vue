<template>
  <div class="admin">

    <div id="header">

      <h1 class="fleft">Simple E-commerce</h1>
      <a class="fright" href="#" @click="logoutNow()">Logout</a>

    </div>

     <div id="sidebar">

          <ul class="nav">

            <li>
                <router-Link to="/admin/category">

                Category

                </router-Link>

            </li>

             <li>
                <router-Link to="/admin/supplier">

                Supplier

                </router-Link>

            </li>

             <li>
                <router-Link to="/admin/product">

                Product

                </router-Link>

            </li>

             <li>
                <router-Link to="/admin/shop">

                Shop

                </router-Link>

            </li>


          </ul>

    </div>

     <div id="main">

     <router-view/>

    </div>


    
   
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {

    return{

  }
   
  },

  mounted(){

  var token = localStorage.getItem("token" ,"");

  if(!token){

  this.$router.push({name : 'login'});


  }

  },

  methods:{

  logoutNow(){

  localStorage.setItem('token','');
  this.$router.push({name : 'login'});
  }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

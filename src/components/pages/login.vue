<template>
  <div class="login">

    <div class="loginHeader">

      user login

    </div>

    <div class="loginContainer">

      <table>

        <tr>

          <td>Username</td>
          <td>:</td>
          <td><input type="text" placeholder="username" v-model="user.username"></td>


        </tr>

        <tr>

          <td>Password</td>
          <td>:</td>
          <td><input type="password" placeholder="password" v-model="user.password"></td>


        </tr>

          <tr>

          <td></td>
          <td></td>
          <td><button class="addBtn" @click="loginNow()">login</button></td>


        </tr>

      </table>

    </div>

    
   
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {

    return{

     user:{

       username:"",
       password:""
    }
  }
   
  },

  methods:{

  loginNow(){

  console.log(this.user);

  this.$eventBus.$emit("loadingStatus",true);

  this.$axios.post("https://jsonplaceholder.typicode.com/posts" ,this.user)
  .then(res=>{

  this.$eventBus.$emit("loadingStatus",false);
  console.log(res);


  if(res.data.error){

      this.$iziToast.error({
        title: 'Error',
        message: res.data.message,
    });
  }else{

   localStorage.setItem('token',res.data.token);
   this.$axios.defaults.headers.common['Authorization'] = "Token "+ localStorage.getItem("token");
  this.$router.push({name: "admin"})
  }


  })
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

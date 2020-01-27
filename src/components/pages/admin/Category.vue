<template>
  <div class="Category">


    <modal modalHeading="Add new Category" :cond="showingAddModal" @modalClose=" showingAddModal= false">

        <table>

            <tr>

              <td>Category Name</td>
              <td><input type="text" id="newCatName" v-model="newCategory.name" placeholder="enter categpry name"/></td>



            </tr>

             <tr>

              <td>Category description</td>
              <td><textarea type="text"  v-model="newCategory.description" placeholder="enter categpry description"></textarea></td>



            </tr>

            <tr>

              <td>
              </td>

              <td>

                <button class="btnSave" @click="addNewCategory()">Save</button>

              </td>

            </tr>


        </table>

    </modal>


    <modal modalHeading="update Category" :cond="showingEditModal" @modalClose=" showingEditModal= false">

        <table>

            <tr>

              <td>Category Name</td>
              <td><input type="text" id="newCatName" v-model="clickedCategory.id" placeholder="enter categpry name"/></td>



            </tr>

             <tr>

              <td>Category description</td>
              <td><textarea type="text"  v-model="clickedCategory.title" placeholder="enter categpry description"></textarea></td>



            </tr>

            <tr>

              <td>
              </td>

              <td>

                <button class="btnSave" @click="addNewCategory()">Save</button>

              </td>

            </tr>


        </table>

    </modal>

     <modal modalHeading="Are you sure!!!!!!" :cond="showingDeleteModal" @modalClose=" showingDeleteModal= false">

          <h2> you are delete the category {{ clickedCategory.title}}</h2>
        <table>

            <tr>

             <td class="btnSave">yes</td>
             <td class="btnClose" @click="showingDeleteModal=false">no</td>



            </tr>


        </table>

    </modal>

    <h1 class="fleft"> categories</h1>
    <button class="addBtn fright" @click=" showingAddModal=true">Add New</button>
    <div class="clear"></div>

    <hr>

    <table class="nice-table">

        <tr>

            <td>ID</td>
            <td>Name</td>
            <td>Description</td>
            <td>Edit</td>
            <td>Delete</td>


        </tr>

        <tr v-for="category in categories">
            <td>{{ category.id}}</td>
            <td>{{ category.title}}</td>
            <td>description</td>
            <td><button class="edit" @click="showingEditModal= true ;clickedCategory= category">Edit</button></td>
            <td><button class="delete"  @click="showingDeleteModal=true">delete</button></td>


        </tr>


    </table>
   
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {

    return{

    showingAddModal:false,
    showingEditModal:false,
    showingDeleteModal:false,

    newCategory:{

    name:"",
    description:"",

    id:"",
    title:""
    },

    clickedCategory:{},

    categories:[]

  }
   
  },

  mounted(){

  console.log("mounted");

  this.init();
  },



  methods:{


  init(){

     this.$eventBus.$emit("loadingStatus",true);

  this.$axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(res=>{

  this.$eventBus.$emit("loadingStatus",false);
  this.showingAddModal=false;


  if(res.data.error){

      this.$iziToast.error({
        title: 'Error',
        message: res.data.message,
    });
  }else{

  this.categories= res.data;

    
  }


  });


  },



  addNewCategory(){

  this.$eventBus.$emit("loadingStatus",true);

  this.$axios.post("https://jsonplaceholder.typicode.com/posts" ,this.newCategory)
  .then(res=>{

  this.$eventBus.$emit("loadingStatus",false);
  this.showingAddModal=false;


  if(res.data.error){

      this.$iziToast.error({
        title: 'Error',
        message: res.data.message,
    });
  }else{

    this.$iziToast.success({

    title:'Succes',

    message: res.data.message,
    });
  }


  });
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

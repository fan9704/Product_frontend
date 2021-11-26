<template>
  <div class="container-fluid" id="addform">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <form action="" class="form">
            <h2>Add New Product!</h2>
            <div class="mb-3 row" v-show="show2" v-for="todo in todos" :key="todo">
                <label class="error col-sm-12 bg-danger badge text-wrap">{{todo}}</label>
                
            </div>
          <div class="mb-3 row">
            <label for="" class="bg-dark badge text-wrap col-sm-2"
              >產品名稱</label
            >
            <input type="text" name="name" class="col-sm-10" v-model="name" />
          </div>
          <div class="mb-3 row">
            <label for="" class="bg-dark badge text-wrap col-sm-2"
              >上傳者</label
            >
            <input
              type="text"
              name="uploader"
              class="col-sm-10"
              v-model="uploader"
            />
          </div>
          <div class="mb-3 row">
            <label for="" class="bg-dark badge text-wrap col-sm-2"
              >產品狀態</label
            >
            <input
              type="text"
              name="status"
              class="col-sm-10"
              v-model="status"
            />
          </div>
          <div class="mb-3 row">
            <label for="" class="bg-dark badge text-wrap col-sm-2"
              >產品描述</label
            >
            <input
              type="text"
              name="description"
              class="col-sm-10"
              v-model="description"
            />
          </div>
          <div class="mb-3 row">
            <label for="" class="bg-dark badge text-wrap col-sm-2"
              >產品價格</label
            >
            <input type="text" name="price" class="col-sm-10" v-model="price" />
          </div>
          <div class="mb-3 row">
            <input
              type="reset"
              value="重置"
              class="form-control col-sm-6"
              v-on:click="reset"
            />
            <input
              type="submit"
              value="新增產品"
              class="form-control col-sm-6"
              v-on:click="addproduct"
            />
          </div>
        </form>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      uploader: "",
      status: "",
      description: "",
      price: "",
      todos: [],
      show2: true,
    };
  },
  methods: {
    addproduct() {
        if(this.name=="" || this.uploader=="" || this.status=="" || this.description =="" || this.price==""){
            this.show2=true;
            if(this.name=="")this.todos.push("產品名稱不能為空")
            if(this.uploader=="")this.todos.push("產品上傳者不能為空")
            if(this.status=="")this.todos.push("產品狀態不能為空")
            if(this.description=="")this.todos.push("產品描述不能為空")
            if(this.price=="")this.todos.push("產品價格不能為空")
        }else{
            this.show2=false;
            axios
            .post("../api/product/",{"name":this.name,"uploader":this.uploader,"status":this.status,"description":this.description,"price":this.price})
            .then((response) => {
            console.log(response.data);
            if(response.data.addproduct==true){
                alert("Product Added Success!!");
            }else{
                alert("Create Failed");
            }
            })
            .catch((error) => console.log(error));
        }
    
    },
    reset() {
      this.name = "";
      this.uploader = "";
      this.status = "";
      this.description = "";
      this.price = "";
    },
  },
  name: "AddproductView",
};
</script>
<style scoped>
form.form {
  margin-top: 20px;
  border-radius: 10px;
  padding: 40px;
  background: linear-gradient( rgb(240, 196, 54),rgb(228, 37, 37));
}
.bg-dark{
    color:white;
}
#addform{
    width: 100%;
    background: linear-gradient(white,rgb(201, 113, 12));
    height: 95vh;
    border: black solid 5px;;
}
</style>
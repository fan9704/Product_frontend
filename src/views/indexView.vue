<template >

  <div id="list-rendering" class="row">
    <h2>Product Catalogs</h2>
    <div v-for="todo in todos" :key="todo" class="li col-3">
      <h5 class="product_title">{{ todo.name }}</h5>
      <p class="clickme" v-on:click="show">⇧click me see detail!⇧</p>
      <hr />
      <p class="detail">
        <label for="">上傳者:</label>{{ todo.uploader }}<br /><label for=""
          >狀態:</label
        >{{ todo.status }}<br /><label for="">描述:</label
        >{{ todo.description }} <br /><label for="">價格:</label
        >{{ todo.price }}
      </p>
    
      <button type="button" class="btn btn-danger" v-on:click="deleteproduct(todo.id)">Delete</button>
<button type="button" class="btn btn-warning" v-on:click="editproduct(todo.id)">Edit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: [],
      show2:true
    };
  },
  methods: {
    show() {
      let button = document.querySelector(".product_title");
      let hint=document.querySelector(".clickme");
      let container = document.querySelector(".detail");
      button.addEventListener("click", () => {
        this.show2 = !this.show2;
        console.log(this.show2);
      });
      if (this.show2) {
        container.style.display = "block";
        hint.style.display="none"
      } else {
        container.style.display = "none";
        hint.style.display="block"
      }
    },
    deleteproduct(id){
      console.log(id);
      axios.patch("./api/product/",{"id":id}).then((response)=>{
        console.log(response.data);
        if(response.data.delete=="success"){window.location.href("/");}
      }).catch((error) => console.log(error));
    },
    editproduct(id){
      console.log(id);
        axios.put("./api/product/",{"id":id}).then((response)=>{
        console.log(response.data);
      }).catch((error) => console.log(error));
    }
  },
  beforeMount() {
    axios
      .get("./api/products/")
      .then((response) => {
        this.todos = response.data;
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  },
  name: "IndexView",
};
</script>

<style scoped>


div.li {
  border-radius: 5px;
  border: black 5px solid;
  background-color: rgb(223, 223, 54);
  color: black;
  margin: 20px;
  padding: 10px;
  width: 20%;
  float: left;
  font-weight: bolder;
}

.product_title {
  border-radius: 5px;
  font-weight: bolder;
  text-align: center;
  padding: 10px;
  border: black 5px solid;
  border-style: inset;
  background-color: #000;
  color: yellow;
}

.clickme {
  display: none;
  border-radius: 5px;
  border: black 5px solid;
  border-style: inset;
  background-color: #000;
  color: yellow;
  padding: 0;
  text-align: center;
}

.detail {
  /* display: none; */
  border-radius: 5px;
  border: black 5px solid;
  border-style: inset;
  background-color: #000;
  color: yellow;
  padding: 10px;
}

#list-rendering h2 {
  text-align: center;
  padding: 20px;
  border: black solid 3px;
  border-radius: 5px;
  font-weight: bolder;
  color: rgba(0, 0, 0, 0.781);
  background: rgb(76, 205, 50);
}

#list-rendering {
  background: linear-gradient(rgb(48, 48, 48),rgb(138, 138, 138));
  display: inline-block;
  width: 100%;
  padding: 10px;
  border: black solid 3px;
  border-radius: 5px;
  height: 100%;
}
</style>
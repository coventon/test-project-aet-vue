<template>
  <div class="home">
   <h1 class="main-title">Welcome to Home page</h1>
   <div class="users-list">
     <router-link class="list-item" v-for="user in users" :key="user.id" :to="{name:'UserProfile',params:{userId:user.id}}"><i class="fas fa-user"></i> 
       {{user.username}} 
     </router-link>
   </div>
  </div>
</template>

<script>
import {users } from "../assets/users";

export default {
  name: 'Home',
  components: {   
  },
  setup(){

    return{
      users
    }
  }

}
</script>

<style scoped lang='scss'>
.home{
  padding: 50px 5%;
}
.main-title{
  margin-top: 40px;
  text-align: center;
}
.users-list{
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
  padding: 5px;
}
.list-item{
  margin: 5px;
  padding: 2px 5px;
  color: #333;
}

.fas{
  margin-right: 5px;
  color: cornflowerblue;
}

</style>

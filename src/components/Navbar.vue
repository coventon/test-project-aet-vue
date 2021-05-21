<template>
  <nav>
    <div  href="/" class="navbar-brand">
    <router-link to="/">
      <h3>Twootter</h3>
    </router-link>
      
      <img src="../assets/AETClogo-removebg.png" alt="" />
    </div>
    <div class="user" v-if="user">
      @ {{user.username}}
    </div>
  </nav>
</template>
<script>
import { computed } from 'vue';
//import { reactive } from 'vue';
import { useStore } from "vuex";
export default {

  name: "Navbar",
  setup(){
    const store = useStore()
    const user = computed(()=>store.state.User.user)
   
    console.log(user);
    return{
      user,
      
    }
  },
//   data(){
//     return {
//         user:{
//             username:"_MitchelRomney"
//         }
//     }
// }
};


</script>
<style scoped lang="scss">
nav {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10px;
  background: rgb(212, 223, 245);
  -webkit-box-shadow: 1px 9px 9px -6px rgba(0,0,0,0.91); 
box-shadow: 1px 9px 9px -8px rgba(0,0,0,0.50);

  .navbar-brand {
    text-decoration: none;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
  }
   h3{
    color: rgb(48, 43, 78);
    font-size: 25px;
    letter-spacing: 0.8px;
    margin: 0 20px;
    font-weight: 700;
  }

  img{
      width: 200px;
      margin-left: 20px;
  };

  .user{
      margin-right: 20px;
      font-weight: 500;
      font-size: 1.1rem;
  }
 
}

@media screen and (max-width:600px){
  // img{
  //   display: none;
  // }
  nav{
    flex-direction: column;
  }
  .user{
    margin-top: 20px;
  }
}
</style>



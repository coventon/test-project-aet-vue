<template>
  <div class="user-profile">
    <!-- User Info Tab -->
    <div class="user-panel">
      <div class="user-profile_user-panel">
        <h1>@{{ state.user.username }}</h1>
        
        <div v-if="state.user.isAdmin" class="user-profile_admin_badge">Admin</div>

        <div class="user-profile_followers-count" v-if="state.followers > 0">
          <strong>Followers: {{ state.followers }}</strong>
        </div>
       
      </div>
       <!-- Twoot form -->
        <div class="form-twoot">         
          
            <CreateTwootPanel @add-twoot="addTwoot"/>          
        </div>
    </div>

    <!-- Twoot Container -->
    <div class="user-profile_twotts-wrapper">
      <TwootItem
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
        @favorite="toggleFavorite"
      />
    </div>
  </div>
</template>
<script>
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from '@/components/CrateTwootPanel'
import {useRoute} from 'vue-router'
import { reactive,computed } from 'vue';
import {users} from '../assets/users'

export default {
  name: "UserProfile",
  components: { TwootItem , CreateTwootPanel},

  setup(){

    const route = useRoute()
    const userId = computed(() => route.params.userId)
    //const userId = route.params.userId
    console.log(userId.value);
     console.log(users[parseInt(route.params.userId)]);

    const state = reactive({
      
      followers: 0,
      user: users[userId.value -1] || users[0],
      //  {
      //   id: 1,
      //   username: "_Mitchel Romney",
      //   firstName: "Mitchel",
      //   lastName: "Romney",
      //   email: "mitc@mail.com",
      //   isAdmin: true,
      //   twoots: [
      //     {
      //       id: 1,
      //       content: "Firs post in user array of posts",
      //       date: "5.2.2021 12:23",
      //     },
      //     {
      //       id: 2,
      //       content: "Second post in user array of posts",
      //       date: "5.2.2021 12:23",
      //     },
      //   ],
      // },
      timeStamp: "",
    
    })

    function addTwoot(twoot) {
      state.user.twoots.unshift({id:state.user.twoots.length +1 ,content:twoot,date:getTimeStamp()})
    }

    function getTimeStamp() {
      const today = new Date();
      const date =
        today.getDate() +
        "." +
        (today.getMonth() + 1) +
        "." +
        today.getFullYear();
      const minutesWithZero =
        (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
      const secondsWithZero =
        (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
      const time =
        today.getHours() + ":" + minutesWithZero + ":" + secondsWithZero;
      console.log(date + ":" + time);
     // this.timeStamp = date + " " + time;
      //console.log(this.timeStamp);
      const dateNow = date + " " + time;
      return dateNow;
    }

    function followUser() {
      state.followers++;
    }

    function   toggleFavorite(id) {
      const twoots = state.user.twoots.filter((twoot) => {
        return twoot.id === id;
      });
      console.log(`Favorite tweet: ${id} , ${twoots[0].content} `);
    }

    return{
      state,
      addTwoot,
      followUser,
      toggleFavorite,
userId
    }
  },

  
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained follower`);
       
      }
    },
  },
  computed: {
    fullName() {
      console.log(`${this.user.firstName} ${this.user.lastName}`);
      return `${this.user.firstName} ${this.user.lastName}`;
    },
    // newTwootCharCount() {
    //   return this.newTwootContent.length;
    // },
  },
  methods: {
    // addTwoot(newTwoot) {
    //   console.log("Add new");
      
    //     this.user.twoots.unshift({
    //       id: this.user.twoots.length + 1,
    //       content: newTwoot,
    //       // date: this.timeStamp
    //       date: this.getTimeStamp(),
    //     });
    //     //this.newTwootContent = "";
      
    // },
    // followUser() {
    //   this.followers++;
    // },
    // toggleFavorite(id) {
    //   const twoots = this.user.twoots.filter((twoot) => {
    //     return twoot.id === id;
    //   });
    //   console.log(`Favorite tweet: ${id} , ${twoots[0].content} `);
    // },
    // getTimeStamp() {
    //   const today = new Date();
    //   const date =
    //     today.getDate() +
    //     "." +
    //     (today.getMonth() + 1) +
    //     "." +
    //     today.getFullYear();
    //   const minutesWithZero =
    //     (today.getMinutes() < 10 ? "0" : "") + today.getMinutes();
    //   const secondsWithZero =
    //     (today.getSeconds() < 10 ? "0" : "") + today.getSeconds();
    //   const time =
    //     today.getHours() + ":" + minutesWithZero + ":" + secondsWithZero;
    //   console.log(date + ":" + time);
    //   this.timeStamp = date + " " + time;
    //   console.log(this.timeStamp);
    //   const dateNow = date + " " + time;
    //   return dateNow;
    // },
  },
  mounted() {
    this.followUser();
    //this.getTimeStamp();
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  padding: 50px 5%;
  overflow: hidden;

  .user-profile_user-panel {
    display: flex;
    max-height: 350px;
    flex-direction: column;
    /* max-height: 110px; */
    /* align-items: center; */
    /* text-align: left; */
    justify-content: left;
    margin-right: 20px;
    padding: 8px 10px;
    background: whitesmoke;
    border-radius: 5px;
    border: solid 1px #dfe3e8;

    h2{
      float: left;
      margin-right: auto;
      margin-left: 10px;
    }
  }

  .form-twoot {
    margin-right: 20px;
  }
}

.user-profile_user-panel h1 {
  margin: 8px 5px;
  font-size: 23px;
  float: left;
  padding-bottom: 3px;
  white-space: nowrap;
  border-bottom: 1px #ccc solid;
}

.user-profile_twotts-wrapper {
  display: grid;
}

.user-profile_followers-count {
  border-bottom: 1px solid #ccc;
}

.user-profile_followers-count strong {
  float: left;
  text-align: left;
  margin-right: auto;
  font-size: 14px;
  margin-right: 40px;
}

.user-profile_admin_badge {
  background: rgb(84, 177, 201);
  color: #fff;
  border-radius: 5px;
  margin-right: auto;
  letter-spacing: 0.7px;
  padding: 5px 10px;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 5px;
}

.user-profile_crete-twoot {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-top: 10px;

  &.--exceeded {
    color: red;
    border-color: red;

    button {
      background: red;
    }
  }
}

.user-profile_crete-twoot textarea {
  outline: none;
  border: none;
  padding: 5px;
  margin-bottom: 10px;
}

.user-profile_crete-twoot label {
  margin-bottom: 10px;
  text-align: left;
}

.user-profile_create-twoot-type {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0;
  justify-content: space-between;

  label {
    margin-right: 10px;
  }
  select {
    padding: 7px 15px;
    border-radius: 5px;
    // width: 100%;
    font-size: 14px;
    font-weight: bold;
    outline: none;
    border-color: #ccc;

    option {
      padding: 7px 10px;
      color: rgb(96, 119, 184);
    }

    
  }
  .btn{
      padding: 8px 20px;
      float: left;
      margin-right: 5px;
    }
}

/* .user-profile_twoot {
  background: #d0ebbb;
  padding: 10px;
  margin: 10px 10px;
  box-shadow: 10px 11px 5px -6px rgba(0, 0, 0, 0.36);
  border-radius: 5px;
  position: relative;
}

.user-profile_twoot:after {
  content: "";
  position: absolute;
  right: -15px;
  top: 3px; 
  background: darkkhaki; 
  /* border-top: 0px solid #3e582a;
  border-left: 15px solid #d0ebbb;
  border-right: none;
  border-bottom: 15px solid transparentb;
} */

/* .message-time {
  margin: 5px;
  text-align: end;
  color: rgb(131, 130, 130);
  font-size: 12px;
} */

@media only screen and (max-width: 920px) {
  .user-profile {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }
  .user-profile_user-panel {
    /* max-height: 6rem; */
  }
  .user-profile_user-panel h1 {
    font-size: 14px;
    /* white-space: nowrap; */
  }
  .user-profile_followers-count strong {
    font-size: 13px;
  }

  .user-profile_admin_badge {
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 5px;
  }
}

@media only screen and (max-width: 600px) {
  .user-profile {
    display: grid;
    grid-template-columns: 1fr;
  }

  .user-profile_user-panel {
    margin-left: 20px;
  }
  .form-twoot{
    margin-left: 20px;
  }
}
</style>

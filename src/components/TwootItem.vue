<template>
  <div class="twoot-item">
    <div class="user-profile_twoot" @click="favoriteTwoot(twoot.id)">
      <div class="twoot-item_user">@{{ username }}</div>
      <div class="twoot-item_content">
        {{ twoot.content }}
        <p class="message-time">{{ twoot.date }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TwootItem",
  props: {
    username: {
      type: String,
      required: true,
    },
    twoot: {
      type: Object,
      required: true,
    },
  },
  methods: {
    favoriteTwoot(id) {
      this.$emit("favorite", id);
    },
  },
};
</script>

// Style
<style scoped lang="scss">
.twoot-item {
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;

  .user-profile_twoot {
    background: #d0ebbb;
    padding: 10px;
    margin: 7px 10px;
    box-shadow: 10px 11px 5px -6px rgba(0, 0, 0, 0.36);
    border-radius: 5px;
    position: relative;

    .twoot-item_user {
      text-align: left;
      margin-bottom: 10px;
      font-size: 14px;
      color: teal;
      font-weight: bold;
    }

    .message-time {
      margin: 5px;
      text-align: end;
      color: rgb(131, 130, 130);
      font-size: 12px;
    }
  }

  &:hover{
     transform: scale(1.1, 1.1);
  }
}


.user-profile_twoot:after {
  content: "";
  position: absolute;
  right: -15px;
  top: 3px;
  /* background: darkkhaki; */
  border-top: 0px solid #3e582a;
  border-left: 15px solid #d0ebbb;
  border-right: none;
  border-bottom: 15px solid transparent;
}
</style>

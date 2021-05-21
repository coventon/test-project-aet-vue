<template>
  <form action="" class="create-twoot-panel" @submit.prevent="createNewTwoot" :class="{'--exceeded':twootCarCount > 180}">      
    <label for="newTwoot"
      ><strong>New Twoot </strong>({{ twootCarCount }}/180)
    </label>
    <textarea  id="newTwoot"  rows="5" v-model="state.newTwootContent"></textarea>
    <div class="create-twoot-panel_submit">
        <div class="create-twoot-type">
            <label for="newTwootType" ><strong>Type: </strong></label>
            <select  id="newTwootType" v-model="state.selectedTwootType">
                <option :value="option.value" v-for="(option,index) in state.twootTypes" :key="index">{{option.name}}</option>
            </select>
        </div>
        <button>Twoot It</button>
    </div>
  </form>
</template>

<script>
import { reactive,computed } from "vue";
export default{
    name:'CreateTwootPanel',

    setup(props,ctx){
        const state= reactive({
             newTwootContent:'',
          selectedTwootType:'instant',
          twootTypes:[
              {value:'instant',name:'Instant'},
              {value:'draft',name:"Draft"}
          ]
        })

        const twootCarCount = computed(()=> state.newTwootContent.length)

        function createNewTwoot(){
            if(state.newTwootContent && state.selectedTwootType !== 'draft'){
                ctx.emit('add-twoot',state.newTwootContent)
                state.newTwootContent=''
            }
        }

        return{
            state,
            twootCarCount,
            createNewTwoot
        }
    },

    // data(){
    //   return{
    //       newTwootContent:'',
    //       selectedTwootType:'instant',
    //       twootTypes:[
    //           {value:'instant',name:'Instant'},
    //           {value:'draft',name:"Draft"}
    //       ]
    //   }
    // },

    // methods:{
    //     createNewTwoot(){
    //         if(this.newTwootContent && this.selectedTwootType !== 'draft'){
    //             this.$emit('add-twoot',this.newTwootContent)
    //             this.newTwootContent=''
    //         }
    //     }
    // },
    

}
</script>

<style lang="scss" scoped>
.create-twoot-panel{
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea{
        border: solid 1px #DFE3E8;
        border-radius: 5px;
        margin-top: 5px;
        padding: 5px 10px;
        outline: none;
    }

    .create-twoot-panel_submit{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
    

    .create-twoot-type{
        padding: 10px 0;
    }

    select{
        
        background-color: #fff;
        padding: 5px 5px ;
        border: none;
        outline: none;
        margin: 0;
        max-width: 90px;
        cursor: inherit;
        line-height: inherit;
        border-radius: 4px;
    }

    button{
        padding: 5px 20px;
        margin: auto 0;
        border-radius: 5px;
        border: none;
        outline: none;
        background: #508dd3;
        color: #fff;
        font-weight: bold;
        font-size: 17px;
        transition: all 0.3s ease-in-out;

        &:hover{
            opacity: 0.9;
            transform: scale(0.991);
        }

    }
}

 &.--exceeded {
    color: red;
    border-color: red;
    .create-twoot-panel_submit {
      button {
        background-color: red;
        color: white;
      }
    }
  }
}
</style>

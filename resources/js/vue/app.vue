<template>
    <div id="todoListContainer">
        <div id="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form />               
        </div>
         <list-view  :items="items"/>
    </div>
</template>
<script>
import addItemForm from './addItemForm.vue'
import listView from './listView.vue'
export default {
    components:{
        addItemForm,
        listView
    },

    //to grab items from the database

    data:function() {
        return {
            items:[]
        }
    },

    methods: {
        getlist(){
            axios.get('api/items')
            .then(response =>{
                this.item = response.data
            })
            .catch(error =>{
                console.log(error);
            })
        }
    },
    created(){
        this.getlist();
    }
}
</script>

<style scoped>
    .todoListContainer{
        width: 350px;
        margin: auto;
    }
    .heading{
        background: #e6e6e6;
        padding: 10px;
    }
    .title{
        text-align: center;
    }
</style>
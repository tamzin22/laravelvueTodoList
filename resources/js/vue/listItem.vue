<template>
    <div class="item">
        <input
             type="checkbox"
             @change="updateCheck()"
             v-model="item.completed"
             />

             //display item names
             <span :class="[item.completed ? 'completed': '','itemText']">{{ item.name}}</span>
             <button @click="removeItem()" class="trashcan">
                 <font-awesome-icon  class="trash"/>
             </button>
    </div>
</template>

<script>
export default {
    props:["item"]
}
</script>


<style scoped>
  .completed{
      text-decoration: line-through;
      color: #9999;
  }
  .itemText{
      width: 100%;
      margin-left: 20px;

  }

  .item{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .trashcan{
      background: #756363;
      border: none;
      color: #fff000;
      outline: none;
  }
</style>
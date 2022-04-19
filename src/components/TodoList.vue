<template>
    <div>
        <div class="input">
        <input type="text" v-model="newTask"/>
        <button @click="tasks.unshift({task:newTask,status:false}); newTask=''">Add</button>
        </div>
        <ul>
            <li v-for="(task,i) in tasks" :key="i">
                <input type="checkbox" v-model="task.status" />
                <span :class="{done:task.status}"> {{task.task}} </span>
                <XIcon class="icon" @click='handleRemove(tasks,index)'/>
                 </li>
        </ul>
    </div>
</template>

<script>
    import { XIcon } from "@vue-icons/feather"
    export default {
        name:'TodoList',
        components:{XIcon},
        data() {
        return {
            newTask:'',
            tasks: [],
        }
    },
    methods: {
        handleRemove: function(arrTask,i){
            arrTask.splice(i,1);
        }
    },
    }
    
</script>

<style scoped>
    div{
        align-items: center;
        text-align: center;
    }
    .done{
        text-decoration: line-through;
    }
    .input{
        margin-top: 50px;
    }
    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    ul li{
        display: flex;
        min-width: 50px;
        width: 200px;
        height: 20px;
        justify-content: center;
        text-align: center;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 500;
        color: rgb(245, 62, 62);
        background-color: aquamarine;
        border-radius: 5px;
        border: 1px solid black;
        margin: 5px 0;
    }
    .icon{
        width: 15px;
        height: 15px;

    }
</style>
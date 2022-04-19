<template>
    <div>
        <p>NavBar App</p>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/todolist">TodoList</router-link></li>
            <li><router-link to="/watch">Watch</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
       name:'NavbarWeb'
    }
</script>

<style scoped>
    div{
        width: 100%;
        height: 100px;
        font-size: 10px;
        background-color: hotpink;
        align-items: center;
    }
    p{
        font-size: 2rem;
        font-weight: 600;
        color: aquamarine;
        margin: 0 auto;
        text-align: center;
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
    }
    a{
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 500;
        color: aquamarine;
    }
</style>
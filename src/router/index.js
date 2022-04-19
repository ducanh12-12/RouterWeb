import { createRouter,createWebHistory} from 'vue-router'
import TodoList from '../components/TodoList.vue'
import Watch from '../components/Watch.vue'
import Home from '../components/Home.vue'


const routes = [
    {path:'/', component:Home},
    {path:'/todolist', component:TodoList},
    {path:'/watch', component:Watch}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
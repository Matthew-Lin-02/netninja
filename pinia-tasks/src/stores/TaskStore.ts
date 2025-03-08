import {defineStore} from 'pinia'

export type Task = {
    id: number
    title: string
    isFav:boolean
}

type TaskState = {
    tasks: Task[]
    loading: boolean
}
export const useTaskStore = defineStore('taskStore', {
    state:():TaskState =>({
        tasks: [],
        loading: false
    }),
    getters: {
        favs(state): Task[] {
            return state.tasks.filter(t => t.isFav)
        },
        favCount(state):number{
            return state.tasks.reduce((p,c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state):number => {
            return state.tasks.length
        }
    },
    actions: {
        async getTasks(){
            this.loading = true
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()
            this.tasks = data
            this.loading = false
        },
        async addTask(task: Task){
            this.tasks.push(task)
            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type': 'application/json'}
            })
            if (!res.ok){
                console.log('error')
            }
        },
        async deleteTask(id: Task["id"]){
            this.tasks = this.tasks.filter(t => {
                return t.id !== id
            })

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'DELETE',
            })
            if (!res.ok){
                console.log('error')
            }
        },
        async toggleFav(id: Task["id"]){
            const task = this.tasks.find(t=> t.id === id)
            if (task) {
                task.isFav = !task.isFav; // Safely assign the new value

                const res = await fetch('http://localhost:3000/tasks/' + id, {
                    method: 'PATCH',
                    body: JSON.stringify({isFav: task.isFav}),
                    headers: {'Content-Type': 'application/json'}
                })

                if (!res.ok){
                    console.log('error')
                }
            }
        }
    }
})
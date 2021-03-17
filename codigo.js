const app = new Vue({
    el: '#main',
        data:{
            tarea: null,
            tareas: [
                'Aprender ES6',
                'Aprender Vue',
                'Aprender JS'
            ]
        },
        methods:{
            agregarTarea(){
                this.tareas.unshift(this.tarea)
            }
        }
})
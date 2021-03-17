const app = new Vue ({
    el: '#main',
    data: {
        tarea: null,
        tareas:[
            {titulo: 'Aprender ES6', completado: false},
            {titulo: 'Aprender Vue', completado: false},
            {titulo: 'Descansar toda la tarde', completado: false},
            {titulo: 'Levantarte', completado: false},
        ]
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift( {titulo:this.tarea, completado: false})
        }

        
    },
    
    
    
})
const app = new Vue ({
    el: '#inicio',
    data:{   
        tarea:null,
        tareas:[
            {titulo: 'Aprender ES6', completado: true},
            {titulo: 'Aprender Vue', completado: false},
            {titulo: 'Descansar toda la tarde', completado: true},
            {titulo: 'Levantarte', completado: false},
        ]

    },
    methods: {
        agregarTarea(){
            this.tareas.unshift({titulo:this.tarea, completado: false})
        }
    },
    computed:{
        //realiza logica de programación dentro de una funcion pero no se llama como una funcion
        // se llama como un dato mas de tu modelo
        mostrarCompletadas(){
            return this.tareas.filter ( item => item.completado)
            //siempre debe devolver porque el valor se guardara en el nombre del computed como 
            //si fuese una propiedad  del modelo
        },
        //creacion de un filtros
        mostrarPorTitulo(){
            return this.tareas.filter (item => item.titulo.includes(this.tareas))
        }
    }
        //los meotodos no devuelven info solo realizan una acción
})
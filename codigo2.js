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
    //se podran agregar metodos o instancias
    methods:{
        agregarTarea(){
            //es una abreviatura, sin ES6 seria: agregarTarea:function()
            this.tareas.unshift( {titulo:this.tarea, completado: false})
            //al señalar 'tareas' llamamos a la propiedad que esta dentro del modelo
            //unshift es una propiedad que nos indica que lo insertado se agregara al principio


        }

        
    },
    
    
    
})
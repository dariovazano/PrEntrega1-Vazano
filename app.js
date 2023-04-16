// Saludo inicial

alert("Bienvenido a la ayuda para ahorra dinero basada en el principio de PARETO")
const name = prompt("Primero que nada me gustaria saber tu nombre")
alert(`Bueno ${name}, te cuento como va la cosa. Pareto es un principio estadistico que dice que el 80 % de las consecuencias son el resultado del 20 % de las causas. En este caso las consecuencias serian tus gastos y las causas son diferentes categorias generales preseteadas para esta vesión inicial.`)
alert("De ahora en más déjate llevar por las preguntas y no hace falta que respondas de manera exacta, con un valor aproximado basta y sobra.")

//creo algunas variables
// const salary = Number(prompt("¿cuásnto gasnas al mes?"))
// const objective = Number(prompt("¿cuánto quieres ahorrar"))


// Creo el objeto Categorias
const categorias={
    1: "Alimentacion",
    2: "Vivienda",
    3: "Transporte",
    4: "Entretenimiento",
    5: "Salud",
    6: "Educacion",
    7: "Ropa y Accesorios",
    8: "Tecnologia y Comunicacion",
    9: "Mascotas",
    10: "Regalos y Donaciones",
}

// Creo objeto consejos

const consejos={
    1: "Alimentación: Compra productos de temporada y a granel, haz una lista de compras y compra solo lo necesario, evita comer fuera de casa con frecuencia y cocina en casa más a menudo.",
    2: "Vivienda: Compara ofertas de diferentes proveedores de servicios como internet y electricidad, reduce el consumo de energía apagando luces y aparatos electrónicos innecesarios, busca opciones de alquiler o compra de vivienda más económicas",
    3: "Transporte: Utiliza transporte público en lugar de coche privado, comparte coche con compañeros de trabajo o amigos, camina o anda en bicicleta para distancias cortas, busca opciones de transporte económicas como carpooling.",
    4: "Entretenimiento: Busca opciones de entretenimiento gratuitas como eventos culturales, caminatas al aire libre, bibliotecas, etc. Usa servicios de streaming de bajo costo o comparte cuentas con amigos y familiares.",
    5: "Salud: Mantén un estilo de vida saludable para evitar costos de atención médica, utiliza seguro médico para reducir los costos de atención, utiliza medicamentos genéricos en lugar de marcas costosas.",
    6: "Educación: Busca opciones de educación gratuitas como cursos en línea, utiliza libros usados y bibliotecas, busca becas y ayuda financiera.",
    7: "Ropa y Accesorios: Compra ropa y accesorios de segunda mano o en tiendas económicas, evita comprar productos de marca costosos, haz tu propia ropa y accesorios.",
    8: "Tecnología y Comunicación: Compara ofertas de diferentes proveedores de servicios de internet y telefonía móvil, utiliza servicios gratuitos como Skype, busca opciones de tecnología económicas.",
    9: "Mascotas: Compra alimentos para mascotas a granel, haz tu propia comida para mascotas, busca opciones de atención veterinaria económicas, adopta una mascota en lugar de comprar una.",
    10: "Regalos y Donaciones: Haz regalos caseros o personalizados en lugar de comprar productos costosos, utiliza cupones y ofertas para comprar regalos, considera hacer donaciones en especie en lugar de dinero."
}

// Creo el objeto Gastos

const gastos={
    1: Number(prompt("¿Cúanto gastas al mes en comida? incluye todos los gastos relacionados con la compra de alimentos, bebidas, comestibles y restaurantes, como comestibles para el hogar, comidas rápidas, comidas fuera de casa, bebidas alcohólicas y no alcohólicas, entre otros.")),
    2: Number(prompt("¿Cúanto gastas al mes en vivienda? incluye todos los gastos relacionados con la vivienda, como la renta o hipoteca, impuestos a la propiedad, servicios públicos, mantenimiento y reparaciones, seguros para el hogar, entre otros.")),
    3: Number(prompt("¿Cúanto gastas al mes en transporte? incluye todos los gastos relacionados con el transporte, como la gasolina, el mantenimiento del vehículo, seguros para el vehículo, pago de estacionamiento, peajes, transporte público, entre otros.")),
    4: Number(prompt("¿Cúanto gastas al mes en entretenimiento? incluye todos los gastos relacionados con el entretenimiento, como la asistencia a eventos deportivos, conciertos, teatro, cine, parques de atracciones, viajes, entre otros.")),
    5: Number(prompt("¿Cúanto gastas al mes en salud? incluye todos los gastos relacionados con la atención médica, como consultas médicas, medicamentos, seguros de salud, copagos, gastos dentales, entre otros.")),
    6: Number(prompt("¿Cúanto gastas al mes en educación? incluye todos los gastos relacionados con la educación, como el pago de matrícula, libros, suministros escolares, cuotas de exámenes, actividades extracurriculares, entre otros.")),
    7: Number(prompt("¿Cúanto gastas al mes en ropa y accesorios? incluye todos los gastos relacionados con la ropa, calzado, accesorios y otros productos de moda.")),
    8: Number(prompt("¿Cúanto gastas al mes en tecnología y comunicación? incluye todos los gastos relacionados con los dispositivos electrónicos, como teléfonos móviles, ordenadores, tablets, pago de servicios de internet, telefonía móvil, televisión por cable, entre otros.")),
    9: Number(prompt("¿Cúanto gastas al mes en mascotas?  incluye todos los gastos relacionados con las mascotas, como el cuidado veterinario, alimentos para mascotas, suministros, juguetes, entre otros.")),
    10: Number(prompt("¿Cúanto gastas al mes en regalos y donaciones?  incluye todos los gastos relacionados con la compra de regalos y donaciones, como regalos para amigos y familiares, donaciones a organizaciones benéficas, entre otros."))
}

console.log(gastos[1])
// Aqui hay un objeto solo utilizado para las pruebas.

// const gastos={
//     1: 250,
//     2: 750,
//     3: 66,
//     4: 6, 
//     5: "t",
//     6: 32,
//     7: 0,
//     8: 30,
//     9: 100,
//     10: 2,
// }

//Reviso que todos los valores de gastos sen nuemros
let todoOk=true
while(todoOk){
    todoOk=false
    for (i=1; i<=10; ++i){
        if (isNaN(gastos[i])){
            gastos[i]=Number(prompt(`Por favor repíteme los gastos de ${categorias[i]} que ha habido un error`))
            todoOk=true
        }
    }
}

//Calculo el total de los gastos
let total = 0
for (let i=1; i<=10; ++i){
    total = total + gastos[i]
}

//Ordeno los objetos categorias y gastos de mayor a menor
function ordenar(){
    let ordenado=false
    while (ordenado==false){
        ordenado=true
        for (let i=2; i<=10; ++i){
            let g=gastos[i-1]
            let c=categorias[i-1]
            let con=consejos[i-1]
            if (gastos[i]>gastos[i-1]){
            gastos[i-1]=gastos[i]
            categorias[i-1]=categorias[i]
            consejos[i-1]=consejos[i]
            gastos[i]=g
            categorias[i]=c
            consejos[i]=con
            ordenado=false
            }
        }
    }
}

ordenar()


//calculo el 80% de los gastos

let ochentaPorciento = total*0.8

//identifico las categorias que suman el 80% y voy escribiendo las categorias en las respuetas

let suma=0
let respuesta1= "Las categorias en las que te debes enfocar para ahorrar son: "
let respuesta2= "Estos son algunos consejos los cuales te pueden venir bien para atacar directamente a estas categorias:"
for (let i=1;suma<ochentaPorciento;++i){
    suma=suma + gastos[i]
    respuesta1 = `${respuesta1}\n-${categorias[i]}`
    respuesta2 = `${respuesta2}\n-${consejos[i]}`
}

//calculo el porcentaje de las tres categorias mas importantes y lo escribo en la respuesta
let porcentaje = 100 * suma / total
respuesta1 = `${respuesta1}\nEstas categorias suman un total de ${porcentaje}% de todos tus gastos.`

// Doy las respuestas en un alert.
alert(respuesta1)
alert(respuesta2)

//Despedida
alert(`Gracias ${name} por probar la aplicación. Cualquier comentario es bienvenido`)





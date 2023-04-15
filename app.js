alert("Bienvenido a la ayuda para ahorra dinero basada en el principio de PARETO")
const name = prompt("Primero que nada me gustaria saber tu nombre")
alert(`Bueno ${name}, te cuento como va la cosa: Pareto es un principio estadistico que el 80 % de las consecuencias son el resultado del 20 % de las causas. En este caso las consecuencias serian tus gastos y las causas son diferentes categorias generales preseteadas para esta vesión inicial.`)
alert("De ahora en más déjate llevar por las preguntas y no hace flata que respondas de manera exacta con un valor aproximado me basta")




function bills(alimentacion, vivienda, transporte, entretenimiento, salud, educacion, ropaAccesorios, tecnologiaComunicacion, mascotas, regalosDonaciones){
this.alimentacion=alimentacion=Number(prompt("¿Cúanto gastas mes en comida? incluye todos los gastos relacionados con la compra de alimentos, bebidas, comestibles y restaurantes, como comestibles para el hogar, comidas rápidas, comidas fuera de casa, bebidas alcohólicas y no alcohólicas, entre otros."))
this.vivienda=vivienda=Number(prompt("¿Cúanto gastas al mes en vivienda? incluye todos los gastos relacionados con la vivienda, como la renta o hipoteca, impuestos a la propiedad, servicios públicos, mantenimiento y reparaciones, seguros para el hogar, entre otros."))
this.transporte=transporte=Number(prompt("¿Cúanto gastas al mes en transporte? incluye todos los gastos relacionados con el transporte, como la gasolina, el mantenimiento del vehículo, seguros para el vehículo, pago de estacionamiento, peajes, transporte público, entre otros."))
this.entretenimiento=entretenimiento=Number(prompt("¿Cúanto gastas al mes en entretenimiento? incluye todos los gastos relacionados con el entretenimiento, como la asistencia a eventos deportivos, conciertos, teatro, cine, parques de atracciones, viajes, entre otros."))
this.salud=salud=Number(prompt("¿Cúanto gastas al mes en salud? incluye todos los gastos relacionados con la atención médica, como consultas médicas, medicamentos, seguros de salud, copagos, gastos dentales, entre otros."))
this.educacion=educacion=Number(prompt("¿Cúanto gastas al mes en educación? incluye todos los gastos relacionados con la educación, como el pago de matrícula, libros, suministros escolares, cuotas de exámenes, actividades extracurriculares, entre otros."))
this.ropaAccesorios=ropaAccesorios=Number(prompt("¿Cúanto gastas al mes en ropa y accesorios? incluye todos los gastos relacionados con la ropa, calzado, accesorios y otros productos de moda."))
this.tecnologiaComunicacion=tecnologiaComunicacion=Number(prompt("¿Cúanto gastas al mes en tecnología y comunicación? incluye todos los gastos relacionados con los dispositivos electrónicos, como teléfonos móviles, ordenadores, tablets, pago de servicios de internet, telefonía móvil, televisión por cable, entre otros."))
this.mascotas=mascotas=Number(prompt("¿Cúanto gastas al mes en mascotas?  incluye todos los gastos relacionados con las mascotas, como el cuidado veterinario, alimentos para mascotas, suministros, juguetes, entre otros."))
this.regalosDonaciones=regalosDonaciones=Number(prompt("¿Cúanto gastas al mes en regalos y donaciones?  incluye todos los gastos relacionados con la compra de regalos y donaciones, como regalos para amigos y familiares, donaciones a organizaciones benéficas, entre otros."))
}

const bill1=new bills()
console.log(bill1)
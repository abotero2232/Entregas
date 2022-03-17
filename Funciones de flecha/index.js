//Creacion del Arreglo
let vector2 = new Array(5);
for (let i=0;i<5;i++)
{
  let aleatorio = Math.round(100*Math.random());
  vector2[i]=aleatorio;     
}
console.log(vector2);


//Insertar (Inserta un Hola en la posicion 2)
const Insertar = (vector) => {    
  vector.splice(2,0,'hola');
  return vector;
}
console.log(Insertar(vector2))

//Eliminar (Elimina un valor encontrado en la posicion 3)
const Eliminar = (vector) => {    
  vector.splice(3,1);
  return vector;
}
console.log(Eliminar(vector2))

//reemplazar (Reemplaza el valor Hola de la posicion 2)
const Reemplazar = (vector) => {    
  vector.splice(2,1,'Chao');
  return vector;
}
console.log(Reemplazar(vector2))

import './App.css';
import Plantas from './componentes/plants.js';
function App() {
  return (
    <div className="App">
      <div classNmame ='contenedor-principal'>
        <h1>Vivero Aridos</h1>
        <Plantas
        clasificacion ='Suculenta'
        nombre ='Cola de Burro'
        nom ='Sedum Morganianum'
        origen ='nativa del sur de Mexico'
        caracteristicas ='Conocida tambien como Trenza de Gitana o Trenza de India. Tiene grandes tallos que alcanzan los 30 cm de longitud y hojas carnosas de color azul-verdosas. Las flores, terminales, son de color rosa o rojas. Tiene un hábito compacto y erguido que se convierte en llorón a medida que se alargan los tallos. Estos alcanzan 30 cm y se componen de rollizas hojas verde azulado, lanceoladas y entrelazadas. Requiere riego regular y moderado todo el año, menos en invierno que casi no se riega. El exceso de agua puede llegar a pudrirla en poco tiempo.
        Su periodo de floración es al final de la primavera o inicio del verano.'
        imagen ='suc-cola-burro' />
        <Plantas
        clasificacion ='Suculenta'
        nombre ='Cola de Sirena'
        nom ='Senecio Vitalis Cristata'
        origen ='Sudáfrica'
        caracteristicas ='Las suculentas de cola de sirena pueden ser difíciles de encontrar, ya que su mutación es natural y no puede ser reproducida por los humanos. Es muy resistente y la podemos cultivar tanto dentro como fuera de casa siempre y cuando pueda mantenerla, por lo menos, de 3 a 4 horas de sol directo al día.  Es muy fácil de cuidar, requiere de poca atención, es muy resistente a la sequía y prefiere la arena o un suelo bien drenado, por lo que no necesitarás regarla con frecuencia.'
        imagen ='cola-sirena' />
        <Plantas
        clasificacion ='Suculenta'
        nombre ='Helecho Rosario'
        nom ='Senecio Rowleyanus'
        origen ='zonas semi-desérticas de Namibia'
        caracteristicas ='Este senecio es una planta suculenta, perenne y de porte colgante, caracterizada por unos tallos alargados y muy delgados rodeados de hojas verdes cilíndricas y carnosas. Como planta suculenta que es, sus cuidados son bien sencillos. Requiere exposiciones luminosas cercanas a una ventana y temperaturas constantes y templadas a lo largo del año.'
        imagen ='Helecho-rosario' />
        <Plantas
        clasificacion ='Cactus'
        nombre ='Espina de Pez'
        nom ='Epiphyllum Anguliger'
        origen ='especie endémica de Mexico'
        caracteristicas ='Es recomendable abonarlo para mantener ese color verde tan bonito. Comienzan a surgir en la planta a finales del otoño y duran hasta inicios del invierno, aunque lo cierto es que el Epiphyllum anguliger no florece hasta alcanzar la madurez. El tiempo en que un cactus florece depende de su especie, ya que algunos pueden tardar hasta 15 años en regalarnos una bella flor. Los cactus más comunes generalmente tardan de 2 a 9 años en florecer.'
        imagen ='cactus-espina-de-pescado1' />
        <Plantas
        clasificacion ='Cactus'
        nombre ='Cola de Rata'
        nom ='Aporocactus Flagelliformis'
        origen ='Mexico y América Central'
        caracteristicas ='Regarlas una vez a la semana es suficiente, comprobando antes la humedad del sustrato. Florece en los meses de primavera y principios de verano. Rojo violeta, rosa, naranja'
        imagen ='cac-cola-rata' />
        

      </div>
    </div>
  );
}

export default App;

<?php 

//Estructuras de datos
//Arrays

//Declaraciones de arrays
//Inicializacion a traves de constructor de objeto
//$array = new ArrayObject();

//Declaracion de array literal
$array = [];

//Declaracion de array a traves de un metodo
//$array = array();


// METODOS DE ARRAY
//---  Ingresar datos a un array ---
// EN LA ULTIMA POSICION
array_push($array, 1);

// EN LA PRIMER POSICION
array_unshift($array,5);

// --- ELIMINAR datos a un array ---
// PRIMER POSICION
array_shift($array);

// ULTIMA POSICION
array_pop($array);

// --- Imprimir un array ---
print_r($array);

//CALCULAR EL LARGOR O LONGANISMO DE UN ARRAY
$lenght = count($array);

//Prueba
$arraycito = [];
array_push($arraycito,"a");
array_push($arraycito,"b");
array_push($arraycito,"c");
array_unshift($arraycito,"z");
array_shift($arraycito);
array_pop($arraycito);
//Ingresar datos en la ultima posicion sin el array_push
$arraycito[] = "d";
print_r($arraycito);

//ARRAYS ASOCIATIVOS
$arrayzote = [ "nombre" => "Jairo", "apellido" => "Vega Romero"];
print_r($arrayzote);
print_r(array_key_last($arrayzote));
echo "\n";
print_r($arrayzote[array_key_last($arrayzote)]);
print(count($arrayzote));


// CLASES Y OBJETOS

class Persona { 

//Propiedades o atributos
public $nombre;
public $edad;

//Constructor 
function __construct($nombreParam, $edadParam)
{
$this->nombre = $nombreParam;
$this->edad = $edadParam;
}

//Metodos
function respirar(){
return "Estoy respirando";
}
}

$personita = new Persona("Jairo",75);

print($personita->nombre.'\n');
print($personita->respirar());

print_r($personita);


//Stack (pila) -> LIFO LastInFirstOut

class Stack{
public $stack;

function __construct()
{
$this->stack = array();
}

function add($value){
array_push($this->stack, $value);
}

function delete(){
array_pop($this->stack);
}
}

$pilaRopa = new Stack();
$pilaRopa->add("Camiseta");
$pilaRopa->add("Camisa");
$pilaRopa->add("Pantalon");
$pilaRopa->delete();
print_r($pilaRopa);

// Queue o Colas -> FIFO -> FirstInFirstOut

class Queue { 
public $queue;

function __construct()
{
$this->queue = array();
}

function enqueue($value){
array_push($this->queue,$value);
}

function dequeue(){
return array_shift($this->queue);
}
}

$caseta1 = new Queue();
$caseta1->enqueue("Rafa");
$caseta1->enqueue("Diego");
$caseta1->enqueue("Claudia");
print("Dato eliminado: {$caseta1->dequeue()} \n");

print_r($caseta1);

class Node{
public $value;
public $next;

function __construct($data)
{
if($data === null ){
$this->value = 0;
$this->next = null;
}else{
$this->value = $data;
$this->next = null;
}
}
}

class LinkedList{
public $head;

function __construct()
{
$this->head = null;
}

function insert($data){
$newNode = new Node($data);

if($this->head === null){
$this->head = $newNode;
}else{
//Variable auxiliar
$aux = $this->head;

while($aux->next !== null){
$aux = $aux->next;
}

$aux->next = $newNode;
}
}

        function delete($data){
            if($this->head === null){
                return "La lista estaba previamente vacia. \n";
            }

            if($this->head->value === $data){
                print("Se Encontro. \n");
                $this->head = $this->head->next;
                return "Encontrado";
            }
            
            
            $aux = $this->head;


            while($aux->next !== null ){
               if($aux->next->value == $data){
                $aux->next = $aux->next->next;
                print("Si se elimino. \n");
                return "Se ha eliminado el dato.";
               }

                $aux = $aux->next;
            }

            return "Ese dato no existe en la lista.";

        }

        // Generar un metodo el cual me imprima o retorne el length de la lista
        

        // Generar un metodo para vaciar la lista

}

$listita = new LinkedList();
$listita->insert(3);
$listita->insert(5);
$listita->insert(100);
    $listita->delete(5);
print_r($listita);




?> 
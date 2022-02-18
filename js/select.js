function ShowSelected()
{
/* Para obtener el valor */
const seleccionar = document.getElementById("sel-region").value;

$('#comuna option').remove();

//arica y parinacota
if(seleccionar == 14)
{
    $('#comuna').append('<option value="0" >Comuna...</option>');
    $('#comuna').append('<option value="1" >Arica</option>');
    $('#comuna').append('<option value="2" >Camarones</option>');
    $('#comuna').append('<option value="3" >General Lagos</option>');
    $('#comuna').append('<option value="4" >Putre</option>');
    
}

//Taracapa
if(seleccionar == 1)
{
    $('#comuna').append('<option value="0" >Comuna...</option>');
    $('#comuna').append('<option value="5" >Alto Hospicio</option>>');
    $('#comuna').append('<option value="6" >Iquique</option>');
    $('#comuna').append('<option value="7" >Camiña</option>');
    $('#comuna').append('<option value="8" >Colchane</option>');
    $('#comuna').append('<option value="9" >Huara</option>');
    $('#comuna').append('<option value="10" >Pica</option>');
    $('#comuna').append('<option value="11" >Pozo Almonte</option>');
}

//antofagasta
if(seleccionar == 2)
{
    $('#comuna').append('<option value="0" >Comuna...</option>');
    $('#comuna').append('<option value="17" >Ollague</option>');
    $('#comuna').append('<option value="16" >Calama</option>');
    $('#comuna').append('<option value="19" >María Elena</option>');
    $('#comuna').append('<option value="20" >Tocopilla</option>');
    $('#comuna').append('<option value="13" >Mejillones</option>');
    $('#comuna').append('<option value="14" >Sierra Gorda</option>');
    $('#comuna').append('<option value="18" >San Pedro de Atacama</option>');
    $('#comuna').append('<option value="12" >Antofagasta</option>');
    $('#comuna').append('<option value="15" >Taltal</option>');

}

//Atacama
if(seleccionar == 3)
{
    $('#comuna').append('<option value="0" >Comuna...</option>');
    $('#comuna').append('<option value="22" >Diego de Almagro</option>');
    $('#comuna').append('<option value="21" >Chañaral</option>');
    $('#comuna').append('<option value="23" >Caldera</option>');
    $('#comuna').append('<option value="24" >Copiapó</option>');
    $('#comuna').append('<option value="25" >Tierra Amarilla</option>');
    $('#comuna').append('<option value="28" >Huasco</option>');
    $('#comuna').append('<option value="27" >Freirina</option>');
    $('#comuna').append('<option value="29" >Vallenar</option>');
    $('#comuna').append('<option value="26" >Alto del Carmen</option>');

}

//Coquimbo
if(seleccionar == 4)
{
    $('#comuna').append('<option value="0" >Comuna...</option>');
    $('#comuna').append('<option value="37" >La Serena</option>');
    $('#comuna').append('<option value="35" >Coquimbo</option>');
}

//Valparaiso
if(seleccionar == 5){
    $('#comuna').append('<option value="0" >Comuna...</option>');
    $('#comuna').append('<option value="74">Concón</option>');
    $('#comuna').append('<option value="79">Valparaíso</option>');
    $('#comuna').append('<option value="81">Viña del Mar</option>');
    $('#comuna').append('<option value="71">San Felipe</option>');
    $('#comuna').append('<option value="61">Algarrobo</option>');
    $('#comuna').append('<option value="65">San Antonio</option>');
}

//Libertador B. O'Higgins
if(seleccionar == 6){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="138">Graneros</option>');
	$('#comuna').append('<option value="145">Pichidegua</option>');
	$('#comuna').append('<option value="146">Quinta de Tilcoco</option>');
	$('#comuna').append('<option value="147">Rancagua</option>');
	$('#comuna').append('<option value="148">Rengo</option>');
	$('#comuna').append('<option value="149">Requínoa</option>');
	$('#comuna').append('<option value="150">San Vicente de Tagua Tagua</option>');
	$('#comuna').append('<option value="165">San Fernando</option>');
}

//Maule
if(seleccionar == 7){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="170">Curicó</option>');
	$('#comuna').append('<option value="180">Linares</option>');
	$('#comuna').append('<option value="182">Parral</option>');
	$('#comuna').append('<option value="187">Constitución</option>');
	$('#comuna').append('<option value="190">Maule</option>');
	$('#comuna').append('<option value="196">Talca</option></select>');
}

//Ñuble
if(seleccionar == 16){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="347">Bulnes</option>');
	$('#comuna').append('<option value="346">Chillán</option>');
	$('#comuna').append('<option value="348">Chillán Viejo</option>');
	$('#comuna').append('<option value="349">El Carmen</option>');
	$('#comuna').append('<option value="354">Yungay</option>');
}

//Bio-Bio
if(seleccionar == 8){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="208">Los Ángeles</option>');
	$('#comuna').append('<option value="216">Tucapel</option>');
	$('#comuna').append('<option value="217">Yumbel</option>');
	$('#comuna').append('<option value="218">Chiguayante</option>');
	$('#comuna').append('<option value="219">Concepción</option>');
	$('#comuna').append('<option value="228">Talcahuano</option>');
	
}

//Araucanía
if(seleccionar == 9){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="255">Freire</option>');
	$('#comuna').append('<option value="256">Galvarino</option>');
	$('#comuna').append('<option value="258">Lautaro</option>');
	$('#comuna').append('<option value="262">Padre Las Casas</option>');
	$('#comuna').append('<option value="265">Pucón</option>');
	$('#comuna').append('<option value="267">Temuco</option>');
	$('#comuna').append('<option value="268">Teodoro Schmidt</option>');
	$('#comuna').append('<option value="269">Toltén</option>');
	$('#comuna').append('<option value="270">Vilcún</option>');
	$('#comuna').append('<option value="271">Villarrica</option>');
}

//Los Ríos
if(seleccionar == 15){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="283">Corral</option>');
	$('#comuna').append('<option value="284">Lanco</option>');
	$('#comuna').append('<option value="285">Los Lagos</option>');
	$('#comuna').append('<option value="286">Máfil</option>');
	$('#comuna').append('<option value="287">Mariquina</option>');
	$('#comuna').append('<option value="288">Paillaco</option>');
	$('#comuna').append('<option value="289">Panguipulli</option>');
	$('#comuna').append('<option value="290">Valdivia</option>');
}

//Los Lagos
if(seleccionar == 10){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="312">Puerto Montt</option>');
	$('#comuna').append('<option value="313">Puerto Varas</option></select>');
	$('#comuna').append('<option value="314">Osorno</option>');
}


//Aísen
if(seleccionar == 11){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="325">Aisén</option>');
}

//Magallanes
if(seleccionar == 12){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="338">Punta Arenas</option>');
}

//METROPOLITANA
if(seleccionar == 13){
	$('#comuna').append('<option value="0" >Comuna...</option>');
	$('#comuna').append('<option value="97">Cerrillos</option>');
	$('#comuna').append('<option value="98">Cerro Navia</option>');
	$('#comuna').append('<option value="99">Conchalí</option>');
	$('#comuna').append('<option value="100">El Bosque</option>');
	$('#comuna').append('<option value="101">Estación Central</option>');
	$('#comuna').append('<option value="102">Huechuraba</option>');
	$('#comuna').append('<option value="103">Independencia</option>');
	$('#comuna').append('<option value="104">La Cisterna</option>');
	$('#comuna').append('<option value="106">La Florida</option>');
	$('#comuna').append('<option value="105">La Granja</option>');
	$('#comuna').append('<option value="107">La Pintana</option>');
	$('#comuna').append('<option value="108">La Reina</option>');
	$('#comuna').append('<option value="109">Las Condes</option>');
	$('#comuna').append('<option value="110">Lo Barnechea</option>');
	$('#comuna').append('<option value="111">Lo Espejo</option>');
	$('#comuna').append('<option value="112">Lo Prado</option>');
	$('#comuna').append('<option value="113">Macul</option>');
	$('#comuna').append('<option value="114">Maipú</option>');
	$('#comuna').append('<option value="115">Ñuñoa</option>');
	$('#comuna').append('<option value="116">Pedro Aguirre Cerda</option>');
	$('#comuna').append('<option value="117">Peñalolén</option>');
	$('#comuna').append('<option value="118">Providencia</option>');	
	$('#comuna').append('<option value="119">Pudahuel</option>');	
	$('#comuna').append('<option value="120">Quilicura</option>');	
	$('#comuna').append('<option value="121">Quinta Normal</option>');	
	$('#comuna').append('<option value="122">Recoleta</option>');	
	$('#comuna').append('<option value="123">Renca</option>');
	$('#comuna').append('<option value="124">San Miguel</option>');
	$('#comuna').append('<option value="125">San Joaquín</option>');
	$('#comuna').append('option value="126">San Ramón</option>');
	$('#comuna').append('<<option value="127">Santiago</option>');
	$('#comuna').append('<option value="128">Vitacura</option>');
}

}
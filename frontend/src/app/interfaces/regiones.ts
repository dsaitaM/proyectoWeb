export interface Comunas{
    comuna:string,
    valor:string
}

export interface Regiones{
    region:string,
    valor:string,
    listaComunas:Array<Comunas>
}

export const listaRegiones:Array<Regiones>=[
    {
        region:"Región de Arica y Parinacota.",
        valor:"Arica",
        listaComunas:[{comuna:"Arica",valor:"arica"},{comuna:"Camarones",valor:"camarones"},{comuna:"Putre",valor:"putre"},{comuna:"General Lagos",valor:"gLagos"}]
    },
    {
        region:"Región de Tarapacá.",
        valor:"Tarapaca",
        listaComunas:[{comuna:"Iquique",valor:"iquique"},{comuna:"Alto Hospicio",valor:"altoHospico"},{comuna:"Pozo Almonte",valor:"pozoAlmonte"},{comuna:"Camiña",valor:"camina"},{comuna:"Colchane",valor:"colchane"},{comuna:"Huara",valor:"huara"},{comuna:"Pica",valor:"pica"}]
    },
    {
        region:"Región de Antofagasta.",
        valor:"Antofagasta",
        listaComunas:[{comuna:"Antofagasta",valor:"antofagasta"},{comuna:"Mejillones",valor:"mejillones"},{comuna:"Sierra Gorda",valor:"sierraGorda"},{comuna:"Taltal",valor:"taltal"},{comuna:"Calama",valor:"calama"},{comuna:"Ollagüe",valor:"ollague"},{comuna:"San Pedro de Atacama",valor:"sanPedroAtacama"},{comuna:"Tocopilla",valor:"tocopilla"},{comuna:"María Elena",valor:"mariaElena"}]
    },
    {
        region:"Región de Atacama.",
        valor:"Atacama",
        listaComunas:[{comuna:"Copiapó",valor:"copiapo"},{comuna:"Caldera",valor:"caldera"},{comuna:"Tierra Amarilla",valor:"tierraAmarilla"},{comuna:"Chañaral",valor:"chañaral"},{comuna:"Diego de Almagro",valor:"diegoAlmagro"},{comuna:"Vallenar",valor:"vallenar"},{comuna:"Alto del Carmen",valor:"altoCarmen"},{comuna:"Freirina",valor:"freirina"},{comuna:"Huasco",valor:"huasco"}]
    },
    {
        region:"Región de Coquimbo.",
        valor:"Coquimbo",
        listaComunas:[{comuna:"La Serena",valor:"laSerena"},{comuna:"Coquimbo",valor:"coquimbo"},{comuna:"Andacollo",valor:"andacollo"},{comuna:"La Higuera",valor:"laHiguera"},{comuna:"Paihuano",valor:"paihuano"},{comuna:"Vicuña",valor:"vicuña"},{comuna:"Illapel",valor:"illapel"},{comuna:"Canela",valor:"canela"},{comuna:"Los Vilos",valor:"losVilos"},{comuna:"Salamanca",valor:"salamanca"},{comuna:"Ovalle",valor:"ovalle"},{comuna:"Combarbalá",valor:"combarbala"},{comuna:"Monte Patria",valor:"montePatria"},{comuna:"Punitaqui",valor:"punitaqui"},{comuna:"Río Hurtado",valor:"rioHurtado"}]
    },
    {
        region:"Región de Valparaíso.",
        valor:"Valparaiso",
        listaComunas:[{comuna:"Valparaíso",valor:"valparaiso"},{comuna:"Casablanca",valor:"casablanca"},{comuna:"Concón",valor:"concon"},{comuna:"Juan Fernández",valor:"juanFernandez"},{comuna:"Puchuncaví",valor:"puchuncavi"},{comuna:"Quintero",valor:"quintero"},{comuna:"Viña del Mar",valor:"viñaMar"},{comuna:"Isla de Pascua",valor:"islaPascua"},{comuna:"Los Andes",valor:"losAndes"},{comuna:"Calle Larga",valor:"calleLarga"},{comuna:"Rinconada",valor:"rinconada"},{comuna:"San Esteban",valor:"sanEsteban"},{comuna:"La Ligua",valor:"laLigua"},{comuna:"Cabildo",valor:"cabildo"},{comuna:"Papudo",valor:"papudo"},{comuna:"Petorca",valor:"petorca"},{comuna:"Zapallar",valor:"zapallar"},{comuna:"Quillota",valor:"quillota"},{comuna:"La Calera",valor:"laCalera"},{comuna:"Hijuelas",valor:"hijuelas"},{comuna:"La Cruz",valor:"laCruz"},{comuna:"Nogales",valor:"nogales"},{comuna:"San Antonio",valor:"sanAntonio"},{comuna:"Algarrobo",valor:"algarrobo"},{comuna:"Cartagena",valor:"cartagena"},{comuna:"El Quisco",valor:"elQuisco"},{comuna:"El Tabo",valor:"elTabo"},{comuna:"Santo Domingo",valor:"santoDomingo"},{comuna:"San Felipe",valor:"sanFelipe"},{comuna:"Catemu",valor:"catemu"},{comuna:"Llay-Llay",valor:"llayllay"},{comuna:"Panquehue",valor:"panquehue"},{comuna:"Putaendo",valor:"putaendo"},{comuna:"Santa María",valor:"santaMaría"},{comuna:"Quilpué",valor:"quilpue"},{comuna:"Limache",valor:"limache"},{comuna:"Olmué",valor:"olmue"},{comuna:"Villa Alemana",valor:"villaAlemana"}]
    },
    {
        region:"Región Metropolitana de Santiago.",
        valor:"Metropolitana",
        listaComunas:[{comuna:"Santiago",valor:"santiago"},{comuna:"Cerrillos",valor:"cerrillos"},{comuna:"Cerro Navia",valor:"cerroNavia"},{comuna:"Conchalí",valor:"conchali"},{comuna:"El Bosque",valor:"elBosque"},{comuna:"Estación Central",valor:"estacionCentral"},{comuna:"Huechuraba",valor:"huechuraba"},{comuna:"Independencia",valor:"independencia"},{comuna:"La Cisterna",valor:"laCisterna"},{comuna:"La Florida",valor:"laFlorida"},{comuna:"La Granja",valor:"laGranja"},{comuna:"La Pintana",valor:"laPintana"},{comuna:"La Reina",valor:"laReina"},{comuna:"Las Condes",valor:"lasCondes"},{comuna:"Lo Barnechea",valor:"loBarnechea"},{comuna:"Lo Espejo",valor:"loEspejo"},{comuna:"Lo Prado",valor:"loPrado"},{comuna:"Macul",valor:"macul"},{comuna:"Maipú",valor:"maipu"},{comuna:"Ñuñoa",valor:"nunoa"},{comuna:"Pedro Aguirre Cerda",valor:"pedroAguirreCerda"},{comuna:"Peñalolén",valor:"penalolen"},{comuna:"Providencia",valor:"providencia"},{comuna:"Pudahuel",valor:"pudahuel"},{comuna:"Quilicura",valor:"quilicura"},{comuna:"Quinta Normal",valor:"quintaNormal"},{comuna:"Recoleta",valor:"recoleta"},{comuna:"Renca",valor:"renca"},{comuna:"San Joaquín",valor:"sanJoaquin"},{comuna:"San Miguel",valor:"sanMiguel"},{comuna:"San Ramón",valor:"sanRamon"},{comuna:"Vitacura",valor:"vitacura"},{comuna:"Puente Alto",valor:"puenteAlto"},{comuna:"Pirque",valor:"pirque"},{comuna:"San José de Maipo",valor:"sanJoseMaipo"},{comuna:"Colina",valor:"colina"},{comuna:"Lampa",valor:"lampa"},{comuna:"Til Til",valor:"tiltil"},{comuna:"San Bernardo",valor:"sanBernardo"},{comuna:"Buin",valor:"buin"},{comuna:"Calera de Tango",valor:"caleraTango"},{comuna:"Paine",valor:"paine"},{comuna:"Melipilla",valor:"melipilla"},{comuna:"Alhué",valor:"aluhe"},{comuna:"Curacaví",valor:"curacavi"},{comuna:"María Pinto",valor:"mariaPinto"},{comuna:"San Pedro",valor:"sanPedro"},{comuna:"Talagante",valor:"talagante"},{comuna:"El Monte",valor:"elMonte"},{comuna:"Isla de Maipo",valor:"islaMaipo"},{comuna:"Padre Hurtado",valor:"padreHurtado"},{comuna:"Peñaflor",valor:"peñaflor"}]
    },
    {
        region:"Región del Libertador General Bernardo O’Higgins.",
        valor:"Ohiggins",
        listaComunas:[{comuna:"Rancagua",valor:"rancagua"},{comuna:"Codegua",valor:"codegua"},{comuna:"Coinco",valor:"Coltauco"},{comuna:"Doñihue",valor:"doñihue"},{comuna:"Graneros",valor:"graneros"},{comuna:"Las Cabras",valor:"lasCabras"},{comuna:"Machalí",valor:"machali"},{comuna:"Malloa",valor:"malloa"},{comuna:"Mostazal",valor:"mostazal"},{comuna:"Olivar",valor:"olivar"},{comuna:"Peumo",valor:"peumo"},{comuna:"Pichidegua",valor:"pichidegua"},{comuna:"Quinta de Tilcoco",valor:"quintaTilcoco"},{comuna:"Rengo",valor:"rengo"},{comuna:"Requínoa",valor:"requinoa"},{comuna:"San Vicente",valor:"sanVicente"},{comuna:"Pichilemu",valor:"pichilemu"},{comuna:"La Estrella",valor:"laEstrella"},{comuna:"Litueche",valor:"litueche"},{comuna:"Marchihue",valor:"marchihue"},{comuna:"Navidad",valor:"navidad"},{comuna:"Paredones",valor:"paredones"},{comuna:"San Fernando",valor:"sanFernando"},{comuna:"Chépica",valor:"chepica"},{comuna:"Chimbarongo",valor:"chimbarongo"},{comuna:"Lolol",valor:"lolol"},{comuna:"Nancagua",valor:"nancagua"},{comuna:"Palmilla",valor:"palmilla"},{comuna:"Peralillo",valor:"peralillo"},{comuna:"Placilla",valor:"placilla"},{comuna:"Pumanque",valor:"pumanque"},{comuna:"Santa Cruz",valor:"santaCruz"}]
    },
    {
        region:"Región del Maule.",
        valor:"Maule",
        listaComunas:[{comuna:"Talca",valor:"talca"},{comuna:"Constitución",valor:"constitucion"},{comuna:"Curepto",valor:"curepto"},{comuna:"Empedrado",valor:"empedrado"},{comuna:"Maule",valor:"maule"},{comuna:"Pelarco",valor:"pelarco"},{comuna:"Pencahue",valor:"pencahue"},{comuna:"Río Claro",valor:"rioClaro"},{comuna:"San Clemente",valor:"sanClemente"},{comuna:"San Rafael",valor:"sanRafael"},{comuna:"Cauquenes",valor:"cauquenes"},{comuna:"Chanco",valor:"chanco"},{comuna:"Pelluhue",valor:"pelluhue"},{comuna:"Curicó",valor:"curico"},{comuna:"Hualañé",valor:"hualane"},{comuna:"Licantén",valor:"licanten"},{comuna:"Molina",valor:"molina"},{comuna:"Rauco",valor:"rauco"},{comuna:"Romeral",valor:"romeral"},{comuna:"Sagrada Familia",valor:"sagradaFamilia"},{comuna:"Teno",valor:"teno"},{comuna:"Vichuquén",valor:"vichuquen"},{comuna:"Linares",valor:"linares"},{comuna:"Colbún",valor:"colbun"},{comuna:"Longaví",valor:"longavi"},{comuna:"Parral",valor:"parral"},{comuna:"Retiro",valor:"retiro"},{comuna:"San Javier",valor:"sanJavier"},{comuna:"Villa Alegre",valor:"villaAlegre"},{comuna:"Yerbas Buenas",valor:"yerbasBuenas"}]
    },
    {
        region:"Región del Ñuble.",
        valor:"Ñuble",
        listaComunas:[{comuna:"Chillán",valor:"chillan"},{comuna:"Bulnes",valor:"bulnes"},{comuna:"Chillán Viejo",valor:"chillanViejo"},{comuna:"El Carmen",valor:"elCarmen"},{comuna:"Pemuco",valor:"pemuco"},{comuna:"Pinto",valor:"pinto"},{comuna:"Quillón",valor:"quillon"},{comuna:"San Ignacio",valor:"sanIgnacio"},{comuna:"Yungay",valor:"yungay"},{comuna:"Quirihue",valor:"quirihue"},{comuna:"Cobquecura",valor:"cobquecura"},{comuna:"Coelemu",valor:"coelemu"},{comuna:"Ninhue",valor:"ninhue"},{comuna:"Portezuelo",valor:"portezuelo"},{comuna:"Ránquil",valor:"ranquil"},{comuna:"Treguaco",valor:"treguaco"},{comuna:"San Carlos",valor:"sanCarlos"},{comuna:"Coihueco",valor:"coihueco"},{comuna:"Ñiquén",valor:"niquen"},{comuna:"San Fabián",valor:"sanFabian"},{comuna:"San Nicolás",valor:"sanNicolas"}]
    },
    {
        region:"Región del Biobío.",
        valor:"Biobio",
        listaComunas:[{comuna:"Concepción",valor:"concepcion"},{comuna:"Coronel",valor:"coronel"},{comuna:"Chiguayante",valor:"chiguayante"},{comuna:"Florida",valor:"florida"},{comuna:"Hualqui",valor:"hualqui"},{comuna:"Lota",valor:"lota"},{comuna:"Penco",valor:"penco"},{comuna:"San Pedro de la Paz",valor:"sanPedroPaz"},{comuna:"Santa Juana",valor:"santaJuana"},{comuna:"Talcahuano",valor:"talcahuano"},{comuna:"Tomé",valor:"tome"},{comuna:"Hualpén",valor:"hualpen"},{comuna:"Lebu",valor:"lebu"},{comuna:"Arauco",valor:"arauco"},{comuna:"Cañete",valor:"cañete"},{comuna:"Contulmo",valor:"contulmo"},{comuna:"Curanilahue",valor:"curanilahue"},{comuna:"Los Álamos",valor:"losAlamos"},{comuna:"Tirúa",valor:"tirua"},{comuna:"Los Ángeles",valor:"losAngeles"},{comuna:"Antuco",valor:"antuco"},{comuna:"Cabrero",valor:"cabrero"},{comuna:"Laja",valor:"laja"},{comuna:"Mulchén",valor:"mulchen"},{comuna:"Nacimiento",valor:"nacimiento"},{comuna:"Negrete",valor:"negrete"},{comuna:"Quilaco",valor:"quilaco"},{comuna:"Quilleco",valor:"quilleco"},{comuna:"San Rosendo",valor:"sanRosendo"},{comuna:"Santa Bárbara",valor:"santaBarbara"},{comuna:"Tucapel",valor:"tucapel"},{comuna:"Yumbel",valor:"yumbel"},{comuna:"Alto Biobío",valor:"altoBiobio"}]
    },
    {
        region:"Región de La Araucanía.",
        valor:"Araucania",
        listaComunas:[{comuna:"Temuco",valor:"temuco"},{comuna:"Carahue",valor:"carahue"},{comuna:"Cunco",valor:"cunco"},{comuna:"Curarrehue",valor:"curarrehue"},{comuna:"Freire",valor:"freire"},{comuna:"Galvarino",valor:"galvarino"},{comuna:"Gorbea",valor:"gorbea"},{comuna:"Lautaro",valor:"lautaro"},{comuna:"Loncoche",valor:"loncoche"},{comuna:"Melipeuco",valor:"melipeuco"},{comuna:"Nueva Imperial",valor:"nuevaImperial"},{comuna:"Padre Las Casas",valor:"padreCasas"},{comuna:"Perquenco",valor:"perquenco"},{comuna:"Pitrufquén",valor:"pitrufquen"},{comuna:"Pucón",valor:"pucon"},{comuna:"Saavedra",valor:"saavedra"},{comuna:"Teodoro Schmidt",valor:"teodoroSchmidt"},{comuna:"Toltén",valor:"tolten"},{comuna:"Vilcún",valor:"vilcun"},{comuna:"Villarica",valor:"villarica"},{comuna:"Cholchol",valor:"cholchol"},{comuna:"Angol",valor:"angol"},{comuna:"Collipulli",valor:"collipulli"},{comuna:"Curacautín",valor:"curacautin"},{comuna:"Ercilla",valor:"ercilla"},{comuna:"Lonquimay",valor:"lonquimay"},{comuna:"Los Sauces",valor:"losSauces"},{comuna:"Lumaco",valor:"lumaco"},{comuna:"Purén",valor:"puren"},{comuna:"Renaico",valor:"renaico"},{comuna:"Traiguén",valor:"traiguen"},{comuna:"Victoria",valor:"victoria"}]
    },
    {
        region:"Región de Los Ríos.",
        valor:"Rios",
        listaComunas:[{comuna:"Valdivia",valor:"valdivia"},{comuna:"Corral",valor:"corral"},{comuna:"Lanco",valor:"lanco"},{comuna:"Los Lagos",valor:"losLagos"},{comuna:"Máfil",valor:"mafil"},{comuna:"Mariquina",valor:"mariquina"},{comuna:"Paillaco",valor:"paillaco"},{comuna:"Panguipulli",valor:"panguipulli"},{comuna:"La Unión",valor:"laUnion"},{comuna:"Futrono",valor:"futrono"},{comuna:"Lago Ranco",valor:"lagoRanco"},{comuna:"Río Bueno",valor:"rioBueno"}]
    },
    {
        region:"Región de Los Lagos.",
        valor:"Lagos",
        listaComunas:[{comuna:"Puerto Montt",valor:"puertoMontt"},{comuna:"Calbuco",valor:"calbuco"},{comuna:"Cochamó",valor:"cochamo"},{comuna:"Fresia",valor:"fresia"},{comuna:"Frutillar",valor:"frutillar"},{comuna:"Los Muermos",valor:"losMuermos"},{comuna:"Llanquihue",valor:"llanquihue"},{comuna:"Maullín",valor:"maullin"},{comuna:"Puerto Varas",valor:"puertoVaras"},{comuna:"Castro",valor:"castro"},{comuna:"Ancud",valor:"ancud"},{comuna:"Chonchi",valor:"chonchi"},{comuna:"Curaco de Veléz",valor:"curacoVelez"},{comuna:"Dalcahue",valor:"dalcahue"},{comuna:"Puqueldón",valor:"puqueldon"},{comuna:"Queilén",valor:"queilen"},{comuna:"Quéllon",valor:"quellon"},{comuna:"Quemchi",valor:"quemchi"},{comuna:"Quinchao",valor:"quinchao"},{comuna:"Osorno",valor:"osorno"},{comuna:"Puerto Octay",valor:"puertoOctay"},{comuna:"Purranque",valor:"purranque"},{comuna:"Puyehue",valor:"puyehue"},{comuna:"Río Negro",valor:"rioNegro"},{comuna:"San Juan de la Costa",valor:"sanJuanCosta"},{comuna:"San Pablo",valor:"sanPablo"},{comuna:"Chaitén",valor:"chaiten"},{comuna:"Futaleufú",valor:"futaleufu"},{comuna:"Hualaihué",valor:"hualaihue"},{comuna:"Palena",valor:"Palena"}]
    },
    {
        region:"Región de Aysén del General Carlos Ibáñez del Campo.",
        valor:"Aysen",
        listaComunas:[{comuna:"Coyhaique",valor:"coyhaique"},{comuna:"Lago Verde",valor:"lagoVerde"},{comuna:"Aysén",valor:"aysen"},{comuna:"Cisnes",valor:"cisnes"},{comuna:"Guaitecas",valor:"guaitecas"},{comuna:"Cochrane",valor:"cochrane"},{comuna:"O'higgins",valor:"ohiggins"},{comuna:"Tortel",valor:"tortel"},{comuna:"Chile Chico",valor:"chileChico"},{comuna:"Río Ibáñez",valor:"rioIbanez"}]
    },
    {
        region:"Región de Magallanes y la Antártica Chilena.",
        valor:"Magallanes",
        listaComunas:[{comuna:"Punta Arenas",valor:"puntaArenas"},{comuna:"Laguna Blanca",valor:"lagunaBlanca"},{comuna:"Río Verde",valor:"rioVerde"},{comuna:"San Gregorio",valor:"sanGregrorio"},{comuna:"Cabo de Hornos",valor:"caboHornos"},{comuna:"Antártica",valor:"antartica"},{comuna:"Porvenir",valor:"porvenir"},{comuna:"Primavera",valor:"primavera"},{comuna:"Timaukel",valor:"timaukel"},{comuna:"Natales",valor:"natales"},{comuna:"Torres del Paine",valor:"torresPaine"}]
    },
]
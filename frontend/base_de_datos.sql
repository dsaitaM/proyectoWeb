-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2021 a las 04:22:08
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `base de datos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `id_producto` int(11) NOT NULL,
  `calificacion` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `calificaciones`
--

INSERT INTO `calificaciones` (`id_producto`, `calificacion`, `id`) VALUES
(3, 5, 1),
(12, 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `comentario` varchar(150) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`comentario`, `id_producto`, `nombre`) VALUES
('Recomendado', 3, 'Matías Salinas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id_pedido` int(11) NOT NULL,
  `pedido` varchar(2000) NOT NULL,
  `nombreUsuario` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id_pedido`, `pedido`, `nombreUsuario`) VALUES
(1, 'Consola Nintendo Switch Neon + Juego Nintendo Swit($39999) X 1 = $39999 ; BALON BASKET 520 Nº5 MIKASA($15990) X 2 = $31980 ; Bicicleta MTB Beast Hombre 18V M Aro 27.5\" Oxford($29999) X 1 = $29999 ;  Total: $101978', 'Matías Salinas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` varchar(50) NOT NULL,
  `stock` int(3) NOT NULL,
  `precio` varchar(6) NOT NULL,
  `imagen` varchar(1000) NOT NULL,
  `descripcion` text NOT NULL,
  `categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre_producto`, `stock`, `precio`, `imagen`, `descripcion`, `categoria`) VALUES
(1, 'CAMISA JACQUARD SLIM FIT', 3, '$18990', 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-sa-east-1.amazonaws.com%2Fcentryproduction%2Fbelanit-inventario%2Fproducts%2F5e6660419c2011037444ec47%2Fimage%2F5e6660419c2011037444ec47%2Foriginal%2Fopen-uri20200309-884-d42irj.?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=96d129568976e39b3fc22f49182aa870', 'Camisa azul marino slim fit', 'Ropa'),
(2, 'Botín Via Uno Mujer', 5, '$44990', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw95baf64c/images/imagenes-productos/682/605718-0001-001.jpg?sw=513&sh=654&sm=fit', 'Botín para mujer marca Via Uno modelo Detalle Capellada de color negro con taco cuadrado de 4 cm. ', 'Ropa'),
(3, 'Zapatilla Running Negra Nike Downshifter 11 Hombre', 2, '$52990', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw85db531d/images/imagenes-productos/667/787503-0960-001.jpg?sw=513&sh=654&sm=fit', 'Parte superior ligera y minimalista cuenta con malla en dos tonos en el antepié. La entresuela de espuma ofrece una sensación de amortiguación eficaz.', 'Ropa'),
(4, 'Sweater Cuello Bote Óxido Nicopoly', 1, '$19990', 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fim-prod-products-images%2Fp-n00426r-1-8ae7f812-6168-482f-99ab-efd2281f6925.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=6d3ab2078285709ff41cb7c11630af27', 'Sweater Cuello Bote Óxido Nicopoly', 'Ropa'),
(5, 'Pantalón Jogger Color Sólido Niño Melt', 0, '$14990', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw2141b714/images/imagenes-productos/647/812516-0001-001.jpg?sw=513&sh=654&sm=fit', 'Pantalón Jogger con diseño color sólido para niño, confección 65% poliéster y 35% algodón con bolsillos funcionales, marca Melt', 'Ropa'),
(6, 'Consola Nintendo Switch Neon + Juego Nintendo Swit', 2, '$39999', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw4cc5822e/images/imagenes-productos/000/CBTEC437-001.jpg?sw=513&sh=654&sm=fit', 'Coloca la consola Nintendo Switch en la base y juega en alta definición. ¿Vas a salir? Llévate el juego a cualquier lugar en modo portátil', 'Tecnologia'),
(7, 'Impresora Multifuncional HP Smart Tank 515', 3, '$15999', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw74ad2b58/images/imagenes-productos/742/778585-0000-001.jpg?sw=513&sh=654&sm=fit', 'Máxima libertad de impresión, para altos volúmenes a ultra bajo costo, incluye botellas de tinta para imprimir hasta 12.000 páginas', 'Tecnologia'),
(8, 'AirPods 2ª Generación con Estuche de Carga', 10, '$12999', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw84a6f20b/images/imagenes-productos/742/604974-0000-001.jpg?sw=513&sh=654&sm=fit', 'Los AirPods 2ª Generación color blanco reinventan el concepto de auriculares inalámbricos', 'Tecnologia'),
(9, 'Aspiradora Robot Excellenza 2 en 1 Ursus Trotter', 32, '$11999', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dwd1c6c4ea/images/imagenes-productos/700/580563-0000-004.jpg?sw=513&sh=654&sm=fit', 'La Aspiradora Robot UT-Excellenza tiene un funcionamiento extremo de hasta 100 minutos de uso continuo y una carga rápida de solo 3 horas', 'Tecnologia'),
(10, 'Amazon Echo Dot 4 Parlante Inteligente Con Alexa', 7, '$45990', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw9764b776/images/imagenes-productos/800/MK7M/MK7MQL8LIF-001.jpg?sw=513&sh=654&sm=fit', 'Amazon Echo Dot 4 Parlante Inteligente Con Alexa', 'Tecnologia'),
(11, 'Mesa de Centro Salma Stylo', 10, '$34990', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw4abc39ff/images/imagenes-productos/730/402977-0000-001.jpg?sw=513&sh=654&sm=fit', 'Mesa de Centro Modelo Salma Marca Stylo', 'Hogar'),
(12, 'Berger Camel Tela Attimo', 0, '$32999', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw2aa5cb4e/images/imagenes-productos/730/610316-0230-001.jpg?sw=513&sh=654&sm=fit', 'Mesa Lateral Modelo Diamante, Marca Umbrale Home', 'Hogar'),
(13, 'Mesa Lateral Diamante Umbrale Home', 5, '$12999', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw36934c4e/images/imagenes-productos/730/498863-0210-001.jpg?sw=513&sh=654&sm=fit', 'Berger Modelo Camel, Tapizado en Tela, Marca Attimo', 'Hogar'),
(14, 'Rack TV 46\" Audio Ganges Cic', 7, '$69990', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw6a6eb61f/images/imagenes-productos/730/832281-0961-001.jpg?sw=513&sh=654&sm=fit', 'Rack Audio Ganges Cic', 'Hogar'),
(15, 'Repisa Auxiliar Sim Favatex', 18, '$44990', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw1d6146a3/images/imagenes-productos/730/607629-0000-001.jpg?sw=513&sh=654&sm=fit', 'Repisa Auxiliar Sim', 'Hogar'),
(16, 'CABLE PUENTE DE ARRANQUE PARA AUTOMOVIL DBLUE DBG7', 98, '$6990', 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-sa-east-1.amazonaws.com%2Fcentryproduction%2Fbelanit-inventario%2Fproducts%2F5f80e62ea30a6209a718bc22%2Fimage%2F5f80e62ea30a6209a718bc22%2Foriginal%2Fopen-uri20201009-2471-1y7kqkp.?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=f06b06f8c2700117f022aee3a0ace1cd', 'Características PrincipalesCable de refuerzo de batería de auto de 200 amperios.Funcionamiento sencillo y fiable. Adecuado para uso portátil.Mango reforzado aislado para la protección.Confort y antideslizante. Abrazaderas codificadas por colores.Material conductor 100% cobre /CCA.Bolsa de viaje para que no se enreden su vehículoLongitud del cable: 2,5 m.Producto de calidad recomendado y garantizado. * Condición del ítem: Nuevo', 'Autos'),
(17, 'CARPA FUNDA PROTECTORA DE VEHICULO', 6, '$19990', 'https://ripleycl.imgix.net/http%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2019%2F01%2F26005342%2Fcarpa-autoo.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=99f1a2528ac0a62fed15d8747bbda770', 'Material impermeable ideal para el polvo, lluvia y cambios climáticos bruscos. Tiene en presentación tamaño Standart para la mayoría de vehículos.Fácil de transportar y guardar hasta en la guantera de tu vehículo. Resistencia al calor extremo, proteccion UV(proteje el tablero), esto hace que su vida util sea mayor. Completamente impermeable, proteja de la lluvia, granizo, excremento de aves, polvo Firme sujeccion en los parachoques Protección ante agentes externos.Ideal para Cubrir tu auto de tierra suelta. Elástico en la parte inferior que permite mayor ajuste', 'Autos'),
(18, 'CUBREASIENTO COPILOTO PARA MASCOTA', 27, '$24990', 'https://ripleycl.imgix.net/http%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2021%2F02%2F06122923%2Fcobertor-auto-3_web.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=c8da6a2076803c644bd90437b4e492ab', 'Cubreasiento protector para transporte de mascotas (asiento copiloto), impermeable y que protege el asiento de suciedad mientras tu mascota disfruta del viaje. Mide 144x55cms . Material: 100% Poliester.', 'Autos'),
(19, '3M RENOVADOR DE NEUMÁTICOS', 0, '$3990', 'https://ripleycl.imgix.net/http%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2021%2F01%2F25143932%2F7-XS00240106_Renovador_de_Neumaticos-copia.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=918be8526eae8b8c013a72dadc14416b', 'El Renovador de neumáticos 3M, es uno de los productos de cuidado automotriz más útil cuando queremos dedicarnos al cuidado del aspecto estético de tu vehículo. Se trata de una espuma limpiadora diseñada especialmente para neumáticos y gomas que te ayuda a mantener ese color intenso característico, además de una protección e hidratación que previene el agrietamiento y la resequedad de estos.Espuma limpiadora diseñada para neumáticos. Entrega ese color intenso característico. Protege e hidrata el neumático', 'Autos'),
(20, 'PISOS DE GOMA 3 PIEZAS MARCA VOLVO PARA VEHÍCULOS', 10, '$32990', 'https://ripleycl.imgix.net/https%3A%2F%2Fs3-sa-east-1.amazonaws.com%2Fcentryproduction%2Fbelanit-inventario%2Fproducts%2F60babca176d0381ea9ede28a%2Fimage%2F60babca176d0381ea9ede28a%2Foriginal%2FPISO_FINAL_VOLVO.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=9511ddd0ab6d79b585c3519783825a02', 'Set de pisos de goma PVC, universales para todo tipo de vehículos, incluye antideslizantes en cada pieza para evitar movimientos durante el uso diario. Estos pisos poseen la particularidad de poder ser ajustados a todo tipo de tamaño gracias a sus líneas de terminación, lo que permite un calce ideal en cualquier vehículo. Compatible con todos los modelos Volvo.', 'Autos'),
(21, 'Trotadora Exercyle Rc12 BH', 23, '$19999', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw7aa023b6/images/imagenes-productos/669/193732-0000-001.jpg?sw=513&sh=654&sm=fit', 'Semi profesional, ventilador, velocidad 1 - 21km/h, potencia continua 3,0 cv peak 4,5cvCerra', 'Deportes'),
(22, 'Traje de Baño Hombre Glacial Racer Swimsuit Blue G', 10, '$34900', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw1e196d11/images/imagenes-productos/800/MKBX/MKBXMAPETJ-001.png?sw=513&sh=654&sm=fit', 'Mantente un paso por delante de la competencia con el bañador TYR Glacial Racer para hombre. Construido con el tejido más duradero de TYR, Durafast Elite ™, el traje de baño de alto rendimiento RGLI7A utiliza fibra de poliéster de alto denier y una innovadora construcción de punto circular para combinar la resistencia y solidez del color del poliéster con la comodidad del spandex. Con un estilo de calzoncillo ajustado, cintura con cordón ajustable y un estampado llamativo, el TYR racer es ideal para atletas que desean una combinación de cobertura mínima y apoyo cómodo durante cada natación. Los trajes de baño de rendimiento TYR están completamente forrados, brindan protección solar UPF 50+, un rango de movimiento de 360 ​​grados y un forro antimicrobiano para mayor frescura. Todos los trajes Durafast Elite ™ son a prueba de cloro y ofrecen un rendimiento impresionante de más de 300 horas. TYR Durafast Elite ™: 94% poliéster / 6% elastano', 'Deportes'),
(23, 'Pilates Pack Be Active', 8, '$16990', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw9b46d3c2/images/imagenes-productos/664/546501-0960-002.jpg?sw=513&sh=654&sm=fit', 'Pelota Pilates diámetro 65 cm. + Banda Elástica + Calcetines', 'Deportes'),
(24, 'BALON BASKET 520 Nº5 MIKASA', 28, '$15990', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-paris-marketplace/default/dw4a571ba0/images/imagenes-productos/800/MK0R/MK0R2M5GMA-001.jpeg?sw=513&sh=654&sm=fit', 'Cubierta de goma natural. 12 panelesBALON BASKET 520 Nº5 MIKASA', 'Deportes'),
(25, 'Bicicleta MTB Beast Hombre 18V M Aro 27.5\" Oxford', 3, '$29999', 'https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw9d035164/images/imagenes-productos/668/383169-0450-001.jpg?sw=513&sh=654&sm=fit', 'Bicicleta MTB modelo Beast de hombre, aro 27.5\", con marco de aluminio, frenos de disco mecánico V-brake', 'Deportes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `password` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `comuna` varchar(255) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `rut` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`password`, `id`, `comuna`, `nombres`, `apellidos`, `admin`, `email`, `direccion`, `region`, `rut`) VALUES
('$2b$10$pzQqia9UKiKBhFfSjWnmFedGB2U1J1tQvCNjw2PIexmaMZqLJbjFe', 1, 'San Felipe', 'Matías', 'Salinas', 1, 'mati123@gmail.com', 'San Felipe 115', 'Valparaíso', '19788180-1'),
('$2b$10$LeTKTQ6yvhx8SLvhctsgOe8VK1d4tf5n8FcB3e.4Rwwmqp4H5id6a', 2, 'Viña del Mar', 'Felipe', 'Inostroza', 1, 'felipin11@gmail.com', 'Viña 123', 'Valparaiso', '20181518-5');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id_pedido`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_a56c58e5cabaa04fb2c98d2d7e` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

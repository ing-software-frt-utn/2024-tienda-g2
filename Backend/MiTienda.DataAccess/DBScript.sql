--create database MiTienda
--go
use MiTienda
go


--INSERTS---------------------------------------------------------------
INSERT INTO Categoria values
('Remeras'),
('Pantalones'),
('Accesorios'),
('Camperas'),
('Ropa Interior'),
('Zapatillas'),
('Shorts')


INSERT INTO Marca values
('Adidas'),
('Nike'),
('UnderArmor'),
('Reebook'),
('Umbro'),
('Puma'),
('Fila')

INSERT INTO TipoTalle values
('Americano'),
('Europeo'),
('Brasilero')

INSERT INTO Talle values
('42',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('43',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('44',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('45',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('48',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('8',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Americano')),
('8.5',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Americano')),
('9',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Americano')),
('10',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Americano')),
('11.5',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Americano')),
('40',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Brasilero')),
('41',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Brasilero')),
('45',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Brasilero')),
('46',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Brasilero')),
('39',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Brasilero')),
('Grande',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('Chico',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('M',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('S',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('L',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo')),
('XL',(select top 1 id from TipoTalle tt where tt.Descripcion = 'Europeo'))

INSERT INTO Color values
('Rojo'),
('Azul'),
('Verde'),
('Amarillo'),
('Gris'),
('Blanco'),
('Negro')

INSERT INTO CondicionTributaria values
('RI','Responsable Inscripto'),
('M','Monotributista'),
('E','Exento'),
('NR','No Responsable'),
('CF','Consumidor Final')

INSERT INTO TipoPago values
('Efectivo'),
('Tarjeta Credito'),
('Tarjeta Debito')

INSERT INTO TipoComprobante values
('Factura A'),
('Factura B'),
('Nota Debito'),
('Nota Credito')


INSERT INTO Articulo values
('Medias caña media'	,'1234-1101',500  ,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Fila')	,(select top 1 id from Categoria c where c.descripcion = 'Ropa Interior')),
('Remera deportiva dry'	,'1234-1102',15000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Nike')	,(select top 1 id from Categoria c where c.descripcion = 'Remeras')),
('Remera de tennis'		,'1234-1103',15000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Adidas')	,(select top 1 id from Categoria c where c.descripcion = 'Remeras')),
('Chomba de golf'		,'1234-1104',15000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Nike')	,(select top 1 id from Categoria c where c.descripcion = 'Remeras')),
('Remera mountainBike'	,'1234-1105',15000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Adidas')	,(select top 1 id from Categoria c where c.descripcion = 'Remeras')),
('Short deportivo	'	,'1234-1106',15000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'UnderArmor'),(select top 1 id from Categoria c where c.descripcion = 'Shorts')),
('Short runner'			,'1234-1107',15000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Adidas')	,(select top 1 id from Categoria c where c.descripcion = 'Shorts')),
('Zapatilla runnig'		,'1234-1108',15000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Nike')	,(select top 1 id from Categoria c where c.descripcion = 'Zapatillas')),
('Zapatilla urbana'		,'1234-1109',15000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Reebook')	,(select top 1 id from Categoria c where c.descripcion = 'Zapatillas')),
('Zapatilla basica'		,'1234-1110',22000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'UnderArmor'),(select top 1 id from Categoria c where c.descripcion = 'Zapatillas')),
('Boxer deportivo'		,'1234-1111',12000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Fila')	,(select top 1 id from Categoria c where c.descripcion = 'Ropa Interior')),
('Rompeviento deportivo','1234-1112',12000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Nike')	,(select top 1 id from Categoria c where c.descripcion = 'Camperas')),
('Bolso de gimnasio'	,'1234-1113',12000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Umbro')	,(select top 1 id from Categoria c where c.descripcion = 'Accesorios')),
('Botella de agua MB'	,'1234-1114',12000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Fila')	,(select top 1 id from Categoria c where c.descripcion = 'Accesorios')),
('Casco MB'				,'1234-1115',12000,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'UnderArmor'),(select top 1 id from Categoria c where c.descripcion = 'Accesorios')),
('Media running'		,'1234-1116',8000 ,0.5	,null,null	,0.21,1,(select top 1 id from Marca m where m.nombre = 'Puma')	,(select top 1 id from Categoria c where c.descripcion = 'Ropa Interior'))


INSERT INTO Tienda values
('20401112227',(select top 1 id from CondicionTributaria c where c.Abreviatura = 'RI'))

INSERT INTO Sucursal values
(1,'San Miguel de Tucuman',3),
(2,'Yerba Buena',3),
(3,'Tafi Viejo',3),
(4,'Concepción',3)

INSERT INTO Stock values
((select top 1 id from Talle t where t.TalleArticulo = '39'),  (select top 1 id from Color c where c.Nombre = 'Negro'),  (select top 1 id from Articulo a where a.Descripcion =		'Zapatilla runnig')),
((select top 1 id from Talle t where t.TalleArticulo = '10'),  (select top 1 id from Color c where c.Nombre = 'Gris'),  (select top 1 id from Articulo a where a.Descripcion =		'Zapatilla urbana')),
((select top 1 id from Talle t where t.TalleArticulo = '48'),  (select top 1 id from Color c where c.Nombre = 'Verde'),  (select top 1 id from Articulo a where a.Descripcion =		'Zapatilla basica')),
((select top 1 id from Talle t where t.TalleArticulo = 'M'),  (select top 1 id from Color c where c.Nombre = 'Rojo'),  (select top 1 id from Articulo a where a.Descripcion =		'Medias caña media'	)),
((select top 1 id from Talle t where t.TalleArticulo = 'M'),  (select top 1 id from Color c where c.Nombre = 'Azul'),  (select top 1 id from Articulo a where a.Descripcion =		'Remera deportiva dry')),
((select top 1 id from Talle t where t.TalleArticulo = 'S'),  (select top 1 id from Color c where c.Nombre = 'Rojo'),  (select top 1 id from Articulo a where a.Descripcion =		'Remera de tennis')),
((select top 1 id from Talle t where t.TalleArticulo = 'XL'),  (select top 1 id from Color c where c.Nombre = 'Rojo'),  (select top 1 id from Articulo a where a.Descripcion =		'Chomba de golf'	)),
((select top 1 id from Talle t where t.TalleArticulo = 'M'),  (select top 1 id from Color c where c.Nombre = 'Rojo'),  (select top 1 id from Articulo a where a.Descripcion =		'Remera mountainBike')),
((select top 1 id from Talle t where t.TalleArticulo = 'M'),  (select top 1 id from Color c where c.Nombre = 'Blanco'),  (select top 1 id from Articulo a where a.Descripcion =		'Short deportivo	')),
((select top 1 id from Talle t where t.TalleArticulo = 'S'),  (select top 1 id from Color c where c.Nombre = 'Azul'),  (select top 1 id from Articulo a where a.Descripcion =		'Short runner'	)),
((select top 1 id from Talle t where t.TalleArticulo = 'M'),  (select top 1 id from Color c where c.Nombre = 'Blanco'),  (select top 1 id from Articulo a where a.Descripcion =		'Boxer deportivo')),
((select top 1 id from Talle t where t.TalleArticulo = 'XL'),  (select top 1 id from Color c where c.Nombre = 'Rojo'),  (select top 1 id from Articulo a where a.Descripcion =		'Rompeviento deportivo')),
((select top 1 id from Talle t where t.TalleArticulo = 'Grande'),  (select top 1 id from Color c where c.Nombre = 'Rojo'),  (select top 1 id from Articulo a where a.Descripcion =	'Bolso de gimnasio'	)),
((select top 1 id from Talle t where t.TalleArticulo = 'Chico'),  (select top 1 id from Color c where c.Nombre = 'Rojo'),  (select top 1 id from Articulo a where a.Descripcion =	'Botella de agua MB'	)),
((select top 1 id from Talle t where t.TalleArticulo = 'M'),  (select top 1 id from Color c where c.Nombre = 'Azul'),  (select top 1 id from Articulo a where a.Descripcion =		'Casco MB')),
((select top 1 id from Talle t where t.TalleArticulo = 'L'),  (select top 1 id from Color c where c.Nombre = 'Blanco'),  (select top 1 id from Articulo a where a.Descripcion =		'Media running'))
GO

INSERT INTO Inventario values
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Medias caña media'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Zapatilla runnig'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = '39')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Negro')	)	,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Zapatilla urbana'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = '10')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Gris')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Zapatilla basica'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = '48')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Verde')	)	,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Remera deportiva dry'	) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Azul')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Remera de tennis'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'S')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Chomba de golf'			) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'XL')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Remera mountainBike'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Short deportivo	'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Blanco'))	,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Short runner'			) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'S')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Azul')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Boxer deportivo'			) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Blanco'))	,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Rompeviento deportivo'	) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'XL')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Bolso de gimnasio'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'Grande')	and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Botella de agua MB'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'Chico')	and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Casco MB'				) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Azul')	)		,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Media running'			) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'L')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Blanco'))	,5),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Medias caña media'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Zapatilla runnig'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = '39')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Negro')	)	,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Zapatilla urbana'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = '10')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Gris')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Zapatilla basica'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = '48')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Verde')	)	,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Remera deportiva dry'	) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Azul')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Remera de tennis'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'S')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Chomba de golf'			) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'XL')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Remera mountainBike'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Short deportivo	'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Blanco'))	,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Short runner'			) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'S')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Azul')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Boxer deportivo'			) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Blanco'))	,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Rompeviento deportivo'	) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'XL')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Bolso de gimnasio'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'Grande')	and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Botella de agua MB'		) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'Chico')	and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Rojo')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Casco MB'				) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'M')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Azul')	)		,6),
(50,(select top 1 id from Stock s where s.ArticuloId = (select top 1 id from Articulo a where a.Descripcion = 'Media running'			) and s.TalleId = (select top 1 id from Talle t where t.TalleArticulo = 'L')		and s.ColorId = (select top 1 id from Color c where c.Nombre = 'Blanco'))	,6)

GO



INSERT INTO Cliente VALUES
(0,'20-00000000-0','DefaultUser','DefaultUser',15),
(45000222,'20-45000222-5','Tomas','Wolf',11),
(40555111,'20-40555111-7','Florencio','Chavez',12)

INSERT INTO PuntoDeVenta values
(1,(select top 1 id from sucursal s where s.nombre = 'San Miguel de Tucuman')),
(2,(select top 1 id from sucursal s where s.nombre = 'San Miguel de Tucuman')),
(3,(select top 1 id from sucursal s where s.nombre = 'Yerba Buena')),
(4,(select top 1 id from sucursal s where s.nombre = 'Yerba Buena')),
(5,(select top 1 id from sucursal s where s.nombre = 'Tafi Viejo')),
(6,(select top 1 id from sucursal s where s.nombre = 'Tafi Viejo')),
(7,(select top 1 id from sucursal s where s.nombre = 'Concepción')),
(8,(select top 1 id from sucursal s where s.nombre = 'Concepción'))


INSERT INTO Vendedor values
(1111,'Ramirez',' Nicolas'	,(select top 1 s.id from PuntoDeVenta s where s.SucursalId = (select top 1 s.id from Sucursal s where s.Nombre = 'San Miguel de Tucuman' )),1,'72623e3d-84e0-4ff0-b549-f14822ed003a'),
(1112,'Villa','Nicolas'		,(select top 1 s.id from PuntoDeVenta s where s.SucursalId = (select top 1 s.id from Sucursal s where s.Nombre = 'San Miguel de Tucuman' )),1,'a5e20536-b2d4-42dc-a311-429145826113'),
(1113,'Chisi','Facundo'		,(select top 1 s.id from PuntoDeVenta s where s.SucursalId = (select top 1 s.id from Sucursal s where s.Nombre = 'Yerba Buena' )),1,'a3d1b8cd-5cc1-4724-9c3c-793ee09ae967')

------INSERT INTO DetallePagoTarjeta VALUES ('Debito','5165165')
--INSERT INTO Pago VALUES (15000.5,'ARS',1,'20240305',1)
--INSERT INTO Venta(SucursalId,FechaVenta,VendedorId,PagoId,ClienteId,TipoComprobanteId,PuntoDeVentaId,Importe)
--VALUES(1,'20240305',1,1,1,1,1,15000.5)
--GO



--	select * from Inventario i
--	inner join Stock s on s.Id = i.StockId
--	inner join Color col on col.Id = s.ColorId
--	inner join Talle t on t.Id = s.TalleId
--	inner join Sucursal sc on sc.Id = i.SucursalId 
--	inner join Articulo ar on ar.Id = s.ArticuloId
--	inner join Categoria ct on ct.Id = ar.CategoriaId
--	inner join Marca mar on mar.Id = ar.MarcaId


--	--Consulta a Inventario
--select i.Id, ct.Descripcion as categoria,mar.Nombre as Marca,ar.Descripcion,ar.CodigoBarras,t.TalleArticulo,col.Nombre as Color, i.Cantidad,sc.Nombre as Sucursal 
--from Inventario i
--inner join Stock s on s.Id = i.StockId 
--inner join Color col on col.Id = s.ColorId
--inner join Talle t on t.Id = s.TalleId
--inner join Sucursal sc on sc.Id = i.SucursalId 
--inner join Articulo ar on ar.Id = s.ArticuloId
--inner join Categoria ct on ct.Id = ar.CategoriaId
--inner join Marca mar on mar.Id = ar.MarcaId

--select * from Pago
----select * from DetallePagoTarjeta

--select * from venta v
--inner join Sucursal s on s.Id = v.SucursalId
--inner join Vendedor vdor on vdor.Id = v.VendedorId
--inner join Pago p on p.Id = v.PagoId
--inner join Cliente c on c.Id = v.ClienteId
--inner join TipoComprobante tc on tc.Id = v.TipoComprobanteId
--inner join PuntoDeVenta pv on pv.Id = v.PuntoDeVentaId



--DELETE FROM Inventario 
--DELETE FROM LineaDeVenta
--DELETE FROM Venta
--DELETE FROM Stock 
--DELETE FROM Categoria 
--DELETE FROM Marca 
--DELETE FROM Color 
--DELETE FROM TipoTalle 
--DELETE FROM Talle 
--DELETE FROM CondicionTributaria 
--DELETE FROM TipoPago 
--DELETE FROM Pago 
--DELETE FROM TipoComprobante 
--DELETE FROM Articulo 
--DELETE FROM Tienda 
--DELETE FROM Sucursal 
--DELETE FROM Cliente 
--DELETE FROM PuntoDeVenta 
--DELETE FROM Vendedor 



--select * FROM Inventario 
--select * FROM LineaDeVenta
--select * FROM Venta
--select * FROM Stock 
--select * FROM Categoria 
--select * FROM Marca 
--select * FROM Color 
--select * FROM TipoTalle 
--select * FROM Talle 
--select * FROM CondicionTributaria
--select * FROM TipoPago 
--select * FROM Pago 
--select * FROM TipoComprobante
--select * FROM Articulo 
--select * FROM Tienda 
--select * FROM Sucursal 
--select * FROM Cliente 
--select * FROM PuntoDeVenta
--select * FROM Vendedor 


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----CONSULTAS----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
----select * from Articulo
----select * from Marca
----select * from Categoria

----select * from Talle
----select * from TipoTalle
----select * from Color
----select * from Articulo
----select * from Sucursal

----select a.*,c.*,t.* from Stock s
----inner join Talle t on t.id = s.talleid
----inner join Color c on c.id = s.colorid
----inner join Articulo a on a.id = s.articuloid

----select cantidad,ar.CodigoBarras,cat.Descripcion,mar.Nombre nombreMarca,t.Descripcion,c.Nombre color,sl.Nombre from inventario i
----inner join Stock s on s.IdStock = i.idStock
----inner join sucursal sl on sl.IdSucursal = i.idsucursal
----inner join Articulo ar on ar.IdArticulo = s.IdArticulo
----inner join talle t on t.IdTalle = s.IdTalle
----inner join color c on c.IdColor = s.IdColor
----inner join Categoria cat on cat.IdCategoria = ar.IdCategoria
----inner join Marca mar on mar.IdMarca = ar.IdMarca

----SELECT PICANTE ACTUALIZADO 
----  select cantidad,ar.CodigoBarras,cat.Descripcion,mar.Nombre nombreMarca,t.TalleArticulo,c.Nombre color,sl.Nombre Sucursal from inventario i
----inner join Stock s on s.Id = i.id
----inner join sucursal sl on sl.Id = i.id
----inner join Articulo ar on ar.Id = s.Id
----inner join talle t on t.Id = s.Id
----inner join color c on c.Id = s.Id
----inner join Categoria cat on cat.Id = ar.Id
----inner join Marca mar on mar.Id = ar.Id

-----------------------------------------------------------------------------------------------------------------------------
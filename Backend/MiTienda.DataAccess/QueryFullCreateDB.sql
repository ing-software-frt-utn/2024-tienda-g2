USE [MiTienda]
GO

/****** Object:  Table [dbo].[Categoria]    Script Date: 26/2/2024 13:36:28 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Categoria](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Categoria] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [MiTienda]
GO


/****** Object:  Table [dbo].[Marca]    Script Date: 26/2/2024 13:38:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Marca](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Marca] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[TipoTalle]    Script Date: 26/2/2024 13:39:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TipoTalle](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_TipoTalle] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[Talle]    Script Date: 26/2/2024 13:39:29 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Talle](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TalleArticulo] [nvarchar](max) NOT NULL,
	[TipoTalleId] [int] NOT NULL,
 CONSTRAINT [PK_Talle] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Talle]  WITH CHECK ADD  CONSTRAINT [FK_Talle_TipoTalle_TipoTalleId] FOREIGN KEY([TipoTalleId])
REFERENCES [dbo].[TipoTalle] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Talle] CHECK CONSTRAINT [FK_Talle_TipoTalle_TipoTalleId]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[Color]    Script Date: 26/2/2024 13:39:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Color](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Color] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[CondicionTributaria]    Script Date: 26/2/2024 13:39:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CondicionTributaria](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Abreviatura] [nvarchar](max) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_CondicionTributaria] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[TipoPago]    Script Date: 26/2/2024 13:40:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TipoPago](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_TipoPago] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


USE [MiTienda]
GO

/****** Object:  Table [dbo].[TipoComprobante]    Script Date: 26/2/2024 13:40:26 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[TipoComprobante](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_TipoComprobante] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[Articulo]    Script Date: 26/2/2024 13:40:39 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

ALTER TABLE [dbo].[Articulo](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Descripcion] [nvarchar](max) NOT NULL,
	[CodigoBarras] [nvarchar](max) NOT NULL,
	[Costo] [float] NOT NULL,
	[MargenGanancia] [float] NOT NULL,
	[PrecioFinal] [float] NULL,
	[NetoGravado] [float] NULL,
	[PorcentajeIVA] [float] NOT NULL,
	[MarcaId] [int] NOT NULL,
	[CategoriaId] [int] NOT NULL,
	[State] [bit] NOT NULL,
 CONSTRAINT [PK_Articulo] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Articulo] ADD  DEFAULT (CONVERT([bit],(0))) FOR [State]
GO

ALTER TABLE [dbo].[Articulo]  WITH CHECK ADD  CONSTRAINT [FK_Articulo_Categoria_CategoriaId] FOREIGN KEY([CategoriaId])
REFERENCES [dbo].[Categoria] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Articulo] CHECK CONSTRAINT [FK_Articulo_Categoria_CategoriaId]
GO

ALTER TABLE [dbo].[Articulo]  WITH CHECK ADD  CONSTRAINT [FK_Articulo_Marca_MarcaId] FOREIGN KEY([MarcaId])
REFERENCES [dbo].[Marca] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Articulo] CHECK CONSTRAINT [FK_Articulo_Marca_MarcaId]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[Tienda]    Script Date: 26/2/2024 13:40:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Tienda](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Cuil] [nvarchar](max) NOT NULL,
	[CondicionTributariaId] [int] NOT NULL,
 CONSTRAINT [PK_Tienda] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Tienda]  WITH CHECK ADD  CONSTRAINT [FK_Tienda_CondicionTributaria_CondicionTributariaId] FOREIGN KEY([CondicionTributariaId])
REFERENCES [dbo].[CondicionTributaria] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Tienda] CHECK CONSTRAINT [FK_Tienda_CondicionTributaria_CondicionTributariaId]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[Sucursal]    Script Date: 26/2/2024 13:45:04 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Sucursal](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Numero] [int] NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[TiendaId] [int] NOT NULL,
 CONSTRAINT [PK_Sucursal] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Sucursal]  WITH CHECK ADD  CONSTRAINT [FK_Sucursal_Tienda_TiendaId] FOREIGN KEY([TiendaId])
REFERENCES [dbo].[Tienda] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Sucursal] CHECK CONSTRAINT [FK_Sucursal_Tienda_TiendaId]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[Stock]    Script Date: 26/2/2024 13:45:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Stock](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TalleId] [int] NOT NULL,
	[ColorId] [int] NOT NULL,
	[ArticuloId] [int] NOT NULL,
 CONSTRAINT [PK_Stock] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Stock]  WITH CHECK ADD  CONSTRAINT [FK_Stock_Articulo_ArticuloId] FOREIGN KEY([ArticuloId])
REFERENCES [dbo].[Articulo] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Stock] CHECK CONSTRAINT [FK_Stock_Articulo_ArticuloId]
GO

ALTER TABLE [dbo].[Stock]  WITH CHECK ADD  CONSTRAINT [FK_Stock_Color_ColorId] FOREIGN KEY([ColorId])
REFERENCES [dbo].[Color] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Stock] CHECK CONSTRAINT [FK_Stock_Color_ColorId]
GO

ALTER TABLE [dbo].[Stock]  WITH CHECK ADD  CONSTRAINT [FK_Stock_Talle_TalleId] FOREIGN KEY([TalleId])
REFERENCES [dbo].[Talle] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Stock] CHECK CONSTRAINT [FK_Stock_Talle_TalleId]
GO


USE [MiTienda]
GO

/****** Object:  Table [dbo].[Inventario]    Script Date: 26/2/2024 13:45:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Inventario](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Cantidad] [int] NOT NULL,
	[StockId] [int] NOT NULL,
	[SucursalId] [int] NOT NULL,
 CONSTRAINT [PK_Inventario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Inventario]  WITH CHECK ADD  CONSTRAINT [FK_Inventario_Stock_StockId] FOREIGN KEY([StockId])
REFERENCES [dbo].[Stock] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Inventario] CHECK CONSTRAINT [FK_Inventario_Stock_StockId]
GO

ALTER TABLE [dbo].[Inventario]  WITH CHECK ADD  CONSTRAINT [FK_Inventario_Sucursal_SucursalId] FOREIGN KEY([SucursalId])
REFERENCES [dbo].[Sucursal] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Inventario] CHECK CONSTRAINT [FK_Inventario_Sucursal_SucursalId]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[Cliente]    Script Date: 26/2/2024 13:45:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Cliente](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Dni] [int] NOT NULL,
	[Cuil] [nvarchar](max) NOT NULL,
	[Apellido] [nvarchar](max) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[CondicionTributariaId] [int] NOT NULL,
 CONSTRAINT [PK_Cliente] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Cliente]  WITH CHECK ADD  CONSTRAINT [FK_Cliente_CondicionTributaria_CondicionTributariaId] FOREIGN KEY([CondicionTributariaId])
REFERENCES [dbo].[CondicionTributaria] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Cliente] CHECK CONSTRAINT [FK_Cliente_CondicionTributaria_CondicionTributariaId]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[PuntoDeVenta]    Script Date: 26/2/2024 13:46:07 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PuntoDeVenta](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Numero] [int] NOT NULL,
	[SucursalId] [int] NOT NULL,
 CONSTRAINT [PK_PuntoDeVenta] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[PuntoDeVenta]  WITH CHECK ADD  CONSTRAINT [FK_PuntoDeVenta_Sucursal_SucursalId] FOREIGN KEY([SucursalId])
REFERENCES [dbo].[Sucursal] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[PuntoDeVenta] CHECK CONSTRAINT [FK_PuntoDeVenta_Sucursal_SucursalId]
GO

USE [MiTienda]
GO

/****** Object:  Table [dbo].[Vendedor]    Script Date: 26/2/2024 13:46:26 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Vendedor](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Legajo] [int] NOT NULL,
	[Apellido] [nvarchar](max) NOT NULL,
	[Nombre] [nvarchar](max) NOT NULL,
	[UsuarioId] [nvarchar](max) NOT NULL,
	[Contrasenia] [nvarchar](max) NOT NULL,
	[SucursalId] [int] NOT NULL,
	[State] [bit] NOT NULL,
 CONSTRAINT [PK_Vendedor] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Vendedor] ADD  DEFAULT (CONVERT([bit],(0))) FOR [State]
GO

ALTER TABLE [dbo].[Vendedor]  WITH CHECK ADD  CONSTRAINT [FK_Vendedor_Sucursal_SucursalId] FOREIGN KEY([SucursalId])
REFERENCES [dbo].[Sucursal] ([Id])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Vendedor] CHECK CONSTRAINT [FK_Vendedor_Sucursal_SucursalId]
GO




INSERT INTO Categoria values
('Remeras'),
('Pantalon'),
('Accesorios'),
('Camisas'),
('Ropa Interior')

INSERT INTO Marca values
('Adidas'),
('Levis'),
('Penguin'),
('Nike'),
('UnderArmor')

INSERT INTO TipoTalle values
('Americano'),
('Europeo'),
('Brasilero')

INSERT INTO Talle values
('42',2),
('43',2),
('11.5',1),
('M',3)

INSERT INTO Color values
('Rojo'),
('Azul'),
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
('Medias'			  ,'1211-1111',500  ,0.5,null ,null,0.21,1,1,3),
('Remera manga cortas','1211-1222',15000,0.5,null,null	,0.21,1,1,1),
('Pantalon jean','1211-4566',22000,0.5,null,null		,0.21,1,2,2),
('Remera manga corta','1211-1333',12000,0.5,null,null	,0.21,1,3,1),
('Remera deportiva','1211-3322',8000,0.5,null,null		,0.21,1,4,1)


INSERT INTO Tienda values
('20401112227',1)

INSERT INTO Sucursal values
(1,'San Miguel de Tucuman',1),
(3,'Tafi Viejo',1),
(2,'Yerba Buena',1)

INSERT INTO Stock values
(2,1,2),
(3,2,1),
(4,3,3)
GO

INSERT INTO Inventario values
(50,1,2),
(10,2,1),
(15,3,2),
(25,1,3)
GO

INSERT INTO Cliente values
(45000222,'20-45000222-5','Tomas','Wolf',2),
(40555111,'20-40555111-7','Florencio','Chavez',1)

INSERT INTO PuntoDeVenta values
(1,2),
(2,2),
(1,1),
(2,1)

INSERT INTO Vendedor values
(1111,'Ramirez',' Nicolas','nramirez','admin123',1,2),
(1112,'Villa','Nicolas','nvilla','admin123',1,1),
(1113,'Chisi','Facundo','fchisi','admin123',1,1),
(1114,'Yeyi','Agustin','ayeyi','admin123',1,3)






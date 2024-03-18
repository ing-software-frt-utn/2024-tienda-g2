export interface Article {
    id?: number;
    descripcion: string;
    codigoBarras: string;
    costo: number;
    margenGanancia: number;
    precioFinal: number;
    netoGravado: number;
    porcentajeIVA: number;
    categoriaId: number;
    marcaId: number;
    marcaNombre: string;
    categoriaDescripcion: string;
}

export interface ArticleStock {
    idInventario: number;
    cantidad: number;
    idStock: number;
    stockColor: string;
    stockTalle: string;
    stockTalleTipoTalle: string;
    idArticulo: number;
    codigoBarra: string;
    articuloCategoria: string;
    articuloDescripcion: string;
    articuloMarca: string;
    idSucursal: number;
    nombreSucursal: string;
}

export interface Venta {
    sucursal: {
        numero: number;
        nombre: string;
        tienda: {
            cuil: string;
            condicionTributaria: any;
            id: number;
        };
        id: number;
    };
    fechaVenta: string;
    vendedor: {
        legajo: number;
        apellido: string;
        nombre: string;
        puntoDeVenta: {
            numero: number;
            sucursal: {
                numero: number;
                nombre: string;
                tienda: {
                    cuil: string;
                    condicionTributaria: any;
                    id: number;
                };
                id: number;
            };
            id: number;
        };
        state: boolean;
        userID: string;
        id: number;
    };
    pago: any;
    cliente: {
        dni: number;
        cuil: string;
        apellido: string;
        nombre: string;
        condicionTributaria: any;
        id: number;
    };
    tipoComprobante: any;
    puntoDeVenta: {
        numero: number;
        sucursal: {
            numero: number;
            nombre: string;
            tienda: {
                cuil: string;
                condicionTributaria: any;
                id: number;
            };
            id: number;
        };
        id: number;
    };
    lineasDeVenta: any;
    importe: number;
    cae: any;
    id: number;
}

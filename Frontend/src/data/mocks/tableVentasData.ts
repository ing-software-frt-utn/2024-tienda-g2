export const tableVentasData = [
    {
        id: 1,
        cliente: 'Roberto',
        vendedor: 'Perez Correa',
        fecha: '12945683',
        tipoPago: 'Efectivo',
        monto: '1000000',
        estado: 'Finalizado',
    },
    {},
];

interface Venta {
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

/* 
    {
        "sucursal": {
            "numero": 2,
            "nombre": "Yerba Buena",
            "tienda": {
                "cuil": "20401112227",
                "condicionTributaria": null,
                "id": 3
            },
            "id": 6
        },
        "fechaVenta": "2024-03-14T21:09:47.6366254",
        "vendedor": {
            "legajo": 1113,
            "apellido": "Chisi",
            "nombre": "Facundo",
            "puntoDeVenta": {
                "numero": 3,
                "sucursal": {
                    "numero": 2,
                    "nombre": "Yerba Buena",
                    "tienda": {
                        "cuil": "20401112227",
                        "condicionTributaria": null,
                        "id": 3
                    },
                    "id": 6
                },
                "id": 11
            },
            "state": true,
            "userID": "a3d1b8cd-5cc1-4724-9c3c-793ee09ae967",
            "id": 12
        },
        "pago": null,
        "cliente": {
            "dni": 0,
            "cuil": "20-00000000-0",
            "apellido": "DefaultUser",
            "nombre": "DefaultUser",
            "condicionTributaria": null,
            "id": 4
        },
        "tipoComprobante": null,
        "puntoDeVenta": {
            "numero": 3,
            "sucursal": {
                "numero": 2,
                "nombre": "Yerba Buena",
                "tienda": {
                    "cuil": "20401112227",
                    "condicionTributaria": null,
                    "id": 3
                },
                "id": 6
            },
            "id": 11
        },
        "lineasDeVenta": null,
        "importe": 1500,
        "cae": null,
        "id": 23
    },

*/

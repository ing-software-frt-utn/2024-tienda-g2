import { AcademicCapIcon, PlayIcon, BoltSlashIcon } from '@heroicons/react/24/outline'

export const telemarketers = [
    {
        name: 'Clientes',
        description: 'Verifica el listado de Cliente de la nomina',
        href: '/app/clientes',
        icon: AcademicCapIcon,
    },
    {
        name: 'Expedientes',
        description: "Visualizar el listado de expedientes asociados a tu plantel de trabajo",
        href: '/app/expedientes',
        icon: AcademicCapIcon,
    },
    {
        name: 'Consultas',
        description: "Visualizar el listado de consultas asociados a tu plantel de trabajo",
        href: '/app/consultas',
        icon: AcademicCapIcon,
    }
]

export const submenuTele = [
    { name: 'Reportes', href: '/app/alumnos/activo', icon: PlayIcon },
]

export const configuracion = [
    {
        name: 'Usuarios',
        description: 'Administra los usuarios de la plataforma.',
        href: '/app/config/usuarios',
        icon: BoltSlashIcon,
    },
    {
        name: 'Ayuda',
        description: "Consuta ciertos aspectos de la plataforma.",
        href: '/app/config/ayuda',
        icon: BoltSlashIcon,
    }
]

export const perfil = [
    {
        name: 'Perfil',
        description: 'Revisa tu informacion personal.',
        href: '/app/perfil',
        icon: BoltSlashIcon,
    },
]

export const menuCelular = [
    {
        name: 'Estado Academico',
        href: '/app/estado',
        icon: BoltSlashIcon,
    },
    {
        name: 'Correlatividad para Cursar',
        href: '/app/correlativa-cursado',
        icon: BoltSlashIcon,
    },
    {
        name: 'Correlatividad para Rendir',
        href: '/app/correlativa-rendir',
        icon: BoltSlashIcon,
    },
    {
        name: 'Perfil Academico',
        href: '/app/profile',
        icon: BoltSlashIcon,
    },
]
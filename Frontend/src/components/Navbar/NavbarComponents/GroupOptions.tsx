import { LogoutNavbarButton } from '../../Buttons/LogoutNavbarButton'
import { NavbarOptionLink, NavbarOptionSecondaryLink } from '../../Links/NavbarOptionLink'


interface GroupPrincipalPanelProps {
    dataOptions: {
        name: string;
        description: string;
        href: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        icon: any;
    }[];
    close: () => void;
    hasSecondaryPanel?: boolean;

}

export const GroupPrincipalPanel = ({ dataOptions, close, hasSecondaryPanel = false }: GroupPrincipalPanelProps) => {
    return (
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">

            <div className="relative grid gap-6 bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8">
                {dataOptions.map((item, i) => (
                    <NavbarOptionLink item={item} close={close} key={i} />
                ))}
            </div>

            {(hasSecondaryPanel) && <GroupProfilePanelSecondary />}

            {/* 
                EL PANEL DE ARRIBA ES PARA EL PROFILE. 
                EL COMPONENTE 'GroupSecondaryPanelOptions'  ES EL SUBMENU DE LAS OPCIONES DEL NAVBAR
                EN CASO DE NECESITARLO HAY QUE MODIFICAR ESTA SECCION PARA ACOPLARLO Y HACERLO DINAMICO CON EL PERFILGROUP
                PARA USARLO NECESITO PASAR COMO PROP EL DATAOPTIONS PARA RENDERIZAR LA DATA.
            */}

        </div>
    )
}

export const GroupSecondaryPanelOptions = ({ dataOptions, close }: GroupPrincipalPanelProps) => {
    return (
        <div className="px-5 py-5 bg-gray-700 space-y-6 flex justify-center">
            {dataOptions.map((item, i) => (
                <NavbarOptionSecondaryLink item={item} close={close} key={i} />
            ))}
        </div>
    )
}

export const GroupProfilePanelSecondary = () => {
    return (
        <div className="px-5 py-5 bg-rose-700 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
            <LogoutNavbarButton />
        </div>
    )
}
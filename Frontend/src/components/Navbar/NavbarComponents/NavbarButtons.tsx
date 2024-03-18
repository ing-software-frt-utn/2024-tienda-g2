import { Popover } from '@headlessui/react'
import { FolderOpenIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export const HamburguerButton = () => {
    return (
        <div className="-mr-2 -my-2 md:hidden flex">
            <Popover.Button className="bg-gray-800 dark:bg-white text-gray-100 dark:text-gray-900 rounded-md p-2 inline-flex items-center justify-center "> {/* hover:bg-sky-300 dark:hover:bg-sky-300 */}
                <span className="sr-only">Open menu</span>
                <FolderOpenIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
        </div>
    )
}

interface NavbarGroupButtonProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    classNames: (...args: any[]) => string;
    title: string;
    open: boolean;
}

export const NavbarGroupButton = ({ classNames, title, open }: NavbarGroupButtonProps) => {
    return (
        <Popover.Button
            className={classNames(
                open ? 'text-cyan-300' : 'text-gray-100 hover:text-cyan-300 dark:text-gray-100',
                'inline-flex items-center text-lg font-medium focus:outline-none focus:ring-0 focus:ring-offset-0'
            )}
        >
            <span>{title}</span>
            <ChevronDownIcon
                className={classNames(
                    open ? 'text-teal-300 ml-2 h-5 w-5 group-hover:text-gray-500'
                        : 'text-gray-100 dark:text-gray-100 ml-2 h-5 w-5 group-hover:text-gray-500'
                )}
                aria-hidden="true"
            />
        </Popover.Button>
    )
}

interface NavbarProfileButtonProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    classNames: (...args: any[]) => string;
    open: boolean;
}

export const NavbarProfileButton = ({ classNames, open }: NavbarProfileButtonProps) => {
    return (
        <Popover.Button
            className={classNames(
                open ? ' dark:text-teal-300 ' : 'text-gray-900 dark:text-white',
                'group rounded-md inline-flex items-center text-base font-medium focus:outline-none'
            )}
        >
            <span className="nav-link">
                <img src={`https://flowbite.com/docs/images/people/profile-picture-5.jpg`} alt="Perfil IMG" className="perfilPic mt-2" />
            </span>

            <ChevronDownIcon
                className={classNames(
                    open ? ' text-teal-300 ml-2 h-5 w-5 group-hover:text-teal-300 mt-4 '
                        : 'text-gray-100 ml-2 h-5 w-5 group-hover:text-teal-300 mt-4 '
                )}
                aria-hidden="true"
            />
        </Popover.Button>
    )
}

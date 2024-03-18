import { ReactNode } from 'react';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
}

export const PageHeader = ({ title, subtitle, children }: PageHeaderProps) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                    {subtitle && <p className="text-md text-gray-500">{subtitle}</p>}
                </div>
                <div className="hidden sm:block">
                    {children && children}
                </div>
            </div>

            <div className="border-b border-gray-400 mt-3"></div>
        </div>
    )
}

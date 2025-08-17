/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/


import { type LucideIcon } from 'lucide-react';

import {type FC } from 'react';

interface Props {
    src?: string;
    alt?: string;
    name: string;
    className?: string;
    Icon?: LucideIcon;
}

const SkillsCard: FC<Props> = ({ src, alt, name, className, Icon }) => {
    return (
        <div className="group p-6 bg-white/5 border border-gray-800 rounded-lg text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary-500">
            {(src && alt) && (
                <div className="flex justify-center items-center mb-4">
                    <img
                        src={src}
                        alt={alt}
                        width={48}
                        height={48}
                        className={`w-12 h-12 object-contain ${className ?? ""}`}
                    />
                </div>
            )}
            {Icon && (
                <div className="flex justify-center items-center mb-4">
                    <Icon className="w-12 h-12 text-primary-500" />
                </div>
            )}
            <h4 className="text-lg font-medium text-gray-200">{name}</h4>
        </div>
    );
};

export default SkillsCard;
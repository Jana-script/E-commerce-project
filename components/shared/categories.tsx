'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
    className?: string;
}
const cats = [
    {id: 1, name: 'Charakter'},
    {id: 2, name: 'Kawaii'},
    {id: 3, name: 'Fluffy'},
    {id: 4, name: 'customizer'},
    {id: 5, name: 'recycling'},
];

export const Categories: React.FC<Props> = ({ className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);
    return (
        <div className={cn('inline-flex gap-12 text-lg bg-neutral-50 p-1 rounded-2xl', className)}>
            {
                cats.map(({name, id}, index) => (
                    <a
                    className={cn(
                        'flex items-center h-11 rounded-2xl px-5',
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}
                    href={`/#${name}`}
                    key={index}>
                    <button>{name}</button>
                    </a>
                ))
            }
        </div>
    );
};
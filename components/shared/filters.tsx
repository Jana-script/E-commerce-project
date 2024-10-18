import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>

            <div className='bg-white rounded-2xl p-5 shadow-md shadow-black/2'>
            <Title text="Filtration" size="sm" className='mb-5 front-bold'/>

            {/* Верхние чекбоксы */}

            <div className='flex flex-col gap-4'>
                <FilterCheckbox text="Kann sammeln" value="1"/>
                <FilterCheckbox text="Neu" value="2"/>
            </div>

            {/* Фильтр цен */}

            <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
                <p className='font-bold mb-3'>Price von ... bis</p>
                <div className='flex gap-3 mb-5'>
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0}/>
                    <Input type="number" min={100} max={1000} placeholder="1000"/>
                </div>
                <div className='w-[190px]'>
                    <RangeSlider min={0} max={5000} step={10} value={[0, 5000]}/>
                </div>
            </div>

            <CheckboxFiltersGroup
                title='Ingredients'
                className='mt-5'
                limit={4}
                defaultItems={[
                    {
                        text: 'Käse Souce',
                        value: '1',
                    },
                    {
                        text: 'Mozarella',
                        value: '2',
                    },
                    {
                        text: 'Knoblauch',
                        value: '3',
                    },
                    {
                        text: 'Salzte Gurken',
                        value: '4',
                    },
                    {
                        text: 'Rote Zwiebel',
                        value: '5',
                    },
                    {
                        text: 'Tomaten',
                        value: '6',
                    },
                    {
                        text: 'Oliven',
                        value: '7',
                    },
                ]}

                items={[
                    {
                        text: 'Käse Souce',
                        value: '1',
                    },
                    {
                        text: 'Mozarella',
                        value: '2',
                    },
                    {
                        text: 'Knoblauch',
                        value: '3',
                    },
                    {
                        text: 'Salzte Gurken',
                        value: '4',
                    },
                    {
                        text: 'Rote Zwiebel',
                        value: '5',
                    },
                    {
                        text: 'Tomaten',
                        value: '6',
                    },
                    {
                        text: 'Olivenblablablalangeschlangename',
                        value: '7',
                    },
                ]}
                />
            </div>
        </div>
    );
};
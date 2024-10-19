import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
    return (
        <div className={className}>
            <Link href={'/products/' + id} style={{textDecoration: 'none'}}>
                <div className="flex justify-center bg-secondary rounded-lg h-[230px]">
                    <img className="rounded-t-lg w-[290px] h-[215px]" src={imageUrl} alt="name"/>
                </div>

                <Title text={name} size="sm" className='mb-1 mt-3'/>

                <p className=' text-sm text-gray-400'>
                Das Kuscheltier, inspiriert von einer Zeichentrickfigur, ist detailgetreu gestaltet und ideal für Fans. Hergestellt aus hypoallergenen Materialien, ist es weich und kindersicher.
                </p>

                <div className='flex justify-between items-center mt-4'>
                    <span className='text-[20px]'>
                        ab <b> {price} EUR </b>
                    </span>

                    <Button variant="secondary" className='text-base font-bold'>
                        <Plus size={20} className='mr-1'/>
                        Add
                    </Button>

                </div>


            </Link>
        </div>
    );
};
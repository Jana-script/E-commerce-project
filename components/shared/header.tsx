import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>

                {/* Language */}

            <div id="parent" className="">
                <div id="element" className='mt-3 w-[1280px] text-color:[#FFA300] text-right'>
                    <p className='mr-4 mt-1'>Deutsch</p>
                </div>
            </div>

            <div className='bg-[#FFA300] h-[125px] w-[100%]'>
                <Container className='flex items-center justify-between py-8 px-3'>
                
                {/* Links */}
                    <div className="flex items-center gap-4">
                        <Image src="/PCreation.png" alt="Logo" width={370} height={80} />
                    </div>

                {/* {hasSearch && (
                    <div className="mx-10 flex-1">
                          <SearchInput />
                    </div>
                )} */}
                
                {/* Rechts*/}
                    <div className="flex items-center gap-3">

                        <Button variant="outline" className='flex items-center gap-1'>
                            <User size={16}/>
                            Login
                        </Button>

                        <div>

                            <Button className='group relative border border-neutral-100'>
                                <b>€ 520</b>
                                <span className='h-full w-[1px] bg-white/30 mx-3'/>
                                <div className='flex items-center gap-1 transition-duration-300 group-hover:opacity-0'>
                                    <ShoppingCart size={16} className='relative StrokeWidth={2}'/>
                                    <b>3</b>
                                </div>
                                <ArrowRight size={20} className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'/>
                            </Button>

                        </div>
                    
                    </div>
                    
                </Container>
            </div>

        </header>
    );
};
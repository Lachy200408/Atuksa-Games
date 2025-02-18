'use client';

import Image from 'next/image';
import LinkBadge from '@/components/link-badge/LinkBadge';
import CartButton from '@/components/cart-button/CartButton';
import InCartIcon from '@/components/icons/InCartIcon';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { useCartContext } from '@/contexts/cart/cart-context';
import { oswald } from '@/lib/fonts/fonts';
import { cn } from '@/lib/utils/cn';

interface Props {
	name: string;
	image: string;
	id: string;
	price: number;
}

export default function Card({ id, name, image, price }: Props) {
	const { cart } = useCartContext();
	const isInCart = cart.includes(id);

	return (
		<div className="flex flex-col items-center justify-between gap-4 p-6 bg-primary-600/5 backdrop-blur-lg border border-primary-600/25 rounded-xl max-w-xs min-h-[384px] relative overflow-hidden group">
			<Image
				src="/GlassBackground.webp"
				alt="GlassBackground"
				width={400}
				height={550}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover object-center h-full brightness-125 group-hover:block hidden"
			/>
			<Image
				src={image}
				alt={name}
				width={200}
				height={275}
				className="max-w-xs h-auto rounded-md"
			/>
			<h4 className="text-center overflow-hidden text-ellipsis text-nowrap max-w-[200px]">
				{name}
			</h4>
			<LinkBadge href={`/games/${id}`}>
				Ver más <ArrowUpRightIcon className="size-4" />
			</LinkBadge>
			<CartButton id={id} />
			<span
				className={cn(
					'grid place-items-center rounded-lg bg-gradient-to-tr from-green-500 to-custom_green-600 py-2 w-40 text-green-100 absolute top-0 left-0 -translate-x-1/4 translate-y-1/2 -rotate-45 shadow-green-900/50 shadow-[inset_0_0_16px_0]',
					oswald.className,
				)}
			>
				{price.toFixed(2)} CUP
			</span>
			{isInCart && (
				<span className="absolute top-0 right-0 m-4 rounded-full p-2 bg-green-500 text-green-100 shadow-green-900/50 shadow-[inset_0_0_4px_0]">
					<InCartIcon className="size-4" />
				</span>
			)}
		</div>
	);
}

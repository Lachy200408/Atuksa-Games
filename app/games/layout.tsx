import OrderBuy from '@/components/order-buy/OrderBuy';

interface Props {
	children: React.ReactNode;
}

export default function GamesLayout({ children }: Props) {
	return (
		<div className="flex-1 flex flex-col items-center justify-start relative">
			<OrderBuy className="fixed bottom-4 right-4 z-50" />
			{children}
		</div>
	);
}

import Filters from '@/components/filters/Filters';

interface Props {
	children: React.ReactNode;
}

export default function WithFilterLayout({ children }: Props) {
	return (
		<>
			<Filters />
			{children}
		</>
	);
}

import { GAMES_FILTER_BASE_URL } from '@/lib/constants/site-routes';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Filters() {
	return (
		<div className="flex flex-wrap justify-around sm:justify-end gap-4 items-center min-h-24 w-full border-y border-primary-600/50 p-4">
			<form action={GAMES_FILTER_BASE_URL}>
				<search className="flex items-center gap-2 border border-primary-600/25 bg-primary-600/5 rounded-full p-2 text-primary-600">
					<input
						type="text"
						name="search"
						placeholder="GTA V, Assas..."
						className="bg-transparent border-none outline-none text-primary-600 focus:outline-none ps-2"
					/>
					<input type="text" name="page" defaultValue={1} hidden />
					<button
						type="submit"
						className="border border-primary-600/25 bg-primary-600/5 rounded-full p-2 text-primary-600 transition duration-300 hover:bg-primary-600/10 active:bg-primary-600/20"
					>
						<MagnifyingGlassIcon className="size-4" />
					</button>
				</search>
			</form>
		</div>
	);
}

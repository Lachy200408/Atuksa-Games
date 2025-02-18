import { GAME_GENRES_DISPLAYABLE } from '@/lib/constants/games-genres';
import Image from 'next/image';
import { ArrowDownIcon, Bars3Icon } from '@heroicons/react/24/outline';
import LinkBadge from '@/components/link-badge/LinkBadge';
import ButtonBadge from '@/components/button-badge/ButtonBadge';
import Link from 'next/link';
import CartFeedback from '../cart-feedback/CartFeedback';

export default function Header() {
	return (
		<header className="sticky top-0 left-0 w-full z-50 flex items-center justify-between flex-wrap max-[400px]:gap-x-4 gap-x-16 gap-y-6 py-6 max-[400px]:px-2 px-8 backdrop-blur-lg">
			<figure className="flex items-center gap-2 md:gap-4">
				<Image
					src="/Joystick.webp"
					alt="Atuksa Games"
					width={56}
					height={56}
					className="scale-75 sm:scale-100 h-auto"
				/>
				<Image
					src="/Title.webp"
					alt="Atuksa Games"
					width={335}
					height={48}
					className="h-6 sm:h-9 w-auto"
				/>
			</figure>
			<nav className="hidden sm:flex items-center gap-4">
				<LinkBadge href="/">Inicio</LinkBadge>
				<LinkBadge href="/games/page/1">Juegos</LinkBadge>
				<LinkBadge href="/games/cart">
					Ver Carrito <CartFeedback />
				</LinkBadge>
				<div className="dropdown dropdown-bottom dropdown-end">
					<ButtonBadge tabIndex={0} className="focus:scale-90">
						Categorías <ArrowDownIcon className="size-4" />
					</ButtonBadge>
					<ul
						tabIndex={0}
						className="dropdown-content menu bg-primary-200 backdrop-blur-lg border border-primary-600/25 z-10 w-52 max-h-48 overflow-y-auto flex-nowrap p-4 rounded-md"
					>
						{Object.entries(GAME_GENRES_DISPLAYABLE).map(([key, value]) => (
							<li key={key}>
								<Link
									href={`/games/genre/${key}/page/1`}
									className="block px-4 py-2 text-primary-600 hover:bg-primary-600/10 active:bg-primary-25 transition duration-300"
								>
									{value}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>

			<div className="drawer sm:hidden w-max">
				<input id="my-drawer" type="checkbox" className="drawer-toggle" />
				<label htmlFor="my-drawer" className="drawer-button">
					<Bars3Icon className="size-6 p-2 border border-primary-600/25 bg-primary-600/5 hover:bg-primary-600/10 active:bg-primary-600/5 transition duration-300 rounded-full cursor-pointer text-primary-600 box-content" />
				</label>
				<div className="drawer-side">
					<label
						htmlFor="my-drawer"
						aria-label="close sidebar"
						className="drawer-overlay w-dvw"
					></label>
					<div className="menu text-base-content min-h-full w-64 p-4 bg-primary-200 backdrop-blur-lg border-e border-primary-600/25">
						<nav className="flex flex-col items-end justify-center gap-4 px-4">
							<LinkBadge
								href="/"
								className="text-primary-600 focus:text-primary-600 active:text-primary-600"
							>
								Inicio
							</LinkBadge>
							<LinkBadge
								href="/games/page/1"
								className="text-primary-600 focus:text-primary-600 active:text-primary-600"
							>
								Juegos
							</LinkBadge>
							<LinkBadge
								href="/games/cart"
								className="text-primary-600 focus:text-primary-600 active:text-primary-600"
							>
								Ver Carrito <CartFeedback />
							</LinkBadge>
							<div className="dropdown dropdown-bottom dropdown-end">
								<ButtonBadge
									tabIndex={0}
									className="focus:scale-90 text-primary-600 focus:text-primary-600 active:text-primary-600"
								>
									Categorías <ArrowDownIcon className="size-4" />
								</ButtonBadge>
								<ul
									tabIndex={0}
									className="dropdown-content menu bg-transparent backdrop-blur-lg border border-primary-600/25 z-10 w-52 max-h-48 overflow-y-auto flex-nowrap p-4 rounded-md"
								>
									{Object.entries(GAME_GENRES_DISPLAYABLE).map(
										([key, value]) => (
											<li key={key}>
												<Link
													href={`/games/genre/${key}/page/1`}
													className="block px-4 py-2 text-primary-600 focus:text-primary-600 active:text-primary-600 hover:bg-primary-600/10 active:bg-primary-25 transition duration-300"
												>
													{value}
												</Link>
											</li>
										),
									)}
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
}

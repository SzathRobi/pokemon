"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiPokemon } from "react-icons/si";

import { HOME_ROUTE, INVENTORY_ROUTE } from "@/src/constants/routes.constants";

const Header = () => {
  const pathname = usePathname();
  const getIsActive = (path: string) => path === pathname;

  return (
    <header className="w-ful mb-16 flex items-center justify-between border-b border-blue-500 px-8 lg:px-16">
      <Link href={HOME_ROUTE}>
        <SiPokemon size={80} className="text-yellow-600" />
      </Link>
      <nav>
        <ul className="flex items-center justify-start gap-4">
          <li>
            <Link
              className={
                getIsActive(HOME_ROUTE) ? `text-blue-500` : "text-black"
              }
              href={HOME_ROUTE}
              data-testid="home-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                getIsActive(INVENTORY_ROUTE) ? `text-blue-500` : "text-black"
              }
              href={INVENTORY_ROUTE}
              data-testid="inventory-link"
            >
              Inventory
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

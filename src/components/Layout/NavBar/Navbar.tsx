import { IconX } from "@tabler/icons-react";

type NavBarProps = {
    opened: boolean;
}

export const NavBar = ({opened}: NavBarProps) => {
    return (
        <nav className={`flex flex-col shadow-md duration-1000 justify-between bg-primary w-[300px] py-20 fixed md:relative h-screen text-white ${opened ? 'left-[0px]' : 'left-[-300px]'}`}>
            <IconX height={30} width={30} cursor="pointer" />
        </nav>
        )
}
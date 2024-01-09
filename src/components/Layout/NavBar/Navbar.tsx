import { IconX } from "@tabler/icons-react";

type NavBarProps = {
    opened: boolean;
}

export const NavBar = ({opened}: NavBarProps) => {
    return (
        <nav className={`flex flex-col shadow-md justify-between bg-primary w-[300px] py-20 fixed md:static h-screen text-white ${opened ? 'left-[0]' : 'left-[-300px]'}`}>
            <IconX height={30} width={30} cursor="pointer"/>
        </nav>
        
        )
}
import { IconMenu2 } from "@tabler/icons-react"

export type HeaderProps = {
    setOpened: (value: boolean) => void;
}

export const Header = ({setOpened}: HeaderProps)=>{
    return (<div className="flex p-4">
       <IconMenu2 className="cursor-pointer" onClick={()=>setOpened(true)}/>
    </div>)
}
'use client';
import { useState } from "react";
import { Header, NavBar } from "..";


export type ContainerProps = {
    children: React.ReactNode;
}

export const Container = ({children}:ContainerProps) => {

    const [opened, setOpened] = useState(true); 
    console.log(opened)
    return <>
        <Header setOpened={setOpened}/>
        <NavBar opened={opened}/>
        {children}
    </>
}
import * as React from "react";
import Image from "next/image";
import LogoPic from "../../public/Netplox.svg";


export default function Logo() {
  return(
    <Image src={LogoPic} width={150}/>
  ) ;
}

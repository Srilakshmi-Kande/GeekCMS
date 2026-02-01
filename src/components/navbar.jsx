import { Anvil } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth";
import SignOut from "./signout";

export default async function Navbar(){
    const session = await getServerSession(authOptions);
    console.log(session, 'session');
    const tempUser = {
        name: "Sam",
        username: 'sam'
    }
    return(
        <div className="w-full flex justify-between px-8 h-12">
            <Link href="/" className="flex gap-2">
                <Anvil /><span className="font-extrabold">GeekCMS</span>
            </Link>
            {session ? (
                <UserModalComponent user={session?.user} />
            ):(
            <Link href='/sign-in'>
                Sign in
            </Link>
            )}
        </div>
    )
}

const UserModalComponent = ({user}) => {
    return <DropdownMenu>
      <DropdownMenuTrigger>
        <Image className="rounded-full border-2 border-[greenyellow]" src={user.image} width={40} height={40} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Hi, {user.name}</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={`/profile/${user.username}`}>
                Go To Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
}
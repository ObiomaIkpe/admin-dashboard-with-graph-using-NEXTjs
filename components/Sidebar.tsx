import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from "lucide-react"

import Link from "next/link"




const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">

      <CommandItem>
        <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href='/'>Dashboard</Link>        
      </CommandItem>

      <CommandItem>
      <Newspaper className="mr-2 h-4 w-4" />
      <Link href='/Posts'>Posts</Link>
      </CommandItem>

      <CommandItem>
      <Folders className="mr-2 h-4 w-4" />
      <Link href='/categories'>Categories</Link>
      </CommandItem>

    </CommandGroup>
    <CommandSeparator />

    <CommandGroup heading="Settings">

    <CommandItem>
        <User className="mr-2 h-4 w-4">
        <span>Profile</span> <CommandShortcut>&#8984;
        </CommandShortcut>
        </User>
      </CommandItem>

      <CommandItem>
      <CreditCard className="mr-2 h-4">
        <span>Billing</span> <CommandShortcut>&dollar;
        </CommandShortcut>
        </CreditCard>
      </CommandItem>

      <CommandItem>
      <Settings className="mr-2 h-4">
        <span>Settings</span> <CommandShortcut>&#9881;
        </CommandShortcut>
        </Settings>
      </CommandItem>

    </CommandGroup>
  </CommandList>
</Command>

)
}

export default Sidebar
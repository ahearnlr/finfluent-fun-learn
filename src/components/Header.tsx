
import React from 'react';
import { Button } from '@/components/ui/button';
import { GlobeIcon, LogInIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">
      <div className="logo">
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-finfluent-teal">Fin</span>
          <span className="text-finfluent-brown">Fluent</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <GlobeIcon size={18} />
              <span className="hidden md:inline">Site Language: </span>
              <span>English</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Español</DropdownMenuItem>
            <DropdownMenuItem>Français</DropdownMenuItem>
            <DropdownMenuItem>Deutsch</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button 
          variant="outline" 
          className="flex items-center gap-2 border-finfluent-brown text-finfluent-brown hover:bg-finfluent-brown/10"
        >
          <LogInIcon size={18} />
          <span>Login</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;

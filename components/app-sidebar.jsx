'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Shirt,
  ShoppingBag,
  ChevronRight,
  Home,
  LogOut,
  PanelLeftClose,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { title } from 'process';

const navData = [
  {
    title: 'Clothing',
    icon: Shirt,
    items: [
      { title: 'Women', url: '/clothing/women' },
      { title: 'Men', url: '/clothing/men' },
      { title: 'Kids', url: '/clothing/kids' },
    ],
  },
  {
    title: 'Bags',
    icon: ShoppingBag,
    items: [
      { title: 'Women', url: '/bags/women' },
      { title: 'Men', url: '/bags/men' },
      { title: 'Kids', url: '/bags/kids' },
    ],
  },
  {
    title: 'Products',
    icon: ShoppingBag,
    items: [{ title: 'Create products', url: '/products' }],
  },
];

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    router.push('/login');
  };

  if (!isMounted) {
    return (
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader className="h-16 border-b px-4 flex items-center">
          <div className="h-6 w-20 bg-zinc-200 animate-pulse rounded" />
        </SidebarHeader>
        <SidebarContent>
          <div className="p-4 space-y-4">
            <div className="h-4 w-full bg-zinc-100 animate-pulse rounded" />
            <div className="h-4 w-full bg-zinc-100 animate-pulse rounded" />
            <div className="h-4 w-full bg-zinc-100 animate-pulse rounded" />
          </div>
        </SidebarContent>
      </Sidebar>
    );
  }

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="h-16 flex flex-row items-center justify-between px-3 border-b">
        <h2 className="text-xl font-bold tracking-tighter group-data-[collapsible=icon]:hidden">
          VORA
        </h2>

        <button
          onClick={toggleSidebar}
          className="p-1 hover:bg-sidebar-accent rounded-md flex items-center justify-center transition-colors"
          title="Toggle Sidebar"
        >
          <PanelLeftClose size={18} />
        </button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/home'}>
                <Link href="/home">
                  <Home />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {navData.map(item => {
              const isActive = item.items.some(sub => pathname === sub.url);

              return (
                <Collapsible
                  key={item.title}
                  className="group/collapsible"
                  defaultOpen={isActive}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        <item.icon />
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map(subItem => (
                          <SidebarMenuSubItem key={subItem.url}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={pathname === subItem.url}
                            >
                              <Link href={subItem.url}>{subItem.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
              onClick={handleLogout}
            >
              <LogOut />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

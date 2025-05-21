'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { SectionTitle } from '@/components/section-title';
import { Terminal, Bell, UserCircle, Settings, LogOut, CalendarDays, Search } from "lucide-react";
import Image from "next/image";

export default function ElementsPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [progressValue, setProgressValue] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgressValue(66), 500);
    return () => clearTimeout(timer);
  }, []);

  const DemoCard = ({ title, children, testid }: { title: string, children: React.ReactNode, testid: string }) => (
    <Card data-testid={testid} className="w-full shadow-md">
      <CardHeader>
        <CardTitle data-testid={`${testid}-title`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col items-start">
        {children}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-12">
      <SectionTitle as="h1" data-testid="elements-page-title">All UI Elements</SectionTitle>
      <p className="text-muted-foreground -mt-4 mb-8" data-testid="elements-page-description">
        A comprehensive showcase of available UI components for testing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DemoCard title="Accordion" testid="elements-accordion-card">
          <Accordion type="single" collapsible className="w-full" data-testid="accordion-element">
            <AccordionItem value="item-1" data-testid="accordion-item-1">
              <AccordionTrigger data-testid="accordion-trigger-1">Is it accessible?</AccordionTrigger>
              <AccordionContent data-testid="accordion-content-1">
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" data-testid="accordion-item-2">
              <AccordionTrigger data-testid="accordion-trigger-2">Is it styled?</AccordionTrigger>
              <AccordionContent data-testid="accordion-content-2">
                Yes. It comes with default styles that matches the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DemoCard>

        <DemoCard title="Alert" testid="elements-alert-card">
          <Alert data-testid="alert-default">
            <Terminal className="h-4 w-4" />
            <AlertTitle data-testid="alert-default-title">Heads up!</AlertTitle>
            <AlertDescription data-testid="alert-default-description">
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive" data-testid="alert-destructive">
            <Bell className="h-4 w-4" />
            <AlertTitle data-testid="alert-destructive-title">Error!</AlertTitle>
            <AlertDescription data-testid="alert-destructive-description">
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </DemoCard>

        <DemoCard title="Alert Dialog" testid="elements-alertdialog-card">
          <AlertDialog data-testid="alertdialog-element">
            <AlertDialogTrigger asChild>
              <Button variant="outline" data-testid="alertdialog-trigger">Show Dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent data-testid="alertdialog-content">
              <AlertDialogHeader>
                <AlertDialogTitle data-testid="alertdialog-title">Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription data-testid="alertdialog-description">
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel data-testid="alertdialog-cancel">Cancel</AlertDialogCancel>
                <AlertDialogAction data-testid="alertdialog-action">Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DemoCard>

        <DemoCard title="Avatar" testid="elements-avatar-card">
          <Avatar data-testid="avatar-element">
            <AvatarImage src="https://placehold.co/40x40.png" alt="@shadcn" data-ai-hint="person face" data-testid="avatar-image"/>
            <AvatarFallback data-testid="avatar-fallback">CN</AvatarFallback>
          </Avatar>
        </DemoCard>

        <DemoCard title="Badge" testid="elements-badge-card">
          <Badge data-testid="badge-default">Default</Badge>
          <Badge variant="secondary" data-testid="badge-secondary">Secondary</Badge>
          <Badge variant="outline" data-testid="badge-outline">Outline</Badge>
          <Badge variant="destructive" data-testid="badge-destructive">Destructive</Badge>
        </DemoCard>

        <DemoCard title="Button" testid="elements-button-card">
          <Button data-testid="button-demo-default">Default Button</Button>
          <Button variant="secondary" data-testid="button-demo-secondary">Secondary</Button>
          <Button variant="destructive" data-testid="button-demo-destructive">Destructive</Button>
        </DemoCard>

        <DemoCard title="Calendar" testid="elements-calendar-card">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            data-testid="calendar-element"
          />
        </DemoCard>

        <DemoCard title="Card" testid="elements-card-card">
          <Card className="w-[300px]" data-testid="card-element-demo">
            <CardHeader>
              <CardTitle data-testid="card-demo-title">Card Title</CardTitle>
              <CardDescription data-testid="card-demo-description">Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p data-testid="card-demo-content-text">This is the card content area where details are shown.</p>
            </CardContent>
            <CardFooter>
              <Button data-testid="card-demo-footer-button">Action</Button>
            </CardFooter>
          </Card>
        </DemoCard>
        
        <DemoCard title="Checkbox" testid="elements-checkbox-card">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" data-testid="checkbox-element" />
            <Label htmlFor="terms" data-testid="checkbox-label">Accept terms and conditions</Label>
          </div>
        </DemoCard>

        <DemoCard title="Dialog" testid="elements-dialog-card">
          <Dialog data-testid="dialog-element">
            <DialogTrigger asChild>
              <Button variant="outline" data-testid="dialog-trigger">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]" data-testid="dialog-content">
              <DialogHeader>
                <DialogTitle data-testid="dialog-title">Edit profile</DialogTitle>
                <DialogDescription data-testid="dialog-description">
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right" data-testid="dialog-label-name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" data-testid="dialog-input-name"/>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" data-testid="dialog-save-button">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DemoCard>

        <DemoCard title="Dropdown Menu" testid="elements-dropdownmenu-card">
          <DropdownMenu data-testid="dropdownmenu-element">
            <DropdownMenuTrigger asChild>
              <Button variant="outline" data-testid="dropdownmenu-trigger">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" data-testid="dropdownmenu-content">
              <DropdownMenuLabel data-testid="dropdownmenu-label-account">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem data-testid="dropdownmenu-item-profile"><UserCircle className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
              <DropdownMenuItem data-testid="dropdownmenu-item-settings"><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem data-testid="dropdownmenu-item-logout"><LogOut className="mr-2 h-4 w-4" />Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </DemoCard>

        <DemoCard title="Input" testid="elements-input-card">
          <Input type="email" placeholder="Email" data-testid="input-element-email" className="w-full max-w-sm"/>
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="pl-8" data-testid="input-element-search" />
          </div>
        </DemoCard>

        <DemoCard title="Label" testid="elements-label-card">
           <div className="flex items-center space-x-2">
            <Checkbox id="label-demo-checkbox" data-testid="label-demo-checkbox-input"/>
            <Label htmlFor="label-demo-checkbox" data-testid="label-element">This is a label for the checkbox.</Label>
          </div>
        </DemoCard>
        
        <DemoCard title="Menubar" testid="elements-menubar-card">
          <Menubar data-testid="menubar-element">
            <MenubarMenu>
              <MenubarTrigger data-testid="menubar-trigger-file">File</MenubarTrigger>
              <MenubarContent data-testid="menubar-content-file">
                <MenubarItem data-testid="menubar-item-new">New Tab</MenubarItem>
                <MenubarSeparator />
                <MenubarItem data-testid="menubar-item-share">Share</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger data-testid="menubar-trigger-edit">Edit</MenubarTrigger>
               <MenubarContent data-testid="menubar-content-edit">
                <MenubarItem data-testid="menubar-item-undo">Undo</MenubarItem>
                <MenubarItem data-testid="menubar-item-redo">Redo</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </DemoCard>

        <DemoCard title="Popover" testid="elements-popover-card">
          <Popover data-testid="popover-element">
            <PopoverTrigger asChild>
              <Button variant="outline" data-testid="popover-trigger">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" data-testid="popover-content">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none" data-testid="popover-title">Dimensions</h4>
                  <p className="text-sm text-muted-foreground" data-testid="popover-description">
                    Set the dimensions for the layer.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </DemoCard>

        <DemoCard title="Progress Bar" testid="elements-progress-card">
          <Progress value={progressValue} className="w-[60%]" data-testid="progress-element" />
          <p data-testid="progress-value-text">Current progress: {progressValue}%</p>
        </DemoCard>

        <DemoCard title="Radio Group" testid="elements-radiogroup-card">
          <RadioGroup defaultValue="comfortable" data-testid="radiogroup-element">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" data-testid="radiogroup-item-1"/>
              <Label htmlFor="r1" data-testid="radiogroup-label-1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" data-testid="radiogroup-item-2"/>
              <Label htmlFor="r2" data-testid="radiogroup-label-2">Comfortable</Label>
            </div>
          </RadioGroup>
        </DemoCard>

        <DemoCard title="Scroll Area" testid="elements-scrollarea-card">
          <ScrollArea className="h-32 w-48 rounded-md border" data-testid="scrollarea-element">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none" data-testid="scrollarea-title">Tags</h4>
              {Array.from({ length: 10 }).map((_, i, a) => (
                <React.Fragment key={i}>
                  <div className="text-sm" data-testid={`scrollarea-item-${i}`}>
                    Item number {i + 1}
                  </div>
                  {i < a.length - 1 && <Separator className="my-2" />}
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </DemoCard>

        <DemoCard title="Select" testid="elements-select-card">
          <Select data-testid="select-element-trigger">
            <SelectTrigger className="w-[180px]" data-testid="select-element">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent data-testid="select-content">
              <SelectItem value="light" data-testid="select-item-light">Light</SelectItem>
              <SelectItem value="dark" data-testid="select-item-dark">Dark</SelectItem>
              <SelectItem value="system" data-testid="select-item-system">System</SelectItem>
            </SelectContent>
          </Select>
        </DemoCard>

        <DemoCard title="Separator" testid="elements-separator-card">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none" data-testid="separator-text-1">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground" data-testid="separator-subtext-1">An open-source UI component library.</p>
          </div>
          <Separator className="my-4" data-testid="separator-element"/>
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div data-testid="separator-text-2">Blog</div>
            <Separator orientation="vertical" data-testid="separator-vertical"/>
            <div data-testid="separator-text-3">Docs</div>
          </div>
        </DemoCard>

        <DemoCard title="Sheet" testid="elements-sheet-card">
          <Sheet data-testid="sheet-element">
            <SheetTrigger asChild>
              <Button variant="outline" data-testid="sheet-trigger">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent data-testid="sheet-content">
              <SheetHeader>
                <SheetTitle data-testid="sheet-title">Sheet Title</SheetTitle>
                <SheetDescription data-testid="sheet-description">
                  This is a description for the sheet content.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </DemoCard>

        <DemoCard title="Skeleton" testid="elements-skeleton-card">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" data-testid="skeleton-avatar"/>
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" data-testid="skeleton-line-1"/>
              <Skeleton className="h-4 w-[200px]" data-testid="skeleton-line-2"/>
            </div>
          </div>
        </DemoCard>

        <DemoCard title="Slider" testid="elements-slider-card">
          <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" data-testid="slider-element"/>
        </DemoCard>

        <DemoCard title="Switch" testid="elements-switch-card">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" data-testid="switch-element"/>
            <Label htmlFor="airplane-mode" data-testid="switch-label">Airplane Mode</Label>
          </div>
        </DemoCard>

        <DemoCard title="Table" testid="elements-table-card">
          <Table data-testid="table-element">
            <TableHeader>
              <TableRow data-testid="table-header-row-demo">
                <TableHead data-testid="table-head-name">Name</TableHead>
                <TableHead data-testid="table-head-status">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow data-testid="table-row-1">
                <TableCell data-testid="table-cell-1-name">John Doe</TableCell>
                <TableCell data-testid="table-cell-1-status">Active</TableCell>
              </TableRow>
              <TableRow data-testid="table-row-2">
                <TableCell data-testid="table-cell-2-name">Jane Smith</TableCell>
                <TableCell data-testid="table-cell-2-status">Inactive</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DemoCard>

        <DemoCard title="Tabs" testid="elements-tabs-card">
          <Tabs defaultValue="account" className="w-[300px]" data-testid="tabs-element">
            <TabsList data-testid="tabs-list">
              <TabsTrigger value="account" data-testid="tabs-trigger-account">Account</TabsTrigger>
              <TabsTrigger value="password" data-testid="tabs-trigger-password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" data-testid="tabs-content-account">Account details here.</TabsContent>
            <TabsContent value="password" data-testid="tabs-content-password">Change password here.</TabsContent>
          </Tabs>
        </DemoCard>

        <DemoCard title="Textarea" testid="elements-textarea-card">
          <Textarea placeholder="Type your message here." data-testid="textarea-element" className="w-full max-w-sm"/>
        </DemoCard>

        <DemoCard title="Toast" testid="elements-toast-card">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <Button variant="secondary" size="sm" data-testid="toast-action-button">Undo</Button>
                ),
              })
            }}
            data-testid="toast-trigger-button"
          >
            Show Toast
          </Button>
        </DemoCard>
        
        <DemoCard title="Tooltip" testid="elements-tooltip-card">
          <TooltipProvider>
            <Tooltip data-testid="tooltip-element">
              <TooltipTrigger asChild>
                <Button variant="outline" data-testid="tooltip-trigger">
                  <CalendarDays className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent data-testid="tooltip-content">
                <p>View calendar</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </DemoCard>

        <DemoCard title="Image" testid="elements-image-card">
           <Image
            src="https://placehold.co/300x200.png"
            alt="Placeholder image for elements page"
            width={300}
            height={200}
            className="rounded-md shadow-md"
            data-testid="image-element-demo"
            data-ai-hint="geometric pattern"
          />
        </DemoCard>

      </div>
    </div>
  );
}

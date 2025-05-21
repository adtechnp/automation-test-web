'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, PlusCircle, Edit, Trash2, ChevronLeft, ChevronRight, UserPlus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Customer {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Lead';
  lastContact: string;
}

const mockCustomers: Customer[] = [
  { id: '1', name: 'Alice Wonderland', email: 'alice@example.com', status: 'Active', lastContact: '2023-10-15' },
  { id: '2', name: 'Bob The Builder', email: 'bob@example.com', status: 'Inactive', lastContact: '2023-09-01' },
  { id: '3', name: 'Charlie Chaplin', email: 'charlie@example.com', status: 'Lead', lastContact: '2023-11-01' },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com', status: 'Active', lastContact: '2023-10-28' },
  { id: '5', name: 'Edward Scissorhands', email: 'edward@example.com', status: 'Lead', lastContact: '2023-11-05' },
  { id: '6', name: 'Fiona Apple', email: 'fiona@example.com', status: 'Active', lastContact: '2023-11-10' },
  { id: '7', name: 'George Orwell', email: 'george@example.com', status: 'Inactive', lastContact: '2023-08-20' },
];

const ITEMS_PER_PAGE = 5;

export default function CrmPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCustomers = useMemo(() => {
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [customers, searchTerm]);

  const paginatedCustomers = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCustomers.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCustomers, currentPage]);

  const totalPages = Math.ceil(filteredCustomers.length / ITEMS_PER_PAGE);

  const handleAddOrEditCustomer = (customerData: Omit<Customer, 'id'> & { id?: string }) => {
    if (customerData.id) { // Edit
      setCustomers(prev => prev.map(c => c.id === customerData.id ? { ...c, ...customerData } as Customer : c));
      setEditingCustomer(null);
    } else { // Add
      const newCustomer: Customer = { ...customerData, id: String(Date.now()) } as Customer;
      setCustomers(prev => [newCustomer, ...prev]);
    }
  };

  const handleDeleteCustomer = (customerId: string) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(prev => prev.filter(c => c.id !== customerId));
    }
  };

  const CustomerForm = ({ customer, onClose }: { customer?: Customer | null, onClose: () => void }) => {
    const [formData, setFormData] = useState({
      name: customer?.name || '',
      email: customer?.email || '',
      status: customer?.status || 'Lead',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleStatusChange = (value: Customer['status']) => {
      setFormData(prev => ({ ...prev, status: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleAddOrEditCustomer({ ...formData, id: customer?.id, lastContact: new Date().toISOString().split('T')[0] });
      onClose();
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4" data-testid="customer-form">
        <div>
          <Label htmlFor="name" data-testid="label-customer-name">Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required data-testid="input-customer-name" />
        </div>
        <div>
          <Label htmlFor="email" data-testid="label-customer-email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required data-testid="input-customer-email" />
        </div>
        <div>
          <Label htmlFor="status" data-testid="label-customer-status">Status</Label>
          <Select name="status" value={formData.status} onValueChange={handleStatusChange} data-testid="select-customer-status-trigger">
            <SelectTrigger id="status" data-testid="select-customer-status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent data-testid="select-customer-status-content">
              <SelectItem value="Active" data-testid="select-customer-status-active">Active</SelectItem>
              <SelectItem value="Inactive" data-testid="select-customer-status-inactive">Inactive</SelectItem>
              <SelectItem value="Lead" data-testid="select-customer-status-lead">Lead</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onClose} data-testid="button-customer-form-cancel">Cancel</Button>
          <Button type="submit" data-testid="button-customer-form-save">Save Customer</Button>
        </DialogFooter>
      </form>
    );
  };


  return (
    <div className="space-y-8">
      <SectionTitle as="h1" data-testid="crm-page-title">Customer Management</SectionTitle>
      
      <Card data-testid="crm-controls-card">
        <CardContent className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" data-testid="search-icon" />
            <Input
              type="search"
              placeholder="Search customers..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              className="pl-8 w-full"
              data-testid="input-search-customers"
            />
          </div>
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogTrigger asChild>
              <Button data-testid="button-add-customer-dialog">
                <UserPlus className="mr-2 h-4 w-4" /> Add New Customer
              </Button>
            </DialogTrigger>
            <DialogContent data-testid="dialog-add-customer">
              <DialogHeader>
                <DialogTitle data-testid="dialog-add-customer-title">Add New Customer</DialogTitle>
                <DialogDescription data-testid="dialog-add-customer-description">
                  Fill in the details for the new customer.
                </DialogDescription>
              </DialogHeader>
              <CustomerForm onClose={() => setIsAddModalOpen(false)} />
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      <Card data-testid="crm-table-card">
        <CardHeader>
          <CardTitle data-testid="crm-table-title">Customer List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table data-testid="table-customers">
            <TableHeader>
              <TableRow data-testid="table-header-row">
                <TableHead data-testid="table-header-name">Name</TableHead>
                <TableHead data-testid="table-header-email">Email</TableHead>
                <TableHead data-testid="table-header-status">Status</TableHead>
                <TableHead data-testid="table-header-lastcontact">Last Contact</TableHead>
                <TableHead className="text-right" data-testid="table-header-actions">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedCustomers.map((customer) => (
                <TableRow key={customer.id} data-testid={`table-row-customer-${customer.id}`}>
                  <TableCell data-testid={`cell-customer-name-${customer.id}`}>{customer.name}</TableCell>
                  <TableCell data-testid={`cell-customer-email-${customer.id}`}>{customer.email}</TableCell>
                  <TableCell data-testid={`cell-customer-status-${customer.id}`}>
                     <span className={`px-2 py-1 text-xs rounded-full ${
                       customer.status === 'Active' ? 'bg-green-100 text-green-700' :
                       customer.status === 'Inactive' ? 'bg-red-100 text-red-700' :
                       'bg-yellow-100 text-yellow-700'
                     }`}>
                       {customer.status}
                     </span>
                  </TableCell>
                  <TableCell data-testid={`cell-customer-lastcontact-${customer.id}`}>{customer.lastContact}</TableCell>
                  <TableCell className="text-right space-x-2">
                     <Dialog open={editingCustomer?.id === customer.id} onOpenChange={(isOpen) => !isOpen && setEditingCustomer(null)}>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => setEditingCustomer(customer)} data-testid={`button-edit-customer-${customer.id}`}>
                          <Edit className="h-4 w-4" />
                           <span className="sr-only">Edit</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent data-testid={`dialog-edit-customer-${customer.id}`}>
                        <DialogHeader>
                          <DialogTitle data-testid={`dialog-edit-customer-title-${customer.id}`}>Edit Customer</DialogTitle>
                        </DialogHeader>
                        <CustomerForm customer={customer} onClose={() => setEditingCustomer(null)} />
                      </DialogContent>
                    </Dialog>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteCustomer(customer.id)} data-testid={`button-delete-customer-${customer.id}`}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
           {paginatedCustomers.length === 0 && (
            <p className="text-center text-muted-foreground py-8" data-testid="no-customers-message">No customers found.</p>
          )}
        </CardContent>
      </Card>
      
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4" data-testid="crm-pagination-controls">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            data-testid="button-pagination-prev"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground" data-testid="pagination-page-info">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            data-testid="button-pagination-next"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

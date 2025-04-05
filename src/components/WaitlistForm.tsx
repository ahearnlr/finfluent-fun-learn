import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

// Define the form schema
const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  howHeard: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type WaitlistFormProps = {
  buttonClassName?: string;
  children?: React.ReactNode;
};

const WaitlistForm = ({ buttonClassName, children }: WaitlistFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      howHeard: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // For development without Supabase, just show success message
      console.log('Form data:', data);
      
      // Show success message
      toast({
        title: "You're on the list!",
        description: "Thanks for joining our waitlist. We'll keep you updated!",
      });

      // Close the dialog
      setOpen(false);
      
      // Reset the form
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Something went wrong',
        description: 'Could not add you to the waitlist. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? children : (
          <Button className={buttonClassName}>
            Join the Waitlist!
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join the Finfluent Waitlist</DialogTitle>
          <DialogDescription>
            Be the first to know when our app launches! Fill out the form below to join the waitlist.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="howHeard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <FormControl>
                    <Input placeholder="Optional" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistForm; 
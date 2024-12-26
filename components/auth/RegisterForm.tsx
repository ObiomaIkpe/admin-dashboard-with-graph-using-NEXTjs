'use client'


import * as z from 'zod';
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { use } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

import { useToast } from "@/hooks/use-toast";




const formSchema = z.object({
  name: 
    z.string().min(1, {
      message: "name is required"
    })
  ,
    email: z.string().min(1, {
        message: 'Email is required'
    }).email({
        message: 'please enter a valid email'
    }),
    password: z.string().min(1, {
        message: 'password is required'
    }),
    confirmPassword: z.string().min(1, {
      message: 'confirm password is required'
  }),
})




const RegisterForm = () => {  
    // setting up the toast
    const {toast} = useToast()

    const router = useRouter()

    // the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })


    const handleSubmit =(data: z.infer<typeof formSchema>) => {
        // console.log(data)

        toast({
            title: "login successful"
        })
        router.push('/')

    }
        
    return (
        <Card>
          <CardHeader>
            <CardTitle>
              <CardDescription>
                Register
              </CardDescription>
            </CardTitle>
          </CardHeader>

          <CardContent className='space-y-2 '>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6 '>


              <FormField
  control={form.control}
  name="name"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercaase text-xs font-bold text-zinc-500 dark:text-white">Name</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text:white focus-visible:ring-offset-0" 
        placeholder="enter your name" {...field} />
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
      <FormLabel className="uppercaase text-xs font-bold text-zinc-500 dark:text-white">Email</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text:white focus-visible:ring-offset-0" 
        placeholder="enter email" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercaase text-xs font-bold text-zinc-500 dark:text-white">Password</FormLabel>
      <FormControl>
        <Input 
        type='password'
        className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text:white focus-visible:ring-offset-0" 
        placeholder="enter password" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="confirmPassword"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercaase text-xs font-bold text-zinc-500 dark:text-white">confirm Password</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text:white focus-visible:ring-offset-0" 
        placeholder="" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

      <Button className='w-full'>Register</Button>


              </form>
            </Form>
          </CardContent>
        
        </Card>
    )
}
// install form, input and textarea from shadcn

export default RegisterForm
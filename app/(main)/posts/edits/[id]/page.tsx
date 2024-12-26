'use client'


import BackButton from "@/components/BackButton"
import * as z from 'zod';
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import posts from "@/data/posts";
import React, { use } from "react";
import { Button } from "@/components/ui/button";

import { useToast } from "@/hooks/use-toast";




const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required'
    }),
    body: z.string().min(1, {
        message: 'body is required'
    }),
    author: z.string().min(1, {
        message: 'author is required'
    }),
    date: z.string().min(1, {
        message: 'date is required'
    })
})

interface PostEditPageProps {
    params: {
        id: string;

    }
}


const PostEditPage = ({params}: {params: Promise<{id: string}>}) => {   


    // setting up the toast
    const {toast} = useToast()


    const {id} = use(params)
    const post = posts.find((post) => post.id === id);   
  
    console.log(id);
    console.log(post)

    // the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || '',

        }
    })


    const handleSubmit =(data: z.infer<typeof formSchema>) => {
        // console.log(data)

        toast({
            title: 'post has been updated successfully',
            description: `updated by ${post?.author} on ${post?.date}`
        })
    }
        
    return (
        <>
        <BackButton text='back to posts' link='/posts'/>    
        <h3 className="text-2xl mb-4 ">Edit post</h3>      
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            <FormField
  control={form.control}
  name="title"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercaase text-xs font-bold text-zinc-500 dark:text-white">Title</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text:white focus-visible:ring-offset-0" 
        placeholder="enter title" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


<FormField
  control={form.control}
  name="body"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercaase text-xs font-bold text-zinc-500 dark:text-white">Body</FormLabel>
      <FormControl>
        <Textarea className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text:white focus-visible:ring-offset-0" 
        placeholder="A day as the king of the jungle (hail Mufasa!)..." {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


<FormField
  control={form.control}
  name="date"
  render={({ field }) => (
    <FormItem>
      <FormLabel className="uppercaase text-xs font-bold text-zinc-500 dark:text-white">Date</FormLabel>
      <FormControl>
        <Input className="bg-slate-100 dark:bg-slate-500 border-0 focus-visible:ring-0 text-black dark:text:white focus-visible:ring-offset-0" 
        placeholder="enter date" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

        {/* button */}

        <Button className='w-full dark:bg-slate-800 dark:text-white'>Update post</Button>
            </form>
        </Form>         
        </>
    )
}
// install form, input and textarea from shadcn

export default PostEditPage
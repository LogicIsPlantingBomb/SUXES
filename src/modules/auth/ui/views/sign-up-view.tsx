/* eslint-disable @next/next/no-img-element */
"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { OctagonAlertIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { FaGoogle, FaGithub } from "react-icons/fa"
import { useState } from "react"
import Link from "next/link"

const formSchema = z.object({
    name: z.string().min(1, {message: "Name is required"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"}),
    confirmPassword: z.string().min(1, {message: "Please confirm your password"})
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export const SignUpView = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = useState("")
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        // Handle form submission
        console.log(data)
    }

    return (
        <div className = "flex flex-col gap-6 w-[500px] ">
                <Card className="overflow-hidden p-0 w-full" >
                    <CardContent className = "grid p-0 md:grid-cols-[3fr_2fr]" >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className = "p-6 md:p-8">
                                <div className = "flex flex-col gap-4 w-full">
                                    <div className= "flex flex-col items-center text-center">
                                        <h1 className="text-xl font-bold">Create Account</h1>
                                        <p className="text-muted-foreground text-balance">
                                            Sign up to get started
                                        </p>
                                    </div>
                                    <div className="grid gap-3">
                                            <FormField 
                                            control={form.control} 
                                            name="name"
                                            render = {({field})=>(
                                                <FormItem>
                                                    <FormLabel>
                                                        Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input type="text" placeholder="John Doe"{...field}/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                                )}
                                            />
                                    </div>
                                    <div className="grid gap-3">
                                            <FormField 
                                            control={form.control} 
                                            name="email"
                                            render = {({field})=>(
                                                <FormItem>
                                                    <FormLabel>
                                                        Email
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input type="Email" placeholder="abc@example.com"{...field}/>
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                                )}
                                            />
                                    </div>
                                    <div className="grid gap-3">
                                            <FormField 
                                            control={form.control} 
                                            name="password"
                                            render = {({field})=>(
                                                <FormItem>
                                                    <FormLabel>
                                                        Password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input type="password" placeholder="********"{...field}/>
                                                    </FormControl>
                                                   <FormMessage/> 
                                                </FormItem>
                                                )}
                                            />
                                    </div>
                                    <div className="grid gap-3">
                                            <FormField 
                                            control={form.control} 
                                            name="confirmPassword"
                                            render = {({field})=>(
                                                <FormItem>
                                                    <FormLabel>
                                                        Confirm Password
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input type="password" placeholder="********"{...field}/>
                                                    </FormControl>
                                                   <FormMessage/> 
                                                </FormItem>
                                                )}
                                            />
                                    </div>
                                    {error && (
                                            <Alert className="bg-destructive/10 border-destructive/50">
                                                <OctagonAlertIcon className="h-4 w-4 text-destructive"/>
                                                <AlertTitle className="text-destructive">Error</AlertTitle>
                                                <AlertDescription className="text-destructive/90">
                                                    {error}
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                        <Button type="submit" className = "w-full">
                                            Sign up 
                                        </Button>
                                        
                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <span className="w-full border-t" />
                                            </div>
                                            <div className="relative flex justify-center text-xs uppercase">
                                                <span className="bg-background px-2 text-muted-foreground">
                                                    Or continue with
                                                </span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <Button variant="outline" type="button" className="w-full">
                                                <FaGoogle className="mr-2 h-4 w-4" />
                                                Google
                                            </Button>
                                            <Button variant="outline" type="button" className="w-full">
                                                <FaGithub className="mr-2 h-4 w-4" />
                                                GitHub
                                            </Button>
                                        </div>
                                        <div className= "text-muted-foreground text-[14px] flex flex-col justify-center items-center gap-2">
                                            <p>
                                                Already have an account? 
                                            </p>
                                            <Link href = "/sign-in" className="text-[12px] w-full">
                                                <Button className="w-full">Sign-In</Button>
                                            </Link>
                                        </div>

                                </div>
                            </form>
                        </Form>
                        <div className="bg-linear-to-br from-green-700 to-green-900 relative hidden md:flex flex-col items-center justify-center gap-y-4"> 
                            <img src="/logo.svg" alt="loading" className=" h-[92px] w-[92px]"/>
                            <div className ="text-2xl font-semibold text-white">
                                SUXES
                            </div>
                            
                        </div>
                    </CardContent>
                </Card>
                                        <div className="relative flex justify-center text-xs ">
                                                <Link  href="" className="bg-background text-[10px] px-2 text-muted-foreground">
                                                    By clicking Sign Up you are agreeing all the Terms and policies.
                                                </Link>
                                        </div>


            </div>
            
        
    )
}
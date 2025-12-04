/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
// "use client"
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { 
//   Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
// } from "@/components/ui/form"
// import { Alert, AlertTitle } from "@/components/ui/alert"

// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { OctagonAlertIcon } from "lucide-react"
// import { useForm } from "react-hook-form"

// const formSchema = z.object({
//     email: z.string().email(),
//     password: z.string().min(1,{message:"Password is required"})

// })
// export const SignInView = () => {
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues:{
//             email: "",
//             password: "",
//         }
//     })

//     return (
//         <div className = "flex flex-col gap-7 w-[400px]">
//             <Card className="overflow-hidden p-0" >
//                 <CardContent className = "grid p-0 md:grid-cols-[2fr_1fr] " >
//                     <Form {...form}>
//                         <form className = "p-6 md:p-8">
//                             <div className="flex flex-col gap-6">
//                                 <div className= "flex flex-col items-center text-center">
//                                     <h1 className="text-xl font-bold">Welcome Back</h1>
//                                     <p className="text-muted-foreground text-balance">
//                                         Login to your account
//                                     </p>
//                                 </div>
//                                 <div className="grid gap-3">
//                                         <FormField 
//                                         control={form.control} 
//                                         name="email"
//                                         render = {({field})=>(
//                                             <FormItem>
//                                                 <FormLabel>
//                                                     Email
//                                                 </FormLabel>
//                                                 <FormControl>
//                                                     <Input type="Email" placeholder="abc@example.com"{...field}/>
//                                                 </FormControl>
//                                                 <FormMessage/>
//                                             </FormItem>
//                                             )}
//                                         />
//                                 </div>
//                                 <div className="grid gap-3">
//                                         <FormField 
//                                         control={form.control} 
//                                         name="password"
//                                         render = {({field})=>(
//                                             <FormItem>
//                                                 <FormLabel>
//                                                     password
//                                                 </FormLabel>
//                                                 <FormControl>
//                                                     <Input type="password" placeholder="********"{...field}/>
//                                                 </FormControl>
//                                                <FormMessage/> 
//                                             </FormItem>
//                                             )}
//                                         />
//                                 </div>
//                                 {true && (
//                                         <Alert className="bg-destructive/10 border-none">
//                                             <OctagonAlertIcon className="h-4 w-4 !text-destructive"/>
//                                             <AlertTitle>Error</AlertTitle>
//                                         </Alert>
//                                     )}
//                                     <Button type="submit" className = "w-full">
//                                         Sign in 
//                                     </Button>
//                             </div>
//                         </form>
//                     </Form>
//                     <div className="bg-radial from-green-700 to-green-900 relative hidden md:flex flex-col items-center justify-center gap-y-4"> 
//                         <img src="/logo.svg" alt="loading" className=" h-[92px] w-[92px]"/>
//                         <div className ="text-2xl font-semibold text-white">
//                             SUXES
//                         </div>
                        
//                     </div>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }
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

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1,{message:"Password is required"})

})
export const SignInView = () => {
    const [error, setError] = useState("")
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            email: "",
            password: "",
        }
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        // Handle form submission
        console.log(data)
    }

    return (
        <div className = "flex flex-col gap-7 w-[400px]">
            <Card className="overflow-hidden p-0 w-full" >
                <CardContent className = "grid p-0 md:grid-cols-[3fr_2fr]" >
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className = "p-6 md:p-8">
                            <div className="flex flex-col gap-6">
                                <div className= "flex flex-col items-center text-center">
                                    <h1 className="text-xl font-bold">Welcome Back</h1>
                                    <p className="text-muted-foreground text-balance">
                                        Login to your account
                                    </p>
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
                                        Sign in 
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
        </div>
    )
}
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Icons } from '@/components/Icons'
import { Metadata } from "next/types"


export const metadata: Metadata = {
    title: "SignIn",
    description: 'Login to checkout your hosting.',
}
const LoginPage = () => {
    return (
        <Tabs defaultValue="signIn" className="w-full max-w-sm mx-auto ">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signIn">Sign In</TabsTrigger>
                <TabsTrigger value="signUp">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signIn">
                <Card>
                    <CardHeader>
                        <CardTitle>Sign in</CardTitle>
                        <CardDescription>
                            Choose your preferred sign in method
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className='flex items-center justify-between space-x-1 mb-6'>
                            <Button variant="outline"><Icons.Google className='h-4 w-4 mr-2' /> Google</Button>
                            <Button variant="outline"><Icons.twitter className='h-4 w-4 mr-2' /> Twitter</Button>
                            <Button variant="outline"><Icons.gitHub className='h-4 w-4 mr-2' /> Github</Button>
                        </div>
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
                        <div className="space-y-1">
                            <Label htmlFor="name">Email</Label>
                            <Input id="name" placeholder='hosting@gmail.com' />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Password</Label>
                            <Input id="username" placeholder='*********' />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Sign In</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="signUp">
                <Card>
                    <CardHeader>
                        <CardTitle>Sign up</CardTitle>
                        <CardDescription>
                            Choose your preferred sign up method
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className='flex items-center justify-between space-x-1 mb-6'>
                            <Button variant="outline"><Icons.Google className='h-4 w-4 mr-2' /> Google</Button>
                            <Button variant="outline"><Icons.twitter className='h-4 w-4 mr-2' /> Twitter</Button>
                            <Button variant="outline"><Icons.gitHub className='h-4 w-4 mr-2' /> Github</Button>
                        </div>
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
                        <div className="space-y-1">
                            <Label htmlFor="name">Email</Label>
                            <Input id="name" placeholder='hosting@gmail.com' />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="username">Password</Label>
                            <Input id="username" placeholder='*********' />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className='w-full'>Sign Up</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default LoginPage
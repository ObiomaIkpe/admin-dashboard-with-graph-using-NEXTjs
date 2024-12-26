import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="login">login</TabsTrigger>
    <TabsTrigger value="Register">Register</TabsTrigger>
  </TabsList>
  
  <TabsContent value="login">
    <LoginForm />
  </TabsContent>

  <TabsContent value="Register">
    <RegisterForm />
  </TabsContent>
</Tabs>

  )
}

export default AuthTabs
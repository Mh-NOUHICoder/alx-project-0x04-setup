// pages/test-dark-mode.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Sun, 
  Moon, 
  Star, 
  Settings, 
  User, 
  Bell, 
  Mail,
  Shield,
  Zap,
  DollarSign,
  Users,
  CreditCard,
  Activity
} from "lucide-react";

export default function TestDarkMode() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Dark Mode Test Page</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Test how all components look in both light and dark modes. 
          Toggle the dark mode button in the header to see the changes.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Profile Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              User Profile
            </CardTitle>
            <CardDescription>
              User information card with avatar and details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">JD</span>
              </div>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">Premium</Badge>
              <Badge variant="outline">Verified</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Settings
            </CardTitle>
            <CardDescription>
              Manage your application preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="notifications">Email Notifications</Label>
              <Switch id="notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="security">Two-Factor Authentication</Label>
              <Switch id="security" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="updates">Automatic Updates</Label>
              <Switch id="updates" defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Form Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>
            Test how form elements look in dark mode
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea 
              id="message" 
              placeholder="Type your message here..." 
              className="min-h-[100px]"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Card>
        <CardHeader>
          <CardTitle>Tabbed Content</CardTitle>
          <CardDescription>
            See how tabs and their content adapt to dark mode
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="space-y-4 pt-4">
              <p>Manage your account settings and preferences.</p>
              <Button>Save Changes</Button>
            </TabsContent>
            <TabsContent value="password" className="space-y-4 pt-4">
              <p>Change your password here. After saving, you'll be logged out.</p>
              <Button>Update Password</Button>
            </TabsContent>
            <TabsContent value="notifications" className="space-y-4 pt-4">
              <p>Configure how you receive notifications.</p>
              <Button>Save Preferences</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Alerts Section */}
      <div className="space-y-4">
        <Alert>
          <Bell className="h-4 w-4" />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is an informational alert. Everything is working correctly.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <Shield className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            There was a problem with your request. Please try again.
          </AlertDescription>
        </Alert>

        <Alert variant="default" className="bg-blue-50 text-blue-900 dark:bg-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800">
          <Zap className="h-4 w-4" />
          <AlertTitle>Tip</AlertTitle>
          <AlertDescription>
            Toggle the dark mode button in the header to see all components adapt!
          </AlertDescription>
        </Alert>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Sun className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Light Mode</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Clean, bright interface perfect for daytime use and well-lit environments.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Moon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Dark Mode</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Easy on the eyes, perfect for low-light conditions and reducing eye strain.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Auto Switch</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Automatically switches based on your system preferences for seamless experience.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
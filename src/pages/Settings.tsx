
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { mockUser } from "@/data/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Lock, Bell, CreditCard, Shield, HelpCircle } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>

      <Tabs defaultValue="profile" className="w-full">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar Navigation */}
          <div className="hidden lg:block w-[200px] shrink-0">
            <div className="space-y-1">
              <TabsTrigger
                value="profile"
                className="w-full justify-start px-3 py-2 h-auto font-normal text-left bg-transparent border-0 data-[state=active]:bg-primary/10 data-[state=active]:text-primary hover:bg-muted"
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className="w-full justify-start px-3 py-2 h-auto font-normal text-left bg-transparent border-0 data-[state=active]:bg-primary/10 data-[state=active]:text-primary hover:bg-muted"
              >
                <Lock className="w-4 h-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="w-full justify-start px-3 py-2 h-auto font-normal text-left bg-transparent border-0 data-[state=active]:bg-primary/10 data-[state=active]:text-primary hover:bg-muted"
              >
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="payment"
                className="w-full justify-start px-3 py-2 h-auto font-normal text-left bg-transparent border-0 data-[state=active]:bg-primary/10 data-[state=active]:text-primary hover:bg-muted"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Payment Methods
              </TabsTrigger>
              <TabsTrigger
                value="privacy"
                className="w-full justify-start px-3 py-2 h-auto font-normal text-left bg-transparent border-0 data-[state=active]:bg-primary/10 data-[state=active]:text-primary hover:bg-muted"
              >
                <Shield className="w-4 h-4 mr-2" />
                Privacy & Security
              </TabsTrigger>
              <TabsTrigger
                value="help"
                className="w-full justify-start px-3 py-2 h-auto font-normal text-left bg-transparent border-0 data-[state=active]:bg-primary/10 data-[state=active]:text-primary hover:bg-muted"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Help & Support
              </TabsTrigger>
            </div>
          </div>

          {/* Mobile Horizontal Navigation */}
          <TabsList className="flex lg:hidden mb-4 bg-muted p-1">
            <TabsTrigger value="profile" className="text-xs">Profile</TabsTrigger>
            <TabsTrigger value="account" className="text-xs">Account</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs">Notifications</TabsTrigger>
          </TabsList>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            <TabsContent value="profile" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal details and profile picture
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-20 w-20 sm:h-24 sm:w-24">
                        <AvatarImage src="/avatar.jpg" alt={mockUser.name} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {mockUser.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm" className="text-xs">Change Photo</Button>
                    </div>
                    <div className="space-y-4 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue={mockUser.name.split(' ')[0]} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue={mockUser.name.split(' ')[1] || ''} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={mockUser.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input id="phoneNumber" type="tel" placeholder="Enter your phone number" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="Tell us about yourself" />
                    <p className="text-sm text-muted-foreground">
                      This information will be displayed on your profile.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-end gap-2">
                  <Button variant="outline" className="w-full sm:w-auto">Cancel</Button>
                  <Button className="w-full sm:w-auto">Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>
                    Manage your account security and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Password</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button className="mt-2">Change Password</Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="space-y-0.5">
                          <Label htmlFor="currency">Default Currency</Label>
                          <p className="text-sm text-muted-foreground">
                            Choose your preferred currency for displaying amounts
                          </p>
                        </div>
                        <div className="w-full sm:w-[180px]">
                          <Input id="currency" defaultValue="USD" />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="space-y-0.5">
                          <Label htmlFor="language">Language</Label>
                          <p className="text-sm text-muted-foreground">
                            Choose your preferred language
                          </p>
                        </div>
                        <div className="w-full sm:w-[180px]">
                          <Input id="language" defaultValue="English" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-destructive">Danger Zone</h3>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="space-y-0.5">
                          <p className="font-medium">Delete Account</p>
                          <p className="text-sm text-muted-foreground">
                            Permanently delete your account and all your data
                          </p>
                        </div>
                        <Button variant="destructive" className="w-full sm:w-auto">Delete Account</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>
                    Customize when and how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5 flex-1 mr-4">
                          <Label htmlFor="bill-reminder">Bill Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified before bills are due
                          </p>
                        </div>
                        <Switch id="bill-reminder" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5 flex-1 mr-4">
                          <Label htmlFor="budget-alert">Budget Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when you're approaching your budget limits
                          </p>
                        </div>
                        <Switch id="budget-alert" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5 flex-1 mr-4">
                          <Label htmlFor="transaction-alert">Transaction Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified for new transactions above a certain amount
                          </p>
                        </div>
                        <Switch id="transaction-alert" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5 flex-1 mr-4">
                          <Label htmlFor="weekly-summary">Weekly Summary</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive a weekly summary of your financial activity
                          </p>
                        </div>
                        <Switch id="weekly-summary" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Push Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5 flex-1 mr-4">
                          <Label htmlFor="push-bill-reminder">Bill Reminders</Label>
                          <p className="text-sm text-muted-foreground">
                            Get push notifications before bills are due
                          </p>
                        </div>
                        <Switch id="push-bill-reminder" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5 flex-1 mr-4">
                          <Label htmlFor="push-budget-alert">Budget Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Get push notifications for budget limits
                          </p>
                        </div>
                        <Switch id="push-budget-alert" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto">Save Preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="payment" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>
                    Manage your payment methods and billing information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <CreditCard className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No payment methods configured yet.</p>
                    <Button className="mt-4">Add Payment Method</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy & Security</CardTitle>
                  <CardDescription>
                    Control your privacy settings and security preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <Shield className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Privacy settings will be available soon.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="help" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Help & Support</CardTitle>
                  <CardDescription>
                    Get help and contact our support team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Support documentation and contact options coming soon.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Settings;

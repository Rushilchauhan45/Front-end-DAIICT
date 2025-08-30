import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, ArrowLeft, Droplets } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  countryCode: string;
  contact: string;
  email: string;
  password: string;
  confirmPassword: string;
  otp: string;
  role: string;
}

interface FormErrors {
  [key: string]: string;
}

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const Navigation = () => {
  const [loginOpen, setLoginOpen] = React.useState(false);
  const [signupOpen, setSignupOpen] = React.useState(false);
  const [signupStep, setSignupStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    countryCode: '+91',
    contact: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
    role: ''
  });
  const [errors, setErrors] = React.useState<FormErrors>({});

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateStep1 = () => {
    const newErrors: FormErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.contact) newErrors.contact = 'Contact is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must contain 6+ characters, 1 capital letter, 1 number, and 1 special character';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="logo-container">
            <div className="logo-icon">
              <Droplets className="h-5 w-5" />
            </div>
            <span className="logo-text">
              Hydrochain
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <a href="#home" className="nav-link text-muted-foreground">
              Home
            </a>
            <a href="#dashboard" className="nav-link text-muted-foreground">
              Dashboard
            </a>
            <a href="#smart-contracts" className="nav-link text-muted-foreground">
              Smart Contracts
            </a>
            <a href="#impact" className="nav-link text-muted-foreground">
              Impact
            </a>
            <a href="#security" className="nav-link text-muted-foreground">
              Security
            </a>
          </div>
          
          <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="border-primary-green text-primary-green hover:bg-primary-green hover:text-primary-foreground transition-all duration-200 font-medium"
              >
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] simple-card border-border/30">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold text-center mb-4 text-foreground">
                  Login
                </DialogTitle>
              </DialogHeader>
              <Card className="simple-card space-y-6 fade-in border-border/20">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="font-medium text-foreground">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-input border-border focus:border-primary-green focus:ring-primary-green/20 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="font-medium text-foreground">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-full bg-input border-border focus:border-primary-green focus:ring-primary-green/20 transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <Button className="w-full btn-primary font-medium">
                    Sign In
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <button
                      className="text-primary-green hover:text-primary-blue transition-colors duration-200 font-medium"
                      onClick={() => {
                        setLoginOpen(false);
                        setSignupOpen(true);
                        setSignupStep(1);
                      }}
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </Card>
            </DialogContent>
          </Dialog>

          <Dialog open={signupOpen} onOpenChange={setSignupOpen}>
            <DialogContent className="sm:max-w-[425px] simple-card border-border/30">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  {signupStep > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSignupStep(signupStep - 1)}
                      className="p-2 hover:bg-surface-elevated hover:text-primary-green transition-all duration-200"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  )}
                  <DialogTitle className="text-2xl font-semibold text-center flex-1 text-foreground">
                    Sign Up - Step {signupStep}/3
                  </DialogTitle>
                  {signupStep > 1 && <div className="w-8"></div>}
                </div>
              </DialogHeader>
              <Card className="simple-card space-y-6 fade-in border-border/20">
                {signupStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="font-medium text-foreground">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          placeholder="John"
                          className="w-full bg-input border-border focus:border-primary-green focus:ring-primary-green/20 transition-all duration-200"
                        />
                        {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="font-medium text-foreground">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          placeholder="Doe"
                          className="w-full bg-input/50 border-border/50 focus:border-neon-green/50 focus:ring-neon-green/20 transition-all duration-300"
                        />
                        {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="countryCode">Code</Label>
                        <Select value={formData.countryCode} onValueChange={(value) => handleInputChange('countryCode', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="+91" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+91">+91</SelectItem>
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-2 space-y-2">
                        <Label htmlFor="contact">Contact Number</Label>
                        <Input
                          id="contact"
                          value={formData.contact}
                          onChange={(e) => handleInputChange('contact', e.target.value)}
                          placeholder="Phone number"
                          className="w-full"
                        />
                        {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className="w-full"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        placeholder="Create a strong password"
                        className="w-full"
                      />
                      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        placeholder="Confirm your password"
                        className="w-full"
                      />
                      {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>
                  </div>
                )}

                {signupStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <p className="text-muted-foreground">Enter the verification code sent to your email</p>
                      <InputOTP maxLength={6} value={formData.otp} onChange={(value) => handleInputChange('otp', value)}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                      {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
                    </div>
                  </div>
                )}

                {signupStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label>Select Role</Label>
                      <RadioGroup
                        value={formData.role}
                        onValueChange={(value) => handleInputChange('role', value)}
                        className="grid grid-cols-2 gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="producer" id="producer" />
                          <Label htmlFor="producer">Producer</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bank" id="bank" />
                          <Label htmlFor="bank">Bank</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="auditor" id="auditor" />
                          <Label htmlFor="auditor">Auditor</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="government" id="government" />
                          <Label htmlFor="government">Government</Label>
                        </div>
                      </RadioGroup>
                      {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
                    </div>
                  </div>
                )}

                <div className="flex flex-col space-y-4">
                  {signupStep === 3 ? (
                    <Button
                      className="w-full btn-primary font-medium"
                      onClick={() => {
                        // Handle final submission
                        console.log('Final submission:', formData);
                      }}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      className="w-full btn-primary font-medium"
                      onClick={() => {
                        if (signupStep === 1 && validateStep1()) {
                          setSignupStep(2);
                        } else if (signupStep === 2 && formData.otp) {
                          setSignupStep(3);
                        }
                      }}
                    >
                      Next Step <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                  
                  {signupStep === 1 && (
                    <div className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <button
                        className="text-primary-green hover:text-primary-blue transition-colors duration-200 font-medium"
                        onClick={() => {
                          setSignupOpen(false);
                          setLoginOpen(true);
                        }}
                      >
                        Login
                      </button>
                    </div>
                  )}
                </div>
              </Card>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

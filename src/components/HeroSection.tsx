
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, TrendingUp, Users, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 fade-in text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Hydrochain
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-green font-semibold">
                Smart Subsidy Disbursement Platform
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Automating Green Hydrogen Subsidies with Blockchain Transparency and Real-time Monitoring
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-primary hover-lift w-full sm:w-auto">
                Launch Platform
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary hover-lift w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center card-hover p-4 sm:p-0">
                <div className="text-xl sm:text-2xl font-bold text-primary-green">$2.5B</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Total Subsidies</div>
              </div>
              <div className="text-center card-hover p-4 sm:p-0">
                <div className="text-xl sm:text-2xl font-bold text-primary-green">147</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div className="text-center card-hover p-4 sm:p-0">
                <div className="text-xl sm:text-2xl font-bold text-primary-green">99.9%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Transparency</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual Card */}
          <div className="relative slide-in mt-8 lg:mt-0">
            <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden">
              {/* Clean Smart Contract Visualization */}
              <Card className="simple-card p-4 sm:p-6 h-full">
                <div className="space-y-3 sm:space-y-4 h-full flex flex-col justify-center">
                  <div className="text-center mb-4 sm:mb-6">
                    <TrendingUp className="h-8 w-8 sm:h-12 sm:w-12 text-primary-green mx-auto mb-2" />
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">Smart Contract Flow</h3>
                  </div>
                  
                  {/* Flow Steps */}
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { icon: <Users className="h-4 w-4 sm:h-6 sm:w-6" />, text: "Government approves subsidy" },
                      { icon: <Zap className="h-4 w-4 sm:h-6 sm:w-6" />, text: "Smart contract deploys" },
                      { icon: <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6" />, text: "Milestones auto-verified" },
                      { icon: <ArrowRight className="h-4 w-4 sm:h-6 sm:w-6" />, text: "Funds released automatically" }
                    ].map((step, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 simple-card hover-lift"
                      >
                        <div className="text-primary-green flex-shrink-0">
                          {step.icon}
                        </div>
                        <span className="text-xs sm:text-sm text-foreground">{step.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

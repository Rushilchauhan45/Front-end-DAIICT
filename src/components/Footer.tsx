
import React from 'react';
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-neon-green" />
              <span className="text-xl font-bold text-foreground">Hydrochain</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Automating Green Hydrogen Subsidies with Blockchain Transparency
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-neon-green">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-neon-green">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-neon-green">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-neon-green">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Platform</h4>
            <div className="space-y-2 text-sm">
              <a href="#dashboard" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Dashboard
              </a>
              <a href="#smart-contracts" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Smart Contracts
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                API Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Developer Tools
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Whitepaper
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Case Studies
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Support Center
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                About Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Careers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-neon-green transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Hydrochain. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with ⚡ for the future of green energy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

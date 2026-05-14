import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Mail, Lock, Chrome } from "lucide-react";
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin(email);
      toast.success(isSignUp ? "Account created successfully!" : "Welcome back!");
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin("google_user@gmail.com");
      toast.success("Signed in with Google");
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-zinc-950 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-center text-red-600 tracking-tighter">
            TAYO63MEDIA
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-4">
          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full h-12 bg-white/5 border-white/10 hover:bg-white/10 text-white flex items-center justify-center gap-3 font-semibold"
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <Chrome size={20} className="text-red-500" />
              Continue with Google
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-zinc-950 px-2 text-gray-500 font-bold tracking-widest">Or continue with</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-500" size={18} />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com"
                    className="pl-10 h-12 bg-white/5 border-white/10 focus:border-red-600 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-500" size={18} />
                  <Input 
                    id="password" 
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 h-12 bg-white/5 border-white/10 focus:border-red-600 transition-colors"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  isSignUp ? "Create Account" : "Sign In"
                )}
              </Button>
            </form>
          </div>

          <div className="text-center text-sm text-gray-400">
            {isSignUp ? (
              <p>Already have an account? <button onClick={() => setIsSignUp(false)} className="text-white hover:underline font-bold">Sign In</button></p>
            ) : (
              <p>New to Tayo63media? <button onClick={() => setIsSignUp(true)} className="text-white hover:underline font-bold">Sign up now</button></p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
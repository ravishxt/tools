import {
  // Star,
  Palette,
  // Github,
  // Heart,
  // GitFork,
  // Scale,
  // ExternalLink,
  // Coffee,
} from "lucide-react";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

export default function Footer() {
  return (
    <>
      {/* Buy Me a Coffee */}
      {/* <div className="flex justify-center py-8">
        <Button
          variant="outline"
          className="flex items-center space-x-2 border-yellow-300 bg-yellow-50 text-yellow-800 hover:border-yellow-400 hover:bg-yellow-100 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200 dark:hover:bg-yellow-900"
          onClick={() => window.open("https://coff.ee/ravishxt", "_blank")}
        >
          <Coffee className="h-4 w-4" />
          <span>Buy me a coffee</span>
          <ExternalLink className="h-3 w-3" />
        </Button>
      </div> */}

      {/* Footer */}
      <div className="rounded-lg border-t pb-4 pt-8 text-center md:pb-0">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">More Tools Coming Soon</h3>
          <p className="text-muted-foreground">
            We&apos;re constantly adding new developer utilities. Stay tuned for
            more powerful tools!
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <Palette className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-muted-foreground">
              Built with modern design principles
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

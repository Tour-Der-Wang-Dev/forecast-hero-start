
import { Card, CardContent } from "@/components/ui/card";

interface FooterProps {
  contact: string;
  copyright: string;
}

const Footer = ({ contact, copyright }: FooterProps) => {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <p className="mt-2 text-sm text-muted-foreground">{contact}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{copyright}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  );
};

export default Footer;


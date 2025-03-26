import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary py-12 border-t border-gray-800">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SAGE</h3>
            <p className="text-gray-400">
              Traditional Asset Management for Crypto
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">sage@email.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-accent">
                Terms of Use
              </Link>
              <Link href="/disclaimer" className="block text-gray-400 hover:text-accent">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © {new Date().getFullYear()} SAGE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

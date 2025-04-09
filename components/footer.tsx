import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#004d40] to-[#00695c] text-white overflow-hidden text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {/* Political Guides */}
    <div>
      <h3 className="text-lg font-semibold mb-4 border-b border-ng-green pb-2">Political Guides</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/learn/parties" className="text-white hover:text-ng-green">Political Parties</Link></li>
        <li><Link href="/learn/electoral-system" className="text-white hover:text-ng-green">Electoral System</Link></li>
        <li><Link href="/learn/voting-process" className="text-white hover:text-ng-green">Voting Process</Link></li>
        <li><Link href="/learn/democracy" className="text-white hover:text-ng-green">Nigerian Democracy</Link></li>
      </ul>
    </div>

    {/* Political Movements */}
    <div>
      <h3 className="text-lg font-semibold mb-4 border-b border-ng-green pb-2">Political Movements</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/movements/independence" className="text-white hover:text-ng-green">Independence Movement</Link></li>
        <li><Link href="/movements/pro-democracy" className="text-white hover:text-ng-green">Pro-Democracy Movement</Link></li>
        <li><Link href="/movements/reform" className="text-white hover:text-ng-green">Reform Movements</Link></li>
        <li><Link href="/movements/civil-society" className="text-white hover:text-ng-green">Civil Society Organizations</Link></li>
      </ul>
    </div>

    {/* Political Parties */}
    <div>
      <h3 className="text-lg font-semibold mb-4 border-b border-ng-green pb-2">Political Parties</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/parties/apc" className="text-white hover:text-ng-green">All Progressives Congress</Link></li>
        <li><Link href="/parties/pdp" className="text-white hover:text-ng-green">People's Democratic Party</Link></li>
        <li><Link href="/parties/lp" className="text-white hover:text-ng-green">Labour Party</Link></li>
        <li><Link href="/parties/others" className="text-white hover:text-ng-green">Other Parties</Link></li>
      </ul>
    </div>

    {/* About */}
    <div>
      <h3 className="text-lg font-semibold mb-4 border-b border-ng-green pb-2">About</h3>
      <ul className="space-y-2 text-sm">
        <li><Link href="/about" className="text-white hover:text-ng-green">About Us</Link></li>
        <li><Link href="/contact" className="text-white hover:text-ng-green">Contact</Link></li>
        <li><Link href="/privacy" className="text-white hover:text-ng-green">Privacy Policy</Link></li>
        <li><Link href="/terms" className="text-white hover:text-ng-green">Terms of Service</Link></li>
      </ul>
    </div>
  </div>

  <div className="mt-12 border-t border-ng-green pt-6 text-center text-xs text-gray-400">
    © {new Date().getFullYear()} Praise Ibe. All rights reserved.
  </div>
</div>

    </footer>
  );
}

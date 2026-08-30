import Link from "next/link";
import { ArrowLeft, ArrowUp } from "lucide-react";

export function BackToHome({ className = "" }: { className?: string }) {
  return (
    <div className={`page-top-nav ${className}`.trim()}>
      <Link className="page-nav-link" href="/">
        <ArrowLeft size={15} /> Back to home
      </Link>
    </div>
  );
}

export function BackToTop({ className = "" }: { className?: string }) {
  return (
    <div className={`page-bottom-nav ${className}`.trim()}>
      <a className="page-nav-link page-nav-link-top" href="#top">
        Back to top <ArrowUp size={15} />
      </a>
    </div>
  );
}

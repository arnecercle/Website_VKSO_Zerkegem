"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, type NavItem } from "@/data/navigation";

function NavLink({
  item,
  depth = 0,
  onNavClick,
}: {
  item: NavItem;
  depth?: number;
  onNavClick?: () => void;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || (item.href && pathname.startsWith(item.href) && item.href !== "/");

  if (hasChildren) {
    return (
      <li>
        <div className="flex items-center justify-between">
          {item.href ? (
            <Link
              href={item.href}
              onClick={onNavClick}
              className={`block flex-1 px-4 py-3 text-[16px] leading-[3] font-archivo ${
                depth === 0 ? "text-white" : "text-white/80"
              } hover:opacity-80`}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`block flex-1 px-4 py-3 text-[16px] leading-[3] font-archivo ${
                depth === 0 ? "text-white" : "text-white/80"
              }`}
            >
              {item.label}
            </span>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="px-4 py-3 text-white"
            aria-label={`${open ? "Sluit" : "Open"} submenu voor ${item.label}`}
          >
            <span
              className={`block h-2 w-2 border-r-2 border-b-2 border-white transition-transform ${
                open ? "rotate-[225deg] translate-y-0" : "rotate-45 -translate-y-1"
              }`}
            />
          </button>
        </div>
        {open && item.children && (
          <ul className={depth === 0 ? "bg-black/20" : ""}>
            {item.children.map((child) => (
              <NavLink key={child.label} item={child} depth={depth + 1} onNavClick={onNavClick} />
            ))}
          </ul>
        )}
      </li>
    );
  }

  const isExternal = item.href?.startsWith("http");

  return (
    <li>
      {isExternal ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavClick}
          className={`block px-4 py-3 text-[16px] leading-[3] font-archivo ${
            depth === 0 ? "text-white" : "text-white/80"
          } hover:opacity-80`}
        >
          {item.label}
        </a>
      ) : (
        <Link
          href={item.href || "#"}
          onClick={onNavClick}
          className={`block px-4 py-3 text-[16px] leading-[3] font-archivo ${
            isActive && depth === 0 ? "font-bold" : ""
          } ${depth === 0 ? "text-white" : "text-white/80"} hover:opacity-80`}
        >
          {item.label}
        </Link>
      )}
    </li>
  );
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile header */}
      <div className="sm:hidden">
        <header
          className="flex items-center justify-between px-4"
          style={{ backgroundColor: "rgba(4,4,4,1)", minHeight: "56px" }}
        >
          <Link href="/">
            <img
              src="/images/logo%20zerkegem___serialized2.png"
              alt="V.K.S.O. Zerkegem"
              className="h-[29px] w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1"
            aria-label="Menu wisselen"
          >
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
            <span className="block h-[2px] w-5 bg-white" />
          </button>
        </header>
        {mobileOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <nav
              className="fixed right-0 top-0 z-50 h-full w-72 overflow-y-auto"
              style={{ backgroundColor: "rgba(4,4,4,1)" }}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-2xl"
                  aria-label="Sluit menu"
                >
                  &times;
                </button>
              </div>
              <ul>
                {navigation.map((item) => (
                  <NavLink
                    key={item.label}
                    item={item}
                    onNavClick={() => setMobileOpen(false)}
                  />
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>

      {/* Desktop header */}
      <div
        className="hidden sm:block"
        style={{ backgroundColor: "rgba(4,4,4,1)", minHeight: "98px" }}
      >
        <div className="mx-auto flex max-w-[1430px] items-center px-4" style={{ minHeight: "98px" }}>
          <Link href="/" className="mr-8 shrink-0">
            <img
              src="/images/logo%20zerkegem___serialized2.png"
              alt="V.K.S.O. Zerkegem"
              className="h-[60px] w-auto"
            />
          </Link>
          <nav className="flex-1">
            <ul className="flex items-center justify-center gap-1">
              {navigation.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

function NavItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href || (item.href && pathname.startsWith(item.href) && item.href !== "/");

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {item.href?.startsWith("http") ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`block px-3 py-2 text-white font-archivo text-[16px] leading-[3] hover:opacity-80 ${
            isActive ? "font-bold" : ""
          }`}
        >
          {item.label}
        </a>
      ) : (
        <Link
          href={item.href || "#"}
          className={`block px-3 py-2 text-white font-archivo text-[16px] leading-[3] hover:opacity-80 ${
            isActive ? "font-bold" : ""
          }`}
        >
          {item.label}
        </Link>
      )}
      {hasChildren && (
        <ul
          className={`absolute left-0 top-full z-50 min-w-[200px] bg-[#040404] py-2 shadow-lg transition-opacity ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {item.children!.map((child) => (
            <SubNavItem key={child.label} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function SubNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = pathname === item.href;

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href || "#"}
        className={`block px-4 py-2 text-white/80 font-archivo text-[15px] hover:bg-white/10 hover:text-white ${
          isActive ? "font-bold text-white" : ""
        }`}
      >
        {item.label}
      </Link>
      {hasChildren && (
        <ul
          className={`absolute left-full top-0 z-50 min-w-[180px] bg-[#040404] py-2 shadow-lg transition-opacity ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {item.children!.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href || "#"}
                className={`block px-4 py-2 text-white/80 font-archivo text-[15px] hover:bg-white/10 hover:text-white ${
                  pathname === child.href ? "font-bold text-white" : ""
                }`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

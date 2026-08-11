import {
  Bell,
  FileText,
  Handshake,
  IndianRupee,
  LayoutDashboard,
  LogOut,
  ReceiptText,
  Search,
  Users2,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";
import { useAuth } from "@/lib/auth";
import { cn } from "@/lib/cn";

const navItems = [
  { to: "/crm", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/crm/requirements", label: "Requirements", icon: FileText },
  { to: "/crm/customers", label: "Customers", icon: Users2 },
  { to: "/crm/vendors", label: "Vendors", icon: Handshake },
  { to: "/crm/orders", label: "Orders", icon: IndianRupee },
  { to: "/crm/invoices", label: "Invoices", icon: ReceiptText },
];

export function CrmLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-ink-950">
      {/* Sidebar (desktop) */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-ink-200/70 bg-surface-soft/60 lg:flex dark:border-ink-800 dark:bg-ink-900/30">
        <div className="flex h-[4.5rem] items-center border-b border-ink-200/70 px-6 dark:border-ink-800">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <Logo size={30} />
          </Link>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
          <p className="mb-2 px-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-400 dark:text-ink-500">
            CRM
          </p>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all",
                    isActive
                      ? "bg-gradient-to-r from-brand-600/10 to-accent-500/10 text-brand-700 shadow-[inset_0_0_0_1px_rgb(37_99_235/0.15)] dark:text-accent-300"
                      : "text-ink-600 hover:bg-ink-900/5 hover:text-ink-900 dark:text-ink-300 dark:hover:bg-white/5 dark:hover:text-white",
                  )
                }
              >
                <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="border-t border-ink-200/70 p-4 dark:border-ink-800">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-600 transition-colors hover:bg-red-500/10 hover:text-red-600 dark:text-ink-300 dark:hover:text-red-400"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-72 flex-col border-r border-ink-200/70 bg-white dark:border-ink-800 dark:bg-ink-950">
            <div className="flex h-[4.5rem] items-center justify-between border-b border-ink-200/70 px-5 dark:border-ink-800">
              <Logo size={30} />
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ink-200 text-ink-700 dark:border-ink-700 dark:text-ink-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={() => setSidebarOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium",
                        isActive
                          ? "bg-brand-600/10 text-brand-700 dark:text-accent-300"
                          : "text-ink-600 hover:bg-ink-900/5 dark:text-ink-300",
                      )
                    }
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>
            <div className="border-t border-ink-200/70 p-4 dark:border-ink-800">
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-600 hover:bg-red-500/10 hover:text-red-600 dark:text-ink-300"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-[4.5rem] items-center justify-between gap-4 border-b border-ink-200/70 bg-white/70 px-5 backdrop-blur-xl sm:px-8 dark:border-ink-800 dark:bg-ink-950/70">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ink-200 text-ink-700 lg:hidden dark:border-ink-700 dark:text-ink-200"
            >
              <LayoutDashboard className="h-4 w-4" />
            </button>
            <div className="hidden items-center gap-2 rounded-xl border border-ink-200/70 bg-surface-soft px-3.5 py-2 sm:flex dark:border-ink-800 dark:bg-ink-900/50">
              <Search className="h-3.5 w-3.5 text-ink-400" />
              <input
                placeholder="Search requirements, customers…"
                className="w-56 bg-transparent text-sm text-ink-700 outline-none placeholder:text-ink-400 dark:text-ink-200"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Notifications"
              className="relative inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-colors hover:border-brand-500 dark:border-ink-700 dark:text-ink-300"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-600 ring-2 ring-white dark:ring-ink-950" />
            </button>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 font-display text-sm font-semibold text-white">
                {(user?.name ?? "A").charAt(0)}
              </span>
              <div className="hidden sm:block">
                <p className="font-display text-sm font-semibold leading-none text-ink-900 dark:text-white">
                  {user?.name ?? "Admin"}
                </p>
                <p className="mt-0.5 text-[0.65rem] text-ink-400 dark:text-ink-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-5 py-8 sm:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

import Navbar from "@/components/dashboard/navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";
import { ReactNode } from "react";

type DashboardLayoutProps = {
    children: ReactNode;
};
export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <Navbar />
                {children}
            </div>
        </div>
    );
}

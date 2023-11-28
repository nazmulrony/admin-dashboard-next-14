import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
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

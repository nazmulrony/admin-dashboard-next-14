import Footer from "@/components/dashboard/footer";
import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import { ReactNode } from "react";

type DashboardLayoutProps = {
    children: ReactNode;
};
export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex">
            <div className="flex-1 bg-bgSoft p-5 min-h-screen">
                <Sidebar />
            </div>
            <div className="flex-[4] p-5">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}

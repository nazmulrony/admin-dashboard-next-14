import Card from "@/components/dashboard/card";
import Chart from "@/components/dashboard/chart";
import RightBar from "@/components/dashboard/rightBar";
import Transactions from "@/components/dashboard/transactions";

export default function Dashboard() {
    return (
        <div className="flex gap-5  mt-5">
            <div className="flex flex-[3] flex-col gap-5 ">
                <div className="flex justify-between gap-5">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className="flex-1">
                <RightBar />
            </div>
        </div>
    );
}

import {
    Building2,
    Users,
    MessageCircle,
    Phone,
} from "lucide-react";

import {
    useEffect,
    useState,
} from "react";

import { useSelector } from "react-redux";

import WelcomeBanner from "../components/WelcomeBanner";
import StatCard from "../components/StatCard";

import {
    getDashboardStats,
} from "../services/adminDashboard.service";

function Dashboard() {
    const { accessToken } =
        useSelector(
            (state) => state.auth
        );

    const [stats, setStats] =
        useState({
            properties: 0,
            users: 0,
            inquiries: 0,
            leads: 0,
        });

    useEffect(() => {
        const fetchData =
            async () => {
                try {
                    const response =
                        await getDashboardStats(
                            accessToken
                        );

                    setStats(
                        response.data.data
                    );
                } catch (err) {
                    console.log(err);
                }
            };

        if (accessToken) {
            fetchData();
        }
    }, [accessToken]);

    return (
        <div className="space-y-6 md:space-y-8">

            <WelcomeBanner />

            {/* Heading */}

            <div>

                <h2 className="
text-2xl
md:text-4xl
font-black
text-[#071B3B]
">
                    Business Overview
                </h2>

                <p className="text-sm md:text-base text-gray-500 mt-2">
                    Monitor your entire business performance in real time.
                </p>

            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

                <StatCard
                    title="Properties"
                    value={stats.properties}
                    icon={<Building2 />}
                    color="bg-blue-500"
                    change="+14%"
                    positive={true}
                />

                <StatCard
                    title="Users"
                    value={stats.users}
                    icon={<Users />}
                    color="bg-green-500"
                    change="+9%"
                    positive={true}
                />

                <StatCard
                    title="Inquiries"
                    value={stats.inquiries}
                    icon={<MessageCircle />}
                    color="bg-orange-500"
                    change="+22%"
                    positive={true}
                />

                <StatCard
                    title="Leads"
                    value={stats.leads}
                    icon={<Phone />}
                    color="bg-purple-500"
                    change="-3%"
                    positive={false}
                />

            </div>

        </div>
    );
}

export default Dashboard;
import React from "react";
import { Link } from "react-router-dom";
// import { Card, CardContent } from "@/components/ui/card";
// import { Bar } from "react-chartjs-2";

const Dashboard = () => {
  const data = {
    labels: ["Shopping", "Home Decor", "Garden", "Car", "YouTube"],
    datasets: [
      {
        label: "Total Spend",
        data: [2000, 6000, 1500, 2500, 7000],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Budget",
        data: [2300, 3800, 2000, 3000, 7500],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card>
          <CardContent>
            <p className="text-lg">Total Budget</p>
            <h2 className="text-2xl font-bold">$15,100</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-lg">Total Spend</p>
            <h2 className="text-2xl font-bold">$4,830</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-lg">No. of Budgets</p>
            <h2 className="text-2xl font-bold">5</h2>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Activity</h2>
        <Bar data={data} />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Latest Budgets</h2>
        <div className="bg-white p-4 shadow rounded">
          <p>Shopping - $2300</p>
          <p>Home Decor - $3800</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

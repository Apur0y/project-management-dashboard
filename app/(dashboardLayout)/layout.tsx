import Sidebar from "@/components/Sidebar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div className="flex">
        <div className="w-64">

        <Sidebar/>
        </div>
        <div className="flex-1">

                {children}
        </div>
      </div>

  );
}

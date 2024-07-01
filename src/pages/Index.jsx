import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        <h1 className="text-3xl text-center">Finance Dashboard</h1>
        <p className="text-center">
          Welcome to your finance tracking dashboard.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Income</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">$0.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">$0.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">$0.00</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Index;
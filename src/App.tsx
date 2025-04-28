import Button from "./components/Button";

export default function App() {
  return (
    <main className="m-4">
      <h1 className="text-4xl mb-4">Reusable Components</h1>
      <div className="space-x-4 space-y-4">
        <Button
          id="btn1"
          onClick={() => {
            alert("clicked");
          }}
        >
          My btn
        </Button>
        <Button variant="secondary">Click</Button>
        <Button variant="danger">Click</Button>
        <Button size="md">Click</Button>
        <Button size="sm">Click</Button>
        <Button size="lg">Click</Button>
      </div>
    </main>
  );
}

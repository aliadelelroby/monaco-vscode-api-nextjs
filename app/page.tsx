import { DevEditor } from "./components/DevEditor";

const initialTsxValue = `import React from "react";

type Props = {
  name: string;
};

export default function HelloWorld({ name }: Props) {
  return <div>Hello, {name}!</div>;
}
`;

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-background pt-16">
      <div className="w-full max-w-2xl h-[500px] bg-white dark:bg-neutral-900 rounded-lg shadow-md flex flex-col">
        <div className="flex items-center h-8 px-3 space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex-1 pt-8">
          <DevEditor initialValue={initialTsxValue} language="typescript" />
        </div>
      </div>
    </main>
  );
}

import Workspace from '@/components/editor/Workspace';

export default function ProblemPage({ params }) {
  return (
    // We subtract 64px (header height) to ensure no scrollbar on the main page
    <div className="h-[calc(100vh-64px)] w-full overflow-hidden bg-[#0f0f0f] text-white">
      <Workspace problemId={params.id} />
    </div>
  );
}
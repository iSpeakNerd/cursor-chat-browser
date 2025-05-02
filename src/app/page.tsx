import { WorkspaceList } from "@/components/workspace-list"

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Workspaces</h1>
      <WorkspaceList />
    </div>
  )
} 
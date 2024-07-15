import { DashboardShell } from "@/components/dashboard/Shell"
import { CardSkeleton } from "@/components/dashboard/CardSkeleton"
import { Skeleton } from "@/components/atoms/Skeleton"

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <Skeleton className="h-8 w-3/5" />
      <Skeleton className="h-4 w-2/5" />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
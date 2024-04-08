import { redirect } from 'next/navigation'
import { authOptions } from '@/utils/auth'
import { getCurrentUser } from '@/utils/session'
// import { EmptyPlaceholder } from "@/components/empty-placeholder"
// import { DashboardHeader } from "@/components/header"
// import { PostCreateButton } from "@/components/post-create-button"
// import { PostItem } from "@/components/post-item"
// import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <main>
      już wkrótce...
    </main>
    // <DashboardShell>
    //   <DashboardHeader heading="Posts" text="Create and manage posts.">
    //     <PostCreateButton />
    //   </DashboardHeader>
    //   <div>
    //     {posts?.length ? (
    //       <div className="divide-y divide-border rounded-md border">
    //         {posts.map((post) => (
    //           <PostItem key={post.id} post={post} />
    //         ))}
    //       </div>
    //     ) : (
    //       <EmptyPlaceholder>
    //         <EmptyPlaceholder.Icon name="post" />
    //         <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
    //         <EmptyPlaceholder.Description>
    //           You don&apos;t have any posts yet. Start creating content.
    //         </EmptyPlaceholder.Description>
    //         <PostCreateButton variant="outline" />
    //       </EmptyPlaceholder>
    //     )}
    //   </div>
    // </DashboardShell>
  )
}

'use client';

import { useSession } from "next-auth/react"

export default function LoginUserInfo() {
    const { data: session } = useSession();
    console.log(session?.user);
    return (
      <div className="hidden md:block text-sm bg-amber-200 rounded-md p-3">
        <div className="h-[48px]">
            ID： {session?.user?.id}
        </div>
        <div className="h-[48px]">
            ユーザ名： {session?.user?.name}
        </div>
      </div>
    )
}
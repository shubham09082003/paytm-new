"use client"
import prisma from "@repo/db/client";
import { useSession } from "next-auth/react";



export default async function DashboardPage() {
    const session = useSession();
    if (!session.data?.user) {
        return {
            message: "Unauthenticated request"
        }
    }
    

    
    return <div>
        <div>
            Good AfterNoon, User
        </div>
    </div>
}
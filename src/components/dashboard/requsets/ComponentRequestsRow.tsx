"use client"

import { useState } from "react"
import { aproveUserToCompany, deleteRequest } from "@/actions/company"
import { useTranslations } from "next-intl"
import { LuCheck, LuLoaderCircle, LuTrash2 } from "react-icons/lu"

import { Button } from "@/components/ui/Button"
import { TableCell, TableRow } from "@/components/ui/Table"
import { toast } from "@/components/ui/UseToast"

import { CompanyRequest } from "./ComponentRequestsTable"

type status = "aprove" | "delete" | false
export function UserRow({ userProps }: { userProps: CompanyRequest }) {
  const t = useTranslations("dashboardTable")
  const [loading, setLoading] = useState<status>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const user = userProps.user

  const handleDeleteRequestWithId = async () => {
    setLoading("delete")
    setDisabled(true)
    const result = await deleteRequest(userProps.id)
    if (result.success) {
      toast({
        description: t(result.message),
        variant: "success",
      })
    } else if (result.error) {
      toast({
        description: t(result.message),
        variant: "destructive",
      })
    }
    setLoading(false)
    setDisabled(false)
  }

  const handleAproveRequestWithId = async () => {
    setLoading("aprove")
    setDisabled(true)
    const result = await aproveUserToCompany({
      userId: userProps.userId,
      companyId: userProps.companyId,
      reqId: userProps.id,
    })
    if (result.success) {
      toast({
        description: t(result.message),
        variant: "success",
      })
    } else if (result.error) {
      toast({
        description: t(result.message),
        variant: "destructive",
      })
    }
    setLoading(false)
    setDisabled(false)
  }
  return (
    <TableRow>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="">{user.email}</TableCell>
      <TableCell className="flex gap-2">
        <Button
          className="w-fit"
          size="sm"
          variant="success"
          aria-label={t("check")}
          aria-labelledby={t("check")}
          title={t("check")}
          role="button"
          disabled={disabled}
          formAction={handleAproveRequestWithId}
        >
          {loading == "aprove" ? <LuLoaderCircle className="animate-spin" /> : <LuCheck />}
        </Button>
        <Button
          className="w-fit"
          size="sm"
          variant="destructive"
          aria-label={t("delete")}
          aria-labelledby={t("delete")}
          title={t("delete")}
          role="button"
          disabled={disabled}
          formAction={handleDeleteRequestWithId}
        >
          {loading == "delete" ? <LuLoaderCircle className="animate-spin" /> : <LuTrash2 />}
        </Button>
      </TableCell>
    </TableRow>
  )
}

"use client"

import * as React from "react"
import { changeName } from "@/actions/user"
import { cn } from "@/utils/utils"
import { userNameSchema } from "@/utils/validations/user"
import { zodResolver } from "@hookform/resolvers/zod"
import { User } from "@prisma/client"
import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { LuLoaderCircle } from "react-icons/lu"
import * as z from "zod"

import { Button, buttonVariants } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { toast } from "@/components/ui/UseToast"

interface UserNameFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, "id" | "name">
}
type FormData = z.infer<typeof userNameSchema>
export function UserNameForm({ user, className, ...props }: UserNameFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userNameSchema),
    defaultValues: {
      name: user?.name || "",
    },
  })
  const [isSaving, setIsSaving] = React.useState<boolean>(false)
  const t = useTranslations("SettingsForm")

  async function onSubmit(data: FormData) {
    setIsSaving(true)
    const response = await changeName(data.name, user.id)
    if (response.success) {
      toast({
        description: t(response.message),
        variant: "success",
      })
    } else if (response.error) {
      toast({
        description: t(response.message),
        variant: "destructive",
      })
    }
    setIsSaving(false)
  }

  return (
    <form className={cn(className)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>{t("title")}</CardTitle>
          <CardDescription>{t("description")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              {t("name")}
            </Label>
            <Input id="name" className="w-full" size={32} {...register("name")} />
            {errors?.name && <p className="px-1 text-xs text-red-600">{t(errors.name.message)}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            aria-label={t("save")}
            aria-labelledby={t("save")}
            title={t("save")}
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), className)}
            disabled={isSaving}
          >
            {isSaving && <LuLoaderCircle className="mr-2 size-4 animate-spin" />}
            <span>{t("save")}</span>
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const show = useTranslations("landingPage");

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold capitalize">
                  {show("title")}
                </h1>
                <p className="text-muted-foreground text-balance italic text-xs">
                  {show("description")}
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email" className="capitalize">
                  {show("emailLabel")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password" className="capitalize">
                    {show("passwordLabel")}
                  </Label>
                  <a
                    href="#"
                    className="ml-auto text-sm capitalize underline-offset-2 hover:underline"
                  >
                    {show("forgotPasswordLink")}
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {show("loginButton")}
              </Button>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Button variant="outline" type="button" className="w-full">
                  <svg xmlns="http://www.w3.org/1000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Login with Apple</span>
                </Button>
                <Button variant="outline" type="button" className="w-full">
                  <svg xmlns="http://www.w3.org/1000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="sr-only">Login with Google</span>
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <div className="flex gap-2 p-2 flex-wrap justify-center item-center h-fit">
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover rounded-lg size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover rounded-lg size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
              <Image
                src={"/white-logo.jpg"}
                alt="Image"
                className="object-cover size-28 dark:brightness-[0.2] dark:grayscale"
                width={100}
                height={100}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

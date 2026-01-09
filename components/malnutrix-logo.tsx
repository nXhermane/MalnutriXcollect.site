import Image, { ImageProps } from "next/image";
export function MalnutrixLogo(props: Omit<ImageProps, "alt" | "src">) {
  return (
    <Image
      src="/malnutix.logo.png"
      alt="MalnutriX Collect Logo"
      width={4}
      height={8}
      priority
      className="relative rounded-3xl shadow-2xl border border-border"
      {...props}
    />
  );
}

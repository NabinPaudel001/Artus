import Image from "next/image";
import Link from "next/link";

export default function C_Logo({
  style,
  footerLogo,
}: {
  style?: React.CSSProperties;
  footerLogo?: boolean;
}) {
  return (
    <Link href="/consulting" className="navbar-brand inline-block">
      <Image
        src="/images/artus-consulting-logo.svg"
        alt="Artus Consulting"
        width={footerLogo ? 120 : 180}
        height={footerLogo ? 40 : 60}
        className={`inline-block ${style ? style : ""}`}
        style={{
          height: footerLogo ? "40px" : "60px",
          width: footerLogo ? "120px" : "180px",
          ...style,
        }}
      />
    </Link>
  );
}
